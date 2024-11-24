import { useEffect, useRef, useState } from "react";
import { PropsWithChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
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
  transform-origin: center center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    display: none;
  }

  svg {
    transform: rotate(45deg);
    display: none;
    color: var(--bs-white);
  }

  ${({ isHovering }) =>
    isHovering &&
    `
      transform: scale(2.5);
      background-color: var(--bs-dark);

      svg {
        display: block;
      }
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
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { scrollX, scrollY } = window;
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          left: event.clientX + scrollX,
          top: event.clientY + scrollY,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      setIsHovering(
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        window.getComputedStyle(target).cursor === 'pointer'
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div className="d-flex oveflow-hidden flex-column min-vh-100">
      <NavigationBar />
      <StyledCursor ref={cursorRef} isFocus={false} isHovering={isHovering}>
        <FontAwesomeIcon icon={faArrowUp} size="lg" />
      </StyledCursor>
      {children}
      <FooterSection />
    </div>
  );
}

