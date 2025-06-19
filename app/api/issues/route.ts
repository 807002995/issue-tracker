import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/app/prisma/client";

const createIssueSchema = z.object({
  title: z.string().min(1, "title is required").max(255),
  description: z.string().min(1, "description is required").max(1000),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createIssueSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      {
        code: 400,
        message: "Invalid request",
        errors: validation.error.errors,
      },
      { status: 400 },
    );
  }

  const newIssue = await prisma.issue.create({
    data: validation.data,
  });

  return NextResponse.json(
    {
      code: 200,
      message: "Issue created successfully",
      data: newIssue,
    },
    { status: 201 },
  );
}
