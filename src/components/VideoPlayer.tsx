"use client";
import React from "react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
}

export default function VideoPlayer({
  src,
  poster,
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  className = "",
}: VideoPlayerProps) {
  if (!src) return null;

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <video
        src={src}
        poster={poster}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        preload="metadata"
        className="w-full h-auto rounded-lg bg-black"
      >
        Sorry, your browser doesnt support embedded videos.
      </video>
    </div>
  );
}
