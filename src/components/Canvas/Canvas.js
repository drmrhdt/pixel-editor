import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import "./Canvas.css";

export default function Canvas() {
  const strokeStyle = useSelector(state => state.colorSelect.strokeStyle);
  const fillStyle = useSelector(state => state.colorSelect.fillStyle);
  const size = useSelector(state => state.selectSize.toolSize);
  const lineJoin = useSelector(state => state.selectLineJoin.lineJoin);
  const tool = useSelector(state => state.selectTool.tool);

  const [isPainting, setIsPainting] = useState(false);
  const [mousePosition, setMousePosition] = useState(undefined);
  const canvasRef = useRef(null);

  const startPaint = useCallback(e => {
    const coordinates = getCoordinates(e);
    if (coordinates) {
      setIsPainting(true);
      setMousePosition(coordinates);
    }
  }, []);

  const getCoordinates = e => {
    if (!canvasRef.current) {
      return;
    }

    const canvas = canvasRef.current;
    const x = e.pageX - canvas.offsetLeft;
    const y = e.pageY - canvas.offsetTop;

    return { x, y };
  };

  const drawLine = useCallback(
    (originalMousePosition, newMousePosition) => {
      if (!canvasRef.current) {
        return;
      }
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      if (context) {
        // context.strokeStyle = strokeStyle;
        // context.lineJoin = lineJoin;
        // context.lineWidth = size;

        // context.beginPath();
        // context.moveTo(originalMousePosition.x, originalMousePosition.y);
        // context.lineTo(newMousePosition.x, newMousePosition.y);
        // context.closePath();
        // context.stroke();

        // context.clearRect(0, 0, canvas.width, canvas.height); // clearing before draw new circle

        const centerX = originalMousePosition.x;
        const centerY = originalMousePosition.y;

        const radius =
          size + Math.abs(originalMousePosition.y - newMousePosition.y);

        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        context.fillStyle = fillStyle;
        context.fill();
        context.lineWidth = 5;
        context.strokeStyle = strokeStyle;
        context.stroke();
      }
    },
    [size, fillStyle, strokeStyle]
  );

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    canvas.addEventListener("mousedown", startPaint);
    return () => {
      canvas.removeEventListener("mousedown", startPaint);
    };
  }, [startPaint]);

  const paint = useCallback(
    e => {
      if (isPainting) {
        const newMousePosition = getCoordinates(e);
        if (mousePosition && newMousePosition) {
          drawLine(mousePosition, newMousePosition);
          // draw circle always on the new place
          setMousePosition(newMousePosition);
        }
      }
    },
    [isPainting, mousePosition, drawLine]
  );

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    canvas.addEventListener("mousemove", paint);
    return () => {
      canvas.removeEventListener("mousemove", paint);
    };
  }, [paint]);

  const stopPaint = useCallback(e => {
    setIsPainting(false);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const canvas = canvasRef.current;
    canvas.addEventListener("mouseup", stopPaint);

    return () => {
      canvas.removeEventListener("mouseup", stopPaint);
    };
  }, [stopPaint]);

  return (
    <canvas className="canvas" ref={canvasRef} width="1300px" height="600px" />
  );
}
