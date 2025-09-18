'use client';

import { HeaderSkeleton } from './HeaderSkeleton';
import { SidebarSkeleton } from './SidebarSkeleton';
import { AnalyticsSkeleton } from './AnalyticsSkeleton';
import { LayoutSkeletonProps } from '@/types/skeleton';
import { cn } from '@/lib/utils';

export function LayoutSkeleton({ 
  showSidebar = true,
  showHeader = true,
  showContent = true,
  sidebarWidth = 'w-80',
  headerHeight = 'h-auto',
  className
}: LayoutSkeletonProps & { className?: string }) {
  return (
    <div className={cn('min-h-screen bg-brand-primary-50 flex', className)}>
      {/* Left Sidebar */}
      {showSidebar && <SidebarSkeleton />}

      {/* Main Content */}
      <div className={cn('flex-1 flex flex-col', showSidebar && 'pl-80')}>
        {/* Header */}
        {showHeader && <HeaderSkeleton />}

        {/* Content Area */}
        {showContent && (
          <div className="flex-1 flex">
            <main className="flex-1 p-6">
              <AnalyticsSkeleton />
            </main>
          </div>
        )}
      </div>
    </div>
  );
}
