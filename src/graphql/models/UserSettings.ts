import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "user_settings" })
@ObjectType()
export class UserSettings {

  @PrimaryColumn()
  @Field((type) => Int)
  userId: number;

  @Column({ default: false })
  @Field({ defaultValue: false })
  receiveNotifications: boolean;

  @Column({ default: false })
  @Field({ defaultValue: false })
  receiveEmails: boolean;

}