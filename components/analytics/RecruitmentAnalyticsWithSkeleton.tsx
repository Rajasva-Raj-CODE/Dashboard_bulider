'use client';

import { RecruitmentAnalytics } from './RecruitmentAnalytics';
import { withSkeletonLoading } from '@/components/skeleton';

export const RecruitmentAnalyticsWithSkeleton = withSkeletonLoading(RecruitmentAnalytics, {
  loadingKey: 'recruitment-analytics',
  delay: 0,
  chartTypes: ['line', 'bar', 'pie', 'scatter'],
  statsCount: 5,
  chartCount: 4
});
