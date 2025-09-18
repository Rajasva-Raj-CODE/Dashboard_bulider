'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar } from 'lucide-react';
import { ReactNode } from 'react';

interface GlobalFilterBarProps {
  className?: string;
  onSearchClick?: () => void;
  onResetClick?: () => void;
  onSaveClick?: () => void;
  /** Optional slot to inject extra controls at the end of the row */
  extraControls?: ReactNode;
}

export function GlobalFilterBar({
  className,
  onSearchClick,
  onResetClick,
  onSaveClick,
  extraControls,
}: GlobalFilterBarProps) {
  return (
    <div className={`bg-white rounded-lg border border-brand-primary-200 p-6 ${className ?? ''}`}>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
          <Input placeholder="Search" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Designation</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Designation" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="developer">Developer</SelectItem>
              <SelectItem value="designer">Designer</SelectItem>
              <SelectItem value="manager">Manager</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Status</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Creation Date</label>
          <div className="relative">
            <Input placeholder="Select Date" />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Gender</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <Button onClick={onSearchClick}>Search</Button>
        <Button variant="outline" className="bg-green-500 hover:bg-green-600 text-white" onClick={onResetClick}>
          Reset
        </Button>
        <Button variant="outline" className="text-red-500 border-red-300" onClick={onSaveClick}>
          Save Applied Filter
        </Button>
        {extraControls}
      </div>
    </div>
  );
}

export default GlobalFilterBar;


