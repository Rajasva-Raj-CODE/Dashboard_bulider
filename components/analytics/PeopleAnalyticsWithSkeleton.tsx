'use client';

import { PeopleAnalytics } from './PeopleAnalytics';
import { withSkeletonLoading } from '@/components/skeleton';

export const PeopleAnalyticsWithSkeleton = withSkeletonLoading(PeopleAnalytics, {
  loadingKey: 'people-analytics',
  delay: 0,
  chartTypes: ['bar', 'line', 'pie', 'area'],
  statsCount: 4,
  chartCount: 4
});
