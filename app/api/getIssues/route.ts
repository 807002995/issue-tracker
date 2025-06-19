import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/prisma/client";
import { Status } from "@prisma/client";

export async function GET(request: NextRequest) {
  try {
    // 获取查询参数
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const statusParam = searchParams.get("status");
    const orderBy = searchParams.get("orderBy") || "createdAt";
    const order =
      searchParams.get("order")?.toLowerCase() === "asc" ? "asc" : "desc";

    // 构建查询条件
    const where = {
      ...(statusParam && { status: statusParam as Status }),
    };

    // 获取总数
    const total = await prisma.issue.count({ where });

    // 获取分页数据
    const issues = await prisma.issue.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        [orderBy]: order,
      },
    });

    return NextResponse.json(
      {
        code: 200,
        message: "Issues fetched successfully",
        data: {
          issues,
          pagination: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
          },
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error fetching issues:", error);
    return NextResponse.json(
      {
        code: 500,
        message: "Failed to fetch issues",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
