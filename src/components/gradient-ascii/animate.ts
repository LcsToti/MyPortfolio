import { createRenderer } from './renderer';

import { createInteraction } from './interaction';

export function animateGradient(canvas: HTMLCanvasElement) {
  const container = canvas.parentElement;
  const renderer = createRenderer(canvas);
  if (!container || !renderer) return;
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let visible = true;
  let disposed = false;
  let frame = 0;
  let last = 0;
  let elapsed = 4;
  let painted = 0;
  const interaction = createInteraction(container, () => preference.matches, wake);
  const draw = () => renderer.draw(preference.matches ? 4 : elapsed, preference.matches, interaction.trailData, interaction.clickData);
  function tick(now: number) {
    frame = 0;
    if (disposed || !visible || document.hidden) return;
    const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
    last = now;
    elapsed += dt;
    interaction.update(dt);
    if (now - painted >= 1000 / 30) {
      draw();
      painted = now;
    }
    if (!preference.matches) frame = requestAnimationFrame(tick);
  }
  function wake() {
    last = 0;
    if (!disposed && !frame && visible && !document.hidden) frame = requestAnimationFrame(tick);
  }
  const resize = new ResizeObserver(() => {
    renderer.resize(container.clientWidth, container.clientHeight);
    draw();
    wake();
  });
  const intersection = new IntersectionObserver(entries => {
    visible = entries.some(entry => entry.isIntersecting);
    wake();
  });
  const onPreference = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    interaction.clear();
    draw();
    wake();
  };
  const onLost = (event: Event) => {
    event.preventDefault();
    cancelAnimationFrame(frame);
    frame = 0;
    visible = false;
    canvas.style.visibility = 'hidden';
  };
  renderer.resize(container.clientWidth, container.clientHeight);
  draw();
  resize.observe(container);
  intersection.observe(container);
  document.addEventListener('visibilitychange', wake);
  preference.addEventListener('change', onPreference);
  canvas.addEventListener('webglcontextlost', onLost);
  document.fonts.ready.then(() => {
    if (disposed) return;
    renderer.refreshFont();
    draw();
  });
  wake();
  return () => {
    disposed = true;
    cancelAnimationFrame(frame);
    resize.disconnect();
    intersection.disconnect();
    interaction.dispose();
    document.removeEventListener('visibilitychange', wake);
    preference.removeEventListener('change', onPreference);
    canvas.removeEventListener('webglcontextlost', onLost);
    renderer.dispose();
  };
}
