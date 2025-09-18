import { CalendarDays, Timer, Briefcase } from 'lucide-react';

export const timesheetStats = [
  { title: 'Total Projects', value: '18', icon: Briefcase, bgColor: 'bg-purple-100', iconColor: 'text-purple-700', tooltip: 'Projects with timesheets' },
  { title: 'Hours Logged (30d)', value: '12,418', icon: Timer, bgColor: 'bg-amber-100', iconColor: 'text-amber-700', tooltip: 'Hours logged in the last 30 days' },
  { title: 'Working Days', value: '22', icon: CalendarDays, bgColor: 'bg-blue-100', iconColor: 'text-blue-600', tooltip: 'Working days in range' },
];

export const timesheetByProject = {
  labels: ['Alpha','Beta','Gamma','Delta','Epsilon','Zeta'],
  datasets: [{ label: 'Hours', data: [2100, 1900, 1720, 1500, 1145, 830], backgroundColor: '#6366F1' }],
};

export const timesheetUtilization = {
  labels: ['Billable','Non-billable'],
  datasets: [{ data: [76, 24], backgroundColor: ['#2563EB','#CBD5E1'] }],
};

// Advanced datasets
export const timesheetArea = { labels:['W1','W2','W3','W4'], datasets:[ { label:'Billable', data:[3000,3200,3100,3400], backgroundColor:'rgba(99,102,241,0.25)', borderColor:'#6366F1', fill:true }, { label:'Non-billable', data:[800,700,900,850], backgroundColor:'rgba(148,163,184,0.25)', borderColor:'#94A3B8', fill:true } ] };
export const timesheetScatter = { datasets:[ { label:'Hours vs Tasks', data:Array.from({length:30},()=>({x:Math.random()*10,y:Math.random()*8})), backgroundColor:'#2563EB' } ] };
export const timesheetBubble = { datasets:[ { label:'Project Weight', data:Array.from({length:8},()=>({x:Math.random()*10,y:Math.random()*10,r:6+Math.random()*12})), backgroundColor:'rgba(99,102,241,0.6)' } ] };
export const timesheetHeatmap = { labels:{ x:['Mon','Tue','Wed','Thu','Fri'], y:['W1','W2','W3','W4'] }, datasets:[{ label:'Hours', data:Array.from({length:20},(_,i)=>({x:i%5,y:Math.floor(i/5),v:Math.floor(Math.random()*10)})), backgroundColor(ctx:{ raw: { v: number } }){ const v=ctx.raw.v; return v>6?'#2563EB':v>3?'#93C5FD':'#DBEAFE'; }, width:({chart}:{ chart?: { chartArea?: { width: number; height: number } } })=>{ const ca=chart?.chartArea; return ca? (ca.width/5)-6:20; }, height:({chart}:{ chart?: { chartArea?: { width: number; height: number } } })=>{ const ca=chart?.chartArea; return ca? (ca.height/4)-6:20; } }] };
export const timesheetTreemap = { datasets:[{ tree:[ { value:2100, label:'Alpha' }, { value:1900, label:'Beta' }, { value:1720, label:'Gamma' }, { value:1500, label:'Delta' } ], key:'value', groups:['label'], backgroundColor:'#C7D2FE', spacing:0.5, labels:{ display:true, formatter:(ctx:{ raw: { g: string } })=>ctx.raw.g } }] };
export const timesheetRadar = { labels:['Focus','Efficiency','Overtime','Punctuality','Collaboration'], datasets:[ { label:'Team', data:[70,80,60,85,75], backgroundColor:'rgba(37,99,235,0.4)', borderColor:'#2563EB' } ] };
export const timesheetMixed = { labels:['Jan','Feb','Mar','Apr','May','Jun'], datasets:[ { type:'bar' as const, label:'Hours', data:[1900,2100,2050,2200,2300,2400], backgroundColor:'#6366F1' }, { type:'line' as const, label:'Utilization %', data:[72,74,73,76,77,78], borderColor:'#10B981', backgroundColor:'#10B981' } ] };


