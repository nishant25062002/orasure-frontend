import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ScrollToTopOnLocationChange = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unlisten = navigate.listen(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    return () => {
      unlisten();
    };
  }, [navigate]);

  return null;
};

export default ScrollToTopOnLocationChange;
