"use client";
import { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import ImageExtension from "@tiptap/extension-image";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import "@/styles/editor.css";

const Tiptap = ({ onUpdate, placeholder, editable, content }) => {
  const [image, setImage] = useState(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: placeholder || "ここに入力してください...",
      }),
      Document,
      Paragraph,
      Text,
      ImageExtension.configure({
        inline: true, // インラインで表示
        resizable: true, // サイズ変更可能
        allowBase64: true, // 画像を base64 文字列として解析
        HTMLAttributes: {
          class: "my-image", // カスタムクラス
        },
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

  // 副作用で画像を設定
  // useEffect(() => {
  //   if (editor) {
  //     editor.commands.setImage({
  //       src: "http://localhost:3000/images/post/rico.png",
  //     });

  //     editor.commands.setImage({
  //       src: "http://localhost:3000/images/post/rico.png",
  //       alt: "リコちゃん",
  //       title: "姪っ子",
  //     });
  //   }
  // }, [editor]); // editor が定義されたときに画像を設定

  return <EditorContent editor={editor} />;
};

export default Tiptap;
