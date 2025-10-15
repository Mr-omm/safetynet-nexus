import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Eye } from "lucide-react";
import { toast } from "sonner";

const SafetyObservation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    observerName: "",
    location: "",
    observationType: "",
    severity: "",
    description: "",
    correctiveAction: "",
    targetDate: "",
    responsiblePerson: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Safety observation logged successfully!");
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5">
      <header className="bg-card border-b border-border shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => navigate("/home")} className="mb-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Safety Observation</h1>
              <p className="text-muted-foreground">Report unsafe acts or conditions</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Log Safety Observation</CardTitle>
            <CardDescription>
              Document any unsafe acts, unsafe conditions, or safety concerns observed at the site
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="observerName">Observer Name</Label>
                  <Input
                    id="observerName"
                    value={formData.observerName}
                    onChange={(e) => setFormData({...formData, observerName: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="e.g., Building A - Floor 3"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="observationType">Observation Type</Label>
                  <Select value={formData.observationType} onValueChange={(value) => setFormData({...formData, observationType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="unsafe-act">Unsafe Act</SelectItem>
                      <SelectItem value="unsafe-condition">Unsafe Condition</SelectItem>
                      <SelectItem value="good-practice">Good Safety Practice</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="severity">Severity Level</Label>
                  <Select value={formData.severity} onValueChange={(value) => setFormData({...formData, severity: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="critical">Critical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Observation Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what you observed in detail..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="correctiveAction">Corrective Action Required</Label>
                <Textarea
                  id="correctiveAction"
                  placeholder="What actions should be taken to address this observation?"
                  value={formData.correctiveAction}
                  onChange={(e) => setFormData({...formData, correctiveAction: e.target.value})}
                  rows={3}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="responsiblePerson">Responsible Person</Label>
                  <Input
                    id="responsiblePerson"
                    value={formData.responsiblePerson}
                    onChange={(e) => setFormData({...formData, responsiblePerson: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetDate">Target Closure Date</Label>
                  <Input
                    id="targetDate"
                    type="date"
                    value={formData.targetDate}
                    onChange={(e) => setFormData({...formData, targetDate: e.target.value})}
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full md:w-auto px-8">
                Submit Observation
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default SafetyObservation;
