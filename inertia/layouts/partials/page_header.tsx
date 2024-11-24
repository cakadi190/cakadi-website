import { ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SlideLeft } from "~/components/framer/DivElement";
import styled from '@emotion/styled';

export interface PageType {
  header?: string;
  desc?: string;
  icon?: string | JSX.Element | ReactNode;
};

const HeaderStyled = styled.header`
  background: linear-gradient(to bottom, var(--bs-gray-300) 25%, var(--bs-white) 100%)
`;

export default function PageHeader({ header, desc }: PageType) {
  return (
    <HeaderStyled className="py-5">
      <Container className="pt-5 my-3 pb-0">
        <Row>
          <Col md={8}>
            <SlideLeft><h1 className="display-6 fw-bold">{header}</h1></SlideLeft>
            <SlideLeft><p className="lead fw-normal">{desc}</p></SlideLeft>
          </Col>
        </Row>
      </Container>
    </HeaderStyled>
  );
};
