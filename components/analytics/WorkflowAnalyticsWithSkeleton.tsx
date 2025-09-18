'use client';

import { WorkflowAnalytics } from './WorkflowAnalytics';
import { withSkeletonLoading } from '@/components/skeleton';

export const WorkflowAnalyticsWithSkeleton = withSkeletonLoading(WorkflowAnalytics, {
  loadingKey: 'workflow-analytics',
  delay: 0,
  chartTypes: ['bar', 'line', 'pie', 'area'],
  statsCount: 4,
  chartCount: 4
});
