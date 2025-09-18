'use client';

import { useState, useEffect } from 'react';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { NavigationSidebar } from '@/components/dashboard/NavigationSidebar';
import { 
  IntranetAnalyticsWithSkeleton,
  PeopleAnalyticsWithSkeleton,
  ContentAnalyticsWithSkeleton,
  AttendanceAnalyticsWithSkeleton,
  HRAnalyticsWithSkeleton,
  HelpdeskAnalyticsWithSkeleton,
  RecruitmentAnalyticsWithSkeleton,
  PMSAnalyticsWithSkeleton,
  LMSAnalyticsWithSkeleton,
  TimesheetAnalyticsWithSkeleton,
  ExitAnalyticsWithSkeleton,
  WorkflowAnalyticsWithSkeleton,
  WellbeingAnalyticsWithSkeleton
} from '@/components/analytics';
import { LayoutSkeleton } from '@/components/skeleton';
import { useSkeletonLoading } from '@/hooks/useSkeletonLoading';

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState('intranet');
  const [dateRange, setDateRange] = useState('Sep 1, 2024 - Sep 17, 2025');
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  
  const { loading, startLoading, stopLoading } = useSkeletonLoading({
    key: 'dashboard',
    initialLoading: true,
    delay: 0 // Remove delay to show skeleton immediately
  });

  // Simulate initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
      stopLoading();
    }, 1200); // Reduced from 2000ms to 1200ms

    return () => clearTimeout(timer);
  }, [stopLoading]);

  // Simulate page change loading
  useEffect(() => {
    if (!isInitialLoad) {
      startLoading();
      const timer = setTimeout(() => {
        stopLoading();
      }, 600); // Reduced from 1000ms to 600ms

      return () => clearTimeout(timer);
    }
  }, [currentPage, isInitialLoad, startLoading, stopLoading]);

  const renderContent = () => {
    switch (currentPage) {
      case 'people':
        return <PeopleAnalyticsWithSkeleton />;
      case 'content':
        return <ContentAnalyticsWithSkeleton />;
      case 'attendance':
        return <AttendanceAnalyticsWithSkeleton />;
      case 'hr':
        return <HRAnalyticsWithSkeleton />;
      case 'helpdesk':
        return <HelpdeskAnalyticsWithSkeleton />;
      case 'recruitment':
        return <RecruitmentAnalyticsWithSkeleton />;
      case 'pms':
        return <PMSAnalyticsWithSkeleton />;
      case 'lms':
        return <LMSAnalyticsWithSkeleton />;
      case 'timesheet':
        return <TimesheetAnalyticsWithSkeleton />;
      case 'exit':
        return <ExitAnalyticsWithSkeleton />;
      case 'workflow':
        return <WorkflowAnalyticsWithSkeleton />;
      case 'wellbeing':
        return <WellbeingAnalyticsWithSkeleton />;
      default:
        return <IntranetAnalyticsWithSkeleton />;
    }
  };

  // Show skeleton during loading
  if (loading) {
    return <LayoutSkeleton />;
  }

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