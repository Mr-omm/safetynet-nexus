import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users } from "lucide-react";
import { toast } from "sonner";

const SICMeeting = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("SIC Meeting record saved successfully!");
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-primary/5">
      <header className="bg-card border-b border-border shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => navigate("/home")} className="mb-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
              <Users className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">SIC Meeting</h1>
              <p className="text-muted-foreground">Site In-Charge safety discussions</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>SIC Meeting Minutes</CardTitle>
            <CardDescription>
              Document Site In-Charge meetings and safety discussions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Meeting Date</Label>
                  <Input type="date" required />
                </div>
                <div className="space-y-2">
                  <Label>Meeting Time</Label>
                  <Input type="time" required />
                </div>
                <div className="space-y-2">
                  <Label>Location</Label>
                  <Input placeholder="Meeting venue" required />
                </div>
                <div className="space-y-2">
                  <Label>Duration (minutes)</Label>
                  <Input type="number" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Site In-Charge Name</Label>
                <Input required />
              </div>

              <div className="space-y-2">
                <Label>Attendees</Label>
                <Textarea 
                  rows={3} 
                  placeholder="List all attendees with their designations..."
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label>Meeting Agenda</Label>
                <Textarea 
                  rows={3} 
                  placeholder="Main topics and objectives of the meeting..."
                  required 
                />
              </div>

              <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold text-lg">Safety Points Discussed</h3>
                
                <div className="space-y-2">
                  <Label>1. Current Safety Status & Statistics</Label>
                  <Textarea 
                    rows={2} 
                    placeholder="LTI, incidents, near misses, safety observations..."
                  />
                </div>

                <div className="space-y-2">
                  <Label>2. Ongoing Work Activities & Associated Risks</Label>
                  <Textarea 
                    rows={2} 
                    placeholder="Critical activities, high-risk work packages..."
                  />
                </div>

                <div className="space-y-2">
                  <Label>3. Safety Concerns Raised</Label>
                  <Textarea 
                    rows={3} 
                    placeholder="Issues, concerns, or observations raised by participants..."
                  />
                </div>

                <div className="space-y-2">
                  <Label>4. Review of Previous Action Items</Label>
                  <Textarea 
                    rows={2} 
                    placeholder="Status of actions from previous meeting..."
                  />
                </div>

                <div className="space-y-2">
                  <Label>5. Training & Competency Requirements</Label>
                  <Textarea 
                    rows={2} 
                    placeholder="Training needs, certifications, skill gaps..."
                  />
                </div>

                <div className="space-y-2">
                  <Label>6. Equipment & Resource Status</Label>
                  <Textarea 
                    rows={2} 
                    placeholder="PPE availability, equipment condition, resource requirements..."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Decisions Made</Label>
                <Textarea 
                  rows={3} 
                  placeholder="Key decisions and resolutions from the meeting..."
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label>Action Items & Responsibilities</Label>
                <Textarea 
                  rows={4} 
                  placeholder="List action items with responsible persons and target dates..."
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label>Next Meeting Schedule</Label>
                <Input type="date" required />
              </div>

              <div className="space-y-2">
                <Label>Additional Notes/Comments</Label>
                <Textarea 
                  rows={3} 
                  placeholder="Any other important information or observations..."
                />
              </div>

              <Button type="submit" className="w-full md:w-auto px-8">
                Save Meeting Minutes
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default SICMeeting;
