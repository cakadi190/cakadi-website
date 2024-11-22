import styled from '@emotion/styled';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Card, Col, Container, Placeholder, Row } from 'react-bootstrap';
import useTimer from '~/hooks/useTimer';

const StyledSection = styled.section`
  padding: 2rem 0;
`;

export default function BlogSection() {
  const [blogs, setBlogs] = useState<any[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { startTimer } = useTimer(5000);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);

      await startTimer();

      const mockData = [...Array(9).keys()];
      setBlogs(mockData);

      setLoading(false);
    };

    fetchBlogs();
  }, []);

  const RenderPlaceholder = () => [...Array(6).keys()].map((_, index) => (
    <Col md={4} key={index}>
      <Card className='overflow-hidden'>
        <Placeholder as={Card.Img} height={200} animation="glow" variant="top" />
      </Card>
    </Col>
  ));

  const RenderBlogs = ({ blogs }: { blogs: any[] | null }) => blogs?.map((_, index) => (
    <Col md={4} key={index}>
      <Card className='overflow-hidden'>
        <Card.Img variant="top" src="https://via.placeholder.com/600x400" />
        <Card.Body>
          <Card.Title>Blog Title {index + 1}</Card.Title>
          <Card.Text>Short description of the blog content goes here.</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <StyledSection>
      <Container>
        <div className="d-flex mb-4 justify-content-between">
          <div className="d-flex gap-2 flex-column">
            <h3 className='m-0'>Artikel Saya</h3>
            <p className="m-0 opacity-75">Jelajahi tulisan dan artikel terbaru saya.</p>
          </div>

          <a href="https://www.catatancakadi.com" target='_blank' className='d-flex gap-2 align-items-center'>
            <span>Lihat Semua</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>

        <Row className='g-4'>
          {loading ? <RenderPlaceholder /> : <RenderBlogs blogs={blogs} />}
        </Row>
      </Container>
    </StyledSection>
  );
}

