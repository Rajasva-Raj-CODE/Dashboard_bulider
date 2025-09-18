'use client';

import { IntranetAnalytics } from './IntranetAnalytics';
import { withSkeletonLoading } from '@/components/skeleton';

// Wrap the IntranetAnalytics component with skeleton loading
export const IntranetAnalyticsWithSkeleton = withSkeletonLoading(IntranetAnalytics, {
  loadingKey: 'intranet-analytics',
  delay: 0,
  chartTypes: ['line', 'bar', 'bar', 'area', 'scatter', 'bubble', 'heatmap', 'treemap', 'radar', 'mixed'],
  statsCount: 6,
  chartCount: 9
});
