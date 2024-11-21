import styled from "@emotion/styled";
import { FC, ReactNode } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid var(--bs-border-color);
  position: relative;
  overflow: hidden;

  &::after, &::before {
    position: absolute;
    width: 100%;
    content: '';
    border-top: 1px solid var(--bs-border-color);
  }

  &::before {
    top: 2.125rem;
    left: 0;
  }

  &::after {
    top: 2.125rem;
    left: 2.5rem;
    height: 100%;
    width: 0;
    top: 0;
    border-right: 1px solid var(--bs-border-color);
  }
`;

const Badge = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  position: relative;
  padding: .5rem .5rem .5rem 3.5rem;
  margin-top: 0;
  margin-bottom: 0;
  border-radius: 99rem;
  background: var(--bs-border-color);
`;

const IconWrapper = styled.div`
  position: relative;
  z-index: 1;
  border-radius: 100%;
  height: 3rem;
  width: 3rem;
  position: absolute;
  left: 0;
  top: -.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--bs-white);
`;

const Title = styled.div`
  position: relative;
  z-index: 1;
  font-weight: bold;
`;

const Description = styled.div`
  position: relative;
  z-index: 1;
  padding: .75rem;
  margin-left: 2rem;
  padding-bottom: 0;
  font-size: .875rem;
  opacity: .75;
`;

export type bsBgProps = 'primary' | 'success' | 'warning' | 'danger' | 'dark' | 'info';

const Featured: FC<{ title: string; description: string; icon: JSX.Element | ReactNode; bg: bsBgProps }> = ({ title, bg, description, icon }) => {
  return (
    <Container>
      <Badge>
        <IconWrapper className={`bg-${bg || 'primary'}`}>
          {icon}
        </IconWrapper>
        <Title>{title}</Title>
      </Badge>
      <Description>
        {description}
      </Description>
    </Container>
  );
};
Featured.displayName = "Featured";

export default Featured;
