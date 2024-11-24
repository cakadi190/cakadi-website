import { Col, Container, Row } from "react-bootstrap";

function FooterTop() {
  return (
    <></>
  );
}

function FooterBottom() {
  return (
    <Container>
      <Row>
        <Col>
          <p className="text-center mb-0">
            Hak Cipta &copy; {new Date().getFullYear()}{" "}
            <a href="https://www.cakadi.web.id" target="_blank" rel="noreferrer">
              Catatan Cak Adi
            </a>.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

const FooterSection = () => {
  return (
    <footer className="bg-white border-top mt-auto py-3">
      <FooterTop />
      <FooterBottom />
    </footer>
  );
};

export default FooterSection;
