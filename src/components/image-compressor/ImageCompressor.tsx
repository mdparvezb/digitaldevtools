"use client";
import { useState, useEffect, useCallback } from "react";
import { compressImage, formatBytes, OutputFormat } from "@/lib/compressor";
import { Download, Settings2, RefreshCw } from "lucide-react";
import Dropzone from "./Dropzone";

type ProcessedFile = {
  id: string;
  original: File;
  compressed?: Blob;
  status: "pending" | "processing" | "done" | "error";
  originalSize: string;
  compressedSize?: string;
  savings?: string;
  previewUrl: string;
};

export default function ImageCompressor() {
  const [files, setFiles] = useState<ProcessedFile[]>([]);
  const [format, setFormat] = useState<OutputFormat>("image/jpeg");
  // Quality is now an integer 1-100
  const [quality, setQuality] = useState(80);

  // Use useCallback to prevent infinite loops in useEffect
  const processFile = useCallback(
    async (
      fileObj: ProcessedFile,
      currentFormat: OutputFormat,
      currentQuality: number,
    ) => {
      // Set status to processing
      setFiles((prev) =>
        prev.map((f) =>
          f.id === fileObj.id ? { ...f, status: "processing" } : f,
        ),
      );

      try {
        const compressedBlob = await compressImage({
          file: fileObj.original,
          quality: currentQuality / 100, // Convert 80 -> 0.8
          outputFormat: currentFormat,
        });

        const savingsRaw = fileObj.original.size - compressedBlob.size;
        const savingsPercent = (savingsRaw / fileObj.original.size) * 100;

        // Handle edge case where file gets bigger (rare, but happens with format conversion)
        const isBigger = savingsRaw < 0;

        setFiles((prev) =>
          prev.map((f) =>
            f.id === fileObj.id
              ? {
                  ...f,
                  status: "done",
                  compressed: compressedBlob,
                  compressedSize: formatBytes(compressedBlob.size),
                  savings: isBigger
                    ? `+${Math.abs(savingsPercent).toFixed(0)}%`
                    : `-${savingsPercent.toFixed(0)}%`,
                }
              : f,
          ),
        );
      } catch (error) {
        console.error(error);
        setFiles((prev) =>
          prev.map((f) =>
            f.id === fileObj.id ? { ...f, status: "error" } : f,
          ),
        );
      }
    },
    [],
  );

  const handleFilesAdded = async (newFiles: File[]) => {
    const processedInit = newFiles.map((file) => ({
      id: Math.random().toString(36).substring(7),
      original: file,
      status: "pending" as const,
      originalSize: formatBytes(file.size),
      previewUrl: URL.createObjectURL(file),
    }));

    setFiles((prev) => [...prev, ...processedInit]);

    // Auto start compression with current settings
    processedInit.forEach((fileObj) => processFile(fileObj, format, quality));
  };

  // Re-compress only when settings change (debounced slightly by user interaction speed)
  useEffect(() => {
    const timer = setTimeout(() => {
      files.forEach((f) => {
        // Only re-process if we have the file and it's not currently processing
        if (f.status !== "processing") {
          processFile(f, format, quality);
        }
      });
    }, 500); // 500ms delay to prevent churn while sliding

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [format, quality]);

  const downloadAll = () => {
    files.forEach((file) => {
      if (file.compressed) {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(file.compressed);
        link.download = `compressed-${file.original.name.split(".")[0]}.${format.split("/")[1]}`;
        link.click();
      }
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-8">
      {/* Settings Bar */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-center justify-between backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Settings2 className="w-5 h-5 text-blue-600" />
          <span className="font-bold text-gray-800">Compression Settings</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto items-center">
          {/* Format Selector */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <label className="text-sm font-medium text-gray-600 whitespace-nowrap">
              Format:
            </label>
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value as OutputFormat)}
              className="border border-gray-200 bg-gray-50 rounded-lg p-2 text-sm font-medium w-full focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="image/jpeg">JPG (Best for Photos)</option>
              <option value="image/png">PNG (Best for Graphics)</option>
              <option value="image/webp">WEBP (Best for Web)</option>
            </select>
          </div>

          {/* Quality Slider */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <label className="text-sm font-medium text-gray-600 whitespace-nowrap">
              Quality:
            </label>
            <input
              type="range"
              min="1"
              max="100"
              step="1"
              value={quality}
              onChange={(e) => setQuality(parseInt(e.target.value))}
              className="w-full sm:w-32 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <span className="text-sm font-bold text-blue-600 w-12 text-right">
              {quality}%
            </span>
          </div>
        </div>
      </div>

      <Dropzone onFilesAdded={handleFilesAdded} />

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-xl text-gray-800">
              Processed Images ({files.length})
            </h3>
            <button
              onClick={downloadAll}
              className="bg-gray-900 hover:bg-black text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-gray-200 flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Download All
            </button>
          </div>

          <div className="grid gap-3">
            {files.map((file) => (
              <div
                key={file.id}
                className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center gap-4 transition-all hover:shadow-md"
              >
                {/* Preview */}
                <div className="w-full sm:w-20 h-20 relative bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
                  <img
                    src={file.previewUrl}
                    alt="preview"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 w-full text-center sm:text-left">
                  <p className="font-semibold text-gray-900 truncate max-w-[200px] mx-auto sm:mx-0">
                    {file.original.name}
                  </p>

                  <div className="flex items-center justify-center sm:justify-start gap-3 text-sm mt-2">
                    <div className="bg-gray-100 px-2 py-1 rounded-md text-gray-500 text-xs">
                      {file.originalSize}
                    </div>

                    {file.status === "done" ? (
                      <>
                        <span className="text-gray-400">→</span>
                        <div className="bg-blue-50 border border-blue-100 px-2 py-1 rounded-md text-blue-700 font-bold text-xs">
                          {file.compressedSize}
                        </div>
                        <span
                          className={`text-xs font-bold px-2 py-1 rounded-full ${file.savings?.startsWith("+") ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}
                        >
                          {file.savings}
                        </span>
                      </>
                    ) : (
                      <span className="flex items-center gap-1 text-blue-500 text-xs font-medium animate-pulse">
                        <RefreshCw className="w-3 h-3 animate-spin" />{" "}
                        Processing...
                      </span>
                    )}
                  </div>
                </div>

                {/* Action */}
                {file.status === "done" && file.compressed && (
                  <a
                    href={URL.createObjectURL(file.compressed)}
                    download={`compressed-${file.original.name.split(".")[0]}.${format.split("/")[1]}`}
                    className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" /> Save
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
