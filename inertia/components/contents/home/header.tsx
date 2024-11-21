
import styled from '@emotion/styled';
import imageFoto from '~/images/fotoku-xxxhdpi.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { BootstrapOriginal, FigmaOriginal, IllustratorPlain, LaravelOriginal, MysqlOriginal, NextjsOriginal, ReactOriginal, TypescriptOriginal, VscodeOriginal } from 'devicons-react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { usePage } from '@inertiajs/react';
import { SeoType } from '~/types/seo-types';
import { SlideLeft, SlideRight, SlideUp } from '~/components/framer/DivElement';
import { useMemo } from 'react';
import { useSweetalert } from '~/hooks/sweetalert';

const SpanUnderlined = styled.span`
  text-decoration: underline;
  color: var(--bs-primary);
`;

const GrayScaleIcon = styled.div`
  filter: grayscale(100%);
  transition: all .2s;
  transform: scale(1);

  &:hover {
    transform: scale(1.125);
    filter: grayscale(0);
  }
`;

const HeaderLeft = () => {
  const { description } = usePage<SeoType>().props;
  const { swalWarning } = useSweetalert();

  const handleCVDownload = () => {
    swalWarning({
      coloredConfirmButton: true,
      showCancelButton: true,
      cancelButtonText: 'Batal',
      confirmButtonText: 'Lanjut',
      reverseButtons: true,
      title: 'Peringatan!',
      text: 'Berkas CV ini hanya bisa diakses oleh surel yang sudah terdaftar atau memiliki hak akses dari akun Google Drive saya pribadi. Jadi apabila anda belum atau tidak terdaftar saya mohon maaf, dikarenakan untuk meminimalisir tindak pencurian, penyebaran dan penyalahgunaan informasi dan data yang tidak diizinkan.'
    })
      .then(
        ({ isConfirmed }) =>
          isConfirmed ? window.location.href = 'https://s.id/cvnyaCakAdi' : null
      )
  }

  const favouriteTechStack = useMemo(
    () => [ReactOriginal, BootstrapOriginal, LaravelOriginal, NextjsOriginal, MysqlOriginal, TypescriptOriginal, 'line', FigmaOriginal, VscodeOriginal, IllustratorPlain],
    []
  );

  return (
    <div className='d-flex flex-column h-100'>
      <div className="mt-auto pt-4">
        <SlideRight>
          <h3 className="fw-normal">Halo Rek! 👋 Namaku</h3>
        </SlideRight>
        <SlideRight delay={0.25}>
          <h1 className="display-4 fw-bold">
            <SpanUnderlined>Cak</SpanUnderlined>{" "}
            <SpanUnderlined>A</SpanUnderlined>mir{" "}
            Zuh
            <SpanUnderlined>di</SpanUnderlined>{" "}
            Wibowo.
          </h1>
        </SlideRight>
        <SlideRight delay={0.325}>
          <p className='lead mb-0 fw-normal' dangerouslySetInnerHTML={{ __html: description }} />
        </SlideRight>
      </div>

      <SlideRight delay={0.425} className="d-flex d-none d-md-none d-lg-flex align-items-center pt-4 gap-2">
        <Button onClick={handleCVDownload} className="d-flex align-items-center gap-2" size='lg'>
          <FontAwesomeIcon icon={faDownload} />
          <span>Unduh CV</span>
        </Button>
        <Button className="d-flex align-items-center gap-2" size='lg' variant='outline-primary'>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Kontak Saya</span>
        </Button>
      </SlideRight>

      <SlideRight delay={0.425} className="d-flex d-lg-none align-items-center pt-4 gap-2">
        <Button onClick={handleCVDownload} className="d-flex align-items-center gap-2">
          <FontAwesomeIcon icon={faDownload} />
          <span>Unduh CV</span>
        </Button>
        <Button className="d-flex align-items-center gap-2" variant='outline-primary'>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Kontak Saya</span>
        </Button>
      </SlideRight>

      <SlideUp delay={0.75} className="pt-4 mt-auto">
        <p className="mb-2"><em>Techstack</em>/perkakas yang saya sukai:</p>
        <div className="d-flex align-items-center flex-wrap" style={{ gap: '.875rem' }}>
          {favouriteTechStack.map((Icon, index) => Icon !== 'line' ? (
            <SlideUp key={index} delay={1 + (index * 0.05)}>
              <GrayScaleIcon>
                <Icon size={28} />
              </GrayScaleIcon>
            </SlideUp>
          ) : (
            <SlideUp key={index} delay={1 + (index * 0.025)}>
              <span className="vr h-100" />
            </SlideUp>
          ))}
        </div>
      </SlideUp>
    </div>
  )
};

function HeaderImage() {
  return (
    <SlideLeft delay={1}>
      <img src={imageFoto} style={{ width: '100%' }} />
    </SlideLeft>
  );
};

export default function HeaderSection() {
  return (
    <header id="masthead">
      <Container className='py-5'>
        <Row className='py-5'>
          <Col md={7}>
            <HeaderLeft />
          </Col>
          <Col md={5} className="d-none d-md-none d-lg-inline">
            <HeaderImage />
          </Col>
        </Row>
      </Container>
    </header>
  );
};
