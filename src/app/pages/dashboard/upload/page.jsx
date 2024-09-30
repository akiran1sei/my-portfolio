"use client";

import styles from "@/styles/page.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { DashboardHeader } from "@/components/DashboardHeader";
import { SignedIn, SignedOut } from "@clerk/nextjs";
const ImageUploadForm = ({ onImageUpload, isUploading }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUploadSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/pages/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        onImageUpload(data.url);
        alert("ファイルが正常にアップロードされました。");
        return location.reload();
      } else {
        throw new Error(data.message || "アップロードに失敗しました。");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={styles.upload_images_box}>
      <form onSubmit={handleUploadSubmit}>
        <label>画像アップロード</label>
        <br />
        <input
          type="file"
          name="upload"
          id="upload"
          onChange={handleFileChange}
          //multiple
        />
        <br />
        <button
          type="submit"
          className={styles.upload_form_button_submit}
          disabled={isUploading}
        >
          {isUploading ? "アップロード中..." : "Upload"}
        </button>
      </form>
    </div>
  );
};

const Upload = () => {
  const [isActive, setIsActive] = useState(false);

  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    setDate(`${year}/${month}/${day}`);
    setIsActive(true);
  }, []);

  const handleImageUpload = (url) => {
    setUploadedImageUrl(url);
  };

  return (
    <>
      <DashboardHeader />
      <section
        className={`${styles.upload_section} ${isActive ? styles.active : ""}`}
      >
        <h2 className={styles.page_title}>Update</h2>
        <SignedIn>
          {error && <p className={styles.error_message}>{error}</p>}
          <ImageUploadForm
            onImageUpload={handleImageUpload}
            isUploading={isUploading}
          />
          {uploadedImageUrl && (
            <p>アップロードされた画像: {uploadedImageUrl}</p>
          )}
        </SignedIn>
        <SignedOut></SignedOut>
      </section>
    </>
  );
};

export default Upload;
