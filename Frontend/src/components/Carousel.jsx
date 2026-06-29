import { useState, useEffect } from "react";
// import { FaStar } from "react-icons/fa";
import github from "../assets/github.png"

const testimonials = [
  {
    name: "Atharv Adki",
    role: "Frontend Engineer, PICT",
    review:
      "Cut our onboarding from 2 weeks to 2 days. The repository chat is uncanny.",
  },
  {
    name: "Aryan",
    role: "Backend Engineer, PICT",
    review:
      "Better than reading the docs — because the docs are generated from real code.",
  },
  {
    name: "Siddharth Chiplunkar",
    role: "AI and Devops Engineer, PICT",
    review:
      "The architecture graph caught a circular dependency we missed for months.",
  },
  {
    name: "Atharv Adki",
    role: "Frontend Engineer, PICT",
    review:
      "Cut our onboarding from 2 weeks to 2 days. The repository chat is uncanny.",
  },
  {
    name: "Aryan",
    role: "Backend Engineer, PICT",
    review:
      "Better than reading the docs — because the docs are generated from real code.",
  },
  {
    name: "Siddharth Chiplunkar",
    role: "AI and Devops Engineer, PICT",
    review:
      "The architecture graph caught a circular dependency we missed for months.",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative max-w-[80%] mx-auto">

          <div className="overflow-hidden w-[60%] mx-auto my-5">
  <div
    className="flex transition-transform duration-700 ease-in-out"
    style={{
      transform: `translateX(-${current * 100}%)`,
    }}
  >
    {testimonials.map((item, index) => (
      <div
        key={index}
        className="min-w-full flex justify-center"
      >
        <div className="bg-slate-950 border border-cyan-500 rounded-2xl p-4 shadow-lg min-h-65 w-full">

          {/* Stars */}
          <div className="flex gap-1 mb-6">
            ⭐⭐⭐⭐⭐
          </div>

          {/* Review */}
          <p className="text-white text-2xl leading-relaxed mb-10">
            "{item.review}"
          </p>

          {/* User */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-500 to-cyan-400 flex items-center justify-center">
              <img
                src={github}
                alt="GitHub"
                className="w-8 h-8"
              />
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg">
                {item.name}
              </h3>

              <p className="text-gray-400">
                {item.role}
              </p>
            </div>
          </div>

        </div>
      </div>
    ))}
  </div>
</div>

      {/* Previous */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -left-14 -translate-y-1/2 w-11 h-11 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition"
      >
        ❮
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-14 -translate-y-1/2 w-11 h-11 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="flex justify-center gap-3 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition ${
              current === index ? "bg-blue-500" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;