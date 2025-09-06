import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
  title?: string;
}

export default function MermaidDiagram({ chart, title }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      // Clear previous content
      ref.current.innerHTML = '';
      
      // Initialize mermaid with theme
      mermaid.initialize({
        startOnLoad: false,
        theme: 'dark',
        themeVariables: {
          primaryColor: '#0ea5e9',
          primaryTextColor: '#f3f4f6',
          primaryBorderColor: '#1f2937',
          lineColor: '#6b7280',
          sectionBkgColor: '#0e1116',
          altSectionBkgColor: '#1f2937',
          gridColor: '#374151',
          secondaryColor: '#38bdf8',
          tertiaryColor: '#0b0c10',
          background: '#0b0c10',
          mainBkg: '#0e1116',
          secondBkg: '#1f2937',
          tertiaryBkg: '#0b0c10'
        }
      });

      // Generate unique ID for this diagram
      const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
      
      // Render the diagram
      mermaid.render(id, chart).then(({ svg }) => {
        if (ref.current) {
          ref.current.innerHTML = svg;
        }
      }).catch((error) => {
        console.error('Mermaid rendering error:', error);
        if (ref.current) {
          ref.current.innerHTML = '<p class="text-red-500">Error rendering diagram</p>';
        }
      });
    }
  }, [chart]);

  return (
    <div className="my-6">
      {title && (
        <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      )}
      <div 
        ref={ref} 
        className="flex justify-center rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
      />
    </div>
  );
}
