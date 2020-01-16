export default function line(
  context,
  color,
  lineJoin,
  size,
  originalMousePosition,
  newMousePosition
) {
  context.strokeStyle = color;
  context.lineJoin = lineJoin;
  context.lineWidth = size;

  context.beginPath();
  context.moveTo(originalMousePosition.x, originalMousePosition.y);
  context.lineTo(newMousePosition.x, newMousePosition.y);
  context.closePath();
  context.stroke();
}
