import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Building2 } from "lucide-react";
import { toast } from "sonner";

const Auth = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!employeeId || !password) {
      toast.error("Please enter both Employee ID and Password");
      return;
    }

    // Demo login - in production, this would validate against a backend
    if (employeeId && password) {
      localStorage.setItem("employeeId", employeeId);
      toast.success("Login successful!");
      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/10 to-background p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-success/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <Card className="w-full max-w-md shadow-2xl border-2 border-primary/20 backdrop-blur-sm bg-card/95 animate-scale-in relative z-10 hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all duration-500">
        <CardHeader className="space-y-3 text-center pb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg animate-glow-pulse hover:scale-110 transition-transform duration-300">
            <Shield className="w-10 h-10 text-primary-foreground animate-pulse" />
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            SafeNet
          </CardTitle>
          <CardDescription className="text-base">
            Enter your credentials to access the system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Label htmlFor="employeeId" className="text-foreground font-medium">Employee ID</Label>
              <Input
                id="employeeId"
                placeholder="Enter your Employee ID"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                className="h-12 border-2 border-primary/30 focus:border-primary transition-all duration-300 hover:border-primary/50 bg-background/50"
              />
            </div>
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Label htmlFor="password" className="text-foreground font-medium">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 border-2 border-primary/30 focus:border-primary transition-all duration-300 hover:border-primary/50 bg-background/50"
              />
            </div>
            <Button type="submit" className="w-full h-12 text-lg font-semibold animate-fade-in group relative overflow-hidden" style={{ animationDelay: '0.3s' }}>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Sign In
              </span>
            </Button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-primary/20 space-y-3 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="font-medium">Project:</span>
              <span>Construction Site Alpha</span>
            </div>
            <div className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              <span className="font-medium">Emergency Contact:</span>
              <span className="ml-2 text-primary">+91 9876543210</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
