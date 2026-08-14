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
    const updateSize = () => {
      setSmall(window.innerWidth < 640);
    };

    updateSize();
    setMode("video");

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <div
      ref={panelRef}
      aria-hidden
      className="
        pointer-events-none
        absolute
        inset-0
        z-[1]
        overflow-hidden
        xl:top-[4vh]
        xl:bottom-0
        xl:start-[-4%]
        xl:-end-[24%]
      "
    >
      {mode === "img" ? (
        <img
          src={POSTER}
          alt=""
          draggable={false}
          className="
            video-bottom-fade
            video-fade-x
            h-full
            w-full
            select-none
            object-cover
            object-center
            xl:object-contain
            xl:object-bottom
          "
          data-fade
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
          onLoadedData={(e) => {
            e.currentTarget.setAttribute("data-loaded", "1");
          }}
          onError={(e) => {
            e.currentTarget.removeAttribute("data-loaded");
            setMode("img");
          }}
          className="
            panel-video
            video-bottom-fade
            video-fade-x
            h-full
            w-full
            select-none
            object-cover
            object-center
            xl:object-contain
            xl:object-bottom
          "
          data-fade
        />
      )}
    </div>
  );
}
