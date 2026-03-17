import React, { useEffect, useRef } from 'react';

const Starfield = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random(), 
      y: Math.random(), 
      size: Math.random() * 2.5 + 0.5, 
      vx: (Math.random() - 0.5) * 0.0005, 
      vy: (Math.random() - 0.5) * 0.0005,
      blinkSpeed: Math.random() * 0.02 + 0.01,
      phase: Math.random() * Math.PI * 2,
    }));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach((star) => {
        star.phase += star.blinkSpeed;
        const currentOpacity = (Math.sin(star.phase) + 1) / 2; 
        ctx.shadowBlur = currentOpacity * 15;
        ctx.shadowColor = "rgba(255, 255, 255, 1)";
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.9 + 0.1})`;
        ctx.beginPath();
        
        const px = star.x * canvas.width;
        const py = star.y * canvas.height;
        
        ctx.arc(px, py, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        star.x += star.vx;
        star.y += star.vy;
        
        if (star.x < 0) star.x = 1;
        if (star.x > 1) star.x = 0;
        if (star.y < 0) star.y = 1;
        if (star.y > 1) star.y = 0;
      });
      
      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none block" />;
};

export default Starfield;