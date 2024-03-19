import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../graphql/models/User";
import { Repository } from "typeorm";
import { CreateUserInput } from "../graphql/utils/CreateUserInput";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>
  ) {
  }

  getAllUsers() {
    return this.usersRepository.find();
  }

  getUserById(id: number) {
    return this.usersRepository.findOne({ where: { id } });
  }

  createUser(createUserData: CreateUserInput) {
    const newUser = this.usersRepository.create(createUserData);
    return this.usersRepository.save(newUser);
  }
}
