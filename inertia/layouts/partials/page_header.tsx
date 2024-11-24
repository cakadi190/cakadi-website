import { ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SlideLeft, SlideUp } from "~/components/framer/DivElement";
import styled from '@emotion/styled';

export interface PageType {
  header?: string;
  desc?: string;
  icon?: string | JSX.Element | ReactNode;
};

const HeaderStyled = styled.header`
  background: var(--bs-gray-100);
  position: relative;
  overflow: hidden;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 0.8)' stroke-dasharray='5 3' transform='scale(1%2c -1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");

  .container > *:not(.container-icon) {
    z-index: 4;
    position: relative;
  }

  &::after {
    content: '';
    position: absolute;
    z-index: 3;
    height: 10rem;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, var(--bs-white) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0) 100%);
  }
`;

const CustomStyledIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  opacity: .05;
  z-index: 2;

  svg {
    font-size: 10rem;
    transform: rotate(10deg);
  }
`;

export default function PageHeader({ header, desc, icon }: PageType) {
  return (
    <HeaderStyled className="py-5">
      <Container className="pt-5 position-relative my-3 pb-0">
        <Row>
          <Col md={8}>
            <SlideLeft><h1 className="display-6 fw-bold">{header}</h1></SlideLeft>
            <SlideLeft><p className="lead fw-normal">{desc}</p></SlideLeft>
          </Col>
        </Row>
        <CustomStyledIcon className="container-icon">
          <SlideUp>{icon}</SlideUp>
        </CustomStyledIcon>
      </Container>
    </HeaderStyled>
  );
};
