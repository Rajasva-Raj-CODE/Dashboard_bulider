import { Users, UserPlus, ClipboardList, CalendarCheck2 } from 'lucide-react';

export const hrStats = [
  { title: 'Active Employees', value: '261', icon: Users, bgColor: 'bg-emerald-100', iconColor: 'text-emerald-600', tooltip: 'Currently active employees' },
  { title: 'New Joinees (30d)', value: '7', icon: UserPlus, bgColor: 'bg-indigo-100', iconColor: 'text-indigo-600', tooltip: 'Recent hires in last 30 days' },
  { title: 'Open Policies', value: '12', icon: ClipboardList, bgColor: 'bg-amber-100', iconColor: 'text-amber-600', tooltip: 'Active HR policies' },
  { title: 'Approved Leaves (30d)', value: '23', icon: CalendarCheck2, bgColor: 'bg-rose-100', iconColor: 'text-rose-600', tooltip: 'Leaves approved in last 30 days' },
];

export const hrHeadcountTrend = {
  labels: Array.from({ length: 12 }, (_, i) => `M${i + 1}`),
  datasets: [{ label: 'Headcount', data: [240,242,245,247,249,250,252,255,257,259,260,261], borderColor: '#2563EB', backgroundColor: '#2563EB' }],
};

export const hrAttritionByMonth = {
  labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  datasets: [{ label: 'Attrition', data: [1,0,2,1,0,1,1,0,1,0,0,1], backgroundColor: '#F59E0B' }],
};

// Advanced datasets
export const hrArea = { labels: ['Q1','Q2','Q3','Q4'], datasets: [ { label: 'Hires', data: [12,18,14,20], backgroundColor: 'rgba(59,130,246,0.25)', borderColor: '#3B82F6', fill: true }, { label: 'Exits', data: [5,3,4,2], backgroundColor: 'rgba(239,68,68,0.25)', borderColor: '#EF4444', fill: true } ] };
export const hrScatter = { datasets: [ { label: 'Age vs Salary', data: Array.from({ length: 35 }, () => ({ x: 22+Math.random()*30, y: 20+Math.random()*80 })), backgroundColor: '#22C55E' } ] };
export const hrBubble = { datasets: [ { label: 'Team size', data: Array.from({ length: 10 }, () => ({ x: Math.random()*10, y: Math.random()*10, r: 6+Math.random()*10 })), backgroundColor: 'rgba(99,102,241,0.6)' } ] };
export const hrHeatmap = { labels: { x: ['Mon','Tue','Wed','Thu','Fri'], y: ['W1','W2','W3','W4'] }, datasets: [{ label: 'Interviews', data: Array.from({ length:20 }, (_,i)=>({ x: i%5, y: Math.floor(i/5), v: Math.floor(Math.random()*10)})), backgroundColor(ctx:any){ const v=ctx.raw.v; return v>6?'#6366F1':v>3?'#A5B4FC':'#E0E7FF'; }, width: ({chart}:any)=>{ const ca=chart?.chartArea; return ca? (ca.width/5)-6:20; }, height: ({chart}:any)=>{ const ca=chart?.chartArea; return ca? (ca.height/4)-6:20; } }] };
export const hrTreemap = { datasets: [{ tree: [ { value: 120, label: 'Engineering' }, { value: 80, label: 'Sales' }, { value: 40, label: 'HR' }, { value: 35, label: 'Finance' } ], key: 'value', groups:['label'], backgroundColor: '#93C5FD', spacing: 0.5, labels:{ display:true, formatter:(ctx:any)=>ctx.raw.g } }] };
export const hrRadar = { labels: ['Engagement','Retention','Satisfaction','Diversity','Compliance'], datasets: [ { label: 'Index', data: [70,85,78,60,90], backgroundColor: 'rgba(34,197,94,0.4)', borderColor: '#22C55E' } ] };
export const hrMixed = { labels: ['Jan','Feb','Mar','Apr','May','Jun'], datasets: [ { type:'bar' as const, label: 'Hires', data: [2,4,3,6,5,7], backgroundColor: '#60A5FA' }, { type:'line' as const, label: 'Attrition %', data: [2,1.5,2.2,1.8,1.2,1.3], borderColor:'#F59E0B', backgroundColor:'#F59E0B' } ] };


