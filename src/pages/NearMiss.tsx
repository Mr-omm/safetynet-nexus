import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

const NearMiss = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Near miss report submitted successfully!");
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-warning/5 to-accent/5">
      <header className="bg-card border-b border-border shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => navigate("/home")} className="mb-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-warning to-warning/80 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Near Miss Report</h1>
              <p className="text-muted-foreground">Document incidents that could have caused harm</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Report Near Miss Incident</CardTitle>
            <CardDescription>
              A near miss is an unplanned event that did not result in injury, illness, or damage – but had the potential to do so
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Date of Incident</Label>
                  <Input type="date" required />
                </div>
                <div className="space-y-2">
                  <Label>Time of Incident</Label>
                  <Input type="time" required />
                </div>
                <div className="space-y-2">
                  <Label>Location</Label>
                  <Input placeholder="Exact location of near miss" required />
                </div>
                <div className="space-y-2">
                  <Label>Reported By</Label>
                  <Input required />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Incident Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fall">Fall from Height</SelectItem>
                    <SelectItem value="struck">Struck by Object</SelectItem>
                    <SelectItem value="caught">Caught Between</SelectItem>
                    <SelectItem value="electrical">Electrical</SelectItem>
                    <SelectItem value="vehicle">Vehicle/Equipment</SelectItem>
                    <SelectItem value="material">Material Handling</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Incident Description</Label>
                <Textarea 
                  rows={4} 
                  placeholder="Describe what happened, who was involved, and what could have occurred..."
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label>Potential Severity (if incident had occurred)</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select potential severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="minor">Minor Injury</SelectItem>
                    <SelectItem value="moderate">Moderate Injury</SelectItem>
                    <SelectItem value="serious">Serious Injury</SelectItem>
                    <SelectItem value="fatal">Fatality</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Root Cause Analysis</Label>
                <Textarea 
                  rows={3} 
                  placeholder="What were the underlying causes that led to this near miss?"
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label>Immediate Actions Taken</Label>
                <Textarea 
                  rows={3} 
                  placeholder="What immediate corrective actions were taken?"
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label>Preventive Measures Recommended</Label>
                <Textarea 
                  rows={3} 
                  placeholder="What long-term measures should be implemented to prevent recurrence?"
                  required 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Responsible Person for Follow-up</Label>
                  <Input required />
                </div>
                <div className="space-y-2">
                  <Label>Target Closure Date</Label>
                  <Input type="date" required />
                </div>
              </div>

              <Button type="submit" className="w-full md:w-auto px-8">
                Submit Near Miss Report
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default NearMiss;
