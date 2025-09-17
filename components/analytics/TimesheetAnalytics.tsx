'use client';

import { StatsCard } from '@/components/charts/StatsCard';
import { BarChart } from '@/components/charts/BarChart';
import { PieChart } from '@/components/charts/PieChart';
import { timesheetStats, timesheetByProject, timesheetUtilization, timesheetArea, timesheetScatter, timesheetBubble, timesheetHeatmap, timesheetTreemap, timesheetRadar, timesheetMixed } from '@/data/timesheet';
import { AreaChart } from '@/components/charts/AreaChart';
import { ScatterChart } from '@/components/charts/ScatterChart';
import { BubbleChart } from '@/components/charts/BubbleChart';
import { HeatmapChart } from '@/components/charts/HeatmapChart';
import { TreemapChart } from '@/components/charts/TreemapChart';
import { RadarChart } from '@/components/charts/RadarChart';
import { MixedChart } from '@/components/charts/MixedChart';

export function TimesheetAnalytics() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {timesheetStats.map((s, i) => (
          <StatsCard key={i} title={s.title} value={s.value} icon={s.icon} bgColor={s.bgColor} iconColor={s.iconColor} tooltip={s.tooltip} />
        ))}
      </div>
      {/* Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6"><AreaChart title="Billable vs Non-billable" data={timesheetArea} height={280} stacked /></div>
        <div className="bg-white rounded-lg border border-gray-200 p-6"><ScatterChart title="Hours vs Tasks" data={timesheetScatter} height={280} /></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6"><BubbleChart title="Project Weight" data={timesheetBubble} height={280} /></div>
        <div className="bg-white rounded-lg border border-gray-200 p-6"><HeatmapChart title="Working Hours Heat" data={timesheetHeatmap} height={280} /></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6"><TreemapChart title="Hours by Project" data={timesheetTreemap} height={280} /></div>
        <div className="bg-white rounded-lg border border-gray-200 p-6"><RadarChart title="Team Radar" data={timesheetRadar} height={280} /></div>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-6"><MixedChart title="Hours vs Utilization" data={timesheetMixed} height={280} /></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <BarChart title="Hours by Project" data={timesheetByProject} height={300} />
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <PieChart title="Utilization" data={timesheetUtilization} height={300} />
        </div>
      </div>
    </div>
  );
}


