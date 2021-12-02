import { CurrentUserInterface } from './currentUser.interface';

export interface User {
  email: string;
  username: string;
  bio?: any;
  image: string;
  token: string;
}

export interface AuthReponseInterface {
  user: CurrentUserInterface;
}
