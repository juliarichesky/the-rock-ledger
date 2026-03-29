import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // toda que o pathname (URL) mudar, o scroll volta pro (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // ele é um componente fantasma, não aparece na tela
}