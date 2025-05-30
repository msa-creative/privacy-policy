import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Shield, Lock, Eye, FileText, HelpCircle, ChevronDown, ChevronUp, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import PrivacyPolicy from './components/PrivacyPolicy';
import Contact from './components/Contact';
import TermsOfService from './components/TermsOfService';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-blue-500 text-xl font-bold">Aurora</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-black text-white relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-blue-950 opacity-90" />
      
      <div 
        className="absolute rounded-full w-64 h-64 bg-blue-500/10 blur-3xl"
        style={{ 
          left: `${mousePosition.x * 0.05}px`, 
          top: `${mousePosition.y * 0.05}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div 
        className="absolute rounded-full w-96 h-96 bg-purple-500/10 blur-3xl"
        style={{ 
          right: `${window.innerWidth - mousePosition.x * 1.1}px`, 
          bottom: `${window.innerHeight - mousePosition.y * 1.1}px`,
          transform: 'translate(50%, 50%)'
        }}
      />

      <nav className="relative z-10 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-blue-400">Aurora</Link>
            <div className="space-x-6">
              <Link to="/" className={`hover:text-blue-400 transition-colors ${location.pathname === '/' ? 'text-blue-400' : 'text-white'}`}>
                Privacy Policy
              </Link>
              <Link to="/terms" className={`hover:text-blue-400 transition-colors ${location.pathname === '/terms' ? 'text-blue-400' : 'text-white'}`}>
                Terms of Service
              </Link>
              <Link to="/contact" className={`hover:text-blue-400 transition-colors ${location.pathname === '/contact' ? 'text-blue-400' : 'text-white'}`}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <Routes>
          <Route path="/" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Toaster position="bottom-right" />
    </div>
  );
}

export default App