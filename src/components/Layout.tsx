import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackgroundParticles from './BackgroundParticles';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <BackgroundParticles />
      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;