import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Shield, Building2 } from "lucide-react";
import { toast } from "sonner";

const Auth = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [resetOtp, setResetOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetStep, setResetStep] = useState<"email" | "otp" | "password">("email");
  const [isResetDialogOpen, setIsResetDialogOpen] = useState(false);
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

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (resetStep === "email") {
      if (!resetEmail) {
        toast.error("Please enter your email address");
        return;
      }
      // Demo - in production, this would send OTP to email via backend
      toast.success("OTP sent to your email!");
      setResetStep("otp");
    } else if (resetStep === "otp") {
      if (!resetOtp || resetOtp.length !== 6) {
        toast.error("Please enter a valid 6-digit OTP");
        return;
      }
      // Demo - in production, this would verify OTP with backend
      toast.success("OTP verified!");
      setResetStep("password");
    } else if (resetStep === "password") {
      if (!newPassword || newPassword.length < 6) {
        toast.error("Password must be at least 6 characters");
        return;
      }
      if (newPassword !== confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }
      // Demo - in production, this would update password in backend
      toast.success("Password reset successful!");
      setIsResetDialogOpen(false);
      setResetEmail("");
      setResetOtp("");
      setNewPassword("");
      setConfirmPassword("");
      setResetStep("email");
    }
  };

  const handleResetDialogClose = (open: boolean) => {
    setIsResetDialogOpen(open);
    if (!open) {
      // Reset all states when dialog closes
      setResetEmail("");
      setResetOtp("");
      setNewPassword("");
      setConfirmPassword("");
      setResetStep("email");
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

            <Dialog open={isResetDialogOpen} onOpenChange={handleResetDialogClose}>
              <DialogTrigger asChild>
                <Button
                  type="button"
                  variant="link"
                  className="w-full text-sm text-primary hover:text-primary/80 animate-fade-in"
                  style={{ animationDelay: '0.35s' }}
                >
                  Forgot Password?
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Reset Password
                  </DialogTitle>
                  <DialogDescription>
                    {resetStep === "email" && "Enter your email address and we'll send you an OTP to reset your password."}
                    {resetStep === "otp" && "Enter the 6-digit OTP sent to your email."}
                    {resetStep === "password" && "Create a new password for your account."}
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handlePasswordReset} className="space-y-4 pt-4">
                  {resetStep === "email" && (
                    <div className="space-y-2">
                      <Label htmlFor="reset-email">Email Address</Label>
                      <Input
                        id="reset-email"
                        type="email"
                        placeholder="Enter your email"
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        className="h-11"
                      />
                    </div>
                  )}

                  {resetStep === "otp" && (
                    <div className="space-y-2">
                      <Label htmlFor="reset-otp">OTP Code</Label>
                      <Input
                        id="reset-otp"
                        type="text"
                        placeholder="Enter 6-digit OTP"
                        value={resetOtp}
                        onChange={(e) => setResetOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                        maxLength={6}
                        className="h-11 text-center text-xl tracking-widest"
                      />
                      <p className="text-xs text-muted-foreground">
                        OTP sent to {resetEmail}
                      </p>
                    </div>
                  )}

                  {resetStep === "password" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input
                          id="new-password"
                          type="password"
                          placeholder="Enter new password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          className="h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          placeholder="Confirm new password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="h-11"
                        />
                      </div>
                    </>
                  )}

                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => handleResetDialogClose(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="flex-1">
                      {resetStep === "email" && "Send OTP"}
                      {resetStep === "otp" && "Verify OTP"}
                      {resetStep === "password" && "Reset Password"}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
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
