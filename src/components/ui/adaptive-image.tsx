"use client";

import NextImage from "next/image";
import { useState } from "react";

interface AdaptiveImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function AdaptiveImage({ src, alt, width, height, className }: AdaptiveImageProps) {
  const [isError, setIsError] = useState(false);

  // If Next.js Image optimization fails, fall back to regular img tag
  if (isError) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  }

  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setIsError(true)}
    />
  );
}