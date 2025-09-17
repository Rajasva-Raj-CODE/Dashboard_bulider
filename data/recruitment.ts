import { Briefcase, FileText, Users } from 'lucide-react';

export const recruitmentStats = [
  { title: 'Open Positions', value: '14', icon: Briefcase, bgColor: 'bg-sky-100', iconColor: 'text-sky-600', tooltip: 'Vacancies currently open' },
  { title: 'Applications', value: '327', icon: FileText, bgColor: 'bg-amber-100', iconColor: 'text-amber-700', tooltip: 'Total applications received' },
  { title: 'Interviews Scheduled', value: '21', icon: Users, bgColor: 'bg-lime-100', iconColor: 'text-lime-700', tooltip: 'Upcoming interviews' },
];

export const recruitmentPipeline = {
  labels: ['Applied','Screening','Interview','Offer','Hired'],
  datasets: [{ label: 'Candidates', data: [327, 118, 57, 16, 9], backgroundColor: '#60A5FA' }],
};

export const recruitmentSources = {
  labels: ['Referral','Job Portal','Campus','Agency','Direct'],
  datasets: [{ data: [25, 45, 10, 15, 5], backgroundColor: ['#10B981','#3B82F6','#F59E0B','#A78BFA','#F472B6'] }],
};

// Advanced datasets
export const recruitmentArea = { labels: ['W1','W2','W3','W4'], datasets: [ { label: 'Applications', data: [60, 80, 70, 90], backgroundColor: 'rgba(59,130,246,0.25)', borderColor: '#3B82F6', fill: true }, { label: 'Interviews', data: [15, 18, 16, 20], backgroundColor: 'rgba(16,185,129,0.25)', borderColor: '#10B981', fill: true } ] };
export const recruitmentScatter = { datasets: [ { label: 'Experience vs Score', data: Array.from({ length: 40 }, () => ({ x: Math.random()*10, y: 40+Math.random()*60 })), backgroundColor: '#A78BFA' } ] };
export const recruitmentBubble = { datasets: [ { label: 'Openings by Role', data: Array.from({ length: 10 }, () => ({ x: Math.random()*10, y: Math.random()*10, r: 6+Math.random()*12 })), backgroundColor: 'rgba(244,114,182,0.6)' } ] };
export const recruitmentHeatmap = { labels: { x: ['Mon','Tue','Wed','Thu','Fri'], y: ['W1','W2','W3','W4'] }, datasets: [{ label:'Applications', data: Array.from({ length:20 }, (_,i)=>({ x:i%5, y:Math.floor(i/5), v: Math.floor(Math.random()*20)})), backgroundColor(ctx:any){ const v=ctx.raw.v; return v>12?'#60A5FA':v>6?'#93C5FD':'#DBEAFE'; }, width: ({chart}:any)=>{ const ca=chart?.chartArea; return ca? (ca.width/5)-6:20; }, height: ({chart}:any)=>{ const ca=chart?.chartArea; return ca? (ca.height/4)-6:20; } }] };
export const recruitmentTreemap = { datasets: [{ tree: [ { value: 9, label: 'Backend' }, { value: 7, label: 'Frontend' }, { value: 5, label: 'QA' }, { value: 3, label: 'PM' } ], key:'value', groups:['label'], backgroundColor:'#DDD6FE', spacing:0.5, labels:{ display:true, formatter:(ctx:any)=>ctx.raw.g } }] };
export const recruitmentRadar = { labels:['Technical','Communication','Culture Fit','Problem Solving','Leadership'], datasets:[ { label:'Avg Score', data:[78,72,80,75,60], backgroundColor:'rgba(99,102,241,0.4)', borderColor:'#6366F1' } ] };
export const recruitmentMixed = { labels:['Jan','Feb','Mar','Apr','May','Jun'], datasets:[ { type:'bar' as const, label:'Applications', data:[50,70,60,80,90,100], backgroundColor:'#60A5FA' }, { type:'line' as const, label:'Offers', data:[5,7,6,9,8,10], borderColor:'#10B981', backgroundColor:'#10B981' } ] };


