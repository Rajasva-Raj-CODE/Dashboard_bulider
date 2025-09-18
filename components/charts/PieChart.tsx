'use client';

import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { useRef } from 'react';
import { ChartActionsMenu } from './ChartActionsMenu';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  title: string;
  data: ChartData<'doughnut'>;
  centerText?: string;
  height?: number;
}

export function PieChart({ title, data, centerText, height = 300 }: PieChartProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: centerText ? '60%' : 0,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: false,
      },
    },
  };

  const handleRef = (instance: unknown) => {
    const chart = instance as { canvas?: HTMLCanvasElement } | null;
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
      <div style={{ height }} className="relative">
        <Doughnut options={options} data={data} ref={handleRef} />
        {centerText && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600">{centerText}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}