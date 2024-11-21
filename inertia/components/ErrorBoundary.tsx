import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Tab, Container, Card, Badge, Nav, Table } from 'react-bootstrap';
import { Link, router } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  stack: string | null | undefined;
  environment: any;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    stack: null,
    environment: {},
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      stack: null,
      environment: {},
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      stack: errorInfo.componentStack,
      environment: {
        nodeVersion: import.meta.env.VITE_NODE_VERSION,
        devMode: import.meta.env.MODE || 'development',
      }
    })
    console.error('Error caught by boundary:', error);
    console.error('Component stack:', errorInfo.componentStack);
  }

  private handleBackHome = () => {
    // Kembali ke halaman utama
    router.visit('/');
  };

  public render() {
    if (this.state.hasError) {
      const { children } = this.props;

      // Type guard to ensure children is a ReactElement
      const initialPageProps = React.isValidElement(children) ? children.props.initialPage.props.serverInfo : null;

      return (
        <Container className='py-4'>
          <Card className="mb-3 position-relative overflow-hidden">
            <Card.Body>
              <div style={{
                position: 'absolute', top: '-1rem', right: '-.5rem', opacity: 0.125
              }}>
                <FontAwesomeIcon style={{ fontSize: '5rem', transform: 'rotate(-30deg)' }} icon={faExclamationTriangle} />
              </div>
              <Badge bg={"danger"}>500</Badge>
              <h1>Ada Sedikit Kesalahan!</h1>
              <p className='mb-0'>{this.state.error?.message}</p>
            </Card.Body>
            <Link href="/" onClick={this.handleBackHome} className='card-footer'>Kembali Ke Beranda</Link>
          </Card>

          <Tab.Container id="stack-tracer" defaultActiveKey="stack">
            <Card className='mb-4'>
              <Card.Header>
                <Nav variant="tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="stack">Jejak Tumpukan</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="env">Lingkungan Pengembangan</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <Tab.Content>
                  <Tab.Pane eventKey="stack">
                    <pre className='m-0 p-0'>
                      <code className='m-0 p-0'>{this.state.stack}</code>
                    </pre>
                  </Tab.Pane>
                  <Tab.Pane eventKey="env">
                    <Table responsive className='mb-0' bordered>
                      <tbody>
                        <tr>
                          <th>Versi NodeJS</th>
                          <td>{initialPageProps?.nodejsVersion}</td>
                        </tr>
                        <tr>
                          <th>Sistem Operasi</th>
                          <td>{initialPageProps?.platform}</td>
                        </tr>
                        <tr>
                          <th>Arsitektur Prosesor</th>
                          <td>{initialPageProps?.arch}</td>
                        </tr>
                        <tr>
                          <th>Mode Lingkungan</th>
                          <td>{initialPageProps?.developmentMode === 'development' ? 'Pengembangan' : 'Produksi'}</td>
                        </tr>
                        <tr>
                          <th>Mode Pengembang?</th>
                          <td>{initialPageProps?.developmentMode === 'development' ? 'Ya' : 'Tidak'}</td>
                        </tr>
                        <tr>
                          <th>Folder</th>
                          <td>{initialPageProps?.devPath}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Tab.Pane>
                </Tab.Content>
              </Card.Body>
            </Card>
          </Tab.Container>

          <a href="https://react.dev" className="d-flex mx-auto gap-2 justify-content-center">
            <img src="https://react.dev/_next/image?url=%2Fimages%2Fuwu.png&w=384&q=75" height={75} alt="ReactJS Logo" />
          </a>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
