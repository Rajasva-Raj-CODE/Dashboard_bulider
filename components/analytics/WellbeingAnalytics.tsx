'use client';

import { StatsCard } from '@/components/charts/StatsCard';
import { BarChart } from '@/components/charts/BarChart';
import { PieChart } from '@/components/charts/PieChart';
import { wellbeingStats, wellbeingParticipation, wellbeingSentiment, wellbeingArea, wellbeingScatter, wellbeingBubble, wellbeingHeatmap, wellbeingTreemap, wellbeingRadar, wellbeingMixed } from '@/data/wellbeing';
import { AreaChart } from '@/components/charts/AreaChart';
import { ScatterChart } from '@/components/charts/ScatterChart';
import { BubbleChart } from '@/components/charts/BubbleChart';
import { HeatmapChart } from '@/components/charts/HeatmapChart';
import { TreemapChart } from '@/components/charts/TreemapChart';
import { RadarChart } from '@/components/charts/RadarChart';
import { MixedChart } from '@/components/charts/MixedChart';

export function WellbeingAnalytics() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wellbeingStats.map((s, i) => (
          <StatsCard key={i} title={s.title} value={s.value} icon={s.icon} bgColor={s.bgColor} iconColor={s.iconColor} tooltip={s.tooltip} />
        ))}
      </div>
      {/* Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><AreaChart title="Participation vs Satisfaction" data={wellbeingArea} height={280} stacked /></div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><ScatterChart title="Age vs Steps" data={wellbeingScatter} height={280} /></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><BubbleChart title="Activity Size" data={wellbeingBubble} height={280} /></div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><HeatmapChart title="Participation Heat" data={wellbeingHeatmap} height={280} /></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><TreemapChart title="Activities" data={wellbeingTreemap} height={280} /></div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><RadarChart title="Well-Being Radar" data={wellbeingRadar} height={280} /></div>
      </div>
      <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><MixedChart title="Activities vs Engagement" data={wellbeingMixed} height={280} /></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <BarChart title="Wellness Participation" data={wellbeingParticipation} height={300} />
        </div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <PieChart title="Pulse Sentiment" data={wellbeingSentiment} height={300} />
        </div>
      </div>
    </div>
  );
}


