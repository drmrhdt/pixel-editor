import { useState, useLayoutEffect } from "react";

export function useCanvasSize() {
  const [canvasSize, setCanvasSize] = useState([
    document.documentElement.clientWidth - 220,
    document.documentElement.clientHeight
  ]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setCanvasSize([
        document.documentElement.clientWidth - 220,
        document.documentElement.clientHeight
      ]);
    };
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, [canvasSize]);
  return canvasSize;
}
