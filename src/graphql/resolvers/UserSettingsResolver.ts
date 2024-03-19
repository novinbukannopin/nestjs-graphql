import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { UserSettings } from "../models/UserSettings";
import { CreateUserSettingsInput } from "../utils/CreateUserSettingsInput";
import { UsersSettingsService } from "../../users/users-settings.service";

@Resolver()
export class UserSettingsResolver {
  constructor(private userSettingsService: UsersSettingsService) {
  }

  @Mutation(returns => UserSettings)
  async createUserSettings(@Args("createUserSettingsData") createUserSettingsData: CreateUserSettingsInput) {
    return await this.userSettingsService.createUserSettings(createUserSettingsData);
  }
}
