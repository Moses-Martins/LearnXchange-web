import { apiClient } from "@/lib/api-client";
import { authResponse, LoginData, SignupData } from "@/types/auth";
import { UserData } from "@/types/user";


// Login
export async function loginService(payload: LoginData): Promise<authResponse> {
  const res: authResponse = await apiClient.post('/auth/login/', payload)

  return res;
}

// Register
export async function signupService(payload: SignupData): Promise<authResponse> {
  const res: authResponse = await apiClient.post('/auth/registration/', payload)
  
  return res;
}

export async function getUserService(): Promise<UserData> {
  const res: UserData = await apiClient.get('/auth/user/')
  
  return res;
}

// Logout
export async function logoutService() {
  // Remove token locally
  localStorage.removeItem("token");

  // notify backend
  await apiClient.post('/auth/logout')
}
