"use client";

import { jsPDF } from "jspdf";
// Removed xlsx import due to security vulnerabilities
import {
  Expand,
  FileDown,
  FileSpreadsheet,
  FileText,
  ImageIcon,
  MoreHorizontal,
  Printer,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type MinimalDataset = { label?: string; data?: Array<number | string | null | undefined> };
type MinimalChartData = { labels?: string[]; datasets?: MinimalDataset[] };

interface ChartActionsMenuProps {
  title: string;
  getCanvas: () => HTMLCanvasElement | null;
  getData: () => unknown;
}

function downloadURI(uri: string, name: string) {
  const link = document.createElement("a");
  link.href = uri;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function ChartActionsMenu({
  title,
  getCanvas,
  getData,
}: ChartActionsMenuProps) {
  const downloadPNG = () => {
    const canvas = getCanvas();
    if (!canvas) return;
    const uri = canvas.toDataURL("image/png", 1.0);
    downloadURI(uri, `${title}.png`);
  };

  const downloadJPEG = () => {
    const canvas = getCanvas();
    if (!canvas) return;
    const uri = canvas.toDataURL("image/jpeg", 0.95);
    downloadURI(uri, `${title}.jpg`);
  };

  const downloadPDF = () => {
    const canvas = getCanvas();
    if (!canvas) return;
    const img = canvas.toDataURL("image/png", 1.0);
    const pdf = new jsPDF({ orientation: "landscape", unit: "pt" });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    pdf.addImage(img, "PNG", 20, 20, pageWidth - 40, pageHeight - 40);
    pdf.save(`${title}.pdf`);
  };

  const downloadCSV = () => {
    const data = getData() as MinimalChartData | undefined;
    if (!data) return;
    const labels: string[] = data.labels || [];
    const datasets: MinimalDataset[] = data.datasets || [];
    const header = ["Label", ...datasets.map((d) => d.label || "Series")];
    const rows = labels.map((label: string, i: number) => [
      label,
      ...datasets.map((d) => d.data?.[i] ?? ""),
    ]);
    const csv = [header, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    downloadURI(URL.createObjectURL(blob), `${title}.csv`);
  };

  const downloadXLS = () => {
    const data = getData() as MinimalChartData | undefined;
    if (!data) return;
    const labels: string[] = data.labels || [];
    const datasets: MinimalDataset[] = data.datasets || [];
    const header = ["Label", ...datasets.map((d) => d.label || "Series")];
    const rows = labels.map((label: string, i: number) => [
      label,
      ...datasets.map((d) => d.data?.[i] ?? ""),
    ]);

    // Create Excel-compatible XML format (safer alternative to xlsx library)
    const xmlContent = `<?xml version="1.0"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:html="http://www.w3.org/TR/REC-html40">
 <Worksheet ss:Name="Data">
  <Table>
   <Row>
    ${header
      .map((cell) => `<Cell><Data ss:Type="String">${cell}</Data></Cell>`)
      .join("")}
   </Row>
   ${rows
     .map(
       (row) => `
   <Row>
    ${row
      .map((cell) => `<Cell><Data ss:Type="String">${cell}</Data></Cell>`)
      .join("")}
   </Row>`
     )
     .join("")}
  </Table>
 </Worksheet>
</Workbook>`;

    const blob = new Blob([xmlContent], {
      type: "application/vnd.ms-excel",
    });
    downloadURI(URL.createObjectURL(blob), `${title}.xls`);
  };

  const printChart = () => {
    const canvas = getCanvas();
    if (!canvas) return;
    const uri = canvas.toDataURL("image/png", 1.0);
    const w = window.open("");
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
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          <MoreHorizontal className="w-5 h-5 text-gray-500" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-60 rounded-xl shadow-lg border border-brand-primary-200 dark:border-brand-primary-700"
      >
        <DropdownMenuLabel className="text-sm text-gray-500">
          Export Options
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={viewFullScreen}>
          <Expand className="w-4 h-4 mr-2 text-blue-500" />
          View in full screen
        </DropdownMenuItem>
        <DropdownMenuItem onClick={printChart}>
          <Printer className="w-4 h-4 mr-2 text-green-500" />
          Print chart
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={downloadPNG}>
          <ImageIcon className="w-4 h-4 mr-2 text-orange-500" />
          Download PNG
        </DropdownMenuItem>
        <DropdownMenuItem onClick={downloadJPEG}>
          <ImageIcon className="w-4 h-4 mr-2 text-pink-500" />
          Download JPEG
        </DropdownMenuItem>
        <DropdownMenuItem onClick={downloadPDF}>
          <FileText className="w-4 h-4 mr-2 text-red-500" />
          Download PDF
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={downloadCSV}>
          <FileDown className="w-4 h-4 mr-2 text-purple-500" />
          Download CSV
        </DropdownMenuItem>
        <DropdownMenuItem onClick={downloadXLS}>
          <FileSpreadsheet className="w-4 h-4 mr-2 text-emerald-500" />
          Download XLS
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
