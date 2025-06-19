"use client";

import React from "react";
import { Button } from "antd";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

interface Issue {
  id: string;
  title: string;
  description: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export default function IssuesPage() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const res = await axios.get("/api/getIssues");
        setIssues(res.data.data.issues);
      } catch (error) {
        console.error("Failed to fetch issues:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIssues();
  }, []);

  return (
    <div>
      <Button type="primary">
        <Link href="/issues/new">New Issues</Link>
      </Button>

      {loading ? (
        <div>加载中...</div>
      ) : (
        <div className="mt-4">
          {issues.map((issue: Issue) => (
            <div key={issue.id} className="p-4 border-b">
              {issue.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
