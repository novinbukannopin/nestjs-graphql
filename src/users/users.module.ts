import { Module } from "@nestjs/common";
import { UserResolver } from "./UserResolver";
import { UsersService } from "./users.service";
import { User } from "../graphql/models/User";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersSettingsService } from "./users-settings.service";
import { UserSettings } from "../graphql/models/UserSettings";
import { UserSettingsResolver } from "../graphql/resolvers/UserSettingsResolver";

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSettings])],
  providers: [UserResolver, UsersService, UsersSettingsService, UserSettingsResolver]
})
export class UsersModule {
}