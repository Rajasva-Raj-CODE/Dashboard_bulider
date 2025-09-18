'use client';

import { StatsCard } from '@/components/charts/StatsCard';
import { PieChart } from '@/components/charts/PieChart';
import { BarChart } from '@/components/charts/BarChart';
import { peopleStats, workforceQualificationData, workforceGraduationData, workforceDemographicsData, workforceLocationData, peopleArea, peopleScatter, peopleBubble, peopleHeatmap, peopleTreemap, peopleRadar, peopleMixed } from '@/data/people';
import { AreaChart } from '@/components/charts/AreaChart';
import { ScatterChart } from '@/components/charts/ScatterChart';
import { BubbleChart } from '@/components/charts/BubbleChart';
import { HeatmapChart } from '@/components/charts/HeatmapChart';
import { TreemapChart } from '@/components/charts/TreemapChart';
import { RadarChart } from '@/components/charts/RadarChart';
import { MixedChart } from '@/components/charts/MixedChart';

export function PeopleAnalytics() {
  return (
    <div className="space-y-6">
      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {peopleStats.map((stat, index) => (
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

      {/* Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <AreaChart title="Hires vs Exits" data={peopleArea} height={280} stacked />
        </div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <ScatterChart title="Age vs Experience" data={peopleScatter} height={280} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <BubbleChart title="Team Sizes" data={peopleBubble} height={280} />
        </div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <HeatmapChart title="Attendance Heat" data={peopleHeatmap} height={280} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <TreemapChart title="Department Split" data={peopleTreemap} height={280} />
        </div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <RadarChart title="Behavioral Scores" data={peopleRadar} height={280} />
        </div>
      </div>
      <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
        <MixedChart title="Interviews vs Offers" data={peopleMixed} height={280} />
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <PieChart 
            title="Workforce Qualification"
            data={workforceQualificationData}
            centerText="Total Employees: 1"
            height={300}
          />
        </div>
        
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <BarChart 
            title="Workforce Graduation Year"
            data={workforceGraduationData}
            height={300}
          />
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <BarChart 
            title="Workforce Demographics"
            data={workforceDemographicsData}
            height={300}
          />
        </div>
        
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <PieChart 
            title="Workforce Location"
            data={workforceLocationData}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}