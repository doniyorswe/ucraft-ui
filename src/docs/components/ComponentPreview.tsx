import React, { useState } from 'react';
import { CodeBlock } from './CodeBlock';
import { Code, Play } from 'lucide-react';

interface ComponentPreviewProps {
  children: React.ReactNode;
  code: string;
  title?: string;
}

export const ComponentPreview = ({ children, code, title }: ComponentPreviewProps) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="border rounded-xl overflow-hidden my-8 bg-white shadow-sm border-gray-200">
      {title && (
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-semibold text-gray-800">{title}</h3>
          <button
            onClick={() => setShowCode(!showCode)}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 font-medium transition-colors"
          >
            {showCode ? <Play size={16} /> : <Code size={16} />}
            {showCode ? 'View Demo' : 'View Code'}
          </button>
        </div>
      )}
      <div className="p-8 bg-grid-slate-100 flex items-center justify-center min-h-[150px]">
        {!showCode ? children : <div className="w-full"><CodeBlock code={code} /></div>}
      </div>
    </div>
  );
};
