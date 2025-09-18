'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface SidebarSkeletonProps {
  className?: string;
  itemCount?: number;
}

export function SidebarSkeleton({ 
  className,
  itemCount = 13
}: SidebarSkeletonProps) {
  return (
    <aside className={cn('fixed left-0 top-0 h-screen w-80 bg-white border-r border-brand-primary-200 overflow-y-auto rounded-r-2xl shadow-sm', className)}>
      <div className="p-6 pt-8">
        <nav className="space-y-2">
          {Array.from({ length: itemCount }).map((_, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-between p-3 rounded-xl border border-brand-primary-200"
            >
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-4" />
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
