import { User } from "./users.slice";

// A mock function to mimic making an async request for data
export function createUser(user: User) {
  return new Promise<User>((resolve) =>
    setTimeout(() => resolve(user), 1500)
  );
}
