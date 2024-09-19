import React, { useEffect, useRef, forwardRef } from "react";
import dynamic from "next/dynamic";
import "@/styles/editor.css";

const AceEditor = dynamic(
  async () => {
    const ace = await import("react-ace");
    await import("ace-builds/src-noconflict/mode-html");
    await import("ace-builds/src-noconflict/theme-monokai");
    return ace;
  },
  { ssr: false }
);

const CodeEditor = forwardRef(({ value, onChange }, ref) => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const editor = editorRef.current.editor;
      editor.session.$wrapAsCode = true;
      editor.session.setUseWrapMode(true);
      editor.session.setWrapLimitRange(null, null);
    }
  }, []);

  return (
    <AceEditor
      ref={ref} // refをAceEditorコンポーネントに渡す
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
      className="my-editor"
      style={{ width: "100%", height: "400px" }}
    />
  );
});

CodeEditor.displayName = "CodeEditor";

// ここで、AceEditorコンポーネントにrefを直接渡す
const EnhancedCodeEditor = forwardRef((props, ref) => (
  <CodeEditor {...props} ref={ref} />
));
EnhancedCodeEditor.displayName = "EnhancedCodeEditor";

export default EnhancedCodeEditor;
