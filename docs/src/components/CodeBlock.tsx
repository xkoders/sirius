import React, { useState } from 'react';
import { useLibrary } from '../contexts/LibraryContext';
import clsx from 'clsx';

interface CodeBlockProps {
  reactCode?: string;
  vueCode?: string;
  title?: string;
  description?: string;
  showPreview?: boolean;
  previewComponent?: React.ReactNode;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  reactCode,
  vueCode,
  title,
  description,
  showPreview = false,
  previewComponent,
  className
}) => {
  const { library } = useLibrary();
  const [activeTab, setActiveTab] = useState<'code' | 'preview'>('code');

  const currentCode = library === 'react' ? reactCode : vueCode;

  return (
    <div className={clsx('border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden', className)}>
      {title && (
        <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          {description && (
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
      )}

      {showPreview && previewComponent && (
        <div className="border-b border-gray-200 dark:border-gray-700">
          <div className="flex">
            <button
              onClick={() => setActiveTab('code')}
              className={clsx(
                'px-4 py-2 text-sm font-medium border-b-2 transition-colors',
                activeTab === 'code'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              )}
            >
              Code
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={clsx(
                'px-4 py-2 text-sm font-medium border-b-2 transition-colors',
                activeTab === 'preview'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              )}
            >
              Preview
            </button>
          </div>
        </div>
      )}

      {activeTab === 'code' && currentCode && (
        <div className="relative">
          <div className="absolute top-2 right-2 z-10">
            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
              {library === 'react' ? 'React' : 'Vue'}
            </span>
          </div>
          <pre className="p-4 overflow-x-auto bg-gray-50 dark:bg-gray-900">
            <code className="text-sm text-gray-800 dark:text-gray-200">
              {currentCode}
            </code>
          </pre>
        </div>
      )}

      {activeTab === 'preview' && previewComponent && (
        <div className="p-4 bg-white dark:bg-gray-800">
          {previewComponent}
        </div>
      )}
    </div>
  );
};

export default CodeBlock;
