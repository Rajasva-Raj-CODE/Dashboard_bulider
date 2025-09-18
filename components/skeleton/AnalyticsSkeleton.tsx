'use client';

import { StatsCardSkeleton } from './StatsCardSkeleton';
import { ChartSkeleton } from './ChartSkeleton';
import { cn } from '@/lib/utils';

interface AnalyticsSkeletonProps {
  className?: string;
  statsCount?: number;
  chartCount?: number;
  chartTypes?: Array<'line' | 'bar' | 'pie' | 'area' | 'scatter' | 'bubble' | 'heatmap' | 'treemap' | 'radar' | 'mixed'>;
}

export function AnalyticsSkeleton({ 
  className,
  statsCount = 6,
  chartCount = 8,
  chartTypes = ['line', 'bar', 'bar', 'area', 'scatter', 'bubble', 'heatmap', 'treemap']
}: AnalyticsSkeletonProps) {
  return (
    <div className={cn('space-y-6', className)}>
      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {Array.from({ length: statsCount }).map((_, index) => (
          <StatsCardSkeleton key={index} />
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {Array.from({ length: Math.min(chartCount, 2) }).map((_, index) => (
          <ChartSkeleton 
            key={index} 
            chartType={chartTypes[index] || 'line'}
            height={300}
          />
        ))}
      </div>

      {/* Additional Charts */}
      {chartCount > 2 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Array.from({ length: Math.min(chartCount - 2, 2) }).map((_, index) => (
            <ChartSkeleton 
              key={index + 2} 
              chartType={chartTypes[index + 2] || 'line'}
              height={280}
            />
          ))}
        </div>
      )}

      {/* More Charts */}
      {chartCount > 4 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Array.from({ length: Math.min(chartCount - 4, 2) }).map((_, index) => (
            <ChartSkeleton 
              key={index + 4} 
              chartType={chartTypes[index + 4] || 'line'}
              height={280}
            />
          ))}
        </div>
      )}

      {/* Final Chart Row */}
      {chartCount > 6 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Array.from({ length: Math.min(chartCount - 6, 2) }).map((_, index) => (
            <ChartSkeleton 
              key={index + 6} 
              chartType={chartTypes[index + 6] || 'line'}
              height={280}
            />
          ))}
        </div>
      )}

      {/* Single Full Width Chart */}
      {chartCount > 8 && (
        <ChartSkeleton 
          chartType={chartTypes[8] || 'mixed'}
          height={280}
        />
      )}
    </div>
  );
}
