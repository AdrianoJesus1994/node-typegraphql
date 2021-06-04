import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User, NewUserInput } from "../models/user";
import { UserSchema } from "./../database/schemas/user";

@Resolver(User)
class UserResolver {
  @Query((returns) => [User])
  async users() {
    const users = await UserSchema.find();
    return users;
  }

  @Mutation((returns) => User)
  async addUser(@Arg("newUser") newUser: NewUserInput) {
    const user = UserSchema.create(newUser);
    return user;
  }
}

export { UserResolver };
