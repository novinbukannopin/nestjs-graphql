import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserSettings } from "../graphql/models/UserSettings";
import { Repository } from "typeorm";
import { CreateUserSettingsInput } from "../graphql/utils/CreateUserSettingsInput";
import { User } from "../graphql/models/User";

@Injectable()
export class UsersSettingsService {
  constructor(@InjectRepository(UserSettings) private userSettingsRepository: Repository<UserSettings>,
              @InjectRepository(User) private userRepository: Repository<User>) {
  }

  async getUserSettingsById(userId: number) {
    return this.userSettingsRepository.findOne({ where: { userId } });
  }

  async createUserSettings(createUserSettingsData: CreateUserSettingsInput) {
    const findUser = await this.userRepository.findOneBy({
      id: createUserSettingsData.userId
    });

    if (!findUser) throw new Error("User Not Found");

    const newUserSetting = this.userSettingsRepository.create(
      createUserSettingsData
    );
    const savedSettings =
      await this.userSettingsRepository.save(newUserSetting);

    findUser.settings = savedSettings;
    await this.userRepository.save(findUser);

    return savedSettings;
  }
}