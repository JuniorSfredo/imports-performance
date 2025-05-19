export interface AuthStoreType {
  access_token: string | null;
  setAccessToken: (token: string) => void;
  logout: () => void;
}
