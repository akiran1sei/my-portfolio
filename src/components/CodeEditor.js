"use client";
import React, { forwardRef } from "react";
import dynamic from "next/dynamic";

// AceEditorを動的インポート
const AceEditor = dynamic(
  async () => {
    // react-aceをインポート
    const ace = await import("react-ace");

    // ace-buildsの設定を先に行う
    const aceBuilds = await import("ace-builds");

    // CDNパスを設定してエラーを回避
    aceBuilds.config.set(
      "basePath",
      "https://cdn.jsdelivr.net/npm/ace-builds@1.36.2/src-noconflict/"
    );
    aceBuilds.config.set(
      "modePath",
      "https://cdn.jsdelivr.net/npm/ace-builds@1.36.2/src-noconflict/"
    );
    aceBuilds.config.set(
      "themePath",
      "https://cdn.jsdelivr.net/npm/ace-builds@1.36.2/src-noconflict/"
    );
    aceBuilds.config.set(
      "workerPath",
      "https://cdn.jsdelivr.net/npm/ace-builds@1.36.2/src-noconflict/"
    );

    // 必要なモードとテーマを動的インポート
    await Promise.all([
      import("ace-builds/src-noconflict/mode-html"),
      import("ace-builds/src-noconflict/theme-monokai"),
      import("ace-builds/src-noconflict/ext-language_tools"),
    ]);

    return ace.default;
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
          enableSnippets: false,
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
