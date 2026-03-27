import { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import QualityPage from './pages/QualityPage';
import ContactPage from './pages/ContactPage';
import Loader from './components/common/Loader';

import ProductDetailPage from './pages/ProductDetailPage';

// Wrapper for page transitions
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial loading time to show the trees
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Setup intersection observer for other animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      clearTimeout(timer);
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading && <Loader />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen flex flex-col">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
              <Route path="/products" element={<PageWrapper><ProductsPage /></PageWrapper>} />
              <Route path="/products/:id" element={<PageWrapper><ProductDetailPage /></PageWrapper>} />
              <Route path="/quality" element={<PageWrapper><QualityPage /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
