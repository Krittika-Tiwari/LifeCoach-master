import React, { useState, useEffect, useCallback } from "react";

// Using images image1..image14 in public/images
const images = Array.from(
  { length: 14 },
  (_, i) => `/images/image${i + 1}.jpeg`
);

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openImage = useCallback((i) => {
    setIndex(i);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  const prev = useCallback(
    () => setIndex((s) => (s - 1 + images.length) % images.length),
    []
  );
  const next = useCallback(() => setIndex((s) => (s + 1) % images.length), []);

  useEffect(() => {
    if (!open) return;

    function onKey(e) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, prev, next]);

  // Preload next/prev images for smoother navigation
  useEffect(() => {
    const nextIdx = (index + 1) % images.length;
    const prevIdx = (index - 1 + images.length) % images.length;
    const n = new Image();
    const p = new Image();
    n.src = images[nextIdx];
    p.src = images[prevIdx];
  }, [index]);

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-br from-violet-50/40 via-purple-50/20 to-indigo-100/40 dark:from-gray-900/20 dark:via-purple-900/10 dark:to-indigo-900/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-lora text-foreground mb-2">
            Session{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
              Gallery
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mx-auto mb-4"></div>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            A curated glimpse into real coaching moments — each image captures
            the energy, growth, and connection from our sessions.
          </p>
        </div>

        {/* Horizontal gallery on md+, stacked grid on small screens */}
        <div className="mt-6">
          {/* Desktop / wide: horizontal scroll */}
          <div className="hidden md:block relative">
            {/* Scroll Arrows */}
            <button
              onClick={() => {
                document
                  .getElementById("gallery-scroll")
                  ?.scrollBy({ left: -300, behavior: "smooth" });
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/80 shadow hover:bg-white"
            >
              ←
            </button>

            <button
              onClick={() => {
                document
                  .getElementById("gallery-scroll")
                  ?.scrollBy({ left: 300, behavior: "smooth" });
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/80 shadow hover:bg-white"
            >
              →
            </button>

            <div
              id="gallery-scroll"
              className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar"
            >
              {images.map((src, i) => (
                <div
                  key={src}
                  className="snap-center flex-shrink-0 w-80 sm:w-96 p-4 bg-card rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <button
                    onClick={() => openImage(i)}
                    className="w-full block focus:outline-none"
                  >
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src={src}
                        alt={`Session ${i + 1} — coaching highlight`}
                        className="w-full h-56 object-cover transform transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: 2-column grid */}
          <div className="block md:hidden mt-6">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 px-4">
              {images.map((src,i) => (
                <div
                  key={src}
                  className="relative min-w-[70%] snap-center rounded-xl overflow-hidden shadow-md"
                  onClick={() => openImage(i)}
                >
                  <img
                    src={src}
                    alt={`Session ${i + 1} — coaching highlight`}
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {open && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            onClick={close}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            <div
              className="relative z-10 max-w-4xl w-full mx-4 sm:mx-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={close}
                className="absolute right-2 top-2 bg-white/90 dark:bg-black/80 rounded-full p-2 shadow hover:scale-105 transition-transform"
                aria-label="Close"
              >
                ✕
              </button>

              <img
                src={images[index]}
                alt={`Session ${index + 1} — coaching highlight (enlarged)`}
                className="w-full h-auto rounded-lg shadow-lg object-contain bg-white"
              />

              <div className="flex items-center justify-end mt-3">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={prev}
                    className="px-3 py-2 bg-white/90 dark:bg-black/80 rounded shadow hover:scale-105 transition-transform"
                    aria-label="Previous"
                  >
                    ‹ Prev
                  </button>
                  <button
                    onClick={next}
                    className="px-3 py-2 bg-white/90 dark:bg-black/80 rounded shadow hover:scale-105 transition-transform"
                    aria-label="Next"
                  >
                    Next ›
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
