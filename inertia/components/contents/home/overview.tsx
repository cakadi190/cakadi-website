import styled from '@emotion/styled';
import fotoKuLomba from '~/images/fotoku.jpg';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@inertiajs/react';
import { Col, Container, Row } from 'react-bootstrap';

const StyledSection = styled.section`
  min-height: 5rem;
  padding: 5rem 0;
`;

const ImageWrapper = styled.div`
  aspect-ratio: 16/9;
  background: rgba(var(--bs-dark-rgb), 0.125);
  transform: rotate(5deg);
  border-radius: 0.5rem;
`;

const InnerImageWrapper = styled.div`
  aspect-ratio: 16/9;
  background: rgba(var(--bs-dark-rgb), 0.125);
  transform: rotate(-5deg);
  border-radius: 0.5rem;
  overflow: hidden;
  transition: all .2s;

  &:hover {
    transform: rotateY(-5deg);
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Heading = styled.h3`
  margin-bottom: 1rem;
`;

const StyledParagraph = styled.p`
  margin-bottom: 1.5rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export default function OverviewSection() {
  return (
    <StyledSection>
      <Container>
        <Row className="g-4">
          <Col md={4}>
            <ImageWrapper>
              <InnerImageWrapper>
                <StyledImg src={fotoKuLomba} alt="Foto Saya" />
              </InnerImageWrapper>
            </ImageWrapper>
          </Col>
          <Col md={8}>
            <Heading>Selayang Pandang</Heading>
            <StyledParagraph>
              Nama saya <strong>Cak Adi</strong>. Saya adalah seorang programmer profesional dan antusias dengan semangat yang besar
              untuk memecahkan masalah dan mengeksplorasi teknologi baru. Sebagai pembelajar cepat dengan sikap mandiri,
              saya menyukai bekerja dengan berbagai <em>techstack</em> pengembangan aplikasi web dan berupaya untuk membuat web
              lebih mudah diakses oleh semua orang. Keahlian utama saya adalah pada <strong>PHP</strong> dan <strong>JavaScript</strong>, dan saya lebih suka menggunakannya secara luas dalam pekerjaan saya.
              Saya terbuka untuk peluang kerja yang sesuai dengan keahlian dan minat saya.
            </StyledParagraph>

            <div className="d-flex">
              <StyledLink className="btn btn-success" href="/about-me">
                <span>Lihat Selengkapnya</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </StyledLink>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
}
