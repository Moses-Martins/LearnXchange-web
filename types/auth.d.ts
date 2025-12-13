export interface SignupData {
  email: string;
  password1: string;
  password2: string;
  username: string;
};

export interface LoginData {
  email: string;
  password: string;
};

export interface authResponse {
  token: string;
  user: UserData
} 





