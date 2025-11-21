import React, { Component, ErrorInfo, ReactNode } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tech from './pages/Services';
import Lifestyle from './pages/Portfolio';
import WriterPage from './pages/AITools';
import About from './pages/About';
import Contact from './pages/Contact';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

// Simple Error Boundary to catch rendering errors
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
          <div className="bg-red-900/20 border border-red-800 p-8 rounded-xl max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4 text-red-400">Something went wrong.</h2>
            <p className="text-slate-300 mb-4">The application encountered an unexpected error.</p>
            <div className="bg-slate-950 p-4 rounded border border-slate-800 overflow-auto text-xs font-mono text-red-300">
                {this.state.error?.toString()}
            </div>
            <button 
                onClick={() => window.location.reload()} 
                className="mt-6 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded font-bold transition"
            >
                Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen flex flex-col bg-slate-950 font-sans text-slate-50">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tech" element={<Tech />} />
              <Route path="/lifestyle" element={<Lifestyle />} />
              <Route path="/writer" element={<WriterPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;