'use client';

import { HRAnalytics } from './HRAnalytics';
import { withSkeletonLoading } from '@/components/skeleton';

export const HRAnalyticsWithSkeleton = withSkeletonLoading(HRAnalytics, {
  loadingKey: 'hr-analytics',
  delay: 0,
  chartTypes: ['line', 'bar', 'pie', 'scatter'],
  statsCount: 6,
  chartCount: 5
});
