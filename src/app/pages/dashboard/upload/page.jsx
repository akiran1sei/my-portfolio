"use client";
import styles from "@/styles/page.module.css";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import dotenv from "dotenv";
import { DashboardHeader } from "@/components/Header/DashboardHeader";
// import { UploadedSection } from "@/components/Section/UploadSection";
// import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function ImageUploader() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [isActive, setIsActive] = useState(false);
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
        const filename = file.name;
        // const filename = encodeURIComponent(file.name);
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

          // Success! Update UI or redirect (consider user experience)
          console.log("Upload successful:", data.url);
          alert("Upload successful:", data.url);
          return location.reload();
        } else {
          // Check for specific error messages from the API response (if available)
          const errorMessage = data.error || "Unknown upload error";
          location.reload();
          throw new Error(errorMessage);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        // Display a user-friendly error message
        alert("Upload failed. Please try again."); // Replace with more specific error handling
        return location.reload();
      } finally {
        setUploading(false);
      }
    }
  };

  return (
    <>
      <SignedIn>
        <DashboardHeader />
        {/* <UploadedSection /> */}

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
                {/* <Image src={uploadedUrl} width={300} height={300} alt="Uploaded" /> */}
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
