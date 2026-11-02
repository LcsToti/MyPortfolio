import { useEffect, useRef } from 'react';
import { animateGradient } from './gradient-ascii/animate';

export function GradientASCII() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let dispose = animateGradient(canvas);
    // CSS hot updates do not remount React; rebuild the WebGL palette explicitly.
    const refresh = () => {
      dispose?.();
      dispose = animateGradient(canvas);
    };
    import.meta.hot?.on('vite:afterUpdate', refresh);
    return () => {
      import.meta.hot?.off('vite:afterUpdate', refresh);
      dispose?.();
    };
  }, []);
  return (
    <div className="gradient-ascii" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
