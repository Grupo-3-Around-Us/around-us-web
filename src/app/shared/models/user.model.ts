import { UserPreferences } from "./user-preference.model";

export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  image: File | null;
  imageURL: string | null;
  userPreferences: UserPreferences;
}
