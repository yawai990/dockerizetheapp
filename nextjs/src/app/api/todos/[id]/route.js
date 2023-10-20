import { NextResponse } from "next/server";
import { query } from "../../../../lib/db";

export async function GET(request) {
  const id = await request.url.slice(request.url.lastIndexOf("/") + 1);

  const result = await query({
    query: "SELECT * FROM users WHERE id = ?",
    value: [Number(id)],
  });

  return NextResponse.json(result, { status: 200 });
}

export async function PUT(request) {
  const id = await request.url.slice(request.url.lastIndexOf("/") + 1);
  const data = await request.json();

  const result = await query({
    query: "UPDATE users SET name= ? ,address = ? WHERE id = ?",
    value: [data.name, data.address, Number(id)],
  });

  return NextResponse.json(result, { status: 200 });
}

export async function DELETE(request) {
  const id = await request.url.slice(request.url.lastIndexOf("/") + 1);

  const result = await query({
    query: "DELETE FROM users WHERE id = ?",
    value: [Number(id)],
  });

  return NextResponse.json(result, { status: 202 });
}
