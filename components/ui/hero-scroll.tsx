"use client";
import React, { useRef } from "react";
import { Zap, TrendingUp } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { useRouter } from "next/navigation";

export function HeroScroll() {
  const router = useRouter();
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={heroRef}
      className="w-full min-h-[600px] md:h-[700px] bg-bg-primary relative overflow-hidden rounded-card border border-border"
    >
      <Spotlight
        className="z-20"
        size={350}
        containerRef={heroRef}
      />

      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-8 md:p-12 lg:p-16 relative z-10 flex flex-col justify-center">
          <p className="text-caption uppercase tracking-[0.15em] text-accent font-medium mb-4">
            AI Automation Systems Architect
          </p>
          <h1 className="text-4xl md:text-hero font-black text-text-primary tracking-tight">
            I build AI systems<br />
            <span className="text-accent">that work.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-lg">
            Not demos. Not slide decks. Deployed infrastructure that generates results.
            AI automation consulting for B2B companies ready to ship.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <InteractiveHoverButton
              text="Join AI Builders Club"
              className="w-56 text-base py-3.5 border-accent"
              onClick={() => router.push("/ai-builders-club")}
            />
            <InteractiveHoverButton
              text="Book a Call"
              className="w-44 text-base py-3.5 border-accent"
              onClick={() => router.push("/consulting")}
            />
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-text-tertiary text-sm">
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-accent" />
              <span>50+ AI systems deployed</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-accent" />
              <span>$2M+ in client ROI</span>
            </div>
          </div>
        </div>

        {/* Right content — 3D Spline scene */}
        <div className="flex-1 relative hidden md:block">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
