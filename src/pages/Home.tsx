import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Eye, 
  GraduationCap, 
  AlertTriangle, 
  Heart, 
  StopCircle, 
  Users,
  AlertCircle,
  FileWarning,
  LogOut,
  Shield
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const employeeId = localStorage.getItem("employeeId");

  useEffect(() => {
    if (!employeeId) {
      navigate("/");
    }
  }, [employeeId, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("employeeId");
    navigate("/");
  };

  const modules = [
    {
      title: "Safety Observation",
      description: "Log unsafe acts or conditions",
      icon: Eye,
      color: "from-primary to-primary/80",
      path: "/safety-observation"
    },
    {
      title: "Training",
      description: "Induction, Daily Talk, PEP Talk & More",
      icon: GraduationCap,
      color: "from-success to-success/80",
      path: "/training"
    },
    {
      title: "Near Miss",
      description: "Report incidents that could have caused harm",
      icon: AlertTriangle,
      color: "from-warning to-warning/80",
      path: "/near-miss"
    },
    {
      title: "First-Aid Case",
      description: "Log minor injuries and treatment",
      icon: Heart,
      color: "from-destructive to-destructive/80",
      path: "/first-aid"
    },
    {
      title: "Stop Work Order",
      description: "Document halted works due to unsafe conditions",
      icon: StopCircle,
      color: "from-destructive to-warning",
      path: "/stop-work"
    },
    {
      title: "SIC Meeting",
      description: "Site In-Charge safety discussions",
      icon: Users,
      color: "from-accent to-primary",
      path: "/sic-meeting"
    },
    {
      title: "Safety Advisory Warning",
      description: "Record warnings and advisories",
      icon: AlertCircle,
      color: "from-warning to-primary",
      path: "/safety-advisory"
    },
    {
      title: "Dangerous Occurrence",
      description: "Log major incidents of serious consequence",
      icon: FileWarning,
      color: "from-destructive to-destructive/70",
      path: "/dangerous-occurrence"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">SafeNet</h1>
              <p className="text-sm text-muted-foreground">Employee: {employeeId}</p>
            </div>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Welcome to Safety Management</h2>
          <p className="text-muted-foreground text-lg">Select a module to manage safety activities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <Card 
                key={module.title}
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 hover:border-primary/50"
                onClick={() => navigate(module.path)}
              >
                <CardHeader className="space-y-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{module.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {module.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                    Open Module
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Home;
