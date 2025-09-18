'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { ChartSkeletonProps } from '@/types/skeleton';
import { cn } from '@/lib/utils';

// Deterministic pseudo-random function to avoid hydration mismatches
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export function ChartSkeleton({ 
  className, 
  chartType = 'line',
  showLegend = true,
  showTitle = true,
  height = 300,
  ...props 
}: ChartSkeletonProps) {
  const getChartSkeletonContent = () => {
    switch (chartType) {
      case 'pie':
        return (
          <div className="flex items-center justify-center h-full">
            <Skeleton className="h-48 w-48 rounded-full" />
          </div>
        );
      case 'bar':
        return (
          <div className="space-y-4">
            <div className="flex items-end justify-between h-40 space-x-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton 
                  key={i} 
                  className="w-8" 
                  style={{ height: `${seededRandom(i * 7) * 100 + 50}px` }}
                />
              ))}
            </div>
          </div>
        );
      case 'line':
        return (
          <div className="space-y-4">
            <div className="relative h-40">
              <Skeleton className="absolute bottom-0 left-0 w-full h-1" />
              <div className="absolute bottom-0 left-0 w-full h-40">
                {Array.from({ length: 8 }).map((_, i) => (
                  <Skeleton 
                    key={i} 
                    className="absolute w-2 h-2 rounded-full" 
                    style={{ 
                      left: `${(i / 7) * 100}%`, 
                      bottom: `${seededRandom(i * 11) * 80 + 10}%` 
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      case 'area':
        return (
          <div className="space-y-4">
            <div className="relative h-40">
              <Skeleton className="absolute bottom-0 left-0 w-full h-32 rounded-t-lg" />
            </div>
          </div>
        );
      case 'scatter':
        return (
          <div className="relative h-40">
            {Array.from({ length: 20 }).map((_, i) => (
              <Skeleton 
                key={i} 
                className="absolute w-3 h-3 rounded-full" 
                style={{ 
                  left: `${seededRandom(i * 13) * 90 + 5}%`, 
                  top: `${seededRandom(i * 17) * 80 + 10}%` 
                }}
              />
            ))}
          </div>
        );
      case 'bubble':
        return (
          <div className="relative h-40">
            {Array.from({ length: 15 }).map((_, i) => (
              <Skeleton 
                key={i} 
                className="absolute rounded-full" 
                style={{ 
                  left: `${seededRandom(i * 19) * 85 + 5}%`, 
                  top: `${seededRandom(i * 23) * 75 + 10}%`,
                  width: `${seededRandom(i * 29) * 20 + 10}px`,
                  height: `${seededRandom(i * 31) * 20 + 10}px`
                }}
              />
            ))}
          </div>
        );
      case 'heatmap':
        return (
          <div className="grid grid-cols-7 gap-1 h-40">
            {Array.from({ length: 35 }).map((_, i) => (
              <Skeleton 
                key={i} 
                className="w-full h-full" 
                style={{ 
                  opacity: seededRandom(i * 37) * 0.8 + 0.2 
                }}
              />
            ))}
          </div>
        );
      case 'treemap':
        return (
          <div className="grid grid-cols-4 gap-2 h-40">
            {Array.from({ length: 12 }).map((_, i) => (
              <Skeleton 
                key={i} 
                className="w-full h-full rounded" 
                style={{ 
                  opacity: seededRandom(i * 37) * 0.8 + 0.2 
                }}
              />
            ))}
          </div>
        );
      case 'radar':
        return (
          <div className="flex items-center justify-center h-40">
            <Skeleton className="h-32 w-32 rounded-full" />
          </div>
        );
      case 'mixed':
        return (
          <div className="space-y-4">
            <div className="flex items-end justify-between h-40 space-x-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton 
                  key={i} 
                  className="w-8" 
                  style={{ height: `${seededRandom(i * 7) * 100 + 50}px` }}
                />
              ))}
            </div>
            <div className="relative h-20">
              <Skeleton className="absolute bottom-0 left-0 w-full h-1" />
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-4">
            <div className="flex items-end justify-between h-40 space-x-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton 
                  key={i} 
                  className="w-8" 
                  style={{ height: `${seededRandom(i * 7) * 100 + 50}px` }}
                />
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div 
      className={cn('bg-white rounded-lg border border-gray-200 p-6', className)} 
      style={{ height }}
      {...props}
    >
      {showTitle && (
        <div className="mb-4">
          <Skeleton className="h-6 w-48 mb-2" />
        </div>
      )}
      
      <div className="flex-1">
        {getChartSkeletonContent()}
      </div>
      
      {showLegend && (
        <div className="mt-4 flex flex-wrap gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-2">
              <Skeleton className="h-3 w-3 rounded-full" />
              <Skeleton className="h-3 w-16" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
