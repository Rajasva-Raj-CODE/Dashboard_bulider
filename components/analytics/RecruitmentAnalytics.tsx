'use client';

import { StatsCard } from '@/components/charts/StatsCard';
import { BarChart } from '@/components/charts/BarChart';
import { PieChart } from '@/components/charts/PieChart';
import { recruitmentStats, recruitmentPipeline, recruitmentSources, recruitmentArea, recruitmentScatter, recruitmentBubble, recruitmentHeatmap, recruitmentTreemap, recruitmentRadar, recruitmentMixed } from '@/data/recruitment';
import { AreaChart } from '@/components/charts/AreaChart';
import { ScatterChart } from '@/components/charts/ScatterChart';
import { BubbleChart } from '@/components/charts/BubbleChart';
import { HeatmapChart } from '@/components/charts/HeatmapChart';
import { TreemapChart } from '@/components/charts/TreemapChart';
import { RadarChart } from '@/components/charts/RadarChart';
import { MixedChart } from '@/components/charts/MixedChart';

export function RecruitmentAnalytics() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recruitmentStats.map((s, i) => (
          <StatsCard key={i} title={s.title} value={s.value} icon={s.icon} bgColor={s.bgColor} iconColor={s.iconColor} tooltip={s.tooltip} />
        ))}
      </div>
      {/* Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><AreaChart title="Applications vs Interviews" data={recruitmentArea} height={280} stacked /></div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><ScatterChart title="Exp vs Score" data={recruitmentScatter} height={280} /></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><BubbleChart title="Openings by Role" data={recruitmentBubble} height={280} /></div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><HeatmapChart title="Applications Heat" data={recruitmentHeatmap} height={280} /></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><TreemapChart title="Headcount by Role" data={recruitmentTreemap} height={280} /></div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><RadarChart title="Candidate Radar" data={recruitmentRadar} height={280} /></div>
      </div>
      <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><MixedChart title="Applications vs Offers" data={recruitmentMixed} height={280} /></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <BarChart title="Recruitment Pipeline" data={recruitmentPipeline} height={300} />
        </div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <PieChart title="Candidate Sources" data={recruitmentSources} height={300} />
        </div>
      </div>
    </div>
  );
}


