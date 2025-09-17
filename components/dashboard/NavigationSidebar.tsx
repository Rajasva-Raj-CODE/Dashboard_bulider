'use client';

import { ExternalLink } from 'lucide-react';

interface NavigationSidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function NavigationSidebar({ currentPage, onPageChange }: NavigationSidebarProps) {
  const navigationItems = [
    { id: 'intranet', label: 'Intranet Analytics' },
    { id: 'people', label: 'People Analytics' },
    { id: 'content', label: 'Content Analytics' },
    { id: 'hr', label: 'HR Analytics' },
    { id: 'helpdesk', label: 'Helpdesk / Support Ticket Stats' },
    { id: 'recruitment', label: 'Recruitment Analytics' },
    { id: 'pms', label: 'PMS Analytics' },
    { id: 'lms', label: 'LMS Analytics' },
    { id: 'timesheet', label: 'Timesheet Analytics' },
    { id: 'exit', label: 'Exit Insights' },
    { id: 'workflow', label: 'Workflow Dashboard' },
    { id: 'attendance', label: 'Attendance Analytics' },
    { id: 'wellbeing', label: 'Employee Well-Being' }
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-80 bg-white border-r border-gray-200 overflow-y-auto rounded-r-2xl shadow-sm">
      <div className="p-6 pt-8">
        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`w-full flex items-center justify-between p-3 text-left rounded-xl border transition-colors ${
                currentPage === item.id 
                  ? 'bg-blue-50 border-blue-200 text-blue-700' 
                  : 'border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span>{item.label}</span>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}