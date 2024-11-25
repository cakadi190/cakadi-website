import { useEffect, useState } from "react";

type useScrollType = {
  scrollPosition: { x: number; y: number };
  scrollingTo: (x: number, y: number) => void;
  scrollingToElement: (element: string, offset?: number) => void;
}

/**
 * Custom hook for tracking and controlling scroll behavior.
 *
 * @returns {useScrollType} An object containing:
 * - `scrollPosition`: The current scroll position as an object with `x` and `y` properties.
 * - `scrollingTo`: Function to scroll to a specific x and y position.
 * - `scrollingToElement`: Function to scroll to a specific DOM element.
 */
export const useScroll = (): useScrollType => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  /**
   * Updates the scroll position state with the current window scroll coordinates.
   */
  const handleScroll = () => {
    setScrollPosition({ x: window.scrollX, y: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Smoothly scrolls to a specific position on the page.
   *
   * @param {number} x - The horizontal coordinate to scroll to.
   * @param {number} y - The vertical coordinate to scroll to.
   */
  const scrollingTo = (x: number = 0, y: number = 0) => {
    window.scrollTo({ top: y, left: x, behavior: 'smooth' });
  };

  /**
   * Smoothly scrolls to a specific element identified by a CSS selector.
   *
   * @param {string} target - The CSS selector of the target element to scroll to.
   * @param {number} [offset=0] - The offset from the top of the element to scroll to.
   */
  const scrollingToElement = (target: string, offset: number = 0) => {
    const element = document.querySelector(target);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return { scrollPosition, scrollingTo, scrollingToElement };
};
