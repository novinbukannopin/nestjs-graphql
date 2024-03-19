import { Resolver, Query, Args, Int, ResolveField, Parent, Mutation } from "@nestjs/graphql";
import { User } from "../models/User";
import { UserMocks } from "../mocks/UserMocks";
import { UserSettings } from "../models/UserSettings";
import { UserSettingsMocks } from "../mocks/UserSettingsMocks";
import { CreateUserInput } from "../utils/CreateUserInput";

@Resolver((of) => User)
export class UserResolver {

  @Query((returns) => User, {nullable: true })
  getUserById(@Args('id', {type: () => Int }) id: number) {
    return UserMocks.find((user) => user.id === id);
  }

  @Query((returns) => [User])
  getUser() {
    return UserMocks;
  }

  @ResolveField((returns) => UserSettings, {name: 'settings', nullable: true}, )
  getUserSettings(@Parent() user: User){
    return UserSettingsMocks.find((settings) => settings.userId === user.id);
  }

  @Mutation((returns) => User)
  createUser(@Args('userInput') {username, displayName}: CreateUserInput){
    const newUser = {
      id: UserMocks.length + 1,
      username,
      displayName
    }
    UserMocks.push(newUser);
    return newUser;
  }

}