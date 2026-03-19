"use client";

import { useEffect, useState } from "react";

type Bubble = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
};

export default function BubblesBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 8 + Math.random() * 25,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 5,
    }));

    setBubbles(generated);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="absolute bottom-[-50px] rounded-full animate-bubble"
          style={{
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            background:
              "radial-gradient(circle, rgba(255,255,255,0.9), rgba(255,255,255,0.1))",
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}