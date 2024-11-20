// resources/components/ErrorBoundary.tsx
import { Component, ErrorInfo, ReactNode } from 'react';
import { router } from '@inertiajs/react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error);
    console.error('Component stack:', errorInfo.componentStack);
  }

  private handleReload = () => {
    // Gunakan router Inertia untuk reload halaman
    router.reload();
  };

  private handleBackHome = () => {
    // Kembali ke halaman utama
    router.visit('/');
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
          <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-red-600 mb-2">
                Oops! Terjadi Kesalahan
              </h1>

              <div className="mt-4 text-gray-600">
                <p className="mb-4">
                  {this.state.error?.message || 'Terjadi kesalahan yang tidak diketahui'}
                </p>
                {process.env.NODE_ENV === 'development' && (
                  <pre className="mt-4 p-4 bg-gray-100 rounded text-left text-sm overflow-x-auto">
                    {this.state.error?.stack}
                  </pre>
                )}
              </div>

              <div className="mt-6 space-x-4">
                <button
                  onClick={this.handleReload}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  Muat Ulang Halaman
                </button>

                <button
                  onClick={this.handleBackHome}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
                >
                  Kembali ke Beranda
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
