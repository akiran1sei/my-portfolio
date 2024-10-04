// components/Section/UploadSection.js
"use client";
import styles from "@/styles/page.module.css";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import dotenv from "dotenv";
export function UploadedSection() {
  const [isActive, setIsActive] = useState(false);

  const [error, setError] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null); // Use null for initial state
  const router = useRouter();
  dotenv.config();
  // useSWR hook for fetching image upload status (optional)
  const {
    data: uploadStatus,
    error: fetchError,
    mutate,
  } = useSWR(`${process.env.NEXT_PUBLIC_URL}/pages/api/upload`, fetcher, {
    // Adjust revalidate options as needed
    revalidateOnMount: true,
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });
  useEffect(() => {
    setIsActive(true);
  }, []);
  const handleImageUpload = async () => {
    if (!selectedFile) {
      return; // Prevent unnecessary processing if no file is selected
    }

    setError(""); // Clear previous errors
    setIsUploading(true);

    const formData = new FormData();
    const upData = formData.append("file", selectedFile);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/pages/api/upload`,
        {
          method: "POST",
          body: upData,
          cache: "no-store",
        }
      );
      //
      const data = await response.json();
      if (data.success === true) {
        mutate({ success: true, url: data.url }); // Update uploadStatus in useSWR (optional)
        setUploadedImageUrl(data.url);
        alert("ファイルが正常にアップロードされました。");
        return location.reload();
        // Consider using router.reload() for full page refresh or partial re-rendering as needed
      } else {
        setError(data.message || "アップロードに失敗しました。");
        throw new Error(error); // Re-throw for potential error handling in caller
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setError(error.message || "アップロードに失敗しました。");
    } finally {
      setIsUploading(false); // Always set uploading state to false after completion
    }
  };

  return (
    <section className={`${styles.upload_section} ${isActive ? "active" : ""}`}>
      <h2 className={styles.page_title}>Update</h2>
      <div className={styles.upload_section_wrap}>
        <SignedIn>
          {error && <p className={styles.error_message}>{error}</p>}
          <form>
            <input
              type="file"
              name="upload"
              id="upload"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
            <br />
            <button
              type="button"
              onClick={handleImageUpload}
              className={styles.upload_form_button_submit}
              disabled={isUploading}
            >
              {isUploading ? "アップロード中..." : "Upload"}
            </button>
          </form>
          {uploadedImageUrl && (
            <p className={styles.upload_box}>
              アップロードされた画像:
              <Image
                src={uploadedImageUrl}
                alt="アップロード画像"
                width={150}
                height={150}
                priority
              />
            </p>
          )}
        </SignedIn>
        <SignedOut></SignedOut>
      </div>
    </section>
  );
}
const fetcher = async () => {
  // Optional additional logic for fetching uploaded image
  // Replace with actual API call if applicable
  return { success: false, url: "" };
};
