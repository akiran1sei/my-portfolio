import React, { useEffect, useRef, forwardRef } from "react";
import dynamic from "next/dynamic";
import "@/styles/editor.css";
import useSWR from "swr";
import { useState } from "react";

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
  const [setImage, useImage] = useState("");
  useEffect(() => {
    if (editorRef.current) {
      const editor = editorRef.current.editor;
      editor.session.$wrapAsCode = true;
      editor.session.setUseWrapMode(true);
      editor.session.setWrapLimitRange(null, null);
    }
  }, []);
  const { data, error } = useSWR(`/pages/api/blog/img`, fetcher, {
    initial: true,
    onBackgroundUpdate: true,
    revalidateOnMount: true,
    revalidateOnReconnect: true,
  });

  if (error) return <div>エラーが発生しました。</div>;
  if (!data) return <div>データを取得中</div>;
  const options = [];
  data.value.forEach((img) => {
    options.push(
      <option key={img._id} value={img.url}>
        {img.url}
      </option>
    );
  });
  return (
    <>
      <div class="thumbnail">
        <label htmlFor="thumbnail">サムネイル</label>
        <select
          name="thumbnail"
          id="thumbnail"
          value={useImage}
          onChange={(e) => setImage(e.target.value)}
        >
          {options}
        </select>
      </div>
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
    </>
  );
});

CodeEditor.displayName = "CodeEditor";

// ここで、AceEditorコンポーネントにrefを直接渡す
const EnhancedCodeEditor = forwardRef((props, ref) => (
  <CodeEditor {...props} ref={ref} />
));
EnhancedCodeEditor.displayName = "EnhancedCodeEditor";
const fetcher = async (url) => {
  const response = await fetch(url);
  return response.json();
};
export default EnhancedCodeEditor;
