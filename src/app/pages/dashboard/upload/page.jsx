// app/pages/dashboard/upload/page.jsx
"use client";

import { useState } from "react";
import { put } from "@vercel/blob";
import Image from "next/image";
export default function ImageUploader() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    try {
      const filename = encodeURIComponent(file.name);
      const res = await fetch(`/pages/api/upload?filename=${filename}`, {
        method: "POST",
        body: file,
      });
      const data = await res.json();

      if (data.url) {
        setUploadedUrl(data.url);
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!file || uploading}>
        {uploading ? "Uploading..." : "Upload to Blob"}
      </button>
      {uploadedUrl && (
        <div>
          <p>Uploaded successfully!</p>
          <Image src={uploadedUrl} width={300} height={300} alt="Uploaded" />
        </div>
      )}
    </div>
  );
}
