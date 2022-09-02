import mongoose from "mongoose";

import { UserModel } from "./Model/UserModel.js";

async function connect() {
  const conn = await mongoose.connect("mongodb://root:example@mongo:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

async function hydrate() {

    await connect();

    const users = await UserModel.find();

    if (users) {
      for (const user of users) {
        await user.remove();
      }
    }

    const newUser = new UserModel({
      firstName: "Antoine",
      lastName: "Lucsko",
      email: "antoine@mail.com",
      password: "test",
    });

    await newUser.save();
}

hydrate().then(console.log);

