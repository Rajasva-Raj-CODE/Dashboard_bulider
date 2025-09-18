'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { StatsCardSkeletonProps } from '@/types/skeleton';
import { cn } from '@/lib/utils';

export function StatsCardSkeleton({ 
  className, 
  showIcon = true, 
  showValue = true, 
  showTitle = true,
  ...props 
}: StatsCardSkeletonProps) {
  return (
    <div className={cn('bg-white rounded-lg border border-gray-200 p-6', className)} {...props}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          {showTitle && (
            <Skeleton className="h-4 w-24 mb-2" />
          )}
          {showValue && (
            <Skeleton className="h-8 w-16 mb-2" />
          )}
          <Skeleton className="h-3 w-20" />
        </div>
        {showIcon && (
          <Skeleton className="h-12 w-12 rounded-full" />
        )}
      </div>
    </div>
  );
}
