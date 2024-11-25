import { useEffect, useRef, useState, useCallback, PropsWithChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import styled from "@emotion/styled";
import NavigationBar from "./partials/navbar";
import FooterSection from "./partials/footer";
import { BackToTop } from "~/components/BackToTop";

interface CursorProps {
  isFocus?: boolean;
  isHovering?: boolean;
}

const StyledCursor = styled.div<CursorProps>`
  position: fixed;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  pointer-events: none;
  border: 1px solid var(--bs-dark);
  z-index: 9999;
  transition: all 0.2s ease;
  transform-origin: center center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

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
        font-size: 0.5em;
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

const useCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = useCallback((event: MouseEvent) => {
    const target = event.target as HTMLElement;

    const hasNoCursorHover = (element: HTMLElement | null): boolean => {
      if (!element) return false;
      if (element.classList.contains('no-cursor-hover')) return true;
      return element.parentElement ? hasNoCursorHover(element.parentElement) : false;
    };

    if (hasNoCursorHover(target)) {
      setIsHovering(false);
      return;
    }

    const isHoverable =
      ['a', 'button'].includes(target.tagName.toLowerCase()) ||
      target.classList.contains('cursor-hover') ||
      window.getComputedStyle(target).cursor === 'pointer';

    setIsHovering(isHoverable);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!cursorRef.current) return;

      const x = Math.min(Math.max(event.clientX, 8), window.innerWidth - 8);
      const y = Math.min(Math.max(event.clientY, 8), window.innerHeight - 8);

      gsap.to(cursorRef.current, {
        left: x,
        top: y,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [handleMouseOver]);

  return { cursorRef, isHovering };
};

const CustomCursor = () => {
  const { cursorRef, isHovering } = useCursor();

  return (
    <StyledCursor ref={cursorRef} isFocus={false} isHovering={isHovering}>
      <FontAwesomeIcon icon={faArrowUp} />
    </StyledCursor>
  );
};

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="d-flex flex-column min-vh-100" id="top">
      <NavigationBar />
      <CustomCursor />
      <main className="flex-grow-1 pb-5">{children}</main>
      <FooterSection />
      <BackToTop />
    </div>
  );
};

export default Layout;
