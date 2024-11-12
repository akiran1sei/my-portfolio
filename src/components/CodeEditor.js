"use client";
import React, { forwardRef } from "react";
import dynamic from "next/dynamic";

// AceEditorを動的インポート
const AceEditor = dynamic(
  async () => {
    // クライアントサイドでのみ実行されるように条件分岐
    if (typeof window !== "undefined") {
      const ace = await import("react-ace");
      // worker-loaderの問題を回避するため、直接モードとテーマをインポート
      require("ace-builds/src-noconflict/mode-html");
      require("ace-builds/src-noconflict/theme-monokai");
      require("ace-builds/src-noconflict/ext-language_tools");
      return ace;
    }
    return null;
  },
  {
    ssr: false,
    loading: () => <div>エディターを読み込み中...</div>,
  }
);

const CodeEditor = forwardRef(({ value, onChange }, ref) => {

  // クライアントサイドでのみレンダリング
  if (typeof window === "undefined") {
    return null;
  }

  return (
    <div className="code-editor-container">
      <AceEditor
        ref={ref} // 外部から渡されたrefを直接渡す
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
          useWorker: false, // Workerを無効化
        }}
        style={{ width: "100%", height: "400px" }}
      />
    </div>
  );
});

CodeEditor.displayName = "CodeEditor";

// 高階コンポーネントはそのまま維持
const EnhancedCodeEditor = forwardRef((props, ref) => (
  <CodeEditor {...props} ref={ref} />
));
EnhancedCodeEditor.displayName = "EnhancedCodeEditor";

export default EnhancedCodeEditor;
