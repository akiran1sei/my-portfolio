"use client";

import styles from "@/styles/page.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

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
    <div className={styles.edit_box}>
      <h2 className={styles.page_title}>Edit</h2>
      <section
        className={`${styles.upload_section} ${isActive ? styles.active : ""}`}
      >
        <h3 className={styles.page_sub_title}>Update</h3>

        {error && <p className={styles.error_message}>{error}</p>}

        <ImageUploadForm
          onImageUpload={handleImageUpload}
          isUploading={isUploading}
        />
        {uploadedImageUrl && <p>アップロードされた画像: {uploadedImageUrl}</p>}
      </section>
      <section>
        <h3 className={styles.page_sub_title}>Update</h3>
      </section>
      <section>
        <h3 className={styles.page_sub_title}>Delete</h3>
      </section>
    </div>
  );
};

export default Upload;
