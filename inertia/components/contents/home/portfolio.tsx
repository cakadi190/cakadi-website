import styled from '@emotion/styled';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { Card, Col, Container, Placeholder, Row } from 'react-bootstrap';
import useTimer from '~/hooks/useTimer';

const StyledSection = styled.section`
padding: 2rem 0;
`;

export default function PortfolioSection() {
  const [portfolio, setPortfolio] = useState<any[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { startTimer } = useTimer(5000)

  useEffect(() => {
    const fetchPortfolio = async () => {
      setLoading(true);

      await startTimer();

      const mockData = [...Array(9).keys()];
      setPortfolio(mockData);

      setLoading(false);
    };

    fetchPortfolio();
  }, []);

  const RenderPlaceholder = () => [...Array(6).keys()].map((_, index) => (
    <Col md={4} key={index}>
      <Card className='overflow-hidden'>
        <Placeholder as={Card.Img} height={200} animation="glow" variant="top" />
      </Card>
    </Col>
  ));

  // Buatkan dummy untuk menampilkan porto, hanya gambar aja
  const RenderPortfolio = ({ porto }: { porto: any[] | null }) => porto?.map((_, index) => (
    <Col md={4} key={index}>
      <Card className='overflow-hidden'>
        <Card.Img variant="top" src="https://via.placeholder.com/600x400" />
      </Card>
    </Col>
  ))

  return (
    <StyledSection>
      <Container>
        <div className="d-flex mb-4 justify-content-between">
          <div className="d-flex gap-2 flex-column">
            <h3 className='m-0'>Portofolio Saya</h3>
            <p className="m-0 opacity-75">Lihat semua proyek yang sudah saya kerjakan selama ini.</p>
          </div>

          <Link href="/projects" className='d-flex gap-2 align-items-center'>
            <span>Lihat Semuanya</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>

        <Row className='g-4'>
          {loading ? <RenderPlaceholder /> : <RenderPortfolio porto={portfolio} />}
        </Row>
      </Container>
    </StyledSection>
  )
};
