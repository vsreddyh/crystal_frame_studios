import React, { useState, forwardRef, useEffect, useCallback } from "react";
import { ArrowLeftIcon, ArrowRightIcon, QuoteIcon } from "./icons";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Every time I shoot with Crystal Frame Studios, it’s more than just a photoshoot it’s an experience that makes me feel confident, seen, and celebrated. From the very beginning, they create such a comfortable and welcoming atmosphere that being in front of the camera feels completely natural. Their creativity, attention to detail, and ability to capture genuine moments truly stand out. The final photos always exceed my expectations each shot perfectly reflects my personality and style. I couldn’t be happier with the results and would highly recommend Crystal Frame Studios to anyone looking for stunning, high quality photos.",
    name: "Jasmi Salagala",
    title: "Client",
    avatar: "./../images/testimonials/jasmi.jpg",
  },
  {
    quote:
      "I had the pleasure of experiencing their incredible work firsthand. The photos they captured at “Under the Moon” were absolutely stunning, with even the atmosphere adding a magical touch. Not only that, but the shots during the Ganesh Nimarjan were equally amazing, perfectly capturing every emotion. These pictures will surely bring a smile for years to come. Their editing skills are top-notch as well.",
    name: "Sathvik",
    title: "Client",
    avatar: "./../images/image2.heic",
  },
  {
    quote:
      "Good skills, good dedication. I love how the conversation between someone can go this smooth and deals well professionally too. I'm in for upcoming shoots as well. Definitely wanna see you on higher stages.",
    name: "likith.lens",
    title: "Photographer",
    avatar: "./../images/testimonials/likith.jpg",
  },
];

const AUTOPLAY_DELAY = 2500; // 2.5 seconds between slides

const Testimonials = forwardRef<HTMLElement>((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, AUTOPLAY_DELAY);

    return () => clearInterval(timer);
  }, [handleNext, isPaused]);

  // Calculate indices for visible testimonials
  const prevIndex =
    currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
  const nextIndex =
    currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;

  return (
    <section
      ref={ref}
      id="testimonials"
      className="py-20 md:py-28 bg-brand-bg text-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 tracking-wider uppercase">
          Testimonials
        </h2>
        <div className="w-20 h-px bg-brand-muted mx-auto mb-12"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex justify-center items-center gap-8">
            {/* Current Testimonial */}
            <div className="transform transition-all duration-500 scale-100 z-10">
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </div>
          </div>

          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-12 text-brand-muted hover:text-white transition-colors duration-300"
          >
            <ArrowLeftIcon className="w-8 h-8" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-12 text-brand-muted hover:text-white transition-colors duration-300"
          >
            <ArrowRightIcon className="w-8 h-8" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-white w-4" : "bg-brand-muted"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

// Extract TestimonialCard component for cleaner code
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="w-full max-w-lg text-center">
    <QuoteIcon className="mx-auto w-12 h-12 text-brand-muted/50 mb-6" />
    <p className="text-md md:text-lg font-light italic leading-relaxed text-brand-light mb-8 min-h-[150px] md:min-h-[120px]">
      "{testimonial.quote}"
    </p>
    <img
      src={testimonial.avatar}
      alt={`Avatar of ${testimonial.name}`}
      className="w-20 h-20 rounded-full object-cover mx-auto mb-6"
    />
    <p className="font-semibold text-lg tracking-wider text-white">
      {testimonial.name}
    </p>
    <p className="text-sm tracking-widest text-brand-muted uppercase">
      {testimonial.title}
    </p>
  </div>
);

Testimonials.displayName = "Testimonials";

export default Testimonials;
