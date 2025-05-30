import { RootContext } from '#/app/contexts/root';
import { useContext } from 'react';
import type { RootContextType } from '../types';

/**
 * Custom hook to access the Root context
 * @returns {RootContextType} The root context values and setters
 * @throws {Error} If used outside of a RootProvider
 */
export const useRootContext = (): RootContextType => {
  const context = useContext(RootContext);
  if (!context) {
    throw new Error('useRootContext must be used within a RootProvider');
  }
  return context;
};
