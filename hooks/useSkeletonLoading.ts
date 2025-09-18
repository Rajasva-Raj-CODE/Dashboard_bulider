'use client';

import { useState, useEffect, useCallback } from 'react';
import { useLoading } from '@/contexts/LoadingContext';
import { SkeletonLoadingState } from '@/types/skeleton';

interface UseSkeletonLoadingOptions {
  key: string;
  initialLoading?: boolean;
  delay?: number;
  onError?: (error: string) => void;
}

export function useSkeletonLoading({
  key,
  initialLoading = false,
  delay = 0,
  onError
}: UseSkeletonLoadingOptions) {
  const { setLoading, isLoading, getError, clearError } = useLoading();
  const [localLoading, setLocalLoading] = useState(initialLoading);

  const startLoading = useCallback(() => {
    if (delay > 0) {
      setTimeout(() => {
        setLoading(key, true);
        setLocalLoading(true);
      }, delay);
    } else {
      setLoading(key, true);
      setLocalLoading(true);
    }
  }, [key, delay, setLoading]);

  const stopLoading = useCallback((error?: string) => {
    setLoading(key, false, error);
    setLocalLoading(false);
    if (error && onError) {
      onError(error);
    }
  }, [key, setLoading, onError]);

  const setError = useCallback((error: string) => {
    setLoading(key, false, error);
    setLocalLoading(false);
    if (onError) {
      onError(error);
    }
  }, [key, setLoading, onError]);

  const clearErrorState = useCallback(() => {
    clearError(key);
  }, [key, clearError]);

  const loading = isLoading(key) || localLoading;
  const error = getError(key);

  return {
    loading,
    error,
    startLoading,
    stopLoading,
    setError,
    clearError: clearErrorState
  };
}

// Hook for simulating data loading with skeleton
export function useDataLoading<T>(
  dataFetcher: () => Promise<T>,
  options: UseSkeletonLoadingOptions
) {
  const { loading, error, startLoading, stopLoading, setError } = useSkeletonLoading(options);
  const [data, setData] = useState<T | null>(null);

  const loadData = useCallback(async () => {
    try {
      startLoading();
      const result = await dataFetcher();
      setData(result);
      stopLoading();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
    }
  }, [dataFetcher, startLoading, stopLoading, setError]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return {
    data,
    loading,
    error,
    refetch: loadData
  };
}
