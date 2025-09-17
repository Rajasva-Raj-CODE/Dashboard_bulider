import { Users, UserCheck, UserX, UserPlus } from 'lucide-react';

export const peopleStats = [
  { title: 'Active Employee', value: '1', icon: Users, bgColor: 'bg-green-100', iconColor: 'text-green-600' },
  { title: 'Active Confirmed Employees', value: '0', icon: UserCheck, bgColor: 'bg-lime-100', iconColor: 'text-lime-600' },
  { title: 'Active Employees on Probation', value: '0', icon: UserPlus, bgColor: 'bg-yellow-100', iconColor: 'text-yellow-600' },
  { title: 'Active Male Employees', value: '0', icon: UserX, bgColor: 'bg-red-100', iconColor: 'text-red-600' },
  { title: 'Active Female Employees', value: '1', icon: UserCheck, bgColor: 'bg-green-100', iconColor: 'text-green-600' },
];

export const workforceQualificationData = {
  labels: ['Total Employees'],
  datasets: [{ data: [100], backgroundColor: ['#3B82F6'], borderWidth: 0 }],
};

export const workforceGraduationData = {
  labels: ['NA'],
  datasets: [{ label: 'Year Of Passing (Post Grad)', data: [1], backgroundColor: '#3B82F6' }],
};

export const workforceDemographicsData = {
  labels: ['Demographics'],
  datasets: [{ data: [100], backgroundColor: ['#3B82F6'] }],
};

export const workforceLocationData = {
  labels: ['Location'],
  datasets: [{ data: [100], backgroundColor: ['#3B82F6'], borderWidth: 0 }],
};

// Extra datasets for showcase
export const peopleArea = {
  labels: ['Q1','Q2','Q3','Q4'],
  datasets: [ { label: 'Hires', data: [2,3,1,4], backgroundColor: 'rgba(99,102,241,0.25)', borderColor: '#6366F1', fill: true }, { label: 'Exits', data: [1,1,0,2], backgroundColor: 'rgba(239,68,68,0.25)', borderColor: '#EF4444', fill: true } ],
};

export const peopleScatter = { datasets: [ { label: 'Age vs Experience', data: Array.from({ length: 30 }, () => ({ x: 20 + Math.random()*25, y: Math.random()*10 })), backgroundColor: '#3B82F6' } ] };
export const peopleBubble = { datasets: [ { label: 'Teams', data: Array.from({ length: 8 }, () => ({ x: Math.random()*10, y: Math.random()*10, r: 6 + Math.random()*10 })), backgroundColor: 'rgba(16,185,129,0.6)' } ] };
export const peopleHeatmap = { labels: { x: ['Mon','Tue','Wed','Thu','Fri'], y: ['W1','W2','W3','W4'] }, datasets: [{ label: 'Attendance', data: Array.from({ length:20 }, (_,i)=>({ x: i%5, y: Math.floor(i/5), v: Math.floor(Math.random()*10)})), backgroundColor(ctx:any){ const v=ctx.raw.v; return v>6?'#10B981':v>3?'#6EE7B7':'#D1FAE5'; }, width: ({chart}:any)=>{const ca=chart?.chartArea;return ca?(ca.width/5)-6:20;}, height: ({chart}:any)=>{const ca=chart?.chartArea;return ca?(ca.height/4)-6:20;}}] };
export const peopleTreemap = { datasets: [{ tree: [ { value: 40, label: 'Engineering' }, { value: 30, label: 'Sales' }, { value: 20, label: 'HR' }, { value: 10, label: 'Finance' } ], key: 'value', groups:['label'], backgroundColor: '#C7D2FE', spacing: 0.5, labels: { display: true, formatter: (ctx:any)=>ctx.raw.g } }] };
export const peopleRadar = { labels: ['Skill','Ownership','Teamwork','Punctuality','Learning'], datasets: [ { label: 'Avg Score', data: [70,75,85,80,65], backgroundColor: 'rgba(59,130,246,0.4)', borderColor: '#3B82F6' } ] };
export const peopleMixed = { labels: ['Jan','Feb','Mar','Apr','May','Jun'], datasets: [ { type: 'bar' as const, label: 'Interviews', data: [2,4,3,6,5,7], backgroundColor: '#60A5FA' }, { type: 'line' as const, label: 'Offers', data: [1,2,1,3,2,4], borderColor: '#10B981', backgroundColor: '#10B981' } ] };


