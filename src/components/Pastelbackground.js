import React, { useEffect, useRef } from 'react';

const PastelBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Pastel colors
    const colors = [
      { r: 255, g: 223, b: 211 }, // Soft Pink
      { r: 213, g: 242, b: 230 }, // Mint Green
      { r: 230, g: 230, b: 250 }, // Lavender
      { r: 255, g: 245, b: 213 }  // Light Yellow
    ];

    const animate = () => {
      time += 0.002;

      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      
      // Update color positions based on time
      colors.forEach((color, i) => {
        const position = (time + i / colors.length) % 1;
        const alpha = Math.sin(time * 2 + i) * 0.2 + 0.8;
        gradient.addColorStop(
          position,
          `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`
        );
      });

      // Fill background
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create subtle moving circles
      for (let i = 0; i < 5; i++) {
        const x = canvas.width * (0.2 + Math.sin(time + i) * 0.3);
        const y = canvas.height * (0.2 + Math.cos(time + i) * 0.3);
        const radius = Math.min(canvas.width, canvas.height) * 0.2;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, 0.1)`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default PastelBackground;