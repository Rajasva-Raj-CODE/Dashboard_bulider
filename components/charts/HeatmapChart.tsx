'use client';

import { useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';
import { MatrixController, MatrixElement } from 'chartjs-chart-matrix';
import { Chart } from 'react-chartjs-2';
import { ChartActionsMenu } from './ChartActionsMenu';

ChartJS.register(CategoryScale, LinearScale, MatrixController, MatrixElement, Tooltip, Legend);

interface HeatmapChartProps { 
  title: string; 
  // Use unknown[] for data points to avoid relying on non-exported types
  data: ChartData<'matrix', unknown[], unknown>; 
  height?: number; 
}

export function HeatmapChart({ title, data, height = 300 }: HeatmapChartProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const options: ChartOptions<'matrix'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { 
      legend: { display: false } 
    },
    scales: { 
      x: { offset: true }, 
      y: { offset: true } 
    },
  };

  const handleRef = (chart: unknown) => {
    const c = chart as { canvas?: HTMLCanvasElement } | null;
    if (c?.canvas) {
      canvasRef.current = c.canvas;
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <ChartActionsMenu title={title} getCanvas={() => canvasRef.current} getData={() => data} />
      </div>
      <div style={{ height }}>
        <Chart type="matrix" data={data} options={options} ref={handleRef} />
      </div>
    </div>
  );
}


