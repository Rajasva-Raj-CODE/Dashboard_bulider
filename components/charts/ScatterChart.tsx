'use client';

import { useRef } from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';
import { ChartActionsMenu } from './ChartActionsMenu';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

interface ScatterChartProps { 
  title: string; 
  data: ChartData<'scatter'>; 
  height?: number; 
}

export function ScatterChart({ title, data, height = 300 }: ScatterChartProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const options: ChartOptions<'scatter'> = { 
    responsive: true, 
    maintainAspectRatio: false, 
    plugins: { 
      legend: { position: 'bottom' as const } 
    } 
  };

  const handleRef = (chart: any) => {
    if (chart?.canvas) {
      canvasRef.current = chart.canvas;
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <ChartActionsMenu title={title} getCanvas={() => canvasRef.current} getData={() => data} />
      </div>
      <div style={{ height }}>
        <Scatter options={options} data={data} ref={handleRef} />
      </div>
    </div>
  );
}


