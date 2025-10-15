import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Heart } from "lucide-react";
import { toast } from "sonner";

const FirstAid = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("First-aid case logged successfully!");
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
            <div className="w-12 h-12 bg-gradient-to-br from-destructive to-destructive/80 rounded-xl flex items-center justify-center">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">First-Aid Case</h1>
              <p className="text-muted-foreground">Log minor injuries and treatment provided</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>First-Aid Case Report</CardTitle>
            <CardDescription>
              Document minor injuries that required first-aid treatment
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
              </div>

              <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold text-lg">Injured Person Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Name</Label>
                    <Input required />
                  </div>
                  <div className="space-y-2">
                    <Label>Employee/Contractor ID</Label>
                    <Input required />
                  </div>
                  <div className="space-y-2">
                    <Label>Age</Label>
                    <Input type="number" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Department/Contractor</Label>
                    <Input required />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Location of Incident</Label>
                <Input placeholder="Exact location where injury occurred" required />
              </div>

              <div className="space-y-2">
                <Label>Type of Injury</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select injury type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cut">Cut/Laceration</SelectItem>
                    <SelectItem value="bruise">Bruise/Contusion</SelectItem>
                    <SelectItem value="burn">Burn</SelectItem>
                    <SelectItem value="sprain">Sprain/Strain</SelectItem>
                    <SelectItem value="eye">Eye Injury</SelectItem>
                    <SelectItem value="abrasion">Abrasion</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Body Part Affected</Label>
                <Input placeholder="e.g., Left hand, Right eye, etc." required />
              </div>

              <div className="space-y-2">
                <Label>How Did the Injury Occur?</Label>
                <Textarea 
                  rows={3} 
                  placeholder="Describe the circumstances that led to the injury..."
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label>First-Aid Treatment Provided</Label>
                <Textarea 
                  rows={3} 
                  placeholder="Detail the first-aid treatment given (cleaning, bandaging, etc.)..."
                  required 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>First-Aider Name</Label>
                  <Input required />
                </div>
                <div className="space-y-2">
                  <Label>Time Treatment Given</Label>
                  <Input type="time" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Was Further Medical Attention Required?</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no">No - Returned to work</SelectItem>
                    <SelectItem value="yes-clinic">Yes - Sent to clinic</SelectItem>
                    <SelectItem value="yes-hospital">Yes - Sent to hospital</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Preventive Actions Recommended</Label>
                <Textarea 
                  rows={2} 
                  placeholder="What can be done to prevent similar incidents?"
                  required 
                />
              </div>

              <Button type="submit" className="w-full md:w-auto px-8">
                Submit First-Aid Report
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default FirstAid;
