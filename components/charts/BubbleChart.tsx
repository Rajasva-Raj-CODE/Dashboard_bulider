'use client';

import { useRef } from 'react';
import { Bubble } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';
import { ChartActionsMenu } from './ChartActionsMenu';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

interface BubbleChartProps { 
  title: string; 
  data: ChartData<'bubble'>; 
  height?: number; 
}

export function BubbleChart({ title, data, height = 300 }: BubbleChartProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const options: ChartOptions<'bubble'> = { 
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
        <Bubble options={options} data={data} ref={handleRef} />
      </div>
    </div>
  );
}


