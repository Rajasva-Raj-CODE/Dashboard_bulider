'use client';

import { ContentAnalytics } from './ContentAnalytics';
import { withSkeletonLoading } from '@/components/skeleton';

export const ContentAnalyticsWithSkeleton = withSkeletonLoading(ContentAnalytics, {
  loadingKey: 'content-analytics',
  delay: 0,
  chartTypes: ['line', 'bar', 'pie', 'scatter'],
  statsCount: 5,
  chartCount: 4
});
