import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./Navbar";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Hero from "./Hero";
import Article from "./Article";
import Booking from "./Booking";
import Gallery from "./Gallery";
     
const Self = () => {
    
  const mainRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollEl = mainRef.current;
    if (!scrollEl) return;

    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
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

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    // Canvas setup
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });

    const totalFrames = 152;
    const frameCount = 152;
    const images = [];
    const imageSeq = { frame: 0 };

    function files(index) {
      if (index < 0 || index >= totalFrames) return null;
      return `/image/frame_${String(index + 1).padStart(4, "0")}.png`;
    }

    // Preload images
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }

    function render() {
      const frameIndex = Math.min(imageSeq.frame, images.length - 1);
      if (images[frameIndex]) scaleImage(images[frameIndex], context);
    }

    function scaleImage(img, ctx) {
      const canvas = ctx.canvas;
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }

    images[0].onload = render;

    gsap.to(imageSeq, {
      frame: frameCount - 1,
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

    // Cleanup
    return () => {
      locoScroll.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div id="main" className="overflow-hidden" ref={mainRef} style={{ position: "relative" }}>
      {/* Fixed Navbar */}
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000 }}>
        <Navbar />
      </div>

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

      {/* Page content over canvas */}
      <div
      className="menu left-[10px] sm:left-50"
        id="page1"
        style={{
          position: "absolute",
          top: "150px",
  
          color: "white",
          zIndex: 10,
        }}
      >
<div class="parent6 ">
<h1 className="text-[50px] w-98 sm:text-6xl mb-25 sm:mb-30">Enter a world of discoveries</h1>
<div className=" sm:flex flex-row gap-[600px]">
    <div>
    <p className="w-[150px] text-[10px]">
Behind every door lies a world of endless possibilities. *Travel Next Level* takes you to hidden gems, uncharted territories, and unforgettable adventures that transcend the ordinary. Discover fascinating destinations, save your favorites, and start planning the trip of a lifetime.
    </p>
    <button className=" rounded bg-white text-black w-[100px] h-[40px]" >
        Discover
    </button>
  
</div>
  <div class="parent7 ml-0 sm:mt-0 mt-9 ">
<img className="h-[170px] mt-[-10px] w-50  p-2 rounded-2xl" src="https://cdn.prod.website-files.com/6713971095c4a7cab5d924ee/672b9a1566cd01e4423a0643_latest-blog.avif" alt="villa" />
<div className="sm:w-50 w-40 text-[15px] h-[150px]  bg-amber-50 text-black rounded-2xl p-2">
<h1>10 luxurious holiday destinations</h1>
<h1>read more</h1>
<h1 className="mt-2">travel guides</h1>
<h1>read more</h1>
</div>

</div>
</div>
</div>

      </div>
      
      <div
        id="page2"
        className="menu left-[10px] sm:left-50"
        style={{
          position: "absolute",
          top: "150vh",
          color: "white",
          fontSize: "2rem",
          zIndex: 10,
        }}
      >
<h1 className="text-[50px] w-98 sm:text-6xl mb-25 sm:mb-30">A Window to
New Adventures</h1>
<p className="w-[150px] text-[10px]">The path to discovery is limitless, offering views of landscapes yet to be explored. Every journey starts with curiosity, and Travel Next Level is here to turn that curiosity into unforgettable experiences.</p>
      </div>
      <div
        id="page3"
          className="menu left-[10px] sm:left-120"
        style={{
          position: "absolute",
          top: "300vh",
   
          color: "white",
          fontSize: "2rem",
          zIndex: 10,
        }}
      >
   <h1 className="text-[50px] w-98 sm:text-6xl mb-25 sm:mb-30">Where the Sky
Meets the Earth</h1>
<p className="w-[150px] text-[10px]">Travel to places where nature’s beauty and human wonder come together in perfect harmony. Let your curiosity guide you to new heights, where unforgettable experiences and breathtaking destinations await.</p>
  
      </div>
      <div>

        <Hero/>
      
              <Article/>
              <Booking/>
         
<Gallery/>

      </div>

    </div>
  );
};

export default Self;
