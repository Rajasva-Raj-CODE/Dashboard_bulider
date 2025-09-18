'use client';

import { StatsCard } from '@/components/charts/StatsCard';
import { LineChart } from '@/components/charts/LineChart';
import { BarChart } from '@/components/charts/BarChart';
import { hrStats, hrHeadcountTrend, hrAttritionByMonth, hrArea, hrScatter, hrBubble, hrHeatmap, hrTreemap, hrRadar, hrMixed } from '@/data/hr';
import { AreaChart } from '@/components/charts/AreaChart';
import { ScatterChart } from '@/components/charts/ScatterChart';
import { BubbleChart } from '@/components/charts/BubbleChart';
import { HeatmapChart } from '@/components/charts/HeatmapChart';
import { TreemapChart } from '@/components/charts/TreemapChart';
import { RadarChart } from '@/components/charts/RadarChart';
import { MixedChart } from '@/components/charts/MixedChart';

export function HRAnalytics() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {hrStats.map((stat, i) => (
          <StatsCard key={i} title={stat.title} value={stat.value} icon={stat.icon} bgColor={stat.bgColor} iconColor={stat.iconColor} tooltip={stat.tooltip} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <LineChart title="Headcount Trend" data={hrHeadcountTrend} height={300} />
        </div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <BarChart title="Attrition by Month" data={hrAttritionByMonth} height={300} />
        </div>
      </div>

      {/* Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><AreaChart title="Hires vs Exits" data={hrArea} height={280} stacked /></div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><ScatterChart title="Age vs Salary" data={hrScatter} height={280} /></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><BubbleChart title="Team Size" data={hrBubble} height={280} /></div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><HeatmapChart title="Interview Heat" data={hrHeatmap} height={280} /></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><TreemapChart title="Headcount Split" data={hrTreemap} height={280} /></div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><RadarChart title="HR Index" data={hrRadar} height={280} /></div>
      </div>
      <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><MixedChart title="Hires vs Attrition %" data={hrMixed} height={280} /></div>
    </div>
  );
}


