"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer = ({ videoUrl }: VideoPlayerProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Cambia a true después de que el cliente haya renderizado
  }, []);
  return (
    <>
      {/* Solo renderiza ReactPlayer en el cliente */}
      {isClient && (
        <div className="relative w-full max-w-[1080px] aspect-video mx-auto px-5">
          <ReactPlayer
            url={videoUrl}
            playing={false}
            width="100%"
            height="100%"
          />
        </div>
      )}
    </>
  );
};

export default VideoPlayer;
