'use client';

import { AttendanceAnalytics } from './AttendanceAnalytics';
import { withSkeletonLoading } from '@/components/skeleton';

export const AttendanceAnalyticsWithSkeleton = withSkeletonLoading(AttendanceAnalytics, {
  loadingKey: 'attendance-analytics',
  delay: 0,
  chartTypes: ['bar', 'line', 'pie', 'area'],
  statsCount: 5,
  chartCount: 4
});
