export interface ApiResponse {
    access: string;
    refresh: string;
}
  
export interface LoginParams {
    email: string;
    password: string;
}