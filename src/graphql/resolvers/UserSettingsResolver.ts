import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { UserSettings } from "../models/UserSettings";
import { CreateUserSettingsInput } from "../utils/CreateUserSettingsInput";
import { UserSettingsMocks } from "../mocks/UserSettingsMocks";

@Resolver()
export class UserSettingsResolver {

  @Mutation(returns => UserSettings)
  createUserSettings(@Args('createUserSettingsData') createUserSettingsData: CreateUserSettingsInput) {
    UserSettingsMocks.push(createUserSettingsData);
    return createUserSettingsData;
  }
}
