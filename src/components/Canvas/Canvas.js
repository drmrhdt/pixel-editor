import React, { useState, useRef, useEffect, useCallback } from "react";
import { useCanvasSize } from "../../customHooks/useCanvasSize";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
  drawCircle,
  drawLine,
  drawRectangle,
  drawSquare
} from "../../utilities/drawFigures";
import styles from "./Canvas.module.scss";

export default function Canvas({ setCanvasRef, style }) {
  const [width, height] = useCanvasSize();

  const {
    color: { strokeStyle },
    color: { fillStyle },
    color: { shadowColor },
    shadow: { shadowBlur },
    shadow: { shadowOffsetX },
    shadow: { shadowOffsetY },
    size,
    figure,
    pattern,
    opacity
  } = useSelector(state => ({
    color: state.colorSelect,
    shadow: state.selectShadowParameter,
    size: state.selectSize.toolSize,
    figure: state.selectFigure.figure,
    pattern: state.selectPattern.pattern,
    opacity: state.selectOpacity.opacity
  }));

  // TO-DO add these instruments
  // const lineJoin = useSelector(state => state.selectLineJoin.lineJoin);
  // const tool = useSelector(state => state.selectTool.tool);

  const [isPainting, setIsPainting] = useState(false);
  const [mousePosition, setMousePosition] = useState(undefined);
  const canvasRef = useRef(null);

  // TO-DO make canvas background-color WHITE
  // context.fillStyle = "#ffffff";
  // context.fillRect(0, 0, canvas.width, canvas.height);
  // context.fill();

  const getCoordinates = useCallback(e => {
    if (!canvasRef.current) {
      return;
    }

    const canvas = canvasRef.current;
    const x = e.pageX - canvas.offsetLeft;
    const y = e.pageY - canvas.offsetTop;

    return { x, y };
  }, []);

  const startPaint = useCallback(
    e => {
      const coordinates = getCoordinates(e);
      if (coordinates) {
        setIsPainting(true);
        setMousePosition(coordinates);
      }
    },
    [getCoordinates]
  );

  const draw = useCallback(
    (originalMousePosition, newMousePosition) => {
      if (!canvasRef.current) {
        return;
      }
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      context.shadowColor = shadowColor;
      context.shadowBlur = shadowBlur;
      context.shadowOffsetX = shadowOffsetX;
      context.shadowOffsetY = shadowOffsetY;
      context.fillStyle = fillStyle;
      context.lineWidth = size;
      context.strokeStyle = strokeStyle;
      context.globalAlpha = opacity;

      if (context) {
        // TO-DO buttons DO/UNDO
        context.clearRect(0, 0, canvas.width, canvas.height); // clearing before draw drawing

        switch (figure) {
          case "circle":
            drawCircle(originalMousePosition, newMousePosition, size, context);
            break;
          case "rectangle":
            drawRectangle(originalMousePosition, newMousePosition, context);
            break;
          case "square":
            drawSquare(originalMousePosition, newMousePosition, context);
            break;
          case "line":
            drawLine(originalMousePosition, newMousePosition, context);
            break;
          default:
            return;
        }
      }
    },
    [
      figure,
      fillStyle,
      opacity,
      shadowBlur,
      shadowColor,
      shadowOffsetX,
      shadowOffsetY,
      size,
      strokeStyle
    ]
  );

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    setCanvasRef(canvasRef);

    const canvas = canvasRef.current;
    canvas.addEventListener("mousedown", startPaint);
    return () => {
      canvas.removeEventListener("mousedown", startPaint);
    };
  }, [setCanvasRef, startPaint]);

  const paint = useCallback(
    e => {
      if (isPainting) {
        const newMousePosition = getCoordinates(e);
        if (mousePosition && newMousePosition) {
          draw(mousePosition, newMousePosition);
          // draw circle always on the new place or not
          if (pattern === "bubbles") {
            setMousePosition(newMousePosition);
          }
        }
      }
    },
    [isPainting, getCoordinates, mousePosition, draw, pattern]
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
    <canvas
      className={styles.canvas}
      ref={canvasRef}
      width={width}
      height={height}
      style={style}
    />
  );
}

Canvas.defaultProps = {
  setCanvasRef: () => {},
  style: ""
};

Canvas.propTypes = {
  setCanvasRef: PropTypes.func,
  style: PropTypes.string
};
