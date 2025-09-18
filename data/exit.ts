import { DoorOpen, ClipboardList, Users, Percent, CalendarDays, UserCheck2, Star, StarHalf } from 'lucide-react';

export const exitStats = [
  { title: 'Current Month Exits', value: '0', icon: DoorOpen, bgColor: 'bg-lime-100', iconColor: 'text-lime-700', tooltip: 'Exits in the current month' },
  { title: 'Last Month Exits', value: '0', icon: DoorOpen, bgColor: 'bg-green-100', iconColor: 'text-green-700', tooltip: 'Exits in the previous month' },
  { title: 'Overall Attrition', value: '0%', icon: Percent, bgColor: 'bg-cyan-100', iconColor: 'text-cyan-700', tooltip: 'Overall attrition in selected range' },
  { title: 'Total Resignations', value: '0', icon: ClipboardList, bgColor: 'bg-rose-100', iconColor: 'text-rose-600', tooltip: 'Total resignation requests' },
  { title: 'Total Exits', value: '0', icon: DoorOpen, bgColor: 'bg-yellow-100', iconColor: 'text-yellow-700', tooltip: 'Total exits processed' },
  { title: 'Employees Retained', value: '0', icon: Users, bgColor: 'bg-sky-100', iconColor: 'text-sky-700', tooltip: 'Counter-offers accepted / retained' },
  { title: 'Total Pending Resignations', value: '0', icon: ClipboardList, bgColor: 'bg-amber-100', iconColor: 'text-amber-700', tooltip: 'Resignations pending' },
  { title: 'Average Tenure at Exit', value: '0.00 Yrs', icon: CalendarDays, bgColor: 'bg-emerald-100', iconColor: 'text-emerald-700', tooltip: 'Average tenure of employees who exited' },
  { title: 'Voluntary Exits', value: '0', icon: DoorOpen, bgColor: 'bg-pink-100', iconColor: 'text-pink-700', tooltip: 'Voluntary resignations' },
  { title: 'Regretted Exits', value: '0', icon: UserCheck2, bgColor: 'bg-lime-100', iconColor: 'text-lime-700', tooltip: 'Exits of valued employees' },
  { title: 'Top Performers Exited', value: '0', icon: Star, bgColor: 'bg-teal-100', iconColor: 'text-teal-700', tooltip: 'Top performers who exited' },
  { title: 'Top Talent Exited', value: '0', icon: StarHalf, bgColor: 'bg-fuchsia-100', iconColor: 'text-fuchsia-700', tooltip: 'Critical talent exits' },
];

export const attritionRateData = {
  labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'],
  datasets: [{ label: 'Attrition Rate', data: [0,0,0,0,0,0,0,0,0], borderColor: '#3B82F6', backgroundColor: '#3B82F6' }],
};

export const exitCountData = {
  labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'],
  datasets: [{ label: 'Exits', data: [0,0,0,0,0,0,0,0,0], backgroundColor: '#94A3B8' }],
};

export const exitReasons = {
  labels: ['Compensation','Career Growth','Relocation','Personal','Other'],
  datasets: [{ data: [35, 30, 15, 10, 10], backgroundColor: ['#EF4444','#F59E0B','#60A5FA','#10B981','#A78BFA'] }],
};

export const typeOfExitData = {
  labels: ['Voluntary','Involuntary','Retirement'],
  datasets: [{ label: 'Type', data: [0,0,0], backgroundColor: '#60A5FA' }],
};

export const exitByTenure = {
  labels: ['<1y','1-2y','2-5y','5y+'],
  datasets: [{ data: [0,0,0,0], backgroundColor: ['#F59E0B','#10B981','#3B82F6','#A78BFA'] }],
};

export const regrettedVsNot = {
  labels: ['Regretted','Not Regretted'],
  datasets: [{ data: [0,0], backgroundColor: ['#EF4444','#10B981'] }],
};

// Advanced datasets for exit page showcase
export const exitArea = { labels:['Q1','Q2','Q3','Q4'], datasets:[ { label:'Resignations', data:[2,3,1,4], backgroundColor:'rgba(239,68,68,0.25)', borderColor:'#EF4444', fill:true }, { label:'Retained', data:[1,2,1,2], backgroundColor:'rgba(34,197,94,0.25)', borderColor:'#22C55E', fill:true } ] };
export const exitScatter = { datasets:[ { label:'Tenure vs Score', data:Array.from({length:25},()=>({x:Math.random()*10,y:40+Math.random()*60})), backgroundColor:'#F59E0B' } ] };
export const exitBubble = { datasets:[ { label:'Dept Exits', data:Array.from({length:8},()=>({x:Math.random()*10,y:Math.random()*10,r:6+Math.random()*12})), backgroundColor:'rgba(239,68,68,0.6)' } ] };
export const exitHeatmap = { labels:{ x:['Mon','Tue','Wed','Thu','Fri'], y:['W1','W2','W3','W4'] }, datasets:[{ label:'Exit Events', data:Array.from({length:20},(_,i)=>({x:i%5,y:Math.floor(i/5),v:Math.floor(Math.random()*4)})), backgroundColor(ctx:{ raw: { v: number } }){ const v=ctx.raw.v; return v>2?'#F87171':v>1?'#FCA5A5':'#FEE2E2'; }, width:({chart}:{ chart?: { chartArea?: { width: number; height: number } } })=>{ const ca=chart?.chartArea; return ca? (ca.width/5)-6:20; }, height:({chart}:{ chart?: { chartArea?: { width: number; height: number } } })=>{ const ca=chart?.chartArea; return ca? (ca.height/4)-6:20; } }] };
export const exitTreemap = { datasets:[{ tree:[ { value:5, label:'Eng' }, { value:3, label:'Sales' }, { value:2, label:'HR' }, { value:1, label:'Ops' } ], key:'value', groups:['label'], backgroundColor:'#FCA5A5', spacing:0.5, labels:{ display:true, formatter:(ctx:{ raw: { g: string } })=>ctx.raw.g } }] };
export const exitRadar = { labels:['Compensation','Growth','Culture','Workload','Location'], datasets:[ { label:'Exit Reasons Weight', data:[80,70,60,50,30], backgroundColor:'rgba(248,113,113,0.4)', borderColor:'#EF4444' } ] };
export const exitMixed = { labels:['Jan','Feb','Mar','Apr','May','Jun'], datasets:[ { type:'bar' as const, label:'Exits', data:[0,1,0,2,1,0], backgroundColor:'#F87171' }, { type:'line' as const, label:'Attrition %', data:[0.0,0.3,0.0,0.6,0.3,0.0], borderColor:'#F59E0B', backgroundColor:'#F59E0B' } ] };


