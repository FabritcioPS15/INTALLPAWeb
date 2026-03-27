import { useEffect, useRef } from 'react';
import { useInView, useSpring } from 'framer-motion';

interface NumberCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
}

export default function NumberCounter({ value, suffix = "", prefix = "" }: NumberCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const springValue = useSpring(0, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.5
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + Math.floor(latest).toString() + suffix;
      }
    });
    return () => unsubscribe();
  }, [springValue, suffix, prefix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}
