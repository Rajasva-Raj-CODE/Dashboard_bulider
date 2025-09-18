'use client';

import { PMSAnalytics } from './PMSAnalytics';
import { withSkeletonLoading } from '@/components/skeleton';

export const PMSAnalyticsWithSkeleton = withSkeletonLoading(PMSAnalytics, {
  loadingKey: 'pms-analytics',
  delay: 0,
  chartTypes: ['bar', 'line', 'pie', 'area'],
  statsCount: 4,
  chartCount: 4
});
