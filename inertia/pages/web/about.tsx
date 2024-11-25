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
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    // Get headings and setup table of contents
    const headings = Array.from(colRef.current?.querySelectorAll('h2') ?? []);
    const headingParents = headings.map((h2) => h2.parentElement);
    const headingIds = headingParents.map((parent) => parent?.getAttribute('id'));
    const tableOfContents = headings.map((h2, index) => ({
      id: headingIds[index] || '',
      name: h2.textContent || '',
    }));

    setTableOfContentList(tableOfContents);

    // Setup Intersection Observer
    let visibleSections: string[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Update visibleSections array
          if (entry.isIntersecting) {
            visibleSections.push(entry.target.id);
          } else {
            visibleSections = visibleSections.filter(id => id !== entry.target.id);
          }

          // If no sections are visible, clear active state
          if (visibleSections.length === 0) {
            setActiveSection('');
          }
          // If sections are visible, set the first visible section as active
          else {
            setActiveSection(visibleSections[0]);
          }
        });
      },
      {
        rootMargin: '-20% 0px -75% 0px',
        threshold: 0
      }
    );

    // Observe all sections
    headingParents.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    scrollingToElement(`#${sectionId}`, 75);
  };

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
                  {offsetVertical > 80 && (
                    <Badge
                      bg="light"
                      className="text-dark"
                      role="button"
                      onClick={() => scrollingTo(0, 0)}
                      style={{ cursor: 'pointer' }}
                    >
                      Kembali
                    </Badge>
                  )}
                </Card.Header>
                <Card.Body className="px-0">
                  <ListGroup variant="flush">
                    {tableOfContentList.map((item, index) => (
                      <ListGroup.Item
                        key={index}
                        action
                        active={activeSection === item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="border-0"
                      >
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
}
