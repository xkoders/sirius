import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type LibraryType = 'react' | 'vue';

interface LibraryContextType {
  library: LibraryType;
  setLibrary: (library: LibraryType) => void;
  toggleLibrary: () => void;
}

const LibraryContext = createContext<LibraryContextType | undefined>(undefined);

const STORAGE_KEY = 'sirius-ui-library-preference';

interface LibraryProviderProps {
  children: ReactNode;
}

export const LibraryProvider: React.FC<LibraryProviderProps> = ({ children }) => {
  const [library, setLibraryState] = useState<LibraryType>('react');

  // Load from localStorage on mount
  useEffect(() => {
    const savedLibrary = localStorage.getItem(STORAGE_KEY) as LibraryType;
    if (savedLibrary && (savedLibrary === 'react' || savedLibrary === 'vue')) {
      setLibraryState(savedLibrary);
    }
  }, []);

  const setLibrary = (newLibrary: LibraryType) => {
    setLibraryState(newLibrary);
    localStorage.setItem(STORAGE_KEY, newLibrary);
  };

  const toggleLibrary = () => {
    const newLibrary = library === 'react' ? 'vue' : 'react';
    setLibrary(newLibrary);
  };

  return (
    <LibraryContext.Provider value={{ library, setLibrary, toggleLibrary }}>
      {children}
    </LibraryContext.Provider>
  );
};

export const useLibrary = (): LibraryContextType => {
  const context = useContext(LibraryContext);
  if (context === undefined) {
    throw new Error('useLibrary must be used within a LibraryProvider');
  }
  return context;
};
