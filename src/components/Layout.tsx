import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Sumario, type Heading } from './Sumario';

export const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
    const mainContent = document.querySelector('main');
    if (!mainContent) return;

    setTimeout(() => {
      const headingElements = Array.from(
        mainContent.querySelectorAll('h2, h3')
      ) as HTMLHeadingElement[];
      
      const newHeadings = headingElements.map((el) => {
        const id = el.innerText.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
        el.id = id;
        return {
          id,
          text: el.innerText,
          level: Number(el.tagName.substring(1)),
        };
      });
      setHeadings(newHeadings);
    }, 100);
  }, [location]);

  return (
    <div className="min-h-screen relative z-0">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex">
        <main className="pt-16 lg:pl-64 xl:pr-64 flex-grow">
          <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
            <Outlet />
          </div>
        </main>
        <Sumario headings={headings} />
      </div>

      <footer className="lg:pl-64 py-6 px-4 bg-surface border-t border-border text-center text-sm text-text-secondary">
        <div className="max-w-7xl mx-auto">
          <p> © {new Date().getFullYear()} SiGPEI-DOCS. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};