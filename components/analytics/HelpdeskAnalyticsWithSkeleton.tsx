'use client';

import { HelpdeskAnalytics } from './HelpdeskAnalytics';
import { withSkeletonLoading } from '@/components/skeleton';

export const HelpdeskAnalyticsWithSkeleton = withSkeletonLoading(HelpdeskAnalytics, {
  loadingKey: 'helpdesk-analytics',
  delay: 0,
  chartTypes: ['bar', 'line', 'pie', 'area'],
  statsCount: 4,
  chartCount: 4
});
