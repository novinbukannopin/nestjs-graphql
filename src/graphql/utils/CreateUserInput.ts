import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateUserInput {
  @Field((type) => String)
  username: string;

  @Field((type) => String, { nullable: true })
  displayName?: string;
}