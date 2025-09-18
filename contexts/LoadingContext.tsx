'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { SkeletonLoadingState } from '@/types/skeleton';

interface LoadingContextType {
  loadingStates: Record<string, SkeletonLoadingState>;
  setLoading: (key: string, isLoading: boolean, error?: string | null) => void;
  isLoading: (key: string) => boolean;
  getError: (key: string) => string | null | undefined;
  clearError: (key: string) => void;
  clearAllLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

interface LoadingProviderProps {
  children: ReactNode;
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [loadingStates, setLoadingStates] = useState<Record<string, SkeletonLoadingState>>({});

  const setLoading = useCallback((key: string, isLoading: boolean, error?: string | null) => {
    setLoadingStates(prev => ({
      ...prev,
      [key]: {
        isLoading,
        error: error || null
      }
    }));
  }, []);

  const isLoading = useCallback((key: string) => {
    return loadingStates[key]?.isLoading || false;
  }, [loadingStates]);

  const getError = useCallback((key: string) => {
    return loadingStates[key]?.error;
  }, [loadingStates]);

  const clearError = useCallback((key: string) => {
    setLoadingStates(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        error: null
      }
    }));
  }, []);

  const clearAllLoading = useCallback(() => {
    setLoadingStates({});
  }, []);

  const value: LoadingContextType = {
    loadingStates,
    setLoading,
    isLoading,
    getError,
    clearError,
    clearAllLoading
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}
