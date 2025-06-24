"use client";
import styles from "@/styles/page.module.css";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import dotenv from "dotenv";
import { DashboardHeader } from "@/components/Header/DashboardHeader";
import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function ImageUploader() {
  const [file, setFile] = useState(null);
  const [fileName, setNameFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const router = useRouter();
  dotenv.config();

  useEffect(() => {
    setIsActive(true);
  }, []);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleFileNameChange = (event) => {
    console.log(event.target.value);
    setNameFile(event.target.value);
  };

  const handleUpload = async () => {
    if (confirm("アップロードしますか？")) {
      if (!file || !fileName) return;

      setUploading(true);
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("text", fileName);
        const res = await fetch("/pages/api/upload", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        if (data.url) {
          setUploadedUrl(data.url);
          alert("Upload successful");
        } else {
          const errorMessage = data.error || "Unknown upload error";
          throw new Error(errorMessage);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        alert("Upload failed. Please try again.");
      } finally {
        setUploading(false);
      }
    }
  };

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  useEffect(() => {
    if (imageLoaded) {
      setTimeout(() => {
        location.reload();
      }, 1500); // 1.5秒後にリロード
    }
  }, [imageLoaded]);

  return (
    <>
      <DashboardHeader />
      <section
        className={`${styles.upload_section} ${isActive ? "active" : ""}`}
      >
        <h2 className={styles.page_title}>Update</h2>
        <SignedIn>
          <div className={styles.upload_section_wrap}>
            <form>
              <div className={styles.upload_form_wrap}>
                <div className={styles.upload_form_item}>
                  <label>ファイル選択</label>
                  <input type="file" onChange={handleFileChange} required />
                </div>
                <div className={styles.upload_form_item}>
                  <label>代換テキスト</label>
                  <input type="text" onChange={handleFileNameChange} required />
                </div>
                <div className={styles.upload_form_item}>
                  <button
                    onClick={handleUpload}
                    disabled={!file || uploading}
                    className={styles.upload_form_button_submit}
                  >
                    {uploading ? "Uploading..." : "Upload to Blob"}
                  </button>
                </div>
              </div>
            </form>
            {uploadedUrl && (
              <div>
                <p>Uploaded successfully!</p>
                <Image
                  src={uploadedUrl}
                  width={300}
                  height={300}
                  alt="Uploaded"
                  onLoad={handleImageLoad}
                />
              </div>
            )}
          </div>
        </SignedIn>
        <SignedOut>
          <p className={styles.signOut_text}>サインインしてください。</p>
        </SignedOut>
      </section>
    </>
  );
}
