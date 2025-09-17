"use client";

import { StatsCard } from "@/components/charts/StatsCard";
import { BarChart } from "@/components/charts/BarChart";
import { PieChart } from "@/components/charts/PieChart";
import {
  attendanceStats,
  dayWiseAbsenceData,
  monthlyAttendanceData,
  attendancePercentData,
  attendanceArea,
  attendanceScatter,
  attendanceBubble,
  attendanceHeatmap,
  attendanceTreemap,
  attendanceRadar,
  attendanceMixed,
} from "@/data/attendance";
import { AreaChart } from "@/components/charts/AreaChart";
import { ScatterChart } from "@/components/charts/ScatterChart";
import { BubbleChart } from "@/components/charts/BubbleChart";
import { HeatmapChart } from "@/components/charts/HeatmapChart";
import { TreemapChart } from "@/components/charts/TreemapChart";
import { RadarChart } from "@/components/charts/RadarChart";
import { MixedChart } from "@/components/charts/MixedChart";

export function AttendanceAnalytics() {
  return (
    <div className="space-y-6">
      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {attendanceStats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            bgColor={stat.bgColor}
            iconColor={stat.iconColor}
            tooltip={stat.tooltip}
          />
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <BarChart
            title="Day Wise Attendance Analytics"
            data={dayWiseAbsenceData}
            height={300}
          />
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <PieChart
            title="Attendance %"
            data={attendancePercentData}
            centerText="Total Employees: 261"
            height={300}
          />
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <BarChart
          title="Attendance Analytics"
          data={monthlyAttendanceData}
          height={300}
        />
      </div>

      {/* Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <AreaChart
            title="Present vs Absent"
            data={attendanceArea}
            height={280}
            stacked
          />
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <ScatterChart
            title="Late Arrivals"
            data={attendanceScatter}
            height={280}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <BubbleChart
            title="Department Absence"
            data={attendanceBubble}
            height={280}
          />
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <HeatmapChart
            title="Absence Heat"
            data={attendanceHeatmap}
            height={280}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <TreemapChart
            title="Absence by Dept"
            data={attendanceTreemap}
            height={280}
          />
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <RadarChart
            title="Attendance Scores"
            data={attendanceRadar}
            height={280}
          />
        </div>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <MixedChart
          title="Absences vs Check-in"
          data={attendanceMixed}
          height={280}
        />
      </div>
    </div>
  );
}
