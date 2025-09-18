'use client';

import React, { ComponentType, useEffect } from 'react';
import { useSkeletonLoading } from '@/hooks/useSkeletonLoading';
import { AnalyticsSkeleton } from './AnalyticsSkeleton';

interface WithSkeletonLoadingOptions {
  loadingKey: string;
  delay?: number;
  chartTypes?: Array<'line' | 'bar' | 'pie' | 'area' | 'scatter' | 'bubble' | 'heatmap' | 'treemap' | 'radar' | 'mixed'>;
  statsCount?: number;
  chartCount?: number;
}

export function withSkeletonLoading<P extends object>(
  WrappedComponent: ComponentType<P>,
  options: WithSkeletonLoadingOptions
) {
  const { loadingKey, delay = 0, chartTypes, statsCount, chartCount } = options;

  return function SkeletonWrappedComponent(props: P) {
    const { loading, startLoading, stopLoading } = useSkeletonLoading({
      key: loadingKey,
      initialLoading: true,
      delay
    });

    useEffect(() => {
      // Simulate data loading
      const timer = setTimeout(() => {
        stopLoading();
      }, 800 + delay); // Reduced from 1500ms to 800ms for faster loading

      return () => clearTimeout(timer);
    }, [stopLoading, delay]);

    if (loading) {
      return (
        <AnalyticsSkeleton 
          chartTypes={chartTypes}
          statsCount={statsCount}
          chartCount={chartCount}
        />
      );
    }

    return <WrappedComponent {...props} />;
  };
}
