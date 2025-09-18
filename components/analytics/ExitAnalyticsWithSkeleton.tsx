'use client';

import { ExitAnalytics } from './ExitAnalytics';
import { withSkeletonLoading } from '@/components/skeleton';

export const ExitAnalyticsWithSkeleton = withSkeletonLoading(ExitAnalytics, {
  loadingKey: 'exit-analytics',
  delay: 0,
  chartTypes: ['line', 'bar', 'pie', 'scatter'],
  statsCount: 5,
  chartCount: 4
});
