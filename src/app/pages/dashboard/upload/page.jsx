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

  const handleUpload = async () => {
    if (confirm("アップロードしますか？")) {
      if (!file) return;

      setUploading(true);
      try {
        const formData = new FormData();
        formData.append("file", file);

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
      }, 1000); // 1秒後にリロード
    }
  }, [imageLoaded]);

  return (
    <>
      <SignedIn>
        <DashboardHeader />
        <section
          className={`${styles.upload_section} ${isActive ? "active" : ""}`}
        >
          <h2 className={styles.page_title}>Update</h2>
          <div className={styles.upload_section_wrap}>
            <form>
              <input type="file" onChange={handleFileChange} />
              <button
                onClick={handleUpload}
                disabled={!file || uploading}
                className={styles.upload_form_button_submit}
              >
                {uploading ? "Uploading..." : "Upload to Blob"}
              </button>
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
        </section>
      </SignedIn>
      <SignedOut>
        <p>サインインしてください。</p>
      </SignedOut>
    </>
  );
}
