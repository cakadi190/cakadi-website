import { useEffect, useRef, useState } from "react";
import { PropsWithChildren } from "react";
import { gsap } from "gsap";
import styled from "@emotion/styled";
import NavigationBar from "./partials/navbar";
import FooterSection from "./partials/footer";

interface CursorProps {
  isFocus?: boolean;
  isHovering?: boolean;
}

const StyledCursor = styled.div<CursorProps>`
  position: absolute;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  pointer-events: none;
  border: 1px solid var(--bs-dark);
  z-index: 9999;
  transition: all 0.2s ease;
  opacity: 0.5;
  transform-origin: center center;

  ${({ isHovering }) =>
    isHovering &&
    `
      transform: scale(2);
      background-color: var(--bs-dark);
    `}

  ${({ isFocus }) =>
    isFocus &&
    `
      background-color: var(--bs-dark);
      opacity: 0.8;
    `}
`;

export default function Landing({ children }: PropsWithChildren) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorPositionRef = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const updateCursorPosition = (x: number, y: number) => {
    cursorPositionRef.current = { x, y };
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        left: x,
        top: y,
        duration: 0.2,
        ease: "power2.out",
      });
    }
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { scrollX, scrollY } = window;
      updateCursorPosition(event.clientX + scrollX, event.clientY + scrollY);
    };

    const handleMouseDown = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add("is-focus");
      }
    };

    const handleMouseUp = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove("is-focus");
      }
    };

    const handleElementHover = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isClickable =
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHovering(isClickable);
    };

    const detectInitialCursorPosition = () => {
      const { scrollX, scrollY } = window;
      updateCursorPosition(scrollX + window.innerWidth / 2, scrollY + window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousemove", handleElementHover);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("load", detectInitialCursorPosition);
    window.addEventListener("popstate", detectInitialCursorPosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", handleElementHover);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("load", detectInitialCursorPosition);
      window.removeEventListener("popstate", detectInitialCursorPosition);
    };
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavigationBar />
      <StyledCursor
        ref={cursorRef}
        isFocus={false}
        isHovering={isHovering}
      />
      {children}
      <FooterSection />
    </div>
  );
}

