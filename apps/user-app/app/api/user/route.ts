import client from "@repo/db/client";
import { NextResponse } from "next/server";


export const GET = async () => {
  await client.user.create({
    data: {
      email: "user@example.com",
      name: "user",
    },
  });
  return NextResponse.json({
    message: "data successfully gone to database",
  });
};
