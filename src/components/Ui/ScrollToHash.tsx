import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
  if (!hash) return;

  const id = hash.replace("#", "");

  const timer = setTimeout(() => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 100);

  return () => clearTimeout(timer);
}, [hash]);

  return null;
};

export default ScrollToHash;