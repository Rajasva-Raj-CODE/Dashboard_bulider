export interface SkeletonLoadingState {
  isLoading: boolean;
  error?: string | null;
}

export interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  variant?: 'default' | 'circular' | 'rectangular' | 'text';
  animation?: 'pulse' | 'wave' | 'none';
}

export interface ChartSkeletonProps extends SkeletonProps {
  chartType?: 'line' | 'bar' | 'pie' | 'area' | 'scatter' | 'bubble' | 'heatmap' | 'treemap' | 'radar' | 'mixed';
  showLegend?: boolean;
  showTitle?: boolean;
}

export interface StatsCardSkeletonProps extends SkeletonProps {
  showIcon?: boolean;
  showValue?: boolean;
  showTitle?: boolean;
}

export interface LayoutSkeletonProps {
  showSidebar?: boolean;
  showHeader?: boolean;
  showContent?: boolean;
  sidebarWidth?: string;
  headerHeight?: string;
}
