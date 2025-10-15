import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, StopCircle } from "lucide-react";
import { toast } from "sonner";

const StopWork = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Stop Work Order logged successfully!");
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-destructive/5 to-warning/5">
      <header className="bg-card border-b border-border shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => navigate("/home")} className="mb-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-destructive to-warning rounded-xl flex items-center justify-center">
              <StopCircle className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Stop Work Order</h1>
              <p className="text-muted-foreground">Document work stoppages due to unsafe conditions</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Issue Stop Work Order</CardTitle>
            <CardDescription>
              Document when work has been stopped due to unsafe conditions or imminent danger
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Date Issued</Label>
                  <Input type="date" required />
                </div>
                <div className="space-y-2">
                  <Label>Time Issued</Label>
                  <Input type="time" required />
                </div>
                <div className="space-y-2">
                  <Label>Location</Label>
                  <Input placeholder="Specific location where work was stopped" required />
                </div>
                <div className="space-y-2">
                  <Label>SWO Number</Label>
                  <Input placeholder="e.g., SWO-2025-001" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Issued By (Name & Position)</Label>
                <Input required />
              </div>

              <div className="space-y-2">
                <Label>Contractor/Company Affected</Label>
                <Input required />
              </div>

              <div className="space-y-2">
                <Label>Work Activity Being Performed</Label>
                <Input placeholder="Describe the work that was being done" required />
              </div>

              <div className="space-y-2">
                <Label>Reason for Stop Work</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select primary reason" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="imminent-danger">Imminent Danger</SelectItem>
                    <SelectItem value="missing-permits">Missing Work Permits</SelectItem>
                    <SelectItem value="inadequate-controls">Inadequate Safety Controls</SelectItem>
                    <SelectItem value="unsafe-equipment">Unsafe Equipment/Tools</SelectItem>
                    <SelectItem value="weather">Adverse Weather Conditions</SelectItem>
                    <SelectItem value="incompetent-workers">Incompetent/Untrained Workers</SelectItem>
                    <SelectItem value="no-ppe">Lack of PPE</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Detailed Description of Unsafe Condition</Label>
                <Textarea 
                  rows={4} 
                  placeholder="Provide a detailed description of the unsafe condition that led to the stop work order..."
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label>Potential Consequences if Work Continued</Label>
                <Textarea 
                  rows={3} 
                  placeholder="What could have happened if the work was not stopped?"
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label>Corrective Actions Required</Label>
                <Textarea 
                  rows={4} 
                  placeholder="List all corrective actions that must be completed before work can resume..."
                  required 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Responsible Person for Corrections</Label>
                  <Input required />
                </div>
                <div className="space-y-2">
                  <Label>Target Completion Date</Label>
                  <Input type="date" required />
                </div>
              </div>

              <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold text-lg">Work Resumption (Fill when applicable)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Date Work Resumed</Label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label>Authorized By</Label>
                    <Input />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Verification of Corrective Actions</Label>
                  <Textarea 
                    rows={2} 
                    placeholder="Confirm all corrective actions have been completed..."
                  />
                </div>
              </div>

              <Button type="submit" className="w-full md:w-auto px-8">
                Issue Stop Work Order
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default StopWork;
