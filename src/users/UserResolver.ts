import { Resolver, Query, Args, Int, ResolveField, Parent, Mutation } from "@nestjs/graphql";
import { User } from "../graphql/models/User";
import { UserMocks } from "../graphql/mocks/UserMocks";
import { UserSettings } from "../graphql/models/UserSettings";
import { UserSettingsMocks } from "../graphql/mocks/UserSettingsMocks";
import { CreateUserInput } from "../graphql/utils/CreateUserInput";
import { Inject } from "@nestjs/common";
import { UsersService } from "./users.service";

@Resolver((of) => User)
export class UserResolver {

  constructor(private usersService: UsersService, private userSettingsService: UsersService) {
  }

  @Query((returns) => User, { nullable: true })
  getUserById(@Args("id", { type: () => Int }) id: number) {
    return this.usersService.getUserById(id);
  }

  @Query((returns) => [User])
  getUser() {
    return this.usersService.getAllUsers();
  }

  @Mutation((returns) => User)
  createUser(@Args("userInput") createUserInput: CreateUserInput) {
    return this.usersService.createUser(createUserInput);
  }

}