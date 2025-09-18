import { Workflow, CheckCircle2, Clock } from 'lucide-react';

export const workflowStats = [
  { title: 'Active Workflows', value: '18', icon: Workflow, bgColor: 'bg-blue-100', iconColor: 'text-blue-600', tooltip: 'Enabled workflows' },
  { title: 'Completed (30d)', value: '412', icon: CheckCircle2, bgColor: 'bg-emerald-100', iconColor: 'text-emerald-700', tooltip: 'Completed items in 30 days' },
  { title: 'Avg. Cycle Time', value: '2.1d', icon: Clock, bgColor: 'bg-amber-100', iconColor: 'text-amber-700', tooltip: 'Average completion time' },
];

export const workflowThroughput = {
  labels: Array.from({ length: 12 }, (_, i) => `W${i + 1}`),
  datasets: [{ label: 'Throughput', data: [20,25,33,28,40,36,44,38,35,42,47,54], backgroundColor: '#3B82F6' }],
};

export const workflowStates = {
  labels: ['Queued','In Progress','Blocked','Done'],
  datasets: [{ data: [12, 28, 4, 56], backgroundColor: ['#CBD5E1','#60A5FA','#F87171','#10B981'] }],
};

// Advanced datasets
export const workflowArea = { labels:['W1','W2','W3','W4'], datasets:[ { label:'Started', data:[40,45,50,55], backgroundColor:'rgba(59,130,246,0.25)', borderColor:'#3B82F6', fill:true }, { label:'Completed', data:[32,38,44,52], backgroundColor:'rgba(16,185,129,0.25)', borderColor:'#10B981', fill:true } ] };
export const workflowScatter = { datasets:[ { label:'Cycle Time vs Items', data:Array.from({length:30},()=>({x:Math.random()*50,y:Math.random()*5})), backgroundColor:'#60A5FA' } ] };
export const workflowBubble = { datasets:[ { label:'Workflow Load', data:Array.from({length:8},()=>({x:Math.random()*10,y:Math.random()*10,r:6+Math.random()*12})), backgroundColor:'rgba(99,102,241,0.6)' } ] };
export const workflowHeatmap = { labels:{ x:['Mon','Tue','Wed','Thu','Fri'], y:['W1','W2','W3','W4'] }, datasets:[{ label:'Throughput', data:Array.from({length:20},(_,i)=>({x:i%5,y:Math.floor(i/5),v:Math.floor(Math.random()*10)})), backgroundColor(ctx:{ raw: { v: number } }){ const v=ctx.raw.v; return v>6?'#3B82F6':v>3?'#93C5FD':'#DBEAFE'; }, width:({chart}:{ chart?: { chartArea?: { width: number; height: number } } })=>{ const ca=chart?.chartArea; return ca? (ca.width/5)-6:20; }, height:({chart}:{ chart?: { chartArea?: { width: number; height: number } } })=>{ const ca=chart?.chartArea; return ca? (ca.height/4)-6:20; } }] };
export const workflowTreemap = { datasets:[{ tree:[ { value:18, label:'Onboarding' }, { value:12, label:'Expense' }, { value:10, label:'Leave' }, { value:8, label:'Access' } ], key:'value', groups:['label'], backgroundColor:'#BFDBFE', spacing:0.5, labels:{ display:true, formatter:(ctx:{ raw: { g: string } })=>ctx.raw.g } }] };
export const workflowRadar = { labels:['Latency','Throughput','Reliability','Automation','Simplicity'], datasets:[ { label:'Workflow Index', data:[70,80,85,65,75], backgroundColor:'rgba(59,130,246,0.4)', borderColor:'#3B82F6' } ] };
export const workflowMixed = { labels:['Jan','Feb','Mar','Apr','May','Jun'], datasets:[ { type:'bar' as const, label:'Completed', data:[50,60,55,70,68,75], backgroundColor:'#10B981' }, { type:'line' as const, label:'Avg Cycle Time (h)', data:[3.2,3.0,2.8,2.6,2.5,2.4], borderColor:'#F59E0B', backgroundColor:'#F59E0B' } ] };


