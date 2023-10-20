import { NextResponse } from "next/server";
import { query } from "../../../lib/db";

export async function GET() {
  const result = await query({ query: "SELECT * FROM users" });

  return NextResponse.json({ result }, { status: 200 });
}

export async function POST(request) {
  //   const newUser = request.body.user;
  const data = await request.json();

  const result = await query({
    query: "INSERT INTO users(name,address) VALUES(?,?)",
    value: [data.name, data.address],
  });

  return NextResponse.json(result, { status: 201 });
}

export async function PUT() {
  return NextResponse.json(
    {
      message: "this is UPDATING OR REPLACING the WHOLE todos",
    },
    { status: 201 }
  );
}

export async function PATCH() {
  return NextResponse.json(
    {
      message: "this is UPDATING SOME AREA OF SPECIFIC  todos",
    },
    { status: 201 }
  );
}
