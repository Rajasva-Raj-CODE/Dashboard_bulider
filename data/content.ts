import { FileText, Video, Image as ImageIcon, File } from 'lucide-react';

export const contentStats = [
  { title: 'Total Articles', value: '33', icon: FileText, bgColor: 'bg-green-100', iconColor: 'text-green-600' },
  { title: 'Total Videos', value: '4', icon: Video, bgColor: 'bg-blue-100', iconColor: 'text-blue-600' },
  { title: 'Total Albums', value: '0', icon: ImageIcon, bgColor: 'bg-yellow-100', iconColor: 'text-yellow-600' },
  { title: 'Total Photo', value: '0', icon: ImageIcon, bgColor: 'bg-purple-100', iconColor: 'text-purple-600' },
  { title: 'Total Documents', value: '1', icon: File, bgColor: 'bg-teal-100', iconColor: 'text-teal-600' },
];

export const mostViewedArticlesData = {
  labels: [
    'Performer of the Month',
    'Policy of News Media',
    'Code of Conduct',
    'Life at Cadhri',
    'Employee of the Month',
    'A perfect weekend',
    'Dinner night',
    'Weekend Festival',
    'Weekend vibes',
    'How to Boost Your',
    'JAVA',
    'Class Test-I',
    'Data Structure',
    'Game Night',
    'The Monthly Talk',
    'Weekend Workshop',
    'Hackathon Event',
    'Training Program',
    'Leadership Meeting',
  ],
  datasets: [
    { label: 'Views', data: [33, 23, 17, 10, 4, 4, 4, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], backgroundColor: '#3B82F6' },
  ],
};

export const likedCommentedData = {
  labels: ['Performer of the Month'],
  datasets: [
    { label: 'Comments', data: [1], backgroundColor: '#3B82F6' },
    { label: 'Likes', data: [1], backgroundColor: '#F59E0B' },
  ],
};

// Extra demo datasets for advanced chart types (content-specific)
export const contentArea = {
  labels: ['W1','W2','W3','W4','W5','W6'],
  datasets: [
    { label: 'Articles', data: [3,6,4,8,7,10], backgroundColor: 'rgba(34,197,94,0.25)', borderColor: '#22C55E', fill: true },
    { label: 'Videos', data: [1,2,2,3,2,4], backgroundColor: 'rgba(59,130,246,0.25)', borderColor: '#3B82F6', fill: true },
  ],
};

export const contentScatter = {
  datasets: [
    { label: 'Read time vs Views', data: Array.from({ length: 25 }, () => ({ x: Math.random()*10, y: Math.random()*100 })), backgroundColor: '#F59E0B' },
  ],
};

export const contentBubble = {
  datasets: [
    { label: 'Topics Weight', data: Array.from({ length: 12 }, () => ({ x: Math.random()*10, y: Math.random()*10, r: 4 + Math.random()*12 })), backgroundColor: 'rgba(99,102,241,0.6)' },
  ],
};

export const contentHeatmap = {
  labels: { x: ['Mon','Tue','Wed','Thu','Fri'], y: ['A','B','C','D'] },
  datasets: [{ label: 'Publishes', data: Array.from({ length: 20 }, (_, i) => ({ x: i%5, y: Math.floor(i/5), v: Math.floor(Math.random()*8) })), backgroundColor(ctx: any){ const v=ctx.raw.v; return v>5?'#22C55E':v>2?'#86EFAC':'#DCFCE7'; }, width: ({ chart }: any) => { const ca=chart?.chartArea; return ca? (ca.width/5)-6:20; }, height: ({ chart }: any) => { const ca=chart?.chartArea; return ca? (ca.height/4)-6:20; } }],
};

export const contentTreemap = {
  datasets: [{ tree: [ { value: 15, label: 'Tech' }, { value: 10, label: 'HR' }, { value: 8, label: 'News' }, { value: 6, label: 'Ops' } ], key: 'value', groups: ['label'], backgroundColor: '#A7F3D0', spacing: 0.5, labels: { display: true, formatter: (ctx: any) => ctx.raw.g } }],
};

export const contentRadar = {
  labels: ['Depth','Clarity','Engagement','SEO','Freshness'],
  datasets: [ { label: 'Quality', data: [70,80,75,65,85], backgroundColor: 'rgba(250,204,21,0.4)', borderColor: '#F59E0B' } ],
};

export const contentMixed = {
  labels: ['Jan','Feb','Mar','Apr','May','Jun'],
  datasets: [ { type: 'bar' as const, label: 'Articles', data: [5,7,6,9,8,10], backgroundColor: '#22C55E' }, { type: 'line' as const, label: 'Avg Read Time', data: [3,3.2,3.5,3.3,3.8,4], borderColor: '#3B82F6', backgroundColor: '#3B82F6' } ],
};


