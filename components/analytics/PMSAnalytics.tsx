'use client';

import { StatsCard } from '@/components/charts/StatsCard';
import { BarChart } from '@/components/charts/BarChart';
import { LineChart } from '@/components/charts/LineChart';
import { pmsStats, pmsScoreDistribution, pmsProgress, pmsArea, pmsScatter, pmsBubble, pmsHeatmap, pmsTreemap, pmsRadar, pmsMixed } from '@/data/pms';
import { AreaChart } from '@/components/charts/AreaChart';
import { ScatterChart } from '@/components/charts/ScatterChart';
import { BubbleChart } from '@/components/charts/BubbleChart';
import { HeatmapChart } from '@/components/charts/HeatmapChart';
import { TreemapChart } from '@/components/charts/TreemapChart';
import { RadarChart } from '@/components/charts/RadarChart';
import { MixedChart } from '@/components/charts/MixedChart';

export function PMSAnalytics() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pmsStats.map((s, i) => (
          <StatsCard key={i} title={s.title} value={s.value} icon={s.icon} bgColor={s.bgColor} iconColor={s.iconColor} tooltip={s.tooltip} />
        ))}
      </div>
      {/* Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><AreaChart title="Goals Progress" data={pmsArea} height={280} stacked /></div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><ScatterChart title="Score vs Tenure" data={pmsScatter} height={280} /></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><BubbleChart title="Team Goal Load" data={pmsBubble} height={280} /></div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><HeatmapChart title="Check-in Heat" data={pmsHeatmap} height={280} /></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><TreemapChart title="Goals by Dept" data={pmsTreemap} height={280} /></div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><RadarChart title="Performance Radar" data={pmsRadar} height={280} /></div>
      </div>
      <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><MixedChart title="Goals vs Avg Score" data={pmsMixed} height={280} /></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <BarChart title="Score Distribution" data={pmsScoreDistribution} height={300} />
        </div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <LineChart title="Review Progress" data={pmsProgress} height={300} />
        </div>
      </div>
    </div>
  );
}


