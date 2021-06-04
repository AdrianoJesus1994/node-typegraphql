import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
class User {
  @Field((type) => ID)
  _id: String;

  @Field()
  first_name: String;

  @Field()
  last_name: String;

  @Field()
  email: String;
}

@InputType()
class NewUserInput {
  @Field()
  first_name: String;

  @Field()
  last_name: String;

  @Field()
  email: String;
}

export { User, NewUserInput };
