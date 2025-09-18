'use client';

import { WellbeingAnalytics } from './WellbeingAnalytics';
import { withSkeletonLoading } from '@/components/skeleton';

export const WellbeingAnalyticsWithSkeleton = withSkeletonLoading(WellbeingAnalytics, {
  loadingKey: 'wellbeing-analytics',
  delay: 0,
  chartTypes: ['line', 'bar', 'pie', 'scatter'],
  statsCount: 5,
  chartCount: 4
});
