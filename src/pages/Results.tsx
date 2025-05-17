
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Download, ChevronLeft, Eye } from "lucide-react";
import { getAnalysisResults } from "@/lib/api";
import FrameAnalysis from "@/components/FrameAnalysis";

// Result types for TypeScript
interface AnalysisResult {
  id: string;
  videoName: string;
  createdAt: string;
  status: "processing" | "complete" | "failed";
  deepfakeScore: number;
  faceSwapDetected: boolean;
  manipulationScore: number;
  inconsistencyScore: number;
  audioAnalysisScore: number;
  frames: {
    timestamp: number;
    anomalyScore: number;
    regions?: { x: number; y: number; width: number; height: number; score: number }[];
  }[];
}

export default function Results() {
  const { id } = useParams<{ id: string }>();
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedFrame, setSelectedFrame] = useState<number | null>(null);

  useEffect(() => {
    let intervalId: number;

    const fetchResults = async () => {
      try {
        const data = await getAnalysisResults(id || "");
        setResult(data);
        
        if (data.status === "processing") {
          // Poll for updates every 3 seconds if still processing
          intervalId = window.setInterval(() => {
            fetchResults();
          }, 3000);
        } else {
          setLoading(false);
          clearInterval(intervalId);
        }
      } catch (error) {
        console.error("Error fetching analysis results:", error);
        setLoading(false);
      }
    };

    fetchResults();

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [id]);

  const getScoreColor = (score: number) => {
    if (score < 30) return "text-green-600";
    if (score < 70) return "text-amber-600";
    return "text-red-600";
  };

  const getScoreBackground = (score: number) => {
    if (score < 30) return "bg-green-100";
    if (score < 70) return "bg-amber-100";
    return "bg-red-100";
  };

  const downloadReport = () => {
    // In a real app, this would generate a PDF report
    console.log("Downloading report for analysis ID:", id);
    alert("Report download functionality will be implemented in the future.");
  };

  if (loading || !result) {
    return (
      <div className="container max-w-4xl mx-auto py-8 px-4 text-center">
        <h1 className="text-2xl font-bold mb-6">Analyzing Video</h1>
        <Progress value={result?.status === "processing" ? 60 : 30} className="max-w-md mx-auto mb-4" />
        <p className="text-muted-foreground">
          This may take a few minutes depending on video length and complexity...
        </p>
      </div>
    );
  }

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <div className="mb-6">
        <Link to="/verify" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ChevronLeft className="mr-1 h-4 w-4" /> Back to verification
        </Link>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold">Analysis Results</h1>
          <p className="text-muted-foreground">
            {result.videoName} • {new Date(result.createdAt).toLocaleString()}
          </p>
        </div>
        <Button onClick={downloadReport} className="mt-4 md:mt-0">
          <Download className="mr-2 h-4 w-4" />
          Download Report
        </Button>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Deepfake Score</CardTitle>
            <CardDescription>Overall likelihood of manipulation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className={`text-4xl font-bold ${getScoreColor(result.deepfakeScore)}`}>
              {result.deepfakeScore}%
            </div>
            <Progress value={result.deepfakeScore} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Face Swap</CardTitle>
            <CardDescription>Detection of face replacement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div
                className={`text-lg font-semibold px-3 py-1 rounded-full ${
                  result.faceSwapDetected
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {result.faceSwapDetected ? "Detected" : "Not Detected"}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Audio Analysis</CardTitle>
            <CardDescription>Voice manipulation detection</CardDescription>
          </CardHeader>
          <CardContent>
            <div className={`text-4xl font-bold ${getScoreColor(result.audioAnalysisScore)}`}>
              {result.audioAnalysisScore}%
            </div>
            <Progress value={result.audioAnalysisScore} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Frame Analysis</CardTitle>
          <CardDescription>
            Timeline of detected anomalies throughout the video
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="relative h-10">
              <div className="absolute inset-0 bg-secondary rounded-md">
                {result.frames.map((frame, index) => (
                  <button
                    key={index}
                    className={`absolute top-0 h-full w-1 ${
                      getScoreBackground(frame.anomalyScore)
                    } hover:opacity-100 cursor-pointer ${
                      selectedFrame === index ? "ring-2 ring-primary ring-offset-1" : ""
                    }`}
                    style={{
                      left: `${(frame.timestamp / (result.frames.length - 1)) * 100}%`,
                      opacity: 0.5 + frame.anomalyScore / 200,
                    }}
                    onClick={() => setSelectedFrame(index)}
                    title={`Anomaly score: ${frame.anomalyScore}%`}
                  />
                ))}
              </div>
            </div>
            
            {selectedFrame !== null && (
              <>
                <Separator />
                <FrameAnalysis frame={result.frames[selectedFrame]} frameIndex={selectedFrame} />
              </>
            )}
            
            {selectedFrame === null && (
              <div className="text-center py-6 text-muted-foreground">
                <Eye className="mx-auto h-8 w-8 mb-2 opacity-50" />
                <p>Click on a frame marker above to view detailed analysis</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Technical Analysis</CardTitle>
          <CardDescription>
            Detailed breakdown of detection methods and results
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">Visual Inconsistencies</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Detection of visual artifacts and inconsistencies in the video
              </p>
              <Progress value={result.inconsistencyScore} className="h-2" />
              <div className="flex justify-between mt-1 text-xs">
                <span>Low</span>
                <span className={getScoreColor(result.inconsistencyScore)}>
                  {result.inconsistencyScore}%
                </span>
                <span>High</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-1">Facial Feature Analysis</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Examination of facial features for signs of manipulation
              </p>
              <Progress value={result.manipulationScore} className="h-2" />
              <div className="flex justify-between mt-1 text-xs">
                <span>Low</span>
                <span className={getScoreColor(result.manipulationScore)}>
                  {result.manipulationScore}%
                </span>
                <span>High</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
