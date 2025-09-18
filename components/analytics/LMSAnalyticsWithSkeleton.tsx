'use client';

import { LMSAnalytics } from './LMSAnalytics';
import { withSkeletonLoading } from '@/components/skeleton';

export const LMSAnalyticsWithSkeleton = withSkeletonLoading(LMSAnalytics, {
  loadingKey: 'lms-analytics',
  delay: 0,
  chartTypes: ['line', 'bar', 'pie', 'scatter'],
  statsCount: 5,
  chartCount: 4
});
