'use client';

import { useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { ChartActionsMenu } from './ChartActionsMenu';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface AreaChartProps {
  title: string;
  data: any;
  height?: number;
  stacked?: boolean;
}

export function AreaChart({ title, data, height = 300, stacked = false }: AreaChartProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'bottom' as const } },
    scales: { x: { stacked }, y: { stacked, beginAtZero: true } },
  };
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <ChartActionsMenu title={title} getCanvas={() => canvasRef.current} getData={() => data} />
      </div>
      <div style={{ height }}>
        <Line options={options as any} data={data} ref={(chart) => {
          // @ts-ignore
          canvasRef.current = chart?.canvas || null;
        }} />
      </div>
    </div>
  );
}


