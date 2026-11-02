type Point = { x: number; y: number; age: number };

/** Trail and click envelopes from the React Bits preset. */
export function createInteraction(container: HTMLElement, reduced: () => boolean, wake: () => void) {
  const trail: Point[] = [];
  const clicks: Point[] = [];
  const trailData = new Float32Array(96);
  const clickData = new Float32Array(16);
  const surface = container.closest<HTMLElement>('.hero') ?? container;
  const locate = (event: PointerEvent): Point | null => {
    if (reduced()) return null;
    const rect = container.getBoundingClientRect();
    if (!rect.width || !rect.height) return null;
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    if (x < 0 || x > 1 || y < 0 || y > 1) return null;
    return { x: (x - 0.5) * rect.width / rect.height, y: 0.5 - y, age: 0 };
  };
  const move = (event: PointerEvent) => {
    if (event.pointerType === 'touch') return;
    const point = locate(event);
    if (!point) return;
    const head = trail[0];
    const gap = head ? Math.hypot(point.x - head.x, point.y - head.y) : Infinity;
    if (gap < 0.015) return;
    if (head && head.age < 0.1) {
      const steps = Math.min(6, Math.floor(gap / 0.03));
      for (let i = 1; i <= steps; i++) {
        const k = i / (steps + 1);
        trail.unshift({ x: head.x + (point.x - head.x) * k, y: head.y + (point.y - head.y) * k, age: 0 });
      }
    }
    trail.unshift(point);
    trail.length = Math.min(trail.length, 24);
    wake();
  };
  const down = (event: PointerEvent) => {
    const point = locate(event);
    if (!point || event.button !== 0) return;
    clicks.unshift(point);
    clicks.length = Math.min(clicks.length, 4);
    wake();
  };
  surface.addEventListener('pointermove', move, { passive: true });
  surface.addEventListener('pointerdown', down, { passive: true });
  const clear = () => {
    trail.length = 0;
    clicks.length = 0;
    trailData.fill(0);
    clickData.fill(0);
  };
  return {
    trailData,
    clickData,
    clear,
    update(dt: number) {
      if (reduced()) { clear(); return; }
      trailData.fill(0);
      clickData.fill(0);
      trail.forEach(point => { point.age += dt; });
      clicks.forEach(point => { point.age += dt; });
      while (trail.length && trail[trail.length - 1].age > 0.7) trail.pop();
      while (clicks.length && clicks[clicks.length - 1].age > 1.2) clicks.pop();
      trail.forEach((point, i) => {
        const strength = 1 - point.age / 0.7;
        trailData.set([point.x, point.y, strength * strength, 0], i * 4);
      });
      clicks.forEach((point, i) => {
        const strength = 1 - point.age / 1.2;
        const envelope = Math.min(1, point.age / 0.08) * strength * strength;
        clickData.set([point.x, point.y, point.age, envelope], i * 4);
      });
    },
    dispose() {
      surface.removeEventListener('pointermove', move);
      surface.removeEventListener('pointerdown', down);
    },
  };
}
