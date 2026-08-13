import { useEffect, useState, type RefObject } from "react";

const SRC = "/video-project.mp4";
const SRC_SMALL = "/video-project-small.mp4";
const POSTER = "/video-project-poster.png";

export function ScrollVideo({
  panelRef,
  videoRef,
}: {
  panelRef: RefObject<HTMLDivElement | null>;
  videoRef: RefObject<HTMLVideoElement | null>;
}) {
  const [mode, setMode] = useState<"idle" | "video" | "img">("idle");
  const [small, setSmall] = useState(false);

  useEffect(() => {
    setSmall(window.innerWidth < 640);
    setMode("video");
  }, []);

  return (
    <div
      ref={panelRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden xl:-end-[30%]"
    >
      {mode === "img" ? (
        <img
          src={POSTER}
          alt=""
          draggable={false}
          className="h-full w-full select-none object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          src={small ? SRC_SMALL : SRC}
          muted
          playsInline
          loop={false}
          preload="auto"
          aria-hidden
          onLoadedData={(e) => e.currentTarget.setAttribute("data-loaded", "1")}
          onError={(e) => {
            e.currentTarget.removeAttribute("data-loaded");
            setMode("img");
          }}
          className="panel-video h-full w-full select-none object-cover"
        />
      )}
    </div>
  );
}
