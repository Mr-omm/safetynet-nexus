import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, GraduationCap } from "lucide-react";
import { toast } from "sonner";

const Training = () => {
  const navigate = useNavigate();
  const [trainingType, setTrainingType] = useState("induction");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Training record saved successfully!");
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-success/5 to-accent/5">
      <header className="bg-card border-b border-border shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => navigate("/home")} className="mb-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-success to-success/80 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Safety Training</h1>
              <p className="text-muted-foreground">Document safety training sessions</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <Tabs value={trainingType} onValueChange={setTrainingType}>
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="induction">Induction</TabsTrigger>
            <TabsTrigger value="daily">Daily Talk</TabsTrigger>
            <TabsTrigger value="pep">PEP Talk</TabsTrigger>
            <TabsTrigger value="special">Special Training</TabsTrigger>
          </TabsList>

          <TabsContent value="induction" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Induction Training</CardTitle>
                <CardDescription>Record induction session for new employees/contractors</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Training Date</Label>
                      <Input type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Duration (hours)</Label>
                      <Input type="number" step="0.5" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Contractor/Company Name</Label>
                      <Input required />
                    </div>
                    <div className="space-y-2">
                      <Label>Number of Attendees</Label>
                      <Input type="number" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Training Topics Covered</Label>
                    <Textarea rows={4} placeholder="List all topics covered during induction..." required />
                  </div>
                  <div className="space-y-2">
                    <Label>Trainer Name</Label>
                    <Input required />
                  </div>
                  <Button type="submit">Save Training Record</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="daily" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Daily Training Talk</CardTitle>
                <CardDescription>Document daily safety briefings and toolbox talks</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Date</Label>
                      <Input type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Time</Label>
                      <Input type="time" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Location</Label>
                      <Input required />
                    </div>
                    <div className="space-y-2">
                      <Label>Number of Attendees</Label>
                      <Input type="number" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Topic</Label>
                    <Input placeholder="e.g., Working at Heights, PPE Usage..." required />
                  </div>
                  <div className="space-y-2">
                    <Label>Key Discussion Points</Label>
                    <Textarea rows={4} required />
                  </div>
                  <Button type="submit">Save Training Record</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pep" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>PEP Talk (Pre-Execution Plan)</CardTitle>
                <CardDescription>Log pre-job safety briefings</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Date</Label>
                      <Input type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Work Package/Activity</Label>
                      <Input required />
                    </div>
                    <div className="space-y-2">
                      <Label>Number of Workers</Label>
                      <Input type="number" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Supervisor</Label>
                      <Input required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Task-Specific Hazards</Label>
                    <Textarea rows={3} placeholder="Identify hazards specific to this task..." required />
                  </div>
                  <div className="space-y-2">
                    <Label>Control Measures & Safety Precautions</Label>
                    <Textarea rows={3} required />
                  </div>
                  <div className="space-y-2">
                    <Label>Emergency Procedures Discussed</Label>
                    <Textarea rows={2} required />
                  </div>
                  <Button type="submit">Save PEP Talk Record</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="special" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Special Technical Training</CardTitle>
                <CardDescription>Document specialized safety training programs</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Training Date</Label>
                      <Input type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Duration (hours)</Label>
                      <Input type="number" step="0.5" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Training Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="height">Working at Heights</SelectItem>
                          <SelectItem value="confined">Confined Space Entry</SelectItem>
                          <SelectItem value="excavation">Excavation Safety</SelectItem>
                          <SelectItem value="scaffolding">Scaffolding</SelectItem>
                          <SelectItem value="crane">Crane Operations</SelectItem>
                          <SelectItem value="fire">Fire Safety</SelectItem>
                          <SelectItem value="electrical">Electrical Safety</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Number of Participants</Label>
                      <Input type="number" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Training Provider/Trainer</Label>
                    <Input required />
                  </div>
                  <div className="space-y-2">
                    <Label>Training Content & Objectives</Label>
                    <Textarea rows={4} required />
                  </div>
                  <div className="space-y-2">
                    <Label>Certification Issued</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit">Save Training Record</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Training;
