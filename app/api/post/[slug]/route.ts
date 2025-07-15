import { NextRequest } from "next/server";
import { posts } from "@/app/api/post/route";

interface GetParams {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(req: NextRequest, { params }: GetParams) {
  const { slug } = await params;

  const post = posts.find(({ slug: _slug }) => slug === _slug);

  if (!post) return new Response(null, { status: 404 });

  return Response.json(post);
}
