
## Learn Exchange — Technical Design Document (v1.0)

###  1. High-Level Overview

`User → Frontend (App/UI) → API Gateway → Backend Services → Databases` 

Each part plays a role:

-   **Frontend** → React app that sends and receives API calls
    
-   **API Gateway** → Routes requests to the right backend service
    
-   **Backend Services** → Handle logic (auth, feed, explore, chat, etc.)
    
-   **Databases** → Store users, posts, messages, sessions, etc.
    

----------

###  2. User Journey + Backend Interactions

#### (A) Login / Signup

```
[Login Screen]
   |
   |--> POST /auth/login   → Auth Service → User DB (verify)
   |--> POST /auth/signup  → Auth Service → User DB (create user)
   |
   |<-- JWT token + user profile
   ↓
[Home Feed Screen]
```
**Data Flow:**  
Frontend stores JWT → fetches personalized content using `/feed/latest`.

----------

#### (B) Home Feed (Main Landing Page)

```
[Home Feed]
   |
   |--> GET /feed/latest        → Feed Service → Feed DB
   |--> GET /explore/recommend  → Explore Service → Explore DB
   |--> POST /feed/like/comment → Feed Service → Feed DB
   |
   |<-- Returns posts + tutorials + suggested users
```
**Result:**  
User scrolls through posts, reacts, or navigates to Explore or Profile.

----------

#### ( C ) Explore (Skill Discovery)

```
[Explore Screen]
   |
   |--> GET /explore/trending     → Explore Service → Feed DB + Skills DB
   |--> GET /explore/people?skill → Explore Service → User DB
   |--> POST /exchange/request    → Exchange Service → Exchange DB
   |
   |<-- Trending skills + suggested people
   ```
**Result:**  
User discovers people/skills → may follow, message, or propose exchange.

----------

#### (D) Profile (Viewing or Editing)

bash

`[Profile Screen]
   |
   |--> GET /user/:id → User Service → User DB
   |--> GET /feed/userPosts/:id → Feed Service → Feed DB
   |--> POST /user/follow         → User Service → User DB
   |--> PUT /user/updateProfile   → User Service → User DB
   |
   |<-- Profile info + posts + stats` 

**Result:**  
Shows user bio, their posts, badges, and exchange options.

----------

#### (E) Chat + Exchange

```
[Chat Screen]
   |
   |--> GET /chat/list            → Chat Service → Chat DB
   |--> WebSocket connect         → Chat Service (Socket.io)
   |--> POST /exchange/create     → Exchange Service → Exchange DB
   |
   |<-- Real-time messages, exchange invites, and schedules
   ```
   
**Backend Coordination:**

-   **Chat Service** handles sockets and message persistence.
    
-   **Exchange Service** manages learning sessions (requests, acceptance, completion).
    

----------

#### (F) Session Scheduling

```
[Session Screen]
   |
   |--> POST /exchange/createSession   → Exchange DB
   |--> PATCH /exchange/acceptSession  → Exchange DB
   |--> PATCH /exchange/markCompleted  → Exchange DB
   |--> POST /exchange/rate            → Ratings DB
   |
   |<-- Updates both users' schedules + ratings
   ```
**Result:**  
The exchange gets logged, rated, and reflected in profiles.

----------

#### (G) Posting a Tutorial / Achievement

```
[Create Post Screen]
   |
   |--> POST /media/upload   → Storage Service (S3/Firebase)
   |--> POST /feed/createPost→ Feed Service → Feed DB
   |
   |<-- Confirmation + post appears in feed
```
**Result:**  
New content added → triggers Feed update + Explore recommendations.

----------

#### (H) Notifications

```
Any Event (like, comment, exchange, message)
   |
   |--> Notification Service
   |     ├─> Reads event queue (Kafka/Redis)
   |     ├─> Sends push/email via FCM / OneSignal
   |     └─> Saves notification → Notification DB
   |
   |<-- User gets notified in-app
   ```
----------

###  3. Backend Service Map

```
API Gateway
 ├── Auth Service          → User DB
 ├── User Service          → User DB
 ├── Feed Service          → Feed DB
 ├── Explore Service       → Explore DB + Feed DB
 ├── Exchange Service      → Exchange DB + Session DB
 ├── Chat Service          → Chat DB (WebSocket)
 ├── Notification Service  → Notification DB
 └── Media/Storage Service → Cloud Storage (S3/Firebase)
```
----------

###  4. Database Schema 

This schema defines the tables, their primary keys (PK), foreign keys (FK), and some essential fields for the databases listed in your Section 4.

#### User DB (Auth & Profiles)

```
-- Users (stores core user data)
users {
  id: UUID PRIMARY KEY,
  email: VARCHAR(255) UNIQUE,
  password_hash: VARCHAR(255),
  username: VARCHAR(50) UNIQUE,
  first_name: VARCHAR(50),
  last_name: VARCHAR(50),
  bio: TEXT,
  profile_image_url: VARCHAR(255),
  created_at: TIMESTAMP WITH TIME ZONE
}
```
```
-- Followers (many-to-many relationship for who follows whom)
followers {
  follower_id: UUID FOREIGN KEY REFERENCES users(id),
  following_id: UUID FOREIGN KEY REFERENCES users(id),
  created_at: TIMESTAMP WITH TIME ZONE,
  PRIMARY KEY (follower_id, following_id)
}
```
```
-- UserSkills (skills offered or sought by a user)

user_skills {
  user_id: UUID FOREIGN KEY REFERENCES users(id),
  skill_name: VARCHAR(100), -- Could link to a separate 'skills' lookup table
  skill_level: ENUM('beginner', 'intermediate', 'expert'),
  is_offering: BOOLEAN DEFAULT TRUE,
  PRIMARY KEY (user_id, skill_name)
}
```
----------

