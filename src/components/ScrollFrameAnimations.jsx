import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import { useLocation } from "react-router-dom";
import "locomotive-scroll/dist/locomotive-scroll.css";
import HHH from "./HHH";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Article from "./Article";
import Booking from "./Booking";
import Gallery from "./Gallery";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const mainRef = useRef(null);
  const canvasRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const scrollEl = mainRef.current;
    if (!scrollEl) return;

    let locoScroll;

    // 🌀 Initialize Locomotive Scroll
    try {
      locoScroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        multiplier: 1,
        lerp: 0.1,
      });
    } catch (err) {
      console.warn("Locomotive init failed:", err);
      return;
    }

    // Sync with ScrollTrigger
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (locoScroll?.scroll?.instance) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        }
        return 0;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollEl.style.transform ? "transform" : "fixed",
    });

    const handleRefresh = () => {
      try {
        locoScroll && locoScroll.update();
      } catch (err) {
        console.warn("Skipped update after destroy"+err);
      }
    };

    ScrollTrigger.addEventListener("refresh", handleRefresh);
    ScrollTrigger.refresh();

    /** ---------- Canvas Animation ---------- */
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const totalFrames = 152;
    const images = [];
    const imageSeq = { frame: 0 };

    const files = (index) =>
      `/image/frame_${String(index + 1).padStart(4, "0")}.png`;

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }

    const render = () => {
      const frameIndex = Math.min(imageSeq.frame, images.length - 1);
      const img = images[frameIndex];
      if (img) scaleImage(img, context);
    };

    const scaleImage = (img, ctx) => {
      const canvas = ctx.canvas;
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShiftX = (canvas.width - img.width * ratio) / 2;
      const centerShiftY = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
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
    };

    images[0].onload = render;

    gsap.to(imageSeq, {
      frame: totalFrames - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        scrub: 0.15,
        trigger: canvas,
        start: "top top",
        end: "600% top",
        scroller: scrollEl,
      },
      onUpdate: render,
    });

    ScrollTrigger.create({
      trigger: canvas,
      pin: true,
      start: "top top",
      end: "600% top",
      scroller: scrollEl,
    });

    // Smooth refresh after init
    setTimeout(() => ScrollTrigger.refresh(), 500);

    /** ---------- Cleanup ---------- */
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.removeEventListener("refresh", handleRefresh);
      try {
        locoScroll.destroy();
      } catch (err) {
        console.warn("Locomotive already destroyed:", err);
      }
    };
  }, [location.pathname]); // 🔥 Re-run when route changes

  return (
    <div id="main" ref={mainRef} data-scroll-container>
      {/* Fixed Navbar */}
   

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100vh",
          display: "block",
          position: "relative",
          zIndex: 1,
        }}
      ></canvas>

      {/* Page Sections */}
   <HHH/>
      {/* Extra Components */}
      <Hero />
      <Article />
      <Booking />
      <Gallery />
    </div>
  );
};

export default Home;
