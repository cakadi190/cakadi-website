import styled from '@emotion/styled';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import usePageScroll from '~/hooks/usePageScroll';
import { useScroll } from '~/hooks/useScroll';

const BackToTopButton = styled.button<{ isScrolled: boolean }>`
  position: fixed;
  bottom: 0;
  right: 1rem;
  padding: 0.5rem;
  background-color: #3b82f6;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  transition: all 0.2s;
  width: 3rem;
  height: 3rem;
  border: 1px solid #3b82f6;
  transition: all .2s;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;

  ${({ isScrolled }) =>
  isScrolled && `
    opacity: 1;
    bottom: 1rem;
    visibility: visible;
  `}

  &:hover {
    background-color: #2d6eff;
  }
`;

export const BackToTop = () => {
  const [_, verticalScroll] = usePageScroll();
  const { scrollingTo } = useScroll();

  const handleBackToTop = () => {
    scrollingTo(0, 0);
  };

  return (
    <BackToTopButton isScrolled={verticalScroll > 50} className='no-cursor-hover' onClick={handleBackToTop}>
      <FontAwesomeIcon icon={faArrowUp} />
    </BackToTopButton>
  );
};

