"use client";

import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";

export default function HtmlEditor({ initialValue, onChange }) {
  const [value, setValue] = useState(initialValue || "");

  const handleChange = (val) => {
    setValue(val);
    if (onChange) {
      onChange(val);
    }
  };

  return (
    <CodeMirror
      value={value}
      height="300px"
      extensions={[html()]}
      onChange={handleChange}
    />
  );
}
