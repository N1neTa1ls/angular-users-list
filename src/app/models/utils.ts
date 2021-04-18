import { IUser } from "./user.model";

export const setAttribute = (source: IUser, dest: IUser, attribute: string, isTrim: boolean = false) => {
  if (source && source[attribute]) {
    if (isTrim) {
      dest[attribute] = source[attribute].trim();
    } else {
      dest[attribute] = source[attribute];
    }
  }
};