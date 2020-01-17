export const drawCircle = (
  originalMousePosition,
  newMousePosition,
  size,
  context
) => {
  const radius = size + Math.abs(originalMousePosition.y - newMousePosition.y);

  context.beginPath();
  context.arc(
    originalMousePosition.x,
    originalMousePosition.y,
    radius,
    0,
    2 * Math.PI,
    false
  );
  context.fill();
  context.stroke();
};

export const drawSquare = (
  originalMousePosition,
  newMousePosition,
  context
) => {
  context.beginPath();
  context.rect(
    originalMousePosition.x,
    originalMousePosition.y,
    newMousePosition.y,
    newMousePosition.y
    // Math.abs(newMousePosition.x - originalMousePosition.x),
    // Math.abs(newMousePosition.y - originalMousePosition.y)
  );

  context.fill();
  context.stroke();
};

export const drawRectangle = (
  originalMousePosition,
  newMousePosition,
  context
) => {
  context.beginPath();
  context.rect(
    originalMousePosition.x,
    originalMousePosition.y,
    newMousePosition.x,
    newMousePosition.y
    // Math.abs(newMousePosition.x - originalMousePosition.x),
    // Math.abs(newMousePosition.y - originalMousePosition.y)
  );

  context.fill();
  context.stroke();
};

export const drawBrush = (originalMousePosition, newMousePosition, context) => {
  context.beginPath();
  context.moveTo(originalMousePosition.x, originalMousePosition.y);
  context.lineTo(newMousePosition.x, newMousePosition.y);
  context.closePath();
  context.stroke();
};
