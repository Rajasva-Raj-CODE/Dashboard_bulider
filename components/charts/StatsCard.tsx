'use client';

import type { LucideIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
  tooltip?: string;
}

export function StatsCard({ title, value, icon: Icon, bgColor, iconColor, tooltip }: StatsCardProps) {
  const card = (
    <div className={`${bgColor} rounded-lg p-6 border border-gray-200`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          <p className="text-sm font-medium text-gray-700 mt-2">{title}</p>
        </div>
        <div className={`${iconColor}`}>
          <Icon className="w-8 h-8" />
        </div>
      </div>
    </div>
  );

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {card}
        </TooltipTrigger>
        <TooltipContent>{tooltip || title}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}