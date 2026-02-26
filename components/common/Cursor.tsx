"use client"

import { useEffect, useRef } from "react"

const userPrefersReducedMotion = (): boolean => {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const cursorDisabled = (): boolean => {
 return !window.matchMedia("(pointer: fine)").matches;
};

const Cursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (userPrefersReducedMotion() || cursorDisabled()) {
        return;
    }

    const move = (e: PointerEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    };

    window.addEventListener("pointermove", move);

    const animate = () => {
      if (!dotRef.current || !ringRef.current) return

      dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;

      ring.current.x += (mouse.current.x - ring.current.x) * 0.15;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.15;

      ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("pointermove", move);
  }, []);

  useEffect(() => {
    const interactive = document.querySelectorAll("a, button");

    interactive.forEach(el => {
      el.addEventListener("mouseenter", () => {
        ringRef.current?.classList.add("h-12", "w-12");
      });

      el.addEventListener("mouseleave", () => {
        ringRef.current?.classList.remove("h-12", "w-12");
      });
    });
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="
          pointer-events-none
          fixed top-0 left-0
          z-9999
          h-2 w-2
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-white
          mix-blend-difference
        "
      />

      <div
        ref={ringRef}
        className="
          pointer-events-none
          fixed top-0 left-0
          z-9998
          h-6 w-6
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          border border-white/60
          transition-all duration-200 ease-out
          mix-blend-difference
        "
      />
    </>
  );
};

export default Cursor;