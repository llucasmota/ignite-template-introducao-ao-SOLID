import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const user = new User();
    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });
    this.users.push(user);
    return user;
  }

  findById(id: string): User | undefined {
    const userExists = this.users.find((user) => user.id === id);
    return userExists;
  }

  findByEmail(email: string): User | undefined {
    const userExists = this.users.find((user) => user.email === email);

    return userExists;
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    Object.assign(receivedUser, {
      updated_at: new Date(),
      admin: true,
    });
    return receivedUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
