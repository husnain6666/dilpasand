"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import GalleryCards from "./galleryCards";

export default function GallerySection() {
  const [showGallery, setShowGallery] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // State to trigger intro card animation
  const sectionRef = useRef(null); // Ref to observe the section

  // Handle click to show gallery and scroll
  const handleClick = () => {
    setShowGallery(true);
    setTimeout(() => {
      const galleryEl = document.getElementById("gallery-cards");
      galleryEl?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  // Handle close gallery
  const handleClose = () => {
    setShowGallery(false);
  };

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when section is visible
          observer.disconnect(); // Stop observing after animation triggers
        }
      },
      {
        threshold: 0.9, // Trigger when 90% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animation variants for Framer Motion (intro card)
  const boxVariants = {
    hidden: { x: "-100%", opacity: 0 }, // Start off-screen to the left
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    }, // Slide to original position
  };

  // Animation variants for GalleryCards
  const galleryVariants = {
    hidden: { x: "100%", opacity: 0 }, // Start off-screen to the right
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    }, // Slide to original position
  };

  return (
    <div
      ref={sectionRef}
      className="relative gallery_section bg-cover bg-center bg-no-repeat h-[calc(100vh-100px)]
 w-full z-0"
    >
      {!showGallery && (
        <motion.div
          className="bg-white p-4 absolute bottom-4 left-3 max-w-[250px]"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={boxVariants}
        >
          <div className="border-2 custom-border p-1 text-left">
            <div className="border border-black p-2">
              <p
                className="text-custom-primary"
                style={{ fontSize: "0.85rem" }}
              >
                It's 1949, and the thrill of the Talkies era is in full swing.
                While cine stars chatter self-importantly, the wealthy hobnob
                with the beautiful, the rakish and the occasional
                ne'er-do-wells. Stop – admire our walls. The myriad of
                artefacts, photographs, portraits, collectables. In their
                stillness they depict the vivacity, life and glamour of 1930s
                and 40s Bombay.
              </p>
              <div className="flex justify-center items-baseline">
                <button
                  onClick={handleClick}
                  className="relative group border-none text-custom-secondary outline-none cursor-pointer"
                  style={{ fontSize: "1rem" }}
                >
                  View Gallery
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-custom-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {showGallery && (
        <motion.div
          id="gallery-cards"
          initial="hidden"
          animate="visible"
          variants={galleryVariants}
        >
          <GalleryCards onClose={handleClose} />
        </motion.div>
      )}
    </div>
  );
}
