'use client';

import { StatsCard } from '@/components/charts/StatsCard';
import { LineChart } from '@/components/charts/LineChart';
import { BarChart } from '@/components/charts/BarChart';
import { intranetStats, intranetLoginData, intranetTrendingData, intranetLikesData, intranetAreaStacked, intranetScatter, intranetBubble, intranetHeatmap, intranetTreemap, intranetRadar, intranetMixed } from '@/data/intranet';
import { AreaChart } from '@/components/charts/AreaChart';
import { ScatterChart } from '@/components/charts/ScatterChart';
import { BubbleChart } from '@/components/charts/BubbleChart';
import { HeatmapChart } from '@/components/charts/HeatmapChart';
import { TreemapChart } from '@/components/charts/TreemapChart';
import { RadarChart } from '@/components/charts/RadarChart';
import { MixedChart } from '@/components/charts/MixedChart';

export function IntranetAnalytics() {
  return (
    <div className="space-y-6">
      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {intranetStats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            bgColor={stat.bgColor}
            iconColor={stat.iconColor}
          />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <LineChart 
            title="Total Daily Logins"
            data={intranetLoginData}
            height={300}
          />
        </div>
        
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <BarChart 
            title="Trending Topics"
            data={intranetTrendingData}
            height={300}
          />
        </div>
      </div>

      {/* Bottom Chart */}
      <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
        <BarChart 
          title="Likes, Post & Comments"
          data={intranetLikesData}
          height={300}
        />
      </div>

      {/* Showcase additional chart types */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <AreaChart title="Stacked Area" data={intranetAreaStacked} height={280} stacked />
        </div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <ScatterChart title="Scatter Plot" data={intranetScatter} height={280} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <BubbleChart title="Bubble Chart" data={intranetBubble} height={280} />
        </div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <HeatmapChart title="Heatmap" data={intranetHeatmap} height={280} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <TreemapChart title="Treemap" data={intranetTreemap} height={280} />
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <RadarChart title="Radar" data={intranetRadar} height={280} />
        </div>
      </div>
      <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
        <MixedChart title="Mixed Bar + Line" data={intranetMixed} height={280} />
      </div>
    </div>
  );
}