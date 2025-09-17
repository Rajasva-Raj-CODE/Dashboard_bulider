'use client';

import { useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { ChartActionsMenu } from './ChartActionsMenu';

ChartJS.register(ArcElement, Tooltip, Legend);

interface GaugeChartProps { title: string; value: number; height?: number; }

export function GaugeChart({ title, value, height = 240 }: GaugeChartProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const data = {
    labels: ['Progress', 'Remaining'],
    datasets: [
      { data: [value, 100 - value], backgroundColor: ['#22C55E', '#E5E7EB'], borderWidth: 0, circumference: 180, rotation: -90 },
    ],
  };
  const options = { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, cutout: '70%' } as any;
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <ChartActionsMenu title={title} getCanvas={() => canvasRef.current} getData={() => data} />
      </div>
      <div style={{ height }} className="relative">
        <Doughnut options={options} data={data} ref={(chart) => {
          // @ts-ignore
          canvasRef.current = chart?.canvas || null;
        }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-semibold text-gray-800">{value}%</span>
        </div>
      </div>
    </div>
  );
}


