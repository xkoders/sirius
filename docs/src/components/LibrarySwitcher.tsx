import React from 'react';
import { useLibrary } from '../contexts/LibraryContext';
import clsx from 'clsx';

interface LibrarySwitcherProps {
  className?: string;
}

export const LibrarySwitcher: React.FC<LibrarySwitcherProps> = ({ className }) => {
  const { library, setLibrary } = useLibrary();

  return (
    <div className={clsx('flex items-center space-x-2', className)}>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Library:
      </span>
      <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
        <button
          onClick={() => setLibrary('react')}
          className={clsx(
            'px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200',
            library === 'react'
              ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
          )}
        >
          <div className="flex items-center space-x-1.5">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              <path d="M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"/>
            </svg>
            <span>React</span>
          </div>
        </button>
        <button
          onClick={() => setLibrary('vue')}
          className={clsx(
            'px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200',
            library === 'vue'
              ? 'bg-white dark:bg-gray-700 text-green-600 dark:text-green-400 shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
          )}
        >
          <div className="flex items-center space-x-1.5">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/>
            </svg>
            <span>Vue</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default LibrarySwitcher;
