import mongoose from "mongoose";
import { UserModel } from "./UserModel.js";

export async function connect() {
  const conn = await mongoose.connect("mongodb://root:example@mongo:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export async function findAll() {
  const conn = await connect();

  const users = await UserModel.find();

  return users;
}

export async function findOne(id) {
  const conn = await connect();

  const user = await UserModel.findOne({ _id: id });

  return user;
}

/* export async function remove(name) {
  const conn = await connect();
  const product = await ProductModel.deleteOne({ society: name });

  return null;
} */
