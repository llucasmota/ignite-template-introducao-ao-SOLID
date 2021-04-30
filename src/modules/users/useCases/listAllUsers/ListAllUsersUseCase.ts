import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const userExists = this.usersRepository.findById(user_id);
    if (!userExists.admin === true) {
      throw new Error("The user must be admin");
    }
    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
