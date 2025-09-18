import { TicketCheck, AlertTriangle, CheckCircle2, TimerReset } from 'lucide-react';

export const helpdeskStats = [
  { title: 'Total Tickets', value: '128', icon: TicketCheck, bgColor: 'bg-blue-100', iconColor: 'text-blue-600', tooltip: 'Tickets created in selected period' },
  { title: 'Open', value: '19', icon: AlertTriangle, bgColor: 'bg-yellow-100', iconColor: 'text-yellow-700', tooltip: 'Currently open tickets' },
  { title: 'Resolved', value: '101', icon: CheckCircle2, bgColor: 'bg-green-100', iconColor: 'text-green-700', tooltip: 'Tickets resolved' },
  { title: 'Avg. Resolution Time', value: '11h', icon: TimerReset, bgColor: 'bg-purple-100', iconColor: 'text-purple-700', tooltip: 'Average time to resolve' },
];

export const helpdeskByCategory = {
  labels: ['Hardware','Software','Network','Access','Other'],
  datasets: [{ label: 'Tickets', data: [38, 42, 12, 22, 14], backgroundColor: '#3B82F6' }],
};

export const helpdeskSlaCompliance = {
  labels: ['Within SLA','Breached'],
  datasets: [{ data: [88, 12], backgroundColor: ['#10B981','#EF4444'] }],
};

// Advanced datasets
export const helpdeskArea = { labels: ['W1','W2','W3','W4'], datasets: [ { label: 'Open', data: [18,14,12,19], backgroundColor: 'rgba(239,68,68,0.25)', borderColor: '#EF4444', fill: true }, { label: 'Resolved', data: [30,28,35,40], backgroundColor: 'rgba(16,185,129,0.25)', borderColor: '#10B981', fill: true } ] };
export const helpdeskScatter = { datasets: [ { label: 'Priority vs Time', data: Array.from({ length: 30 }, () => ({ x: Math.random()*5, y: Math.random()*48 })), backgroundColor: '#3B82F6' } ] };
export const helpdeskBubble = { datasets: [ { label: 'Category Load', data: Array.from({ length: 6 }, () => ({ x: Math.random()*10, y: Math.random()*10, r: 6+Math.random()*12 })), backgroundColor: 'rgba(245,158,11,0.6)' } ] };
export const helpdeskHeatmap = { labels: { x: ['Mon','Tue','Wed','Thu','Fri'], y: ['W1','W2','W3','W4'] }, datasets: [{ label: 'Tickets', data: Array.from({ length:20 }, (_,i)=>({ x:i%5, y:Math.floor(i/5), v: Math.floor(Math.random()*12)})), backgroundColor(ctx:{ raw: { v: number } }){ const v=ctx.raw.v; return v>8?'#F59E0B':v>4?'#FBBF24':'#FEF3C7'; }, width: ({chart}:{ chart?: { chartArea?: { width: number; height: number } } })=>{ const ca=chart?.chartArea; return ca? (ca.width/5)-6:20; }, height: ({chart}:{ chart?: { chartArea?: { width: number; height: number } } })=>{ const ca=chart?.chartArea; return ca? (ca.height/4)-6:20; } }] };
export const helpdeskTreemap = { datasets: [{ tree: [ { value: 42, label: 'Software' }, { value: 38, label: 'Hardware' }, { value: 12, label: 'Network' }, { value: 22, label: 'Access' } ], key:'value', groups:['label'], backgroundColor:'#FDE68A', spacing:0.5, labels:{ display:true, formatter:(ctx:{ raw: { g: string } })=>ctx.raw.g } }] };
export const helpdeskRadar = { labels:['Response','Resolution','Quality','SLA','Satisfaction'], datasets:[ { label:'Score', data:[70,75,80,85,78], backgroundColor:'rgba(59,130,246,0.4)', borderColor:'#3B82F6' } ] };
export const helpdeskMixed = { labels:['Jan','Feb','Mar','Apr','May','Jun'], datasets:[ { type:'bar' as const, label:'Tickets', data:[20,28,24,30,26,32], backgroundColor:'#3B82F6' }, { type:'line' as const, label:'SLA %', data:[92,90,91,93,94,95], borderColor:'#10B981', backgroundColor:'#10B981' } ] };


