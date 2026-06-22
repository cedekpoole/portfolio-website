import { useState, useEffect } from "react";

// Create a custom hook to use media queries for responsive design (e.g. hamburger menu on mobile)

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;

    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

export default useMediaQuery;
