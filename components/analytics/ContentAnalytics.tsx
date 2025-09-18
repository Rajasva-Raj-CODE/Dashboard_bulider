"use client";

import { StatsCard } from "@/components/charts/StatsCard";
import { BarChart } from "@/components/charts/BarChart";
import { contentStats, mostViewedArticlesData, likedCommentedData, contentArea, contentScatter, contentBubble, contentHeatmap, contentTreemap, contentRadar, contentMixed } from "@/data/content";
import { AreaChart } from "@/components/charts/AreaChart";
import { ScatterChart } from "@/components/charts/ScatterChart";
import { BubbleChart } from "@/components/charts/BubbleChart";
import { HeatmapChart } from "@/components/charts/HeatmapChart";
import { TreemapChart } from "@/components/charts/TreemapChart";
import { RadarChart } from "@/components/charts/RadarChart";
import { MixedChart } from "@/components/charts/MixedChart";

export function ContentAnalytics() {
  return (
    <div className="space-y-6">
      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {contentStats.map((stat, index) => (
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
          <AreaChart title="Content Area" data={contentArea} stacked height={280} />
        </div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <ScatterChart title="Read Time vs Views" data={contentScatter} height={280} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <BubbleChart title="Topic Weight" data={contentBubble} height={280} />
        </div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <HeatmapChart title="Publishing Heatmap" data={contentHeatmap} height={280} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <TreemapChart title="Content Treemap" data={contentTreemap} height={280} />
        </div>
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <RadarChart title="Quality Radar" data={contentRadar} height={280} />
        </div>
      </div>
      <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
        <MixedChart title="Content Mixed" data={contentMixed} height={280} />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <BarChart
            title="Most Viewed Articles"
            data={mostViewedArticlesData}
            height={400}
          />
        </div>

        <div className="bg-white rounded-lg border border-brand-primary-200 p-6">
          <BarChart
            title="Most Liked/commented"
            data={likedCommentedData}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
