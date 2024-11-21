import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-3 shadow-md hover:bg-blue-700 transition"
        aria-label="Scroll to Top"
      >
        <span className="sm:hidden">↑</span>{" "}
        <span className="hidden sm:inline md:inline">Jump to top ↑</span>{" "}
      </button>
    )
  );
}
