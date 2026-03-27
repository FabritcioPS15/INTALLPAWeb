import React from 'react';
import { motion } from 'framer-motion';

interface BannerProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export default function Banner({ title, subtitle, image }: BannerProps) {
  return (
    <div className="relative h-[450px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${image || 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80'})`,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl px-2"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-lg md:text-2xl text-white/90 drop-shadow-md font-light leading-relaxed px-2"
          >
            {subtitle}
          </motion.p>
        )}
        
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-24 h-1.5 bg-[var(--gold-primary)] mx-auto mt-8 rounded-full origin-left" 
        />
      </div>
    </div>
  );
}

