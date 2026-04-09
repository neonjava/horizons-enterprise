
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcus Thorne',
    quote: 'The latency drop was immediately noticeable, and uptime has been flawless. Exactly what we needed for our backend.'
  },
  {
    name: 'Elena Rostova',
    quote: 'Running a massive multiplayer environment requires serious hardware. ExtraRack handles the load without breaking a sweat.'
  },
  {
    name: 'David Chen',
    quote: 'The automated provisioning saves us hours every week. It just works, exactly as advertised, every single time.'
  },
  {
    name: 'Sarah Jenkins',
    quote: 'Support actually reads the tickets and provides technical solutions, not just canned responses. Highly refreshing.'
  },
  {
    name: 'James Wilson',
    quote: 'I have tried multiple providers over the years, but the raw performance here is unmatched. Truly enterprise-grade.'
  },
  {
    name: 'Aisha Patel',
    quote: 'Migration was seamless and the network stability has exceeded our expectations. A reliable partner for our infrastructure.'
  },
  {
    name: 'Thomas Wright',
    quote: 'Incredible value for the specifications provided. The NVMe storage speeds are exactly as promised and incredibly fast.'
  },
  {
    name: 'Michael Chang',
    quote: 'DDoS protection kicked in automatically during a recent attack. We did not experience a single second of downtime.'
  }
];

const RotatingTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 relative">
      <div className="flex justify-center mb-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
          <Quote className="w-8 h-8 text-primary" />
        </div>
      </div>
      
      {/* Fixed height container to prevent layout shift during transitions */}
      <div className="min-h-[200px] md:min-h-[160px] flex flex-col items-center justify-center text-center relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-8 max-w-3xl text-balance">
              "{testimonials[currentIndex].quote}"
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-border"></div>
              <p className="text-lg font-bold text-muted-foreground tracking-wide">
                {testimonials[currentIndex].name}
              </p>
              <div className="h-px w-8 bg-border"></div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-2 mt-12">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-primary/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RotatingTestimonials;
