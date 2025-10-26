import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Self() {
  const canvasRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const frameCount = 152; // your total frames
  const imagePath = (index) =>
    `/image/frames_${String(index).padStart(4, "0")}.png`; // frames_0001.png

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // ---- PRELOAD ALL FRAMES ----
    const images = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = imagePath(i);
      img.onload = () => {
        loadedCount++;
        images[i - 1] = img;
        if (loadedCount === frameCount) {
          setImagesLoaded(true); // all images loaded
          drawFrame(0); // draw first frame
        }
      };
      img.onerror = () => {
        console.warn(`Failed to load frame ${i}`);
      };
    }

    const imageSeq = { frame: 0 };

    function drawFrame(frameIndex) {
      const img = images[frameIndex];
      if (!img) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // scale to fit screen
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShiftX = (canvas.width - img.width * ratio) / 2;
      const centerShiftY = (canvas.height - img.height * ratio) / 2;

      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShiftX,
        centerShiftY,
        img.width * ratio,
        img.height * ratio
      );
    }

    // ---- SCROLL ANIMATION ----
    if (imagesLoaded) {
      gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          scrub: 0.5,
          pin: true,
          trigger: "#selfCanvasContainer",
          end: "500%",
        },
        onUpdate: () => drawFrame(Math.floor(imageSeq.frame)),
      });
    }

    // ---- RESIZE CANVAS ----
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(Math.floor(imageSeq.frame));
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded]);

  return (
    <div id="selfCanvasContainer">
      <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }} />
      {/* Optional content above canvas */}
      <div style={{ position: "relative", zIndex: 1, color: "white", padding: "2rem" }}>
        <h1>Scroll to Play Animation</h1>
        <p>All frames are preloaded for smooth experience.</p>
      </div>
      {/* Extra space to allow scroll */}
      <div style={{ height: "500vh" }} />
    </div>
  );
}
