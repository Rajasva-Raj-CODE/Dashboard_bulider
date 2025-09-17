'use client';

import { useRef } from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { ChartActionsMenu } from './ChartActionsMenu';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

interface ScatterChartProps { title: string; data: any; height?: number; }

export function ScatterChart({ title, data, height = 300 }: ScatterChartProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const options = { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' as const } } } as any;
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <ChartActionsMenu title={title} getCanvas={() => canvasRef.current} getData={() => data} />
      </div>
      <div style={{ height }}>
        <Scatter options={options} data={data} ref={(chart) => {
          // @ts-ignore
          canvasRef.current = chart?.canvas || null;
        }} />
      </div>
    </div>
  );
}


