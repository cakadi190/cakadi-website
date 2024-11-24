import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Col, Container, Placeholder, Row } from 'react-bootstrap';
import useTimer from '~/hooks/useTimer';
import { Post, PostsResponse } from '~/types/wordpress';
import useSecurity from '~/hooks/useSecurity';

const StyledSection = styled.section`
  padding: 2rem 0;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  width: 100%;
`;

const RenderPlaceholder = () => (
  <Row className="g-4">
    {[...Array(6).keys()].map((_, index) => (
      <Col md={4} key={index}>
        <Card className="overflow-hidden">
          <Card.Body>
            <Placeholder animation="glow">
              <Placeholder xs={8} size="lg" className="mb-3" />
              <Placeholder xs={12} size="sm" />
              <Placeholder xs={12} size="sm" />
            </Placeholder>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);

const RenderBlogs = ({ blogs }: { blogs: readonly Post[] | null }) => {
  const { antiXssHijacking } = useSecurity();

  if (!blogs || blogs.length === 0) {
    return (
      <Col xs={12}>
        <EmptyState>
          <h4>Belum ada postingan</h4>
          <p className="text-muted">Artikel akan segera hadir. Silakan cek kembali nanti.</p>
        </EmptyState>
      </Col>
    );
  }

  return (
    <Row className="g-4">
      {blogs.map((blog) => (
        <Col md={4} key={blog.id}>
          <Card as="a" href={blog.url} rel='noopener noreferrer' className="overflow-hidden">
            <Card.Img
              variant="top"
              src={blog.image.sizes.medium.url}
              alt={blog.title}
              className="object-fit-cover"
              style={{ height: '200px' }}
            />
            <Card.Body>
              <Card.Title className="h5 mb-3">{blog.title}</Card.Title>
              <Card.Text className="text-muted small" dangerouslySetInnerHTML={{ __html: antiXssHijacking(blog.excerpt) }} />
              <div className="mt-3">
                <div className="d-flex gap-2 flex-wrap">
                  {blog.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="badge bg-light text-dark">
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default function BlogSection() {
  const [blogs, setBlogs] = useState<readonly Post[] | null>(null);
  const [loading, setLoading] = useState(true);
  const { startTimer } = useTimer(5000);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        await startTimer();
        const response = await fetch('./api/blog-posts');
        const data: PostsResponse = await response.json();
        if (data.success) {
          setBlogs(data.data);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <StyledSection>
      <Container>
        <div className="d-flex mb-4 justify-content-between">
          <div className="d-flex gap-2 flex-column">
            <h3 className="m-0">Artikel Saya</h3>
            <p className="m-0 opacity-75">Jelajahi tulisan dan artikel terbaru saya.</p>
          </div>

          <a
            href="https://www.catatancakadi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex gap-2 align-items-center text-decoration-none"
          >
            <span>Lihat Semua</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>

        {loading ? <RenderPlaceholder /> : <RenderBlogs blogs={blogs} />}
      </Container>
    </StyledSection>
  );
}

