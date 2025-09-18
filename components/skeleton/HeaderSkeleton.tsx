'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface HeaderSkeletonProps {
  className?: string;
  showDatePicker?: boolean;
  showAddButton?: boolean;
  showFilterButton?: boolean;
}

export function HeaderSkeleton({ 
  className,
  showDatePicker = true,
  showAddButton = true,
  showFilterButton = true
}: HeaderSkeletonProps) {
  return (
    <header className={cn('bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-20', className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-8 w-64" />
        </div>
        <div className="flex items-center space-x-4">
          {showDatePicker && (
            <Skeleton className="h-9 w-48" />
          )}
          {showAddButton && (
            <Skeleton className="h-9 w-24" />
          )}
          {showFilterButton && (
            <Skeleton className="h-9 w-9" />
          )}
        </div>
      </div>
    </header>
  );
}
