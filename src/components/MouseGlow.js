"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        background: `radial-gradient(700px circle at ${position.x}px ${position.y}px, rgba(6, 182, 212, 0.12), rgba(139, 92, 246, 0.06) 50%, transparent 80%)`,
        transition: 'background 0.1s ease-out'
      }}
    />
  );
}
