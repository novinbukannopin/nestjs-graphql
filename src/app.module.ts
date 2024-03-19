import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { UserResolver } from "./graphql/resolvers/UserResolver";
import { UserSettingsResolver } from "./graphql/resolvers/UserSettingsResolver";


@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: 'src/schema.gql',
  })],
  controllers: [],
  providers: [UserResolver, UserSettingsResolver],
})
export class AppModule {}
