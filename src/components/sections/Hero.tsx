"use client";

import { useEffect, useRef } from "react";

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const titleWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const title = titleRef.current;
    const wrap = titleWrapRef.current;
    if (!title || !wrap) return;

    const handleMove = (event: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      const rotateX = y * -24;
      const rotateY = x * 24;
      title.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleLeave = () => {
      title.style.transform = "rotateX(0deg) rotateY(0deg)";
    };

    wrap.addEventListener("mousemove", handleMove);
    wrap.addEventListener("mouseleave", handleLeave);

    return () => {
      wrap.removeEventListener("mousemove", handleMove);
      wrap.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-intro">
        <p className="eyebrow">Software Development Engineer</p>
        <div className="hero-title-wrap" ref={titleWrapRef}>
          <h1 className="hero-title hero-title-tilt" ref={titleRef}>
            <span data-text="Punith">Punith</span>
            <span data-text="Kumar G P">Kumar G P</span>
          </h1>
        </div>
        <p className="hero-subtitle">
          Full-stack engineer shipping fast, scalable web apps with React,
          Next.js, Node.js, and RESTful APIs. I fuse performance, testing, and
          clean architecture into dependable systems.
        </p>
        <div className="hero-cta">
          <a className="btn primary" href="#projects">
            View Work
          </a>
          <a className="btn ghost" href="#contact">
            Contact
          </a>
        </div>
      </div>
      <div className="hero-panel">
        <div className="stats">
          <div className="stat">
            <h3>SDE-1</h3>
            <p>Nineleaps</p>
          </div>
          <div className="stat">
            <h3>400+</h3>
            <p>LeetCode</p>
          </div>
          <div className="stat">
            <h3>10K+</h3>
            <p>Records</p>
          </div>
          <div className="stat">
            <h3>5x</h3>
            <p>Awards</p>
          </div>
        </div>
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            <span>Next.js</span>
            <span>Custom CSS</span>
            <span>Motion</span>
            <span>WebGL</span>
            <span>System Design</span>
            <span>Java</span>
            <span>Next.js</span>
            <span>Custom CSS</span>
            <span>Motion</span>
            <span>WebGL</span>
            <span>System Design</span>
            <span>Java</span>
          </div>
        </div>
      </div>
    </section>
  );
}
