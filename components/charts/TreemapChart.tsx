'use client';

import { useRef } from 'react';
import { Chart as ChartJS, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';
import { TreemapController, TreemapElement } from 'chartjs-chart-treemap';
import { Chart } from 'react-chartjs-2';
import { ChartActionsMenu } from './ChartActionsMenu';

ChartJS.register(TreemapController, TreemapElement, Tooltip, Legend);

interface TreemapChartProps { 
  title: string; 
  // Use unknown[] to avoid relying on non-exported TreemapDataPoint type
  data: ChartData<'treemap', unknown[], unknown>; 
  height?: number; 
}

export function TreemapChart({ title, data, height = 300 }: TreemapChartProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const options: ChartOptions<'treemap'> = { 
    responsive: true, 
    maintainAspectRatio: false, 
    plugins: { 
      legend: { display: false } 
    } 
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
        <Chart type="treemap" data={data} options={options} ref={handleRef} />
      </div>
    </div>
  );
}


