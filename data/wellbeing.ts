import { HeartPulse, Smile, AlertTriangle } from 'lucide-react';

export const wellbeingStats = [
  { title: 'Engagement Score', value: '76', icon: Smile, bgColor: 'bg-yellow-100', iconColor: 'text-yellow-700', tooltip: 'Latest pulse engagement score' },
  { title: 'Wellness Activities', value: '12', icon: HeartPulse, bgColor: 'bg-rose-100', iconColor: 'text-rose-600', tooltip: 'Activities conducted this quarter' },
  { title: 'Risk Flags', value: '4', icon: AlertTriangle, bgColor: 'bg-orange-100', iconColor: 'text-orange-700', tooltip: 'Teams needing attention' },
];

export const wellbeingParticipation = {
  labels: ['Yoga','Counseling','Steps Challenge','Mindfulness','Nutrition'],
  datasets: [{ label: 'Participants', data: [64, 35, 88, 42, 51], backgroundColor: '#F472B6' }],
};

export const wellbeingSentiment = {
  labels: ['Positive','Neutral','Negative'],
  datasets: [{ data: [68, 22, 10], backgroundColor: ['#10B981','#94A3B8','#EF4444'] }],
};

// Advanced datasets
export const wellbeingArea = { labels:['W1','W2','W3','W4'], datasets:[ { label:'Participation', data:[50,60,65,72], backgroundColor:'rgba(244,114,182,0.25)', borderColor:'#F472B6', fill:true }, { label:'Satisfaction', data:[70,72,74,76], backgroundColor:'rgba(59,130,246,0.25)', borderColor:'#3B82F6', fill:true } ] };
export const wellbeingScatter = { datasets:[ { label:'Age vs Steps', data:Array.from({length:30},()=>({x:20+Math.random()*30,y:2000+Math.random()*8000})), backgroundColor:'#F472B6' } ] };
export const wellbeingBubble = { datasets:[ { label:'Activity Size', data:Array.from({length:8},()=>({x:Math.random()*10,y:Math.random()*10,r:6+Math.random()*12})), backgroundColor:'rgba(244,114,182,0.6)' } ] };
export const wellbeingHeatmap = { labels:{ x:['Mon','Tue','Wed','Thu','Fri'], y:['W1','W2','W3','W4'] }, datasets:[{ label:'Participation', data:Array.from({length:20},(_,i)=>({x:i%5,y:Math.floor(i/5),v:Math.floor(Math.random()*10)})), backgroundColor(ctx:any){ const v=ctx.raw.v; return v>6?'#F472B6':v>3?'#FBCFE8':'#FCE7F3'; }, width:({chart}:any)=>{ const ca=chart?.chartArea; return ca? (ca.width/5)-6:20; }, height:({chart}:any)=>{ const ca=chart?.chartArea; return ca? (ca.height/4)-6:20; } }] };
export const wellbeingTreemap = { datasets:[{ tree:[ { value:64, label:'Yoga' }, { value:35, label:'Counseling' }, { value:88, label:'Steps' }, { value:42, label:'Mindfulness' }, { value:51, label:'Nutrition' } ], key:'value', groups:['label'], backgroundColor:'#FBCFE8', spacing:0.5, labels:{ display:true, formatter:(ctx:any)=>ctx.raw.g } }] };
export const wellbeingRadar = { labels:['Physical','Mental','Social','Work','Lifestyle'], datasets:[ { label:'Well-being', data:[72,68,70,66,74], backgroundColor:'rgba(244,114,182,0.4)', borderColor:'#F472B6' } ] };
export const wellbeingMixed = { labels:['Jan','Feb','Mar','Apr','May','Jun'], datasets:[ { type:'bar' as const, label:'Activities', data:[2,4,3,5,6,7], backgroundColor:'#F472B6' }, { type:'line' as const, label:'Engagement Score', data:[70,71,72,73,75,76], borderColor:'#3B82F6', backgroundColor:'#3B82F6' } ] };


