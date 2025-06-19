"use client";
import { Button, Input, Form } from "antd";
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IssuesForm {
  title: string;
  description: string;
}
const newIssues = () => {
  const router = useRouter();
  async function submitIssue(data: IssuesForm) {
    console.log("submit", data);
    try {
    } catch (error) {}
    axios
      .post("/api/issues", data)
      .then(() => {
        router.push("/issues");
      })
      .catch((error) => {
        console.error("提交错误", error);
      });
  }
  return (
    <Form
      className="p-4 max-w-2xl "
      onFinish={submitIssue}
      layout="horizontal"
      labelCol={{ span: 4 }}
    >
      <Form.Item
        label="Title"
        name={"title"}
        rules={[{ required: true, message: "请输入标题" }]}
      >
        <Input placeholder="Title"></Input>
      </Form.Item>
      <div className="my-4"></div>
      <Form.Item
        label="Description"
        name={"description"}
        rules={[{ required: true, message: "请输入描述" }]}
      >
        <SimpleMDE placeholder="Description" />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4 }}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};

export default newIssues;
