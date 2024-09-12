//src/components/Tiptap.js
"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

import "@/styles/editor.css";
const Tiptap = ({ onUpdate, placeholder, editable, content }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: placeholder || "ここに入力してください...",
      }),
    ],
    content: content,
    editable: editable,
    autofocus: true,
    enableInputRules: true,
    enablePasteRules: true,
    onUpdate: ({ editor }) => {
      onUpdate(editor.getHTML());
    },
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
