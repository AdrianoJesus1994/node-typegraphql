import mongoose, { mongo } from "mongoose";

mongoose.connect("mongodb://localhost:27017/node-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;

export { mongoose };
