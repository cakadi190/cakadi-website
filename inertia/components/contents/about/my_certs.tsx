import { useState, useEffect } from 'react';
import { Placeholder, Row, Col } from 'react-bootstrap';

export default function MyCerts() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="my-certs">
      <h2>Sertifikat Saya</h2>
      <p>Di sini saya akan menampilkan sertifikat yang saya miliki.</p>
      <Row>
        {Array.from({ length: 6 }).map((_, index) => (
          <Col key={index} md={4} className="mb-4">
            {loading ? (
              <Placeholder as="div" animation="glow">
                <Placeholder style={{ height: '200px', width: '100%' }} />
              </Placeholder>
            ) : (
              <img
                src={`https://placehold.co/842x595?text=Sertifikat+${index + 1}`}
                alt={`Sertifikat ${index + 1}`}
                style={{ width: '100%', height: 'auto' }}
              />
            )}
          </Col>
        ))}
      </Row>
    </div>
  );
}

