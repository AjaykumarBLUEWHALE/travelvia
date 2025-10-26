import React, { useEffect, useRef, useState, useCallback } from "react";

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

export default function ScrollSequence({
  frameCount = 180,
  getSrc = (i) => `/image/frames/back_${String(i).padStart(4, "0")}.mp4`,
  canvasWidth = 1280,
  canvasHeight = 720,
  scrollDurationVh = 240,
  batchSize = 10,
  lazyStart = 2,
  className = "",
  backdrop = "#000",
}) {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef(new Array(frameCount).fill(null));
  const rAFRef = useRef(0);
  const scrollTickRef = useRef(false);
  const [dpr, setDpr] = useState(() => window.devicePixelRatio || 1);

  const drawFrame = useCallback((index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const img = imagesRef.current[index];
    if (img && img.complete) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  }, []);

  const sizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ratio = dpr || 1;
    canvas.width = Math.round(canvasWidth * ratio);
    canvas.height = Math.round(canvasHeight * ratio);
    canvas.style.width = "100%";
    const ctx = canvas.getContext("2d");
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }, [canvasWidth, canvasHeight, dpr]);

  // Preload frames progressively
  useEffect(() => {
    const first = new Image();
    first.src = getSrc(1);
    first.onload = () => drawFrame(0);
    imagesRef.current[0] = first;

    let idx = Math.max(2, lazyStart);
    let alive = true;
    const step = () => {
      if (!alive) return;
      let count = 0;
      while (idx <= frameCount && count < batchSize) {
        const img = new Image();
        img.src = getSrc(idx);
        imagesRef.current[idx - 1] = img;
        idx++;
        count++;
      }
      if (idx <= frameCount) {
        setTimeout(step, 50);
      }
    };
    setTimeout(step, 0);
    return () => {
      alive = false;
    };
  }, [frameCount, getSrc, batchSize, lazyStart, drawFrame]);

  useEffect(() => {
    sizeCanvas();
    const onResize = () => {
      setDpr(window.devicePixelRatio || 1);
      sizeCanvas();
      requestAnimationFrame(() => {});
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [sizeCanvas]);

  // Scroll mapping
  useEffect(() => {
    const onScroll = () => {
      if (scrollTickRef.current) return;
      scrollTickRef.current = true;
      rAFRef.current = requestAnimationFrame(() => {
        scrollTickRef.current = false;
        const wrapper = wrapperRef.current;
        if (!wrapper) return;
        const rect = wrapper.getBoundingClientRect();
        const vh = window.innerHeight || 1;

        const totalScroll = rect.height - vh;
        let progress = 0;
        if (totalScroll > 0) {
          progress = clamp((-rect.top) / totalScroll, 0, 1);
        } else {
          progress = clamp(1 - rect.top / vh, 0, 1);
        }
        const index = Math.min(
          frameCount - 1,
          Math.floor(progress * (frameCount - 1))
        );
        drawFrame(index);
      });
    };

    requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rAFRef.current);
    };
  }, [frameCount, drawFrame]);

  return (
    <section
      ref={wrapperRef}
      className={className}
      style={{
        position: "relative",
        height: `${scrollDurationVh}vh`,
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "grid",
          placeItems: "center",
          background: backdrop,
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            maxWidth: "100vw",
            aspectRatio: `${canvasWidth} / ${canvasHeight}`,
          }}
        />
      </div>
    </section>
  );
}