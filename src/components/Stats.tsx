"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";
import { siteContent } from "@/content";

function AnimatedCounter({ value, duration = 2 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Extract numeric value (including decimals) and suffix - memoize to keep stable
  const { numericValue, suffix, decimalPlaces } = useMemo(() => {
    const match = value.match(/^([\d,.]+)(.*)$/);
    const numericString = match ? match[1].replace(/,/g, "") : "0";
    return {
      numericValue: parseFloat(numericString),
      suffix: match ? match[2] : "",
      decimalPlaces: numericString.includes(".") ? numericString.split(".")[1]?.length || 0 : 0,
    };
  }, [value]);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = easeOutQuart * numericValue;

      if (decimalPlaces > 0) {
        setCount(parseFloat(currentValue.toFixed(decimalPlaces)));
      } else {
        setCount(Math.floor(currentValue));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, numericValue, duration, decimalPlaces]);

  // Format the count for display
  const displayValue = decimalPlaces > 0
    ? count.toFixed(decimalPlaces)
    : count.toLocaleString();

  return (
    <span ref={ref} className="stat-number">
      {displayValue}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 stats-gradient">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        {/* Red Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E10600]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block font-heading text-sm tracking-[0.3em] text-[#E10600] uppercase mb-4">
            Our Impact
          </span>
          <h2 className="font-display text-section text-white">
            Channel <span className="text-[#E10600]">Statistics</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {siteContent.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Card Glow */}
              <div className="absolute inset-0 bg-[#E10600]/10 blur-xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-[#111111]/80 border border-[#E10600]/10 rounded-lg p-6 md:p-8 text-center backdrop-blur-sm group-hover:border-[#E10600]/40 transition-all duration-500">
                {/* Number */}
                <AnimatedCounter value={stat.value} />

                {/* Label */}
                <h3 className="font-heading text-lg md:text-xl text-white mt-4 mb-2 tracking-wide uppercase">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500">
                  {stat.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#E10600]/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#E10600]/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
