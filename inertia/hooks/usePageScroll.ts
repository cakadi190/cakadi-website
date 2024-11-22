import { useState, useEffect } from 'react';

type ScrollPosition = {
  x: number;
  y: number;
};

/**
 * A custom React hook for tracking the current page scroll position in real-time.
 *
 * @description
 * `usePageScroll` provides a simple and reactive way to monitor the current scroll
 * position of the window. It tracks both horizontal (x) and vertical (y) scroll
 * coordinates and updates them dynamically as the user scrolls the page.
 *
 * @returns {[number, number]} A tuple containing two scroll position values:
 * - First element: Horizontal scroll position (x-coordinate) in pixels
 * - Second element: Vertical scroll position (y-coordinate) in pixels
 *
 * @remarks
 * - The hook uses `window.scrollX` and `window.scrollY` for precise scroll tracking
 * - Event listener is automatically added and removed to prevent memory leaks
 * - Works with both mouse wheel and touch scroll events
 * - Suitable for implementing scroll-based animations, lazy loading, or scroll tracking
 *
 * @example
 * // Basic usage in a React component
 * function ScrollTracker() {
 *   const [scrollX, scrollY] = usePageScroll();
 *
 *   return (
 *     <div>
 *       Horizontal Scroll: {scrollX}px
 *       Vertical Scroll: {scrollY}px
 *     </div>
 *   );
 * }
 *
 * @example
 * // Using scroll position for conditional rendering
 * function ScrollBasedComponent() {
 *   const [, scrollY] = usePageScroll();
 *
 *   return (
 *     <header
 *       style={{
 *         opacity: scrollY > 100 ? 0.5 : 1,
 *         position: 'fixed'
 *       }}
 *     >
 *       Header Content
 *     </header>
 *   );
 * }
 *
 * @performance
 * - Minimal performance overhead
 * - Uses `useState` and `useEffect` hooks efficiently
 * - Removes event listener on component unmount
 *
 * @compatibility
 * - Works in modern browsers that support `window.scrollX` and `window.scrollY`
 * - React 16.8+ (Hooks support)
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollX MDN Window.scrollX
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY MDN Window.scrollY
 * @see https://reactjs.org/docs/hooks-custom.html Custom React Hooks
 *
 * @version 1.0.0
 * @author Catatan Cak Adi
 * @license MIT
 */
const usePageScroll = (): [number, number] => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({ x: window.scrollX, y: window.scrollY });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return [scrollPosition.x, scrollPosition.y];
};

export default usePageScroll;
