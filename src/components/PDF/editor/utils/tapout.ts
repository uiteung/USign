export function tapout(node: HTMLElement): { destroy: () => void } {
  const handleTouchstart = (event: TouchEvent): void => {
    if (!Array.from(event.touches).some((touch) => node.contains(touch.target as Node)))
      node.dispatchEvent(new CustomEvent('tapout'));
  }
  const handleMousedown = (event: MouseEvent): void => {
    if (!node.contains(event.target as Node)) {
      node.dispatchEvent(new CustomEvent('tapout'));
    }
  }
  window.addEventListener('touchstart', handleTouchstart);
  window.addEventListener('mousedown', handleMousedown);
  return {
    destroy() {
      window.removeEventListener('touchstart', handleTouchstart);
      window.removeEventListener('mousedown', handleMousedown);
    },
  };
}