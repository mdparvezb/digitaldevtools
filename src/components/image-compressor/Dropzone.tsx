"use client";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";

interface DropzoneProps {
  onFilesAdded: (files: File[]) => void;
}

export default function Dropzone({ onFilesAdded }: DropzoneProps) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    onDrop: onFilesAdded,
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors
        ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-blue-400"}`}
    >
      <input {...getInputProps()} />
      <UploadCloud className="mx-auto h-12 w-12 text-gray-400 mb-4" />
      <p className="text-lg font-medium text-gray-700">
        {isDragActive
          ? "Drop images here..."
          : "Drag & drop images, or click to select"}
      </p>
      <p className="text-sm text-gray-500 mt-2">Supports JPG, PNG, WEBP</p>
    </div>
  );
}
