import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Container } from 'react-bootstrap';

const AppLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [isMobile]);

  return (
    <div>
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <main className={`app_wrapper ${isSidebarOpen || !isMobile ? 'sidebar-open' : ''}`}>
        <Header toggleSidebar={handleToggleSidebar} isSidebarOpen={isSidebarOpen} isMobile={isMobile} />
        <Container fluid className="content_wrapper px-5">
          {children}
        </Container>
      </main>
    </div>
  );
};

export default AppLayout;
