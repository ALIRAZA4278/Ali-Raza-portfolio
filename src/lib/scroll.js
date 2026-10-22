// Scroll the window, through Lenis when smooth scrolling is running so the two
// never fight over the position. `immediate` jumps without easing.
export function scrollToY(top, { immediate = false } = {}) {
  const lenis = typeof window !== 'undefined' ? window.__lenis : null;
  if (lenis) {
    lenis.scrollTo(top, { immediate, force: true });
    return;
  }
  window.scrollTo({ top, behavior: immediate ? 'instant' : 'smooth' });
}
