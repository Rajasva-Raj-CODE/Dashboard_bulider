'use client';

import { TimesheetAnalytics } from './TimesheetAnalytics';
import { withSkeletonLoading } from '@/components/skeleton';

export const TimesheetAnalyticsWithSkeleton = withSkeletonLoading(TimesheetAnalytics, {
  loadingKey: 'timesheet-analytics',
  delay: 0,
  chartTypes: ['bar', 'line', 'pie', 'area'],
  statsCount: 4,
  chartCount: 4
});
