"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Info, Database, BarChart3, Palette, FileText } from "lucide-react";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

interface AddWidgetDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddWidgetDialog({ open, onOpenChange }: AddWidgetDialogProps) {
  const [agOpen, setAgOpen] = useState(false);
  const [selectedAG, setSelectedAG] = useState<string[]>([]);
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="fixed left-1/2 top-1/2 w-[95vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 
               p-0 sm:my-6 md:my-10 rounded-2xl shadow-2xl border border-gray-200 bg-white"
      >
        <DialogHeader className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-blue-100 rounded-t-2xl">
          <DialogTitle className="text-xl font-semibold text-gray-800">
            Dashboard
          </DialogTitle>
        </DialogHeader>

        <div className="p-6 space-y-10 overflow-y-auto max-h-[70vh] custom-scrollbar">
          {/* Section 1: Basic */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full text-sm font-bold">
                1
              </div>
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <Info className="w-5 h-5 mr-2" />
                Basic
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="People Analytics" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="content">Content Analytics</SelectItem>
                    <SelectItem value="people">People Analytics</SelectItem>
                    <SelectItem value="hr">HR Analytics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="lg:col-span-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" rows={3} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="graphType">Graph Type</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select Graph Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bar">Bar Chart</SelectItem>
                    <SelectItem value="line">Line Chart</SelectItem>
                    <SelectItem value="pie">Pie Chart</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Section 2: Datasource */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full text-sm font-bold">
                2
              </div>
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <Database className="w-5 h-5 mr-2" />
                Datasource
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="view">View</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select View" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="view1">View 1</SelectItem>
                    <SelectItem value="view2">View 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="columns">Column(s)</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select Some Options" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="col1">Column 1</SelectItem>
                    <SelectItem value="col2">Column 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="recordLimit">Record Limit</Label>
                <Input
                  id="recordLimit"
                  placeholder="Enter Record Limit"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="accessGroup">Access Group</Label>
                {/* Trigger input-like control that opens dropdown on click */}
                <Popover open={agOpen} onOpenChange={setAgOpen}>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="mt-1 w-full h-10 border rounded-md px-3 text-left flex items-center gap-2 overflow-x-auto"
                      onClick={() => setAgOpen(!agOpen)}
                    >
                      {selectedAG.length === 0 ? (
                        <span className="text-sm text-muted-foreground">
                          Select Access Group
                        </span>
                      ) : (
                        <div className="flex flex-wrap gap-2">
                          {selectedAG.map((item) => (
                            <Badge key={item} variant="secondary">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 w-[420px]" align="start">
                    <Command>
                      <CommandInput placeholder="Search groups..." />
                      <CommandList className="max-h-60">
                        <CommandGroup heading="All">
                          <CommandItem
                            onSelect={() => {
                              setSelectedAG(["All"]);
                              setAgOpen(false);
                            }}
                          >
                            All
                          </CommandItem>
                        </CommandGroup>
                        <CommandGroup heading="Admin">
                          <CommandItem className="opacity-60 cursor-not-allowed">
                            Admin
                          </CommandItem>
                        </CommandGroup>
                        <CommandGroup heading="Employee">
                          <CommandItem
                            onSelect={() => {
                              setSelectedAG((prev) =>
                                Array.from(
                                  new Set([...prev, "Administration Team"])
                                )
                              );
                              setAgOpen(false);
                            }}
                          >
                            - Administration Team
                          </CommandItem>
                          <CommandItem
                            onSelect={() => {
                              setSelectedAG((prev) =>
                                Array.from(new Set([...prev, "Consultants"]))
                              );
                              setAgOpen(false);
                            }}
                          >
                            - Consultants
                          </CommandItem>
                          <CommandItem
                            onSelect={() => {
                              setSelectedAG((prev) =>
                                Array.from(new Set([...prev, "Finance Team"]))
                              );
                              setAgOpen(false);
                            }}
                          >
                            - Finance Team
                          </CommandItem>
                          <CommandItem
                            onSelect={() => {
                              setSelectedAG((prev) =>
                                Array.from(new Set([...prev, "HR Manager"]))
                              );
                              setAgOpen(false);
                            }}
                          >
                            - HR Manager
                          </CommandItem>
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label htmlFor="filterBy">Filter By</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select Some Options" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="filter1">Filter 1</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="filterDate">Filter Date</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select an Option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="groupBy">Group By</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select Some Options" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="group1">Group 1</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="orderDirection">Ordering Direction</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Descending" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="desc">Descending</SelectItem>
                    <SelectItem value="asc">Ascending</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="lg:col-span-2">
                <Label htmlFor="customWhere">Custom Where Clause</Label>
                <Textarea id="customWhere" rows={3} className="mt-1" />
              </div>

              <div className="lg:col-span-2">
                <Label htmlFor="ordering">Ordering</Label>
                <Input id="ordering" placeholder="Ordering" className="mt-1" />
              </div>
            </div>
          </div>

          {/* Section 3: Multiple Graph Setting */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full text-sm font-bold">
                3
              </div>
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Multiple Graph Setting
              </h3>
            </div>
          </div>

          {/* Section 4: Design */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full text-sm font-bold">
                4
              </div>
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <Palette className="w-5 h-5 mr-2" />
                Design
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              <div className="lg:col-span-3">
                <Label htmlFor="customJS">Custom Javascript</Label>
                <Textarea id="customJS" rows={4} className="mt-1" />
              </div>
              <div className="flex items-center gap-3">
                <Label htmlFor="hideChart">Hide Chart</Label>
                <Switch id="hideChart" />
              </div>
              <div className="flex items-center gap-3">
                <Label htmlFor="hideVertical">Hide Vertical Total</Label>
                <Switch id="hideVertical" />
              </div>
              <div className="flex items-center gap-3">
                <Label htmlFor="hideHorizontal">Hide Horizontal Total</Label>
                <Switch id="hideHorizontal" />
              </div>
              <div className="flex items-center gap-3 lg:col-span-3">
                <Label htmlFor="published">Published</Label>
                <Switch id="published" defaultChecked />
              </div>
            </div>
          </div>

          {/* Section 5: Report Setting */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full text-sm font-bold">
                5
              </div>
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Report Setting
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex items-center justify-between">
                <Label htmlFor="linkDashboard">Link Dashboard to Report</Label>
                <Switch id="linkDashboard" defaultChecked />
              </div>
              <div>
                <Label htmlFor="reportColumn">Report Column</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select Some Options" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="col1">Column 1</SelectItem>
                    <SelectItem value="col2">Column 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
          <div className="w-full flex justify-between">
            <Button variant="outline" className="rounded-lg shadow-sm">
              Preview
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md">
              Submit
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
