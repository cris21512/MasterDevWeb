import React, { useEffect, useRef } from 'react';
import './CursorTrail.css'; // Ensure you have the appropriate CSS for cursor styles

const CursorTrail = () => {
  const mainDot = useRef(null);
  const secondDot = useRef(null);
  const ringDot = useRef(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let x1 = 0, y1 = 0;
    let x2 = 0, y2 = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Dot 1 (white): sigue directo
      mainDot.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

      // Dot 2 (gray): con un poco de delay
      x1 += (mouseX - x1) * 0.1;
      y1 += (mouseY - y1) * 0.1;
      secondDot.current.style.transform = `translate(${x1}px, ${y1}px)`;

      // Ring (transparent): con más delay
      x2 += (mouseX - x2) * 0.05;
      y2 += (mouseY - y2) * 0.05;
      ringDot.current.style.transform = `translate(${x2}px, ${y2}px)`;

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={ringDot} className="cursor-ring" />
      <div ref={secondDot} className="cursor-second" />
      <div ref={mainDot} className="cursor-main" />
    </>
  );
};

export default CursorTrail;
