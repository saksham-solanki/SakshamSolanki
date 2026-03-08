"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Zap, TrendingUp } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
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
        <div className="flex-1 p-4 sm:p-8 md:p-12 lg:p-16 relative z-10 flex flex-col justify-center">
          <p className="text-caption uppercase tracking-[0.15em] text-accent font-medium mb-4">
            AI Automation Systems Architect
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-hero font-black text-text-primary tracking-tight">
            I build AI systems<br />
            <span className="text-accent">that work.</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-lg">
            Not demos. Not slide decks. Deployed infrastructure that generates results.
            AI automation consulting for B2B companies ready to ship.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
            <InteractiveHoverButton
              text="Join AI Builders Club"
              className="w-full sm:w-56 text-base py-3.5 border-accent"
              onClick={() => router.push("/ai-builders-club")}
            />
            <InteractiveHoverButton
              text="Book a Call"
              className="w-full sm:w-44 text-base py-3.5 border-accent"
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

        {/* Right content */}
        <div className="flex-1 relative hidden md:flex items-center justify-center">
          <Image
            src="/images/hero-illustration.svg"
            alt="AI systems architecture visualization"
            width={600}
            height={500}
            className="w-full max-w-[500px] h-auto opacity-80"
            priority
          />
        </div>
      </div>
    </div>
  );
}
