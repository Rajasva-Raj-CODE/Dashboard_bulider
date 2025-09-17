'use client';

import { useRef } from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { ChartActionsMenu } from './ChartActionsMenu';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface RadarChartProps { title: string; data: any; height?: number; }

export function RadarChart({ title, data, height = 300 }: RadarChartProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const options = { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' as const } } } as any;
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <ChartActionsMenu title={title} getCanvas={() => canvasRef.current} getData={() => data} />
      </div>
      <div style={{ height }}>
        <Radar options={options} data={data} ref={(chart) => {
          // @ts-ignore
          canvasRef.current = chart?.canvas || null;
        }} />
      </div>
    </div>
  );
}


