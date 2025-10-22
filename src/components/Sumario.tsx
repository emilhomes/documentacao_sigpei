import React, { useState, useEffect } from 'react';

export interface Heading {
  id: string;
  text: string;
  level: number;
}

interface SumarioProps {
  headings: Heading[];
}

export const Sumario: React.FC<SumarioProps> = ({ headings }) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px' }
    );

    const elements = headings.map(h => document.getElementById(h.id)).filter(Boolean);
    elements.forEach(el => observer.observe(el!));

    return () => elements.forEach(el => observer.unobserve(el!));
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="hidden xl:block fixed top-16 right-0 w-64 text-sm p-8">
      <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Nesta página</h3>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`block transition-colors ${
                heading.level === 3 ? 'pl-4' : ''
              } ${
                activeId === heading.id
                  ? 'text-primary-light dark:text-primary-dark font-semibold'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};