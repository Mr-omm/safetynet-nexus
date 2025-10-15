import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const SafetyAdvisory = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Safety Advisory Warning issued successfully!");
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-warning/5 to-primary/5">
      <header className="bg-card border-b border-border shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => navigate("/home")} className="mb-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-warning to-primary rounded-xl flex items-center justify-center">
              <AlertCircle className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Safety Advisory Warning</h1>
              <p className="text-muted-foreground">Issue warnings and advisories</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Issue Safety Advisory Warning (SAW)</CardTitle>
            <CardDescription>
              Document safety warnings or advisories issued at the site to prevent potential incidents
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
                  <Label>SAW Number</Label>
                  <Input placeholder="e.g., SAW-2025-001" required />
                </div>
                <div className="space-y-2">
                  <Label>Issued By</Label>
                  <Input placeholder="Name & designation" required />
                </div>
                <div className="space-y-2">
                  <Label>Location/Area</Label>
                  <Input placeholder="Affected area or location" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Warning Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weather">Weather Conditions</SelectItem>
                    <SelectItem value="equipment">Equipment/Machinery</SelectItem>
                    <SelectItem value="structural">Structural Hazard</SelectItem>
                    <SelectItem value="environmental">Environmental Hazard</SelectItem>
                    <SelectItem value="behavioral">Behavioral Safety</SelectItem>
                    <SelectItem value="procedural">Procedural Violation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Severity Level</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low - Advisory</SelectItem>
                    <SelectItem value="medium">Medium - Caution Required</SelectItem>
                    <SelectItem value="high">High - Immediate Action Needed</SelectItem>
                    <SelectItem value="critical">Critical - Stop Work if Necessary</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Hazard/Concern Description</Label>
                <Textarea 
                  rows={4} 
                  placeholder="Describe the hazard, unsafe condition, or concern in detail..."
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label>Potential Consequences</Label>
                <Textarea 
                  rows={3} 
                  placeholder="What could happen if this warning is not heeded?"
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label>Persons/Teams Affected</Label>
                <Textarea 
                  rows={2} 
                  placeholder="Who needs to be aware of this warning? (e.g., all site personnel, specific contractors, crane operators...)"
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label>Recommended Safety Measures</Label>
                <Textarea 
                  rows={4} 
                  placeholder="List specific actions, precautions, or safety measures that should be taken..."
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label>Corrective Actions Required</Label>
                <Textarea 
                  rows={3} 
                  placeholder="What corrective actions must be implemented to eliminate or control this hazard?"
                  required 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Responsible Person for Actions</Label>
                  <Input required />
                </div>
                <div className="space-y-2">
                  <Label>Target Completion Date</Label>
                  <Input type="date" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Valid Until</Label>
                <Input type="date" required />
              </div>

              <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold text-lg">Warning Communication</h3>
                <div className="space-y-2">
                  <Label>How was this warning communicated?</Label>
                  <Textarea 
                    rows={2} 
                    placeholder="e.g., Toolbox talk, notice boards, email, SMS, all-hands meeting..."
                    required 
                  />
                </div>
              </div>

              <Button type="submit" className="w-full md:w-auto px-8">
                Issue Safety Advisory Warning
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default SafetyAdvisory;
