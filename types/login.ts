export interface ILoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    // Add other user fields as needed
  };
}

export interface ILoginRequest {
  email: string;
  password: string;
}
