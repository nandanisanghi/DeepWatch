
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Index() {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <main className="flex-1">
        <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
          <div className="flex max-w-[980px] flex-col items-center gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
              DeepWatch <span className="text-primary">Video Verification</span> Portal
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
              Verify your videos against deepfake technology with advanced AI analysis
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <Button 
              size="lg" 
              onClick={() => navigate("/verify")}
              className="w-full md:w-auto"
            >
              Start Verification <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/dashboard")}
              className="w-full md:w-auto"
            >
              View Dashboard
            </Button>
          </div>
        </section>

        <section className="container py-8 md:py-12 lg:py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="dream-card hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">Upload Videos</h3>
              <p className="text-muted-foreground">Upload your videos for analysis using our secure platform.</p>
            </div>
            <div className="dream-card hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
              <p className="text-muted-foreground">Our advanced AI algorithms detect manipulations and anomalies.</p>
            </div>
            <div className="dream-card hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">Detailed Reports</h3>
              <p className="text-muted-foreground">Get comprehensive reports with visualization of analysis results.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
