'use client';

import { StatsCard } from '@/components/charts/StatsCard';
import { BarChart } from '@/components/charts/BarChart';
import { PieChart } from '@/components/charts/PieChart';
import { workflowStats, workflowThroughput, workflowStates, workflowArea, workflowScatter, workflowBubble, workflowHeatmap, workflowTreemap, workflowRadar, workflowMixed } from '@/data/workflow';
import { AreaChart } from '@/components/charts/AreaChart';
import { ScatterChart } from '@/components/charts/ScatterChart';
import { BubbleChart } from '@/components/charts/BubbleChart';
import { HeatmapChart } from '@/components/charts/HeatmapChart';
import { TreemapChart } from '@/components/charts/TreemapChart';
import { RadarChart } from '@/components/charts/RadarChart';
import { MixedChart } from '@/components/charts/MixedChart';

export function WorkflowAnalytics() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workflowStats.map((s, i) => (
          <StatsCard key={i} title={s.title} value={s.value} icon={s.icon} bgColor={s.bgColor} iconColor={s.iconColor} tooltip={s.tooltip} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <BarChart title="Workflow Throughput" data={workflowThroughput} height={300} />
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <PieChart title="Items by State" data={workflowStates} height={300} />
        </div>
      </div>
      {/* Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6"><AreaChart title="Started vs Completed" data={workflowArea} height={280} stacked /></div>
        <div className="bg-white rounded-lg border border-gray-200 p-6"><ScatterChart title="Cycle Time vs Items" data={workflowScatter} height={280} /></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6"><BubbleChart title="Workflow Load" data={workflowBubble} height={280} /></div>
        <div className="bg-white rounded-lg border border-gray-200 p-6"><HeatmapChart title="Throughput Heat" data={workflowHeatmap} height={280} /></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6"><TreemapChart title="Workflow Types" data={workflowTreemap} height={280} /></div>
        <div className="bg-white rounded-lg border border-gray-200 p-6"><RadarChart title="Workflow Index" data={workflowRadar} height={280} /></div>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-6"><MixedChart title="Completed vs Cycle Time" data={workflowMixed} height={280} /></div>
    </div>
  );
}


