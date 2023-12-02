import User from "../../../../models/User";
import connectDb from "../../../../utils/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await connectDb();

  //   const newUser = await User.cre

  if (!name || !email || !password) {
    return new NextResponse("pease fill in all the details", {
      status: 400,
    });
  }

  const emailExist = await User.findOne({ email }).exec();
  if (emailExist) {
    return new NextResponse("email already in use", { status: 409 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();

    return new NextResponse("user has been created", { status: 201 });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
