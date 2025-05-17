
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Eye } from "lucide-react";
import { getUserAnalyses } from "@/lib/api";

interface Analysis {
  id: string;
  videoName: string;
  createdAt: string;
  status: "processing" | "complete" | "failed";
  deepfakeScore: number;
}

export default function Dashboard() {
  const [analyses, setAnalyses] = useState<Analysis[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalyses = async () => {
      try {
        const data = await getUserAnalyses();
        setAnalyses(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching analyses:", error);
        setLoading(false);
      }
    };

    fetchAnalyses();
  }, []);

  const getStatusBadgeClass = (status: string, score: number) => {
    if (status === "processing") return "bg-blue-100 text-blue-800";
    if (status === "failed") return "bg-gray-100 text-gray-800";
    
    if (score < 30) return "bg-green-100 text-green-800";
    if (score < 70) return "bg-amber-100 text-amber-800";
    return "bg-red-100 text-red-800";
  };

  const getStatusText = (status: string, score: number) => {
    if (status === "processing") return "Processing";
    if (status === "failed") return "Failed";
    
    if (score < 30) return "Authentic";
    if (score < 70) return "Suspicious";
    return "Likely Fake";
  };

  return (
    <div className="container max-w-6xl mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Your Analysis Dashboard</h1>
          <p className="text-muted-foreground">Track and manage your video verification history</p>
        </div>
        <Button asChild className="mt-4 md:mt-0">
          <Link to="/verify">New Analysis</Link>
        </Button>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Analyses</TabsTrigger>
          <TabsTrigger value="flagged">Flagged Videos</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          {loading ? (
            <div className="p-12 text-center">
              <p className="text-muted-foreground">Loading your analyses...</p>
            </div>
          ) : analyses.length === 0 ? (
            <Card className="p-12 text-center">
              <CardContent className="pt-6">
                <BarChart className="mx-auto h-12 w-12 text-muted-foreground opacity-50 mb-4" />
                <h3 className="text-xl font-medium mb-2">No analyses yet</h3>
                <p className="text-muted-foreground mb-6">
                  Start by uploading your first video for deepfake detection.
                </p>
                <Button asChild>
                  <Link to="/verify">Verify a Video</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {analyses.map((analysis) => (
                <Card key={analysis.id}>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{analysis.videoName}</CardTitle>
                        <CardDescription>
                          {new Date(analysis.createdAt).toLocaleDateString()}
                        </CardDescription>
                      </div>
                      <div
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(
                          analysis.status,
                          analysis.deepfakeScore
                        )}`}
                      >
                        {getStatusText(analysis.status, analysis.deepfakeScore)}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {analysis.status === "complete" && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm">Deepfake score:</span>
                        <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className={`h-full ${
                              analysis.deepfakeScore < 30
                                ? "bg-green-500"
                                : analysis.deepfakeScore < 70
                                ? "bg-amber-500"
                                : "bg-red-500"
                            }`}
                            style={{ width: `${analysis.deepfakeScore}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">
                          {analysis.deepfakeScore}%
                        </span>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link to={`/results/${analysis.id}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        View Results
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
        <TabsContent value="flagged">
          {loading ? (
            <div className="p-12 text-center">
              <p className="text-muted-foreground">Loading flagged videos...</p>
            </div>
          ) : analyses.filter(a => a.status === "complete" && a.deepfakeScore >= 70).length === 0 ? (
            <Card className="p-12 text-center">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-2">No flagged videos</h3>
                <p className="text-muted-foreground">
                  None of your analyzed videos have been flagged as likely deepfakes.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {analyses
                .filter(a => a.status === "complete" && a.deepfakeScore >= 70)
                .map((analysis) => (
                  <Card key={analysis.id}>
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <CardTitle className="text-lg">{analysis.videoName}</CardTitle>
                          <CardDescription>
                            {new Date(analysis.createdAt).toLocaleDateString()}
                          </CardDescription>
                        </div>
                        <div className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                          Likely Fake
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">Deepfake score:</span>
                        <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-red-500"
                            style={{ width: `${analysis.deepfakeScore}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">
                          {analysis.deepfakeScore}%
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" asChild className="w-full">
                        <Link to={`/results/${analysis.id}`}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Results
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
