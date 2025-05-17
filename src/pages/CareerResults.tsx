
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ChevronRight, Download, Share2, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { CareerCard } from "@/components/career/CareerCard";

// Mock data for career recommendations
const careerRecommendations = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    description: "Develop applications and systems using programming languages and frameworks.",
    matchScore: 95,
    salary: "$105,000 - $150,000",
    growth: "22% (Much faster than average)",
    education: "Bachelor's degree in Computer Science",
    skills: ["Programming", "Problem Solving", "Mathematics"]
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Analyze complex data to help organizations make better decisions.",
    matchScore: 88,
    salary: "$100,000 - $140,000",
    growth: "36% (Much faster than average)",
    education: "Master's degree in Data Science, Statistics, or related field",
    skills: ["Statistics", "Machine Learning", "Data Analysis"]
  },
  {
    id: "ux-designer",
    title: "UX Designer",
    description: "Create intuitive and engaging user experiences for digital products.",
    matchScore: 82,
    salary: "$85,000 - $120,000",
    growth: "13% (Faster than average)",
    education: "Bachelor's degree in Design, HCI, or related field",
    skills: ["Design Thinking", "User Research", "Prototyping"]
  },
  {
    id: "product-manager",
    title: "Product Manager",
    description: "Lead the development of products from conception to launch.",
    matchScore: 79,
    salary: "$95,000 - $140,000",
    growth: "10% (Faster than average)",
    education: "Bachelor's degree in Business or related technical field",
    skills: ["Leadership", "Strategic Thinking", "Communication"]
  },
];

export default function CareerResults() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-3">Your Career Recommendations</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Based on your responses, we've identified these career paths that match your skills, interests, and personality.
            </p>
          </div>

          <Card className="mb-10 border border-primary/10">
            <CardHeader className="bg-primary/5">
              <CardTitle>Your Assessment Insights</CardTitle>
              <CardDescription>
                Here's a summary of your strengths and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-medium text-primary mb-2">Top Skills</h3>
                  <ul className="space-y-1">
                    <li>• Problem Solving</li>
                    <li>• Communication</li>
                    <li>• Technical Aptitude</li>
                    <li>• Analytical Thinking</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-2">Key Interests</h3>
                  <ul className="space-y-1">
                    <li>• Technology</li>
                    <li>• Creative Work</li>
                    <li>• Data Analysis</li>
                    <li>• Collaborative Projects</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-2">Work Style</h3>
                  <ul className="space-y-1">
                    <li>• Balance of independent and team work</li>
                    <li>• Creative and flexible environment</li>
                    <li>• Results-oriented approach</li>
                    <li>• Continuous learning</li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t bg-muted/20 flex justify-between">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Save Assessment
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share Results
              </Button>
            </CardFooter>
          </Card>

          <h2 className="text-2xl font-bold mb-6">Recommended Career Paths</h2>
          
          <div className="space-y-6 mb-10">
            {careerRecommendations.map((career) => (
              <CareerCard key={career.id} career={career} />
            ))}
          </div>

          <div className="flex justify-center">
            <Button asChild>
              <Link to="/dashboard">
                Go to Your Dashboard
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
