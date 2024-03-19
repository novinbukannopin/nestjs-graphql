import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { UserResolver } from "./users/UserResolver";
import { UserSettingsResolver } from "./graphql/resolvers/UserSettingsResolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./graphql/models/User";
import { UserSettings } from "./graphql/models/UserSettings";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "src/schema.gql"
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "novinnovin",
      database: "nest_graphql",
      entities: [User, UserSettings],
      synchronize: true,
      logging: true
    }),
    UsersModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {
}
