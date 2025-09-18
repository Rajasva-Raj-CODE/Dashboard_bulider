import { Users, Calendar, BarChart3, Activity, Image, Video } from 'lucide-react';

export const intranetStats = [
  { title: 'Total Users', value: '1', icon: Users, bgColor: 'bg-blue-100', iconColor: 'text-blue-600' },
  { title: 'Total Logged In Till Date', value: '1', icon: Calendar, bgColor: 'bg-yellow-100', iconColor: 'text-yellow-600' },
  { title: '% Utilization', value: '100', icon: BarChart3, bgColor: 'bg-green-100', iconColor: 'text-green-600' },
  { title: 'No. of Activities', value: '0', icon: Activity, bgColor: 'bg-purple-100', iconColor: 'text-purple-600' },
  { title: 'No. of Photos Uploaded', value: '0', icon: Image, bgColor: 'bg-orange-100', iconColor: 'text-orange-600' },
  { title: 'No. of Videos Uploaded', value: '4', icon: Video, bgColor: 'bg-indigo-100', iconColor: 'text-indigo-600' },
];

export const intranetLoginData = {
  labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
  datasets: [
    {
      label: 'Logins',
      data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,1,0,0,0,0,0,0,1,0,0,0,0,1],
      borderColor: '#3B82F6',
      backgroundColor: '#3B82F6',
      tension: 0.1,
    },
  ],
};

export const intranetTrendingData = {
  labels: ['Management', 'Development', 'Announcement', 'Projects', 'General', 'HR News', 'Updates', 'Finance', 'Reports', 'Marketing', 'Innovation', 'Technology', 'People', 'Growth', 'Strategy', 'Operations', 'Quality', 'Training', 'Events', 'Communication'],
  datasets: [
    { label: 'Mentions', data: [1,0,1,2,2,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1], backgroundColor: '#60A5FA' },
    { label: 'Views', data: [0,0,0,0,5,0,0,0,0,18,0,0,0,24,0,0,0,0,2,3], backgroundColor: '#F59E0B' },
  ],
};

export const intranetLikesData = {
  labels: ['Likes', 'Posts', 'Comments'],
  datasets: [
    { data: [248, 248, 128], backgroundColor: ['#10B981', '#10B981', '#10B981'] },
  ],
};

// Showcase datasets for new charts
export const intranetAreaStacked = {
  labels: Array.from({ length: 6 }, (_, i) => `Q${i + 1}`),
  datasets: [
    { label: 'Posts', data: [10, 20, 15, 25, 20, 30], backgroundColor: 'rgba(59,130,246,0.3)', borderColor: '#3B82F6', fill: true },
    { label: 'Likes', data: [15, 18, 12, 22, 28, 35], backgroundColor: 'rgba(16,185,129,0.3)', borderColor: '#10B981', fill: true },
  ],
};

export const intranetScatter = {
  datasets: [
    { label: 'Engagement', data: Array.from({ length: 20 }, () => ({ x: Math.random() * 100, y: Math.random() * 100 })), backgroundColor: '#6366F1' },
  ],
};

export const intranetBubble = {
  datasets: [
    { label: 'Topics', data: Array.from({ length: 10 }, () => ({ x: Math.random() * 100, y: Math.random() * 100, r: 5 + Math.random() * 10 })), backgroundColor: 'rgba(245,158,11,0.6)' },
  ],
};

export const intranetHeatmap = {
  labels: { x: ['Mon','Tue','Wed','Thu','Fri'], y: ['W1','W2','W3','W4'] },
  datasets: [{
    label: 'Logins',
    data: Array.from({ length: 20 }, (_, i) => ({ x: i % 5, y: Math.floor(i / 5), v: Math.floor(Math.random() * 10) })),
    backgroundColor(ctx: { raw: { v: number } }) {
      const v = ctx.raw.v;
      return v > 7 ? '#2563EB' : v > 4 ? '#60A5FA' : '#BFDBFE';
    },
    width: ({ chart }: { chart?: { chartArea?: { width: number; height: number } } }) => {
      const ca = chart?.chartArea;
      if (!ca) return 20;
      return (ca.width / 5) - 6;
    },
    height: ({ chart }: { chart?: { chartArea?: { width: number; height: number } } }) => {
      const ca = chart?.chartArea;
      if (!ca) return 20;
      return (ca.height / 4) - 6;
    },
  }],
};

export const intranetTreemap = {
  datasets: [{
    tree: [
      { value: 6, label: 'News' },
      { value: 4, label: 'HR' },
      { value: 3, label: 'Tech' },
      { value: 2, label: 'Ops' },
    ],
    key: 'value',
    groups: ['label'],
    backgroundColor: '#93C5FD',
    spacing: 0.5,
    labels: { display: true, formatter: (ctx: { raw: { g: string } }) => ctx.raw.g + '' },
  }],
};

export const intranetRadar = {
  labels: ['Content','Design','Speed','Mobile','Accessibility'],
  datasets: [
    { label: 'Score', data: [65, 59, 90, 81, 56], backgroundColor: 'rgba(147,197,253,0.4)', borderColor: '#60A5FA', pointBackgroundColor: '#3B82F6' },
  ],
};

export const intranetMixed = {
  labels: ['Jan','Feb','Mar','Apr','May','Jun'],
  datasets: [
    { type: 'bar' as const, label: 'Views', data: [12,19,3,5,2,3], backgroundColor: '#93C5FD' },
    { type: 'line' as const, label: 'Likes', data: [2,3,20,5,1,4], borderColor: '#10B981', backgroundColor: '#10B981' },
  ],
};


