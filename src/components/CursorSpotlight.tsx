import { useEffect, useRef } from "react";

const CursorSpotlight = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty("--spot-x", `${e.clientX}px`);
        spotlightRef.current.style.setProperty("--spot-y", `${e.clientY}px`);
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{
        background:
          "radial-gradient(600px circle at var(--spot-x, -1000px) var(--spot-y, -1000px), hsl(var(--primary) / 0.04), transparent 60%)",
      }}
    />
  );
};

export default CursorSpotlight;
