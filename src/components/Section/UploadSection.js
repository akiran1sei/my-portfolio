// components/Section/UploadSection.js
"use client";
import styles from "@/styles/page.module.css";
import { put } from "@vercel/blob"; // Vercel Blob ライブラリをインポート

// import Image from "next/image";
import { useState, useEffect } from "react";

export function UploadedSection() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setIsActive(true);
  }, []);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    try {
      const filename = encodeURIComponent(file.name);
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/pages/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.url) {
        setUploadedUrl(data.url);
        // Vercel Blob にアップロード
        await put(`images/${filename}`, file, { access: "public" });
        // リロードの代わりに適切な処理を行う
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      // ここでより具体的なエラーメッセージをユーザーに表示する
    } finally {
      setUploading(false);
    }
  };

  return (
    <section className={`${styles.upload_section} ${isActive ? "active" : ""}`}>
      <h2 className={styles.page_title}>Update</h2>
      <div className={styles.upload_section_wrap}>
        <form>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload} disabled={!file || uploading}>
            {uploading ? "Uploading..." : "Upload to Blob"}
          </button>
        </form>
        {uploadedUrl && (
          <div>
            <p>Uploaded successfully!</p>
            {/* <Image src={uploadedUrl} width={300} height={300} alt="Uploaded" /> */}
          </div>
        )}
      </div>
    </section>
  );
}