#### Feed DB (Posts & Tutorials)

```
-- Posts (for tutorials, achievements, or simple updates)
posts {
  id: UUID PRIMARY KEY,
  user_id: UUID FOREIGN KEY REFERENCES users(id),
  title: VARCHAR(255),
  content: TEXT,
  media_url: VARCHAR(255), -- References Storage Service
  post_type: ENUM('tutorial', 'achievement', 'general'),
  created_at: TIMESTAMP WITH TIME ZONE,
  updated_at: TIMESTAMP WITH TIME ZONE
}
```
```
-- Comments
comments {
  id: UUID PRIMARY KEY,
  post_id: UUID FOREIGN KEY REFERENCES posts(id),
  user_id: UUID FOREIGN KEY REFERENCES users(id),
  content: TEXT,
  created_at: TIMESTAMP WITH TIME ZONE
}
```
```
-- Likes (used for both posts and comments)
likes {
  user_id: UUID FOREIGN KEY REFERENCES users(id),
  post_id: UUID FOREIGN KEY REFERENCES posts(id),
  created_at: TIMESTAMP WITH TIME ZONE,
  PRIMARY KEY (user_id, post_id)
}

```

----------

#### Exchange DB (Skill Exchanges, Sessions, & Ratings)

```
-- Exchanges (a high-level agreement between two users)
exchanges {
  id: UUID PRIMARY KEY,
  initiator_id: UUID FOREIGN KEY REFERENCES users(id),
  receiver_id: UUID FOREIGN KEY REFERENCES users(id),
  offered_skill: VARCHAR(100),
  requested_skill: VARCHAR(100),
  status: ENUM('pending', 'accepted', 'completed', 'canceled'),
  created_at: TIMESTAMP WITH TIME ZONE
}
```
```
-- Sessions (scheduled meeting for the exchange)
sessions {
  id: UUID PRIMARY KEY,
  exchange_id: UUID FOREIGN KEY REFERENCES exchanges(id),
  scheduled_time: TIMESTAMP WITH TIME ZONE,
  duration_minutes: INTEGER,
  location_details: VARCHAR(255),
  is_completed: BOOLEAN DEFAULT FALSE,
  created_at: TIMESTAMP WITH TIME ZONE
}
```
```

-- Ratings (reflecting the exchange result, as per Ratings DB in your flow)
ratings {
  id: UUID PRIMARY KEY,
  session_id: UUID UNIQUE FOREIGN KEY REFERENCES sessions(id),
  rater_id: UUID FOREIGN KEY REFERENCES users(id),
  rated_id: UUID FOREIGN KEY REFERENCES users(id),
  score: INTEGER, -- 1 to 5
  feedback: TEXT,
  created_at: TIMESTAMP WITH TIME ZONE
}

```

----------

#### Chat DB (Messaging)



```
-- Conversations (a thread between two users)
conversations {
  id: UUID PRIMARY KEY,
  user_a_id: UUID FOREIGN KEY REFERENCES users(id),
  user_b_id: UUID FOREIGN KEY REFERENCES users(id),
  last_message_at: TIMESTAMP WITH TIME ZONE
}
```
```
-- Messages (real-time messages within a conversation)
messages {
  id: UUID PRIMARY KEY,
  conversation_id: UUID FOREIGN KEY REFERENCES conversations(id),
  sender_id: UUID FOREIGN KEY REFERENCES users(id),
  content: TEXT,
  sent_at: TIMESTAMP WITH TIME ZONE
}
```

----------

### 5. Explore DB & Notification DB
```
-- Trends (from Explore DB - for tracking popular topics/skills)
trends {
  id: UUID PRIMARY KEY,
  tag_name: VARCHAR(100) UNIQUE,
  daily_count: INTEGER,
  last_updated_at: TIMESTAMP WITH TIME ZONE
}
```
```
-- Notifications (from Notification DB - for user alerts)
notifications {
  id: UUID PRIMARY KEY,
  user_id: UUID FOREIGN KEY REFERENCES users(id),
  type: ENUM('like', 'comment', 'message', 'exchange_request', 'session_reminder'),
  source_id: UUID, -- ID of the post, message, or exchange that triggered it
  content: TEXT,
  is_read: BOOLEAN DEFAULT FALSE,
  created_at: TIMESTAMP WITH TIME ZONE
}

```

 
----------

### 🧭 5. User Flow Summary (Compact Map)
```
LOGIN
  ↓
HOME FEED
  ↓
EXPLORE
  ↓
PROFILE
  ↓
CHAT ↔ EXCHANGE ↔ SESSION
  ↓
POST EXPERIENCE
  ↓
BACK TO FEED
``` 

