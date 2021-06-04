import { mongoose } from "./../connection";

const Schema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
});

const UserSchema = mongoose.model("User", Schema);

export { UserSchema };
