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
        <ReactPlayer
          url={videoUrl}
          playing={false}
          width="1080px"
          height="720px"
        />
      )}
    </>
  );
};

export default VideoPlayer;
