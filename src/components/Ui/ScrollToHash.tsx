import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = decodeURIComponent(hash.slice(1));

    let attempts = 0;
    const maxAttempts = 50;

    const timer = setInterval(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        clearInterval(timer);
      }

      attempts++;

      if (attempts >= maxAttempts) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;