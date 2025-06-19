"use client";
import { Button, Input } from "antd";
import React from "react";

const newIssues = () => {
  const { TextArea } = Input;
  function submitIssue() {
    console.log("submit");
  }
  return (
    <div className="p-4 max-w-2xl ">
      <Input placeholder="Title"></Input>
      <div className="my-4"></div>
      <TextArea placeholder="Description" rows={6} maxLength={2000} />
      <Button type="primary" className="mt-4" onClick={submitIssue}>
        提交
      </Button>
    </div>
  );
};

export default newIssues;
