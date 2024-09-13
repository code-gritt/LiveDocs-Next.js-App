import { Editor } from "@/components/editor/Editor";
import React from "react";
import Header from "@/components/Header";

const Document = () => {
  return (
    <>
      <div>
        <Header className="sticky left-0 top-0">
          <div className="flex items-center w-fit justify-center gap-2">
            <p className="document-title">this is a fake document title</p>
          </div>
        </Header>
        <Editor />
      </div>
    </>
  );
};

export default Document;
