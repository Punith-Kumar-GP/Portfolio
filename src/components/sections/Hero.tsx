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
        <p className="eyebrow">Full Stack Software Development Engineer</p>
        <div className="hero-title-wrap" ref={titleWrapRef}>
          <h1 className="hero-title hero-title-tilt" ref={titleRef}>
            <span data-text="Punith">Punith</span>
            <span data-text="Kumar G P">Kumar G P</span>
          </h1>
        </div>
        <p className="hero-subtitle">
          Full-stack engineer with 4+ years of experience building AI-integrated,
          cloud-native systems with React, Next.js, Node.js, and AWS.
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
            <h3>4+ YRS</h3>
            <p>Experience</p>
          </div>
          <div className="stat">
            <h3>480+</h3>
            <p>LeetCode</p>
          </div>
          <div className="stat">
            <h3>100K+</h3>
            <p>Case Records</p>
          </div>
          <div className="stat">
            <h3>11×</h3>
            <p>Awards</p>
          </div>
        </div>
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            <span>Next.js</span>
            <span>AWS</span>
            <span>OpenAI</span>
            <span>OpenSearch</span>
            <span>System Design</span>
            <span>Java</span>
            <span>Next.js</span>
            <span>AWS</span>
            <span>OpenAI</span>
            <span>OpenSearch</span>
            <span>System Design</span>
            <span>Java</span>
          </div>
        </div>
      </div>
    </section>
  );
}
