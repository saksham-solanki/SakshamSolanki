'use client';
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useSpring, useTransform, SpringOptions } from 'framer-motion';
import { cn } from '@/lib/utils';

type SpotlightProps = {
  className?: string;
  size?: number;
  springOptions?: SpringOptions;
  containerRef?: React.RefObject<HTMLElement | null>;
};

export function Spotlight({
  className,
  size = 200,
  springOptions = { stiffness: 800, damping: 50, mass: 0.5 },
  containerRef,
}: SpotlightProps) {
  const fallbackRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);

  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`);
  const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`);

  const getContainer = useCallback(() => {
    return containerRef?.current ?? fallbackRef.current?.parentElement ?? null;
  }, [containerRef]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const el = getContainer();
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Check if cursor is within the container bounds
      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (inside) {
        mouseX.set(x);
        mouseY.set(y);
        if (!isHovered) setIsHovered(true);
      } else {
        if (isHovered) setIsHovered(false);
      }
    };

    // Listen on window so Spline iframe can't block events
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [getContainer, mouseX, mouseY, isHovered]);

  return (
    <motion.div
      ref={fallbackRef}
      className={cn(
        'pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_80%)] blur-xl transition-opacity duration-200',
        'from-[#00E5A0]/30 via-[#00E5A0]/20 to-[#00E5A0]/5',
        isHovered ? 'opacity-100' : 'opacity-0',
        className
      )}
      style={{
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlightTop,
      }}
    />
  );
}
