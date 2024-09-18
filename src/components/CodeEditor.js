import React from "react";
import dynamic from "next/dynamic";

const AceEditor = dynamic(
  async () => {
    const ace = await import("react-ace");
    await import("ace-builds/src-noconflict/mode-html");
    await import("ace-builds/src-noconflict/theme-monokai");
    return ace;
  },
  { ssr: false }
);

const CodeEditor = ({ value, onChange }) => {
  return (
    <AceEditor
      mode="html"
      theme="monokai"
      onChange={onChange}
      value={value}
      name="html-editor"
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
      style={{ width: "100%", height: "400px" }}
    />
  );
};

export default CodeEditor;
