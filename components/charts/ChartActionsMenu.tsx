'use client';

import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';
import { MoreHorizontal } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface ChartActionsMenuProps {
  title: string;
  getCanvas: () => HTMLCanvasElement | null;
  getData: () => any;
}

function downloadURI(uri: string, name: string) {
  const link = document.createElement('a');
  link.href = uri;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function ChartActionsMenu({ title, getCanvas, getData }: ChartActionsMenuProps) {
  const downloadPNG = () => {
    const canvas = getCanvas();
    if (!canvas) return;
    const uri = canvas.toDataURL('image/png', 1.0);
    downloadURI(uri, `${title}.png`);
  };

  const downloadJPEG = () => {
    const canvas = getCanvas();
    if (!canvas) return;
    const uri = canvas.toDataURL('image/jpeg', 0.95);
    downloadURI(uri, `${title}.jpg`);
  };

  const downloadPDF = () => {
    const canvas = getCanvas();
    if (!canvas) return;
    const img = canvas.toDataURL('image/png', 1.0);
    const pdf = new jsPDF({ orientation: 'landscape', unit: 'pt' });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    pdf.addImage(img, 'PNG', 20, 20, pageWidth - 40, pageHeight - 40);
    pdf.save(`${title}.pdf`);
  };

  const downloadCSV = () => {
    const data = getData();
    if (!data) return;
    const labels: string[] = data.labels || [];
    const datasets = data.datasets || [];
    const header = ['Label', ...datasets.map((d: any) => d.label || 'Series')];
    const rows = labels.map((label: string, i: number) => [label, ...datasets.map((d: any) => d.data?.[i] ?? '')]);
    const csv = [header, ...rows].map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    downloadURI(URL.createObjectURL(blob), `${title}.csv`);
  };

  const downloadXLS = () => {
    const data = getData();
    if (!data) return;
    const labels: string[] = data.labels || [];
    const datasets = data.datasets || [];
    const header = ['Label', ...datasets.map((d: any) => d.label || 'Series')];
    const rows = labels.map((label: string, i: number) => [label, ...datasets.map((d: any) => d.data?.[i] ?? '')]);
    const ws = XLSX.utils.aoa_to_sheet([header, ...rows]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Data');
    XLSX.writeFile(wb, `${title}.xlsx`);
  };

  const printChart = () => {
    const canvas = getCanvas();
    if (!canvas) return;
    const uri = canvas.toDataURL('image/png', 1.0);
    const w = window.open('');
    if (!w) return;
    w.document.write(`<img src="${uri}" style="width:100%" />`);
    w.document.close();
    w.focus();
    w.print();
    w.close();
  };

  const viewFullScreen = () => {
    const canvas = getCanvas();
    if (!canvas) return;
    canvas.requestFullscreen?.();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem onClick={viewFullScreen}>View in full screen</DropdownMenuItem>
        <DropdownMenuItem onClick={printChart}>Print chart</DropdownMenuItem>
        <DropdownMenuItem onClick={downloadPNG}>Download PNG image</DropdownMenuItem>
        <DropdownMenuItem onClick={downloadJPEG}>Download JPEG image</DropdownMenuItem>
        <DropdownMenuItem onClick={downloadPDF}>Download PDF document</DropdownMenuItem>
        {/* SVG export not natively supported from canvas; omitted */}
        <DropdownMenuItem onClick={downloadCSV}>Download CSV</DropdownMenuItem>
        <DropdownMenuItem onClick={downloadXLS}>Download XLS</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


