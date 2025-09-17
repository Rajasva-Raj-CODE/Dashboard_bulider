'use client';

import { useRef } from 'react';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js';
// @ts-ignore
import { TreemapController, TreemapElement } from 'chartjs-chart-treemap';
import { Chart } from 'react-chartjs-2';
import { ChartActionsMenu } from './ChartActionsMenu';

ChartJS.register(TreemapController, TreemapElement, Tooltip, Legend);

interface TreemapChartProps { title: string; data: any; height?: number; }

export function TreemapChart({ title, data, height = 300 }: TreemapChartProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const options = { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } } as any;
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <ChartActionsMenu title={title} getCanvas={() => canvasRef.current} getData={() => data} />
      </div>
      <div style={{ height }}>
        <Chart type="treemap" data={data} options={options} ref={(chart: any) => {
          canvasRef.current = chart?.canvas || null;
        }} />
      </div>
    </div>
  );
}


