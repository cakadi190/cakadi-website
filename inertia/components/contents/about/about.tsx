import styled from '@emotion/styled';
import Popover from '~/components/ui-extended/Popover';

const SectionStyled = styled.section`
`;

export default function AboutSection() {
  return (
    <SectionStyled id="about-section">
      <p>Halo rek! Namaku Adi, aku adalah seorang <em>fullstack web developer</em> yang suka sekali dengan dunia teknologi dan juga geografi. Saya sangat senang sekali untuk mencoba hal baru dan semua tantangan di dunia teknologi terutama untuk saat ini di era penuh dengan kecerdasan buatan yang penuh dengan otomasi untuk semua kalangan.</p>
      <p>Untuk saat ini saya baru menguasai 2 bahasa pemrograman, yakni <Popover placement='top' title="PHP" content="Bahasa pemrograman server-side yang paling populer di dunia web, digunakan untuk membuat website dinamis. Sumber: <a href='https://www.php.net/' target='_blank' rel='noreferrer'>php.net</a>" as="span"><strong>PHP</strong></Popover> dan <Popover placement='top' title="Javascript" content="Bahasa pemrograman yang digunakan untuk membuat website menjadi lebih interaktif. Sumber: <a href='https://www.javascript.com/' target='_blank' rel='noreferrer'>javascript.com</a>" as="span"><strong>Javascript</strong></Popover> dan 2 diantaranya yakni <Popover placement='top' title="Go" content="Bahasa pemrograman yang dikembangkan oleh Google, digunakan untuk membuat aplikasi server-side yang lebih cepat dan efisien. Sumber: <a href='https://golang.org/' target='_blank' rel='noreferrer'>golang.org</a>" as="span"><strong>Go</strong></Popover> dan <Popover placement='top' title="Rust" content="Bahasa pemrograman yang dikembangkan oleh Mozilla, digunakan untuk membuat aplikasi yang lebih cepat dan aman. Sumber: <a href='https://www.rust-lang.org/' target='_blank' rel='noreferrer'>rust-lang.org</a>" as="span"><strong>Rust</strong></Popover> sedang saya pelajari untuk jenjang karir kedepannya yang lebih cemerlang. Dan untuk saat ini saya mulai berfokus kepada FrontEnd Developer karena saya lebih suka ke hal yang berbau estetika dan tampilan.</p>
    </SectionStyled>
  );
};
