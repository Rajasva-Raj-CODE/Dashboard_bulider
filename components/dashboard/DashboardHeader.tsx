"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Plus, ChevronDown, Filter } from "lucide-react";
import { DateRangePicker } from "./DateRangePicker";
import { AddWidgetDialog } from "./AddWidgetDialog";
import { GlobalFilterBar } from "./GlobalFilterBar";

interface DashboardHeaderProps {
  title: string;
  dateRange: string;
  onDateRangeChange: (range: string) => void;
}

export function DashboardHeader({
  title,
  dateRange,
  onDateRangeChange,
}: DashboardHeaderProps) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <header className="bg-white border-b border-brand-primary-200 px-6 py-4 sticky top-0 z-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Button
              variant="outline"
              onClick={() => setShowDatePicker(!showDatePicker)}
              className="flex items-center space-x-2 border-brand-primary-200 hover:bg-brand-primary-50"
            >
              <Calendar className="w-4 h-4" />
              <span>{dateRange}</span>
              <ChevronDown className="w-4 h-4" />
            </Button>

            {showDatePicker && (
              <DateRangePicker
                currentRange={dateRange}
                onChange={onDateRangeChange}
                onClose={() => setShowDatePicker(false)}
              />
            )}
          </div>

          <Button
            className="bg-brand-secondary hover:bg-brand-secondary-600 text-white"
            onClick={() => setShowAddDialog(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add more
          </Button>
          <AddWidgetDialog
            open={showAddDialog}
            onOpenChange={setShowAddDialog}
          />

          <Button
            variant="outline"
            className="h-9 w-9 p-0 border-brand-primary-200 hover:bg-brand-primary-50"
            onClick={() => setShowFilters((v) => !v)}
            aria-label="Toggle filters"
            title="Filters"
          >
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </div>
      {showFilters && <GlobalFilterBar className="mt-4" />}
    </header>
  );
}
