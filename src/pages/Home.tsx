
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, CheckCircle, Compass, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <section className="text-center mb-16 pt-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            PathFinder
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Your AI-powered career navigator for discovering the perfect path based on your unique skills and interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="gap-2">
              <Link to="/questionnaire">
                Get Started <ArrowRight />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/careers">
                Explore Careers
              </Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">How PathFinder Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="text-primary" />
                </div>
                <CardTitle>Take the Assessment</CardTitle>
                <CardDescription>
                  Complete our comprehensive questionnaire to help us understand your strengths.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Compass className="text-primary" />
                </div>
                <CardTitle>Get Personalized Recommendations</CardTitle>
                <CardDescription>
                  Receive AI-powered career suggestions tailored to your skills and interests.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="text-primary" />
                </div>
                <CardTitle>Follow Your Roadmap</CardTitle>
                <CardDescription>
                  Access detailed career paths with courses, internships, and resources.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Discover Your Perfect Career Match</h2>
              <p className="text-muted-foreground mb-6">
                Our intelligent assessment analyzes your personality traits, academic strengths, 
                skills, and interests to recommend career paths that align with who you are.
              </p>
              <ul className="space-y-3">
                {[
                  "Personalized career recommendations",
                  "Step-by-step educational roadmaps",
                  "Resource recommendations for skill development",
                  "Mentor matching with industry professionals"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Career planning" 
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-10">Featured Career Paths</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Software Development", 
                description: "Build applications and systems that power the modern world.", 
                count: 15
              },
              { 
                title: "Healthcare", 
                description: "Make a difference in people's lives through medical careers.", 
                count: 22
              },
              { 
                title: "Business & Finance", 
                description: "Drive economic growth and help organizations thrive.", 
                count: 18
              },
            ].map((category, i) => (
              <Card key={i} className="hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <Link to={`/careers/category/${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      Explore {category.count} paths
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
