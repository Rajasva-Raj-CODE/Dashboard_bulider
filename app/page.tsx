'use client';

import { useState } from 'react';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { NavigationSidebar } from '@/components/dashboard/NavigationSidebar';
import { IntranetAnalytics } from '@/components/analytics/IntranetAnalytics';
import { PeopleAnalytics } from '@/components/analytics/PeopleAnalytics';
import { ContentAnalytics } from '@/components/analytics/ContentAnalytics';
import { AttendanceAnalytics } from '@/components/analytics/AttendanceAnalytics';
import { HRAnalytics } from '@/components/analytics/HRAnalytics';
import { HelpdeskAnalytics } from '@/components/analytics/HelpdeskAnalytics';
import { RecruitmentAnalytics } from '@/components/analytics/RecruitmentAnalytics';
import { PMSAnalytics } from '@/components/analytics/PMSAnalytics';
import { LMSAnalytics } from '@/components/analytics/LMSAnalytics';
import { TimesheetAnalytics } from '@/components/analytics/TimesheetAnalytics';
import { ExitAnalytics } from '@/components/analytics/ExitAnalytics';
import { WorkflowAnalytics } from '@/components/analytics/WorkflowAnalytics';
import { WellbeingAnalytics } from '@/components/analytics/WellbeingAnalytics';

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState('intranet');
  const [dateRange, setDateRange] = useState('Sep 1, 2024 - Sep 17, 2025');

  const renderContent = () => {
    switch (currentPage) {
      case 'people':
        return <PeopleAnalytics />;
      case 'content':
        return <ContentAnalytics />;
      case 'attendance':
        return <AttendanceAnalytics />;
      case 'hr':
        return <HRAnalytics />;
      case 'helpdesk':
        return <HelpdeskAnalytics />;
      case 'recruitment':
        return <RecruitmentAnalytics />;
      case 'pms':
        return <PMSAnalytics />;
      case 'lms':
        return <LMSAnalytics />;
      case 'timesheet':
        return <TimesheetAnalytics />;
      case 'exit':
        return <ExitAnalytics />;
      case 'workflow':
        return <WorkflowAnalytics />;
      case 'wellbeing':
        return <WellbeingAnalytics />;
      default:
        return <IntranetAnalytics />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar */}
      <NavigationSidebar 
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col pl-80">
        {/* Header */}
        <DashboardHeader 
          title={
            currentPage === 'intranet' ? 'Intranet Analytics' :
            currentPage === 'people' ? 'People Analytics' :
            currentPage === 'content' ? 'Content Analytics' :
            currentPage === 'attendance' ? 'Attendance Analytics' :
            currentPage === 'hr' ? 'HR Analytics' :
            currentPage === 'helpdesk' ? 'Helpdesk / Support Ticket Stats' :
            currentPage === 'recruitment' ? 'Recruitment Analytics' :
            currentPage === 'pms' ? 'PMS Analytics' :
            currentPage === 'lms' ? 'LMS Analytics' :
            currentPage === 'timesheet' ? 'Timesheet Analytics' :
            currentPage === 'exit' ? 'Exit Insights' :
            currentPage === 'workflow' ? 'Workflow Dashboard' :
            'Employee Well-Being'
          }
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
        />

        {/* Content Area */}
        <div className="flex-1 flex">
          <main className="flex-1 p-6">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}