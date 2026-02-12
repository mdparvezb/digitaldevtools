import imageCompression from "browser-image-compression";

export type OutputFormat = "image/jpeg" | "image/png" | "image/webp";

interface CompressOptions {
  file: File;
  quality: number; // 0 to 1 (e.g., 0.8 for 80%)
  outputFormat: OutputFormat;
}

export const compressImage = async ({
  file,
  quality,
  outputFormat,
}: CompressOptions) => {
  const options = {
    // We set maxSizeMB to the original file size (or high) so it doesn't force a size cap,
    // but rather relies on 'initialQuality' to drive the compression.
    maxSizeMB: file.size / 1024 / 1024,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
    fileType: outputFormat,
    initialQuality: quality, // This is the key parameter now
    alwaysKeepResolution: true, // Prevent resizing unless necessary
  };

  try {
    const compressedFile = await imageCompression(file, options);
    return compressedFile;
  } catch (error) {
    console.error("Compression failed:", error);
    throw error;
  }
};

export const formatBytes = (bytes: number, decimals = 2) => {
  if (!+bytes) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};
