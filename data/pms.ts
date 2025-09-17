import { Target, CheckCircle2, Gauge } from 'lucide-react';

export const pmsStats = [
  { title: 'Goals Set', value: '261', icon: Target, bgColor: 'bg-indigo-100', iconColor: 'text-indigo-600', tooltip: 'Employees with goals' },
  { title: 'Completed Reviews', value: '214', icon: CheckCircle2, bgColor: 'bg-green-100', iconColor: 'text-green-700', tooltip: 'Finished review cycles' },
  { title: 'Avg. Score', value: '3.8', icon: Gauge, bgColor: 'bg-amber-100', iconColor: 'text-amber-700', tooltip: 'Average performance score' },
];

export const pmsScoreDistribution = {
  labels: ['1','2','3','4','5'],
  datasets: [{ label: 'Employees', data: [5, 24, 121, 92, 19], backgroundColor: '#A78BFA' }],
};

export const pmsProgress = {
  labels: ['Q1','Q2','Q3','Q4'],
  datasets: [{ label: 'Reviews Completed', data: [30, 55, 80, 100], borderColor: '#6366F1', backgroundColor: '#6366F1' }],
};

// Advanced datasets
export const pmsArea = { labels:['W1','W2','W3','W4'], datasets:[ { label:'Goals Set', data:[40,50,45,55], backgroundColor:'rgba(99,102,241,0.25)', borderColor:'#6366F1', fill:true }, { label:'Goals Completed', data:[20,30,35,45], backgroundColor:'rgba(16,185,129,0.25)', borderColor:'#10B981', fill:true } ] };
export const pmsScatter = { datasets:[ { label:'Score vs Tenure', data:Array.from({length:30},()=>({x:Math.random()*10,y:50+Math.random()*50})), backgroundColor:'#A78BFA' } ] };
export const pmsBubble = { datasets:[ { label:'Team Goal Load', data:Array.from({length:10},()=>({x:Math.random()*10,y:Math.random()*10,r:6+Math.random()*12})), backgroundColor:'rgba(59,130,246,0.6)' } ] };
export const pmsHeatmap = { labels:{ x:['Mon','Tue','Wed','Thu','Fri'], y:['W1','W2','W3','W4'] }, datasets:[{ label:'Check-ins', data:Array.from({length:20},(_,i)=>({x:i%5,y:Math.floor(i/5),v:Math.floor(Math.random()*10)})), backgroundColor(ctx:any){ const v=ctx.raw.v; return v>6?'#34D399':v>3?'#86EFAC':'#D1FAE5'; }, width:({chart}:any)=>{const ca=chart?.chartArea;return ca?(ca.width/5)-6:20;}, height:({chart}:any)=>{ const ca=chart?.chartArea;return ca?(ca.height/4)-6:20;} }] };
export const pmsTreemap = { datasets:[{ tree:[ { value:30, label:'Engineering' }, { value:20, label:'Sales' }, { value:15, label:'HR' }, { value:10, label:'Finance' } ], key:'value', groups:['label'], backgroundColor:'#BFDBFE', spacing:0.5, labels:{ display:true, formatter:(ctx:any)=>ctx.raw.g } }] };
export const pmsRadar = { labels:['Delivery','Quality','Ownership','Teamwork','Learning'], datasets:[ { label:'Performance', data:[80,75,85,82,70], backgroundColor:'rgba(99,102,241,0.4)', borderColor:'#6366F1' } ] };
export const pmsMixed = { labels:['Jan','Feb','Mar','Apr','May','Jun'], datasets:[ { type:'bar' as const, label:'Goals Completed', data:[5,8,7,10,12,14], backgroundColor:'#10B981' }, { type:'line' as const, label:'Avg Score', data:[3.4,3.6,3.7,3.8,3.9,4.0], borderColor:'#A78BFA', backgroundColor:'#A78BFA' } ] };


