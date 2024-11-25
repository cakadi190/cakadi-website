import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head } from "@inertiajs/react";
import { Badge, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { SeoType } from "~/types/seo-types";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "~/hooks/useScroll";
import AboutSection from "~/components/contents/about/about";
import Page from "~/layouts/page";
import HistoryCakAdi from "~/components/contents/about/history_cak_adi";
import MyJourney from "~/components/contents/about/my_journey";
import MyCerts from "~/components/contents/about/my_certs";
import usePageScroll from "~/hooks/usePageScroll";

export default function About({ title, description }: SeoType) {
  const colRef = useRef<HTMLElement>(null);
  const [_, offsetVertical] = usePageScroll();
  const { scrollingToElement, scrollingTo } = useScroll();
  const [tableOfContentList, setTableOfContentList] = useState<any[]>([]);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const headings = Array.from(colRef.current?.querySelectorAll('h2') ?? []);
    const headingParents = headings.map((h2) => h2.parentElement);
    const headingIds = headingParents.map((parent) => parent?.getAttribute('id'));
    const tableOfContents = headings.map((h2, index) => ({
      id: `#${headingIds[index]}`,
      name: h2.textContent,
    }));

    setTableOfContentList(tableOfContents);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const id = entries.find((entry) => entry.isIntersecting)?.target?.getAttribute('id');

        if (id) {
          setActive(id);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    tableOfContentList.forEach((item) => observer.observe(document.querySelector(item.id)));

    return () => observer.disconnect();
  }, [tableOfContentList]);

  return (
    <Page header={title.split(' • ')[0]} desc={description} icon={<FontAwesomeIcon icon={faInfoCircle} />}>
      <Head title={title} />

      <Container>
        <Row className="g-4 flex-column-reverse flex-md-row">
          <Col md={9} ref={colRef}>
            <AboutSection />
            <HistoryCakAdi />
            <MyJourney />
            <MyCerts />
          </Col>
          <Col md={3}>
            <div style={{ position: 'sticky', top: '5rem' }}>
              <Card>
                <Card.Header className="d-flex gap-2 justify-content-between align-items-center bg-white">
                  <h5 className="mb-0 fw-bold">Daftar Isi</h5>
                  {offsetVertical > 80 && <Badge bg="light" className="text-dark" as="a" href="#top" onClick={() => scrollingTo(0, 0)}>Kembali</Badge>}
                </Card.Header>
                <Card.Body className="px-0">
                <ListGroup variant="flush">
                  {tableOfContentList.map((item, index) => (
                    <ListGroup.Item className="border-0" key={index} action active={active === item.id} onClick={() => scrollingToElement(item.id, 75)}>
                      {item.name}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </Page>
  );
};

