import { GraduationCap, BookOpenText, Clock } from 'lucide-react';

export const lmsStats = [
  { title: 'Active Courses', value: '34', icon: BookOpenText, bgColor: 'bg-sky-100', iconColor: 'text-sky-600', tooltip: 'Courses currently available' },
  { title: 'Enrollments', value: '612', icon: GraduationCap, bgColor: 'bg-teal-100', iconColor: 'text-teal-600', tooltip: 'Total course enrollments' },
  { title: 'Avg. Time Spent', value: '47m', icon: Clock, bgColor: 'bg-rose-100', iconColor: 'text-rose-600', tooltip: 'Average time per learner' },
];

export const lmsTopCourses = {
  labels: ['React Basics','Advanced JS','UI/UX','Data Analysis','Leadership'],
  datasets: [{ label: 'Enrollments', data: [132, 98, 87, 76, 54], backgroundColor: '#22C55E' }],
};

export const lmsCompletion = {
  labels: ['Completed','In Progress','Not Started'],
  datasets: [{ data: [58, 32, 10], backgroundColor: ['#16A34A','#F59E0B','#94A3B8'] }],
};

// Advanced datasets
export const lmsArea = { labels:['W1','W2','W3','W4'], datasets:[ { label:'Enrollments', data:[100,120,140,150], backgroundColor:'rgba(14,165,233,0.25)', borderColor:'#0EA5E9', fill:true }, { label:'Completions', data:[60,80,100,120], backgroundColor:'rgba(34,197,94,0.25)', borderColor:'#22C55E', fill:true } ] };
export const lmsScatter = { datasets:[ { label:'Score vs Time', data:Array.from({length:30},()=>({x:10+Math.random()*40,y:40+Math.random()*60})), backgroundColor:'#0EA5E9' } ] };
export const lmsBubble = { datasets:[ { label:'Course Popularity', data:Array.from({length:8},()=>({x:Math.random()*10,y:Math.random()*10,r:6+Math.random()*12})), backgroundColor:'rgba(99,102,241,0.6)' } ] };
export const lmsHeatmap = { labels:{ x:['Mon','Tue','Wed','Thu','Fri'], y:['W1','W2','W3','W4'] }, datasets:[{ label:'Sessions', data:Array.from({length:20},(_,i)=>({x:i%5,y:Math.floor(i/5),v:Math.floor(Math.random()*10)})), backgroundColor(ctx:{ raw: { v: number } }){ const v=ctx.raw.v; return v>6?'#0EA5E9':v>3?'#7DD3FC':'#E0F2FE'; }, width:({chart}:{ chart?: { chartArea?: { width: number; height: number } } })=>{ const ca=chart?.chartArea; return ca? (ca.width/5)-6:20; }, height:({chart}:{ chart?: { chartArea?: { width: number; height: number } } })=>{ const ca=chart?.chartArea; return ca? (ca.height/4)-6:20; } }] };
export const lmsTreemap = { datasets:[{ tree:[ { value:34, label:'Tech' }, { value:26, label:'Soft Skills' }, { value:18, label:'Leadership' }, { value:12, label:'Compliance' } ], key:'value', groups:['label'], backgroundColor:'#BAE6FD', spacing:0.5, labels:{ display:true, formatter:(ctx:{ raw: { g: string } })=>ctx.raw.g } }] };
export const lmsRadar = { labels:['Difficulty','Engagement','Practical','Theory','Assessment'], datasets:[ { label:'Course Qualities', data:[70,80,65,60,75], backgroundColor:'rgba(2,132,199,0.4)', borderColor:'#0284C7' } ] };
export const lmsMixed = { labels:['Jan','Feb','Mar','Apr','May','Jun'], datasets:[ { type:'bar' as const, label:'Enrollments', data:[80,100,90,120,130,150], backgroundColor:'#0EA5E9' }, { type:'line' as const, label:'Completions %', data:[60,62,64,68,70,74], borderColor:'#22C55E', backgroundColor:'#22C55E' } ] };


