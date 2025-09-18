'use client';

import { StatsCard } from '@/components/charts/StatsCard';
import { BarChart } from '@/components/charts/BarChart';
import { PieChart } from '@/components/charts/PieChart';
import { exitStats, exitReasons, attritionRateData, exitCountData, typeOfExitData, exitByTenure, regrettedVsNot, exitArea, exitScatter, exitBubble, exitHeatmap, exitTreemap, exitRadar, exitMixed } from '@/data/exit';
import { LineChart } from '../charts/LineChart';
import { AreaChart } from '@/components/charts/AreaChart';
import { ScatterChart } from '@/components/charts/ScatterChart';
import { BubbleChart } from '@/components/charts/BubbleChart';
import { HeatmapChart } from '@/components/charts/HeatmapChart';
import { TreemapChart } from '@/components/charts/TreemapChart';
import { RadarChart } from '@/components/charts/RadarChart';
import { MixedChart } from '@/components/charts/MixedChart';

export function ExitAnalytics() {
  return (
    <div className="space-y-6">
      {/* Top 12 Stats like screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {exitStats.slice(0,6).map((s, i) => (
          <StatsCard key={i} title={s.title} value={s.value} icon={s.icon} bgColor={s.bgColor} iconColor={s.iconColor} tooltip={s.tooltip} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {exitStats.slice(6).map((s, i) => (
          <StatsCard key={i} title={s.title} value={s.value} icon={s.icon} bgColor={s.bgColor} iconColor={s.iconColor} tooltip={s.tooltip} />
        ))}
      </div>

      {/* Charts Layout matching image */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <LineChart title="Attrition Rate" data={attritionRateData} height={280} />
        </div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <BarChart title="Exit Count" data={exitCountData} height={280} />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <BarChart title="Reasons for Exit" data={exitReasons} height={280} />
        </div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <BarChart title="Type of Exit" data={typeOfExitData} height={280} />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <PieChart title="Exit by Tenure" data={exitByTenure} height={280} />
        </div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <PieChart title="Regretted Vs Not Regretted Exits" data={regrettedVsNot} height={280} />
        </div>
      </div>

      {/* Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><AreaChart title="Resignations vs Retained" data={exitArea} height={280} stacked /></div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><ScatterChart title="Tenure vs Score" data={exitScatter} height={280} /></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><BubbleChart title="Dept Exits" data={exitBubble} height={280} /></div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><HeatmapChart title="Exit Events Heat" data={exitHeatmap} height={280} /></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><TreemapChart title="Exits by Department" data={exitTreemap} height={280} /></div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><RadarChart title="Reasons Weight" data={exitRadar} height={280} /></div>
      </div>
      <div className="bg-white rounded-lg border border-brand-primary-200 p-6"><MixedChart title="Exits vs Attrition %" data={exitMixed} height={280} /></div>
    </div>
  );
}


