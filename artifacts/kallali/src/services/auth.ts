import { api } from "./api";

type SignupRequest = {
  fullName: string;
  email: string;
  mobile: string;
  password: string;
};

type LoginRequest = {
  email: string;
  password: string;
};

type User = {
  id: string;
  fullName: string;
  email: string;
  role: string;
};

type AuthResponse = {
  success: boolean;
  message: string;
  token?: string;
  user: User;
};

export function signup(data: SignupRequest) {
  return api<AuthResponse>("/auth/signup", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function login(data: LoginRequest) {
  return api<AuthResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function getCurrentUser(token: string) {
  return api<{ success: boolean; user: User }>("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
