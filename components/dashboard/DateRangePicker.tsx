'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, ChevronDown } from 'lucide-react';

interface DateRangePickerProps {
  currentRange: string;
  onChange: (range: string) => void;
  onClose: () => void;
}

export function DateRangePicker({ currentRange, onChange, onClose }: DateRangePickerProps) {
  const [selectedRange, setSelectedRange] = useState('This Financial Year');
  const [startDate, setStartDate] = useState<Date | null>(new Date(2025, 3, 1)); // April 1, 2025
  const [endDate, setEndDate] = useState<Date | null>(new Date(2026, 2, 31)); // March 31, 2026
  const [leftMonth, setLeftMonth] = useState(new Date(2025, 3, 1)); // April 2025
  const [rightMonth, setRightMonth] = useState(new Date(2025, 4, 1)); // May 2025

  const quickRanges = [
    'Today',
    'Last 30 Days',
    'This Month',
    'Last Month',
    'This Calendar Year',
    'This Financial Year',
    'Custom Range'
  ];

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDateRange = () => {
    if (startDate && endDate) {
      const start = startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      const end = endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      return `${start} - ${end}`;
    }
    return currentRange;
  };

  const handleQuickRangeSelect = (range: string) => {
    setSelectedRange(range);
    if (range !== 'Custom Range') {
      onChange(range);
      onClose();
    }
  };

  const handleDateClick = (date: Date, isLeftCalendar: boolean) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (startDate && !endDate) {
      if (date < startDate) {
        setEndDate(startDate);
        setStartDate(date);
      } else {
        setEndDate(date);
      }
    }
  };

  const isDateInRange = (date: Date) => {
    if (!startDate || !endDate) return false;
    return date >= startDate && date <= endDate;
  };

  const isDateSelected = (date: Date) => {
    if (!startDate) return false;
    return date.getTime() === startDate.getTime() || 
           (endDate && date.getTime() === endDate.getTime());
  };

  const renderCalendar = (monthDate: Date, isLeftCalendar: boolean) => {
    const daysInMonth = getDaysInMonth(monthDate);
    const firstDay = getFirstDayOfMonth(monthDate);
    const days = [];

    // Previous month's trailing days
    const prevMonth = new Date(monthDate.getFullYear(), monthDate.getMonth() - 1, 0);
    const prevMonthDays = getDaysInMonth(prevMonth);
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = prevMonthDays - i;
      days.push(
        <div key={`prev-${day}`} className="text-center py-1 text-gray-400 text-xs">
          {day}
        </div>
      );
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(monthDate.getFullYear(), monthDate.getMonth(), day);
      const isInRange = isDateInRange(date);
      const isSelected = isDateSelected(date);
      const isStartDate = startDate && date.getTime() === startDate.getTime();
      const isEndDate = endDate && date.getTime() === endDate.getTime();

      days.push(
        <div
          key={day}
          onClick={() => handleDateClick(date, isLeftCalendar)}
          className={`text-center py-1 cursor-pointer text-xs rounded transition-colors ${
            isSelected
              ? 'bg-blue-500 text-white'
              : isInRange
              ? 'bg-blue-100 text-blue-600'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          {day}
        </div>
      );
    }

    // Next month's leading days
    const remainingDays = 42 - days.length; // 6 rows * 7 days
    for (let day = 1; day <= remainingDays; day++) {
      days.push(
        <div key={`next-${day}`} className="text-center py-1 text-gray-400 text-xs">
          {day}
        </div>
      );
    }

    return days;
  };

  const navigateMonth = (direction: 'prev' | 'next', isLeftCalendar: boolean) => {
    if (isLeftCalendar) {
      const newMonth = new Date(leftMonth);
      newMonth.setMonth(newMonth.getMonth() + (direction === 'next' ? 1 : -1));
      setLeftMonth(newMonth);
    } else {
      const newMonth = new Date(rightMonth);
      newMonth.setMonth(newMonth.getMonth() + (direction === 'next' ? 1 : -1));
      setRightMonth(newMonth);
    }
  };

  return (
    <Card className="absolute top-12 right-0 w-[600px] p-0 shadow-lg border z-50 bg-white">
      {/* Header with date range display */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CalendarIcon className="w-4 h-4 text-gray-500" />
            <span className="font-medium text-gray-900">{formatDateRange()}</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
    
        </div>
      </div>

      <div className="flex">
        {/* Quick Range Options */}
        <div className="w-48 bg-gray-50 p-4 border-r">
          <div className="space-y-1">
            {quickRanges.map((range) => (
              <button
                key={range}
                onClick={() => handleQuickRangeSelect(range)}
                className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                  selectedRange === range
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-700 hover:bg-white hover:shadow-sm'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Calendar Section */}
        <div className="flex-1 p-4">
          <div className="flex space-x-6">
            {/* Left Calendar */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <ChevronLeft 
                  className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" 
                  onClick={() => navigateMonth('prev', true)}
                />
                <div className="flex items-center space-x-1">
                  <select 
                    value={leftMonth.getMonth()}
                    onChange={(e) => {
                      const newMonth = new Date(leftMonth);
                      newMonth.setMonth(parseInt(e.target.value));
                      setLeftMonth(newMonth);
                    }}
                    className="text-sm font-medium border-none bg-transparent focus:outline-none cursor-pointer"
                  >
                    {months.map((month, index) => (
                      <option key={month} value={index}>{month}</option>
                    ))}
                  </select>
                  <select 
                    value={leftMonth.getFullYear()}
                    onChange={(e) => {
                      const newMonth = new Date(leftMonth);
                      newMonth.setFullYear(parseInt(e.target.value));
                      setLeftMonth(newMonth);
                    }}
                    className="text-sm font-medium border-none bg-transparent focus:outline-none cursor-pointer"
                  >
                    {Array.from({ length: 10 }, (_, i) => leftMonth.getFullYear() - 5 + i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-xs">
                <div className="text-gray-400 text-center py-1 font-medium">Su</div>
                <div className="text-gray-400 text-center py-1 font-medium">Mo</div>
                <div className="text-gray-400 text-center py-1 font-medium">Tu</div>
                <div className="text-gray-400 text-center py-1 font-medium">We</div>
                <div className="text-gray-400 text-center py-1 font-medium">Th</div>
                <div className="text-gray-400 text-center py-1 font-medium">Fr</div>
                <div className="text-gray-400 text-center py-1 font-medium">Sa</div>
                {renderCalendar(leftMonth, true)}
              </div>
            </div>

            {/* Right Calendar */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  <select 
                    value={rightMonth.getMonth()}
                    onChange={(e) => {
                      const newMonth = new Date(rightMonth);
                      newMonth.setMonth(parseInt(e.target.value));
                      setRightMonth(newMonth);
                    }}
                    className="text-sm font-medium border-none bg-transparent focus:outline-none cursor-pointer"
                  >
                    {months.map((month, index) => (
                      <option key={month} value={index}>{month}</option>
                    ))}
                  </select>
                  <select 
                    value={rightMonth.getFullYear()}
                    onChange={(e) => {
                      const newMonth = new Date(rightMonth);
                      newMonth.setFullYear(parseInt(e.target.value));
                      setRightMonth(newMonth);
                    }}
                    className="text-sm font-medium border-none bg-transparent focus:outline-none cursor-pointer"
                  >
                    {Array.from({ length: 10 }, (_, i) => rightMonth.getFullYear() - 5 + i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                <ChevronRight 
                  className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" 
                  onClick={() => navigateMonth('next', false)}
                />
              </div>
              <div className="grid grid-cols-7 gap-1 text-xs">
                <div className="text-gray-400 text-center py-1 font-medium">Su</div>
                <div className="text-gray-400 text-center py-1 font-medium">Mo</div>
                <div className="text-gray-400 text-center py-1 font-medium">Tu</div>
                <div className="text-gray-400 text-center py-1 font-medium">We</div>
                <div className="text-gray-400 text-center py-1 font-medium">Th</div>
                <div className="text-gray-400 text-center py-1 font-medium">Fr</div>
                <div className="text-gray-400 text-center py-1 font-medium">Sa</div>
                {renderCalendar(rightMonth, false)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}