import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, FileWarning } from "lucide-react";
import { toast } from "sonner";

const DangerousOccurrence = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Dangerous occurrence report submitted successfully!");
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-destructive/5 to-accent/5">
      <header className="bg-card border-b border-border shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => navigate("/home")} className="mb-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-destructive to-destructive/70 rounded-xl flex items-center justify-center">
              <FileWarning className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Dangerous Occurrence</h1>
              <p className="text-muted-foreground">Report major incidents of serious potential</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Dangerous Occurrence Report</CardTitle>
            <CardDescription>
              Document major incidents with serious potential consequences that require immediate investigation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Date of Occurrence</Label>
                  <Input type="date" required />
                </div>
                <div className="space-y-2">
                  <Label>Time of Occurrence</Label>
                  <Input type="time" required />
                </div>
                <div className="space-y-2">
                  <Label>Incident Number</Label>
                  <Input placeholder="e.g., DO-2025-001" required />
                </div>
                <div className="space-y-2">
                  <Label>Reported By</Label>
                  <Input placeholder="Name & designation" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Exact Location</Label>
                <Input placeholder="Precise location where the occurrence happened" required />
              </div>

              <div className="space-y-2">
                <Label>Type of Dangerous Occurrence</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="collapse">Collapse or Overturning</SelectItem>
                    <SelectItem value="explosion">Explosion or Fire</SelectItem>
                    <SelectItem value="release">Release of Substances</SelectItem>
                    <SelectItem value="scaffold">Scaffold Collapse</SelectItem>
                    <SelectItem value="crane">Crane/Lifting Equipment Failure</SelectItem>
                    <SelectItem value="electrical">Electrical Incident</SelectItem>
                    <SelectItem value="excavation">Excavation Collapse</SelectItem>
                    <SelectItem value="pressure">Pressure Vessel/System Failure</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Detailed Description of the Occurrence</Label>
                <Textarea 
                  rows={5} 
                  placeholder="Provide a comprehensive description of what happened, sequence of events, conditions at the time..."
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label>Persons Involved/Affected</Label>
                <Textarea 
                  rows={3} 
                  placeholder="List all persons involved or affected, including any injuries (names, companies, roles)..."
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label>Equipment/Machinery Involved</Label>
                <Input placeholder="List all equipment, machinery, or materials involved" required />
              </div>

              <div className="space-y-2">
                <Label>Immediate Actions Taken</Label>
                <Textarea 
                  rows={3} 
                  placeholder="What emergency actions were taken immediately after the occurrence?"
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label>Potential Consequences (if worse case scenario)</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select potential severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="minor">Minor Injuries</SelectItem>
                    <SelectItem value="serious">Serious Injury/Hospitalization</SelectItem>
                    <SelectItem value="multiple">Multiple Casualties</SelectItem>
                    <SelectItem value="fatality">Fatality/Fatalities</SelectItem>
                    <SelectItem value="catastrophic">Catastrophic Event</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold text-lg">Initial Investigation</h3>
                
                <div className="space-y-2">
                  <Label>Immediate Causes Identified</Label>
                  <Textarea 
                    rows={3} 
                    placeholder="What were the direct causes of this occurrence?"
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label>Contributing Factors</Label>
                  <Textarea 
                    rows={3} 
                    placeholder="Environmental conditions, human factors, equipment conditions, procedural issues..."
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Was Area Secured/Isolated?</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes - Area secured and isolated</SelectItem>
                    <SelectItem value="partial">Partially secured</SelectItem>
                    <SelectItem value="no">No - Unable to secure</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Authorities Notified</Label>
                <Textarea 
                  rows={2} 
                  placeholder="List all authorities, regulatory bodies, or management notified with date/time..."
                />
              </div>

              <div className="space-y-2">
                <Label>Witnesses</Label>
                <Textarea 
                  rows={2} 
                  placeholder="Names and contact details of witnesses..."
                />
              </div>

              <div className="space-y-2">
                <Label>Investigation Team Assigned</Label>
                <Input placeholder="Names of investigation team members" required />
              </div>

              <div className="space-y-2">
                <Label>Preliminary Recommendations</Label>
                <Textarea 
                  rows={4} 
                  placeholder="Initial corrective actions and preventive measures recommended..."
                  required 
                />
              </div>

              <Button type="submit" className="w-full md:w-auto px-8">
                Submit Dangerous Occurrence Report
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DangerousOccurrence;
