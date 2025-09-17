import { CalendarDays, Users, CalendarX2, CalendarCheck2 } from 'lucide-react';

export const attendanceStats = [
  { title: 'Total Work Days', value: '0', icon: CalendarDays, bgColor: 'bg-rose-100', iconColor: 'text-rose-600', tooltip: 'Number of working days in selected range' },
  { title: 'Total Employee', value: '1', icon: Users, bgColor: 'bg-sky-100', iconColor: 'text-sky-600', tooltip: 'Headcount considered for attendance' },
  { title: 'Total Leaves', value: '0', icon: CalendarX2, bgColor: 'bg-violet-100', iconColor: 'text-violet-600', tooltip: 'All leave days recorded' },
  { title: 'Total Unplanned Leaves', value: '0', icon: CalendarX2, bgColor: 'bg-cyan-100', iconColor: 'text-cyan-600', tooltip: 'Unplanned/Unapproved leave days' },
  { title: 'Total Planned Leaves', value: '0', icon: CalendarCheck2, bgColor: 'bg-pink-100', iconColor: 'text-pink-600', tooltip: 'Approved planned leave days' },
];

export const dayWiseAbsenceData = {
  labels: Array.from({ length: 60 }, (_, i) => `2025-08-${String(i + 1).padStart(2, '0')}`),
  datasets: [
    { label: 'Absent', data: Array.from({ length: 60 }, (_, i) => (i >= 10 && i < 20 ? 2 : 1)), backgroundColor: '#3B82F6' },
  ],
};

export const monthlyAttendanceData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    { label: 'Present', data: [60, 62, 60, 58, 32, 33], backgroundColor: '#10B981' },
  ],
};

export const attendancePercentData = {
  labels: ['Total Employees'],
  datasets: [
    { data: [261], backgroundColor: ['#3B82F6'], borderWidth: 0 },
  ],
};

// Advanced chart demo datasets
export const attendanceArea = {
  labels: ['W1','W2','W3','W4'],
  datasets: [ { label: 'Present', data: [45, 48, 46, 47], backgroundColor: 'rgba(34,197,94,0.25)', borderColor: '#22C55E', fill: true }, { label: 'Absent', data: [5, 2, 4, 3], backgroundColor: 'rgba(239,68,68,0.25)', borderColor: '#EF4444', fill: true } ],
};

export const attendanceScatter = { datasets: [ { label: 'Late Minutes vs Day', data: Array.from({ length: 25 }, (_,i) => ({ x: i+1, y: Math.floor(Math.random()*30) })), backgroundColor: '#F59E0B' } ] };
export const attendanceBubble = { datasets: [ { label: 'Dept Absence', data: Array.from({ length: 8 }, () => ({ x: Math.random()*10, y: Math.random()*10, r: 6 + Math.random()*10 })), backgroundColor: 'rgba(99,102,241,0.6)' } ] };
export const attendanceHeatmap = { labels: { x: ['Mon','Tue','Wed','Thu','Fri'], y: ['W1','W2','W3','W4'] }, datasets: [{ label: 'Absences', data: Array.from({ length:20 }, (_,i)=>({ x: i%5, y: Math.floor(i/5), v: Math.floor(Math.random()*8)})), backgroundColor(ctx:any){ const v=ctx.raw.v; return v>5?'#EF4444':v>2?'#FDBA74':'#FEE2E2'; }, width: ({chart}:any)=>{const ca=chart?.chartArea; return ca? (ca.width/5)-6:20;}, height: ({chart}:any)=>{const ca=chart?.chartArea; return ca? (ca.height/4)-6:20;} }] };
export const attendanceTreemap = { datasets: [{ tree: [ { value: 10, label: 'Eng' }, { value: 6, label: 'Sales' }, { value: 4, label: 'HR' }, { value: 3, label: 'Ops' } ], key: 'value', groups: ['label'], backgroundColor: '#FBCFE8', spacing: 0.5, labels: { display: true, formatter: (ctx:any)=>ctx.raw.g } }] };
export const attendanceRadar = { labels: ['Punctuality','Presence','Overtime','Leaves','WFH'], datasets: [ { label: 'Score', data: [80,85,60,50,70], backgroundColor: 'rgba(96,165,250,0.4)', borderColor: '#60A5FA' } ] };
export const attendanceMixed = { labels: ['Jan','Feb','Mar','Apr','May','Jun'], datasets: [ { type: 'bar' as const, label: 'Absences', data: [2,3,2,4,3,2], backgroundColor: '#F87171' }, { type: 'line' as const, label: 'Avg Check-in Time', data: [9.2,9.1,9.3,9.0,9.05,9.1], borderColor: '#10B981', backgroundColor: '#10B981' } ] };


