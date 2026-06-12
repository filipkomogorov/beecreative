import { useRef } from "react";

import useReducedMotion from "../../hooks/useReducedMotion";
import useSwarmAnimation from "../../hooks/useSwarmAnimation";

interface SwarmCanvasProps {
  mobileCount?: number;
  desktopCount?: number;
}

const SwarmCanvas = ({
  mobileCount = 90,
  desktopCount = 190,
}: SwarmCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useSwarmAnimation(
    canvasRef,
    prefersReducedMotion,
    {
      mobileCount,
      desktopCount,
    }
  );

  return (
    <canvas
      ref={canvasRef}
      className="swarm-canvas"
      aria-hidden="true"
    />
  );
};

export default SwarmCanvas;