import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollFrameAnimation() {
  const scrollerRef = useRef(null); // #main
  const canvasRef = useRef(null);
  const stTweenRef = useRef(null);
  const locoRef = useRef(null);

  const frameCount = 152; // change if needed
  const currentFrame = (i) => `/image/frame_${String(i).padStart(4, "0")}.png`;

  useEffect(() => {
    const scroller = scrollerRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });

    // Locomotive init
    const loco = new LocomotiveScroll({
      el: scroller,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });
    locoRef.current = loco;

    // Keep ScrollTrigger in sync
    loco.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(scroller, {
      scrollTop(value) {
        return arguments.length
          ? loco.scrollTo(value, { duration: 0, disableLerp: true })
          : loco.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: scroller.style.transform ? "transform" : "fixed",
    });

    // High-DPI sizing
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawCover = (img) => {
      if (!img) return;
      const cw = canvas.clientWidth;
      const ch = canvas.clientHeight;
      const iw = img.naturalWidth || img.width;
      const ih = img.naturalHeight || img.height;
      const cr = cw / ch;
      const ir = iw / ih;
      let dw = cw, dh = ch, dx = 0, dy = 0;
      if (ir > cr) {
        dh = ch;
        dw = (iw / ih) * dh;
        dx = (cw - dw) / 2;
      } else {
        dw = cw;
        dh = (ih / iw) * dw;
        dy = (ch - dh) / 2;
      }
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, dx, dy, dw, dh);
    };

    const images = new Array(frameCount);
    const imageSeq = { frame: 0 };

    const preload = async () => {
      const tasks = [];
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i + 1);
        images[i] = img;
        tasks.push(img.decode().catch(() => {}));
      }
      await Promise.all(tasks);
    };

    const init = async () => {
      setCanvasSize();
      await preload();
      drawCover(images[0]);

      // GSAP tween to scrub frames
      const tween = gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        onUpdate: () => {
          const idx = Math.max(0, Math.min(frameCount - 1, Math.floor(imageSeq.frame)));
          const img = images[idx];
          if (img && img.complete) drawCover(img);
        },
        scrollTrigger: {
          trigger: "#page > canvas",
          start: "top top",
          end: "600% top", // longer scrub, adjust if needed
          scrub: 0.2,      // set to true for exact lock-to-scroll
          pin: true,
          scroller: scroller, // must be the same element passed to Locomotive
          anticipatePin: 1,
        },
      });
      stTweenRef.current = tween;

      ScrollTrigger.addEventListener("refresh", () => loco.update());
      ScrollTrigger.refresh();
    };

    init();

    const onResize = () => {
      setCanvasSize();
      // Re-draw current frame at new res
      const idx = Math.max(0, Math.min(frameCount - 1, Math.floor(imageSeq.frame)));
      drawCover(images[idx]);
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (stTweenRef.current) {
        stTweenRef.current.scrollTrigger?.kill();
        stTweenRef.current.kill();
        stTweenRef.current = null;
      }
      ScrollTrigger.getAll().forEach((t) => t.kill());
      loco.destroy();
    };
  }, []);

  return (
    <div
      id="main"
      ref={scrollerRef}
      data-scroll-container
      style={{ background: "#111", color: "#fff", minHeight: "100vh" }}
    >
      {/* Pinned canvas section */}
      <section id="page" style={{ position: "relative" }}>
        <canvas ref={canvasRef} />
      </section>

      {/* Additional pinned sections (optional) */}
      <section id="page1" style={{ height: "100vh", display: "grid", placeItems: "center" }}>
        <h2>Page 1</h2>
      </section>
      <section id="page2" style={{ height: "100vh", display: "grid", placeItems: "center" }}>
        <h2>Page 2</h2>
      </section>
      <section id="page3" style={{ height: "100vh", display: "grid", placeItems: "center" }}>
        <h2>Page 3</h2>
      </section>
    </div>
  );
}