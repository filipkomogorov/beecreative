import { RefObject, useEffect } from "react";

interface Bee {
  t: number;
  speed: number;
  jitterA: number;
  jitterR: number;
  jitterW: number;
  size: number;
  uv: boolean;
  shade: number;
}

interface PointerPosition {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
}

interface SwarmAnimationOptions {
  mobileCount?: number;
  desktopCount?: number;
}

type RgbColor = readonly [number, number, number];

const HONEY: RgbColor = [242, 165, 22];
const NECTAR: RgbColor = [255, 214, 107];
const UV: RgbColor = [106, 76, 255];

const lerp = (start: number, end: number, amount: number): number => {
  return start + (end - start) * amount;
};

const mixColors = (
  firstColor: RgbColor,
  secondColor: RgbColor,
  amount: number,
): string => {
  const red = Math.floor(lerp(firstColor[0], secondColor[0], amount));
  const green = Math.floor(lerp(firstColor[1], secondColor[1], amount));
  const blue = Math.floor(lerp(firstColor[2], secondColor[2], amount));

  return `rgb(${red}, ${green}, ${blue})`;
};

const useSwarmAnimation = (
  canvasRef: RefObject<HTMLCanvasElement | null>,
  prefersReducedMotion: boolean,
  { mobileCount = 90, desktopCount = 190 }: SwarmAnimationOptions = {},
): void => {
  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    let width = 0;
    let height = 0;
    let devicePixelRatio = 1;

    let bees: Bee[] = [];
    let isRunning = false;
    let animationFrameId: number | null = null;
    let resizeTimeoutId: number | null = null;

    const pointer: PointerPosition = {
      x: 0.5,
      y: 0.42,
      targetX: 0.5,
      targetY: 0.42,
    };

    const sizeCanvas = (): void => {
      devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      width = canvas.clientWidth;
      height = canvas.clientHeight;

      canvas.width = Math.round(width * devicePixelRatio);
      canvas.height = Math.round(height * devicePixelRatio);

      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

      context.fillStyle = "#FBF5E9";
      context.fillRect(0, 0, width, height);
    };

    const createBees = (): void => {
      const isMobile = width < 760;
      const beeCount = isMobile ? mobileCount : desktopCount;

      bees = Array.from({ length: beeCount }, () => ({
        t: Math.random() * Math.PI * 2,
        speed: 0.14 + Math.random() * 0.2,
        jitterA: Math.random() * Math.PI * 2,
        jitterR: 6 + Math.random() * 34,
        jitterW: 0.6 + Math.random() * 1.6,
        size: 0.9 + Math.random() * 1.7,
        uv: Math.random() < 0.26,
        shade: Math.random(),
      }));
    };

    const drawStaticPath = (): void => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = "#FBF5E9";
      context.fillRect(0, 0, width, height);

      const isMobile = width < 760;
      const centerX = width * (isMobile ? 0.5 : 0.56);
      const centerY = height * (isMobile ? 0.3 : 0.36);
      const radiusX = Math.min(width * 0.34, 480);
      const radiusY = Math.min(height * 0.2, 230);

      context.strokeStyle = "rgba(242, 165, 22, 0.5)";
      context.lineWidth = 1.5;
      context.setLineDash([2, 7]);
      context.beginPath();

      for (let position = 0; position <= Math.PI * 2 + 0.05; position += 0.05) {
        const x = centerX + Math.sin(position) * radiusX;

        const y = centerY + Math.sin(position * 2) * radiusY * 0.5;

        if (position === 0) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }
      }

      context.stroke();
      context.setLineDash([]);
    };

    const drawFrame = (timestamp: number): void => {
      if (!isRunning) {
        return;
      }

      const time = timestamp * 0.001;

      context.fillStyle = "rgba(251, 245, 233, 0.16)";
      context.fillRect(0, 0, width, height);

      pointer.x += (pointer.targetX - pointer.x) * 0.04;
      pointer.y += (pointer.targetY - pointer.y) * 0.04;

      const isMobile = width < 760;

      const centerX = width * (isMobile ? 0.5 : lerp(0.56, pointer.x, 0.22));

      const centerY = height * (isMobile ? 0.3 : lerp(0.36, pointer.y, 0.22));

      const radiusX = Math.min(width * 0.34, 480);
      const radiusY = Math.min(height * 0.2, 230);

      bees.forEach((bee) => {
        bee.t += bee.speed * 0.016 * (isMobile ? 1.15 : 1);

        const position = bee.t;

        const wobble = Math.sin(time * bee.jitterW + bee.jitterA);

        const x =
          centerX +
          Math.sin(position) * radiusX +
          Math.cos(time * bee.jitterW * 1.3 + bee.jitterA) * bee.jitterR;

        const y =
          centerY +
          Math.sin(position * 2) * radiusY * 0.5 +
          wobble * bee.jitterR * 0.8;

        const pathProgress = (Math.sin(position) + 1) / 2;

        context.fillStyle = bee.uv
          ? mixColors(UV, NECTAR, pathProgress * 0.35)
          : mixColors(HONEY, NECTAR, bee.shade * 0.8);

        context.globalAlpha =
          0.5 + 0.5 * Math.abs(Math.sin(position * 2 + bee.jitterA));

        context.beginPath();
        context.arc(x, y, bee.size, 0, Math.PI * 2);
        context.fill();
      });

      context.globalAlpha = 1;

      animationFrameId = window.requestAnimationFrame(drawFrame);
    };

    const startAnimation = (): void => {
      if (isRunning || prefersReducedMotion) {
        return;
      }

      isRunning = true;
      animationFrameId = window.requestAnimationFrame(drawFrame);
    };

    const stopAnimation = (): void => {
      isRunning = false;

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    const handleResize = (): void => {
      if (resizeTimeoutId !== null) {
        window.clearTimeout(resizeTimeoutId);
      }

      resizeTimeoutId = window.setTimeout(() => {
        sizeCanvas();
        createBees();

        if (prefersReducedMotion) {
          drawStaticPath();
        }
      }, 150);
    };

    const handlePointerMove = (event: PointerEvent): void => {
      pointer.targetX = event.clientX / Math.max(width, 1);

      pointer.targetY = event.clientY / Math.max(height, 1);
    };

    const handleVisibilityChange = (): void => {
      if (document.hidden) {
        stopAnimation();
      } else {
        startAnimation();
      }
    };

    sizeCanvas();
    createBees();

    if (prefersReducedMotion) {
      drawStaticPath();
    } else {
      startAnimation();
    }

    window.addEventListener("resize", handleResize);

    if (!prefersReducedMotion) {
      window.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });

      document.addEventListener("visibilitychange", handleVisibilityChange);
    }

    let intersectionObserver: IntersectionObserver | null = null;

    const swarmRoot = canvas.closest<HTMLElement>("[data-swarm-root]");

    if (
      swarmRoot &&
      !prefersReducedMotion &&
      "IntersectionObserver" in window
    ) {
      intersectionObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          stopAnimation();
        }
      });

      intersectionObserver.observe(swarmRoot);
    }

    return () => {
      stopAnimation();

      window.removeEventListener("resize", handleResize);

      window.removeEventListener("pointermove", handlePointerMove);

      document.removeEventListener("visibilitychange", handleVisibilityChange);

      intersectionObserver?.disconnect();

      if (resizeTimeoutId !== null) {
        window.clearTimeout(resizeTimeoutId);
      }

      context.clearRect(0, 0, width, height);
    };
  }, [canvasRef, prefersReducedMotion, mobileCount, desktopCount]);
};

export default useSwarmAnimation;
