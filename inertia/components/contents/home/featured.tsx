import styled from '@emotion/styled';
import { faGlobe, faPaintBrush, faVectorSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMemo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { SlideUp } from '~/components/framer/DivElement';
import Featured, { bsBgProps } from '~/components/partials/Featured';

const StyledSection = styled.section`
padding: 2rem 0;
`;

export default function FeaturedSection() {
  const featuredData = useMemo(() => [
    {
      title: 'Web Developer',
      description: 'Membangun website dengan desain responsif, fungsionalitas optimal, dan sesuai kebutuhan klien, menggunakan teknologi terkini.',
      icon: <FontAwesomeIcon icon={faGlobe} />,
      bg: 'primary' as bsBgProps
    },
    {
      title: 'UI/UX Designer',
      description: 'Merancang pengalaman pengguna dan antarmuka pengguna yang intuitif, modern, dan menarik untuk meningkatkan kepuasan pengguna.',
      icon: <FontAwesomeIcon icon={faPaintBrush} />,
      bg: 'success' as bsBgProps
    },
    {
      title: 'Desainer Grafis',
      description: 'Menciptakan desain visual yang kreatif dan profesional, mulai dari logo, poster, hingga identitas merek dan aset lainnya.',
      icon: <FontAwesomeIcon icon={faVectorSquare} />,
      bg: 'warning' as bsBgProps
    },
  ], []);

  return (
    <StyledSection>
      <Container>
        <Row className='gy-4'>
          {featuredData.map((item, index) => (
            <Col md="4" key={index}>
              <SlideUp delay={1.75 + (index * .125)}>
                <Featured
                  {...item}
                />
              </SlideUp>
            </Col>
          ))}
        </Row>
      </Container>
    </StyledSection>
  )
};
