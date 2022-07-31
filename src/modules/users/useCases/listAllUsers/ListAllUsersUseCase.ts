import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const isUserAdmin = this.usersRepository.findById(user_id);

    if (isUserAdmin && isUserAdmin.admin) {
      const users = this.usersRepository.list();

      return users;
    }
    throw new Error("Bad request");
  }
}

export { ListAllUsersUseCase };
