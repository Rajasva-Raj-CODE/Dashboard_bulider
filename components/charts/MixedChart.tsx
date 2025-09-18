'use client';

import { useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { ChartActionsMenu } from './ChartActionsMenu';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Legend);

interface MixedChartProps { 
  title: string; 
  data: any; 
  height?: number; 
}

export function MixedChart({ title, data, height = 300 }: MixedChartProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const options: any = { 
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
        <Chart type='bar' data={data} options={options} ref={handleRef} />
      </div>
    </div>
  );
}


