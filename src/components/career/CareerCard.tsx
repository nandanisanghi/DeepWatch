
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Building, Briefcase, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

interface CareerCardProps {
  career: {
    id: string;
    title: string;
    description: string;
    matchScore: number;
    salary: string;
    growth: string;
    education: string;
    skills: string[];
  };
}

export function CareerCard({ career }: CareerCardProps) {
  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return "text-green-500";
    if (score >= 80) return "text-emerald-500";
    if (score >= 70) return "text-blue-500";
    return "text-amber-500";
  };

  return (
    <Card className="overflow-hidden border-l-4 hover:shadow-md transition-all" 
      style={{ borderLeftColor: `hsl(var(--primary))` }}>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="md:col-span-3">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">{career.title}</h3>
                <p className="text-muted-foreground">{career.description}</p>
              </div>
              <div className="text-right">
                <div className={`text-2xl font-bold ${getMatchScoreColor(career.matchScore)}`}>
                  {career.matchScore}%
                </div>
                <div className="text-xs text-muted-foreground">Match Score</div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <Briefcase className="h-4 w-4 mr-2 text-muted-foreground" />
                <div>
                  <div className="text-sm font-medium">Salary Range</div>
                  <div className="text-sm text-muted-foreground">{career.salary}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 mr-2 text-muted-foreground" />
                <div>
                  <div className="text-sm font-medium">Growth Rate</div>
                  <div className="text-sm text-muted-foreground">{career.growth}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
                <div>
                  <div className="text-sm font-medium">Education Needed</div>
                  <div className="text-sm text-muted-foreground">{career.education}</div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="text-sm font-medium mb-2">Key Skills</div>
              <div className="flex flex-wrap gap-2">
                {career.skills.map((skill, index) => (
                  <span key={index} className="px-2 py-1 bg-muted text-xs rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </div>
        
        <div className="md:border-l flex flex-col justify-center p-6">
          <Button asChild className="mb-2">
            <Link to={`/career-path/${career.id}`}>
              View Career Path
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          
          <Button variant="outline" asChild>
            <Link to={`/roadmap/${career.id}`}>
              Explore Roadmap
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
