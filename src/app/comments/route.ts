import { NextRequest } from "next/server";
import { comments } from "./data";
import { request } from "http";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;
  return Response.json(filteredComments);
} //GET Request in Next.js && queryParams using NEXTRequest

export async function POST(request: Request) {
  const comment = await request.json(); // extract the json body fron the request
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
} //POST Request
