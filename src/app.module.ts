import { Module } from '@nestjs/common';
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { UserResolver } from "./graphql/resolvers/UserResolver";
import { UserSettingsResolver } from "./graphql/resolvers/UserSettingsResolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./graphql/models/User";
import { UserSettings } from "./graphql/models/UserSettings";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: 'src/schema.gql',
  })
  , TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'novinnovin',
      database: 'nest_graphql',
      entities: [User, UserSettings],
      synchronize: true,
    })
  ],
  controllers: [],
  providers: [UserResolver, UserSettingsResolver],
})
export class AppModule {}
