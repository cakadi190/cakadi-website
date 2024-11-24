import { Link, usePage } from "@inertiajs/react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useRef } from "react";
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoColor from '~/images/brands/svg/logo-alt-color.svg';
import usePageScroll from "~/hooks/usePageScroll";
import styled from '@emotion/styled';
import { MainPageProps } from "~/types";

const NavbarStyled = styled(Navbar) <{ yposition: number }>`
  transition: all 0.2s;
  backdrop-filter: blur(${({ yposition }) => (yposition > 25 ? '1rem' : '0')});
  background: rgba(var(--bs-white-rgb), ${({ yposition }) => (yposition > 25 ? 0.8 : 0)});
  --bs-border-color: ${({ yposition }) => (yposition > 25 ? 'var(--bs-gray-300)' : 'transparent')};
`;

const NavLinkHovered = styled(Nav.Link)`
  --bs-nav-link-padding-y: 0;
  --bs-nav-link-padding-x: 0;
  transition: all .2s;
  aspect-ratio: 1/1;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: .25rem;

  &:hover {
    background: var(--bs-gray-200);
  }
`;

const socialMediaList = [
  { icon: faLinkedin, href: 'https://linkedin.com/in/cakadi190' },
  { icon: faFacebook, href: 'https://fb.me/cakadi190' },
  { icon: faInstagram, href: 'https://instagram.com/therealcakadi' },
  { icon: faXTwitter, href: 'https://x.com/cakadi190' },
];

const menuItem = [
  { label: 'Tentang Saya', href: '/about-me' },
  { label: 'Proyek Saya', href: '/projects' },
  { label: 'Pendidikan Saya', href: '/educations' },
  { label: 'Karir Saya', href: '/careers' },
  { label: 'Kontak Saya', href: '/contact-me' },
];

const NavigationBar = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [_, yposition] = usePageScroll();
  const { router: { url } } = usePage<MainPageProps>().props;

  return (
    <NavbarStyled
      fixed="top"
      className="border-bottom"
      expand="lg"
      ref={elementRef}
      {...{ yposition }}
    >
      <Container>
        {/* Logo di kiri */}
        <Link className="navbar-brand" href="/">
          <img
            src={logoColor}
            alt="Logo"
            style={{ height: "32px" }}
          />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Menu kiri */}
          <Nav className="me-auto gap-2">
            {menuItem.map((item, index) => (
              <Nav.Link as={Link} active={url === item.href} key={index} href={item.href}>
                {item.label}
              </Nav.Link>
            ))}
          </Nav>

          {/* Menu kanan */}
          <Nav className="flex-row flex-lg-row">
            {socialMediaList.map((socmed, index) => (
              <Nav.Item key={index}>
                <NavLinkHovered
                  href={socmed.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={socmed.icon} />
                </NavLinkHovered>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavbarStyled>
  );
};

export default NavigationBar;
