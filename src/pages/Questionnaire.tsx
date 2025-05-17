
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { QuestionnaireSection } from "@/components/questionnaire/QuestionnaireSection";

const sections = [
  {
    id: "interests",
    title: "Interests & Passions",
    description: "Tell us what subjects and activities you enjoy the most.",
  },
  {
    id: "skills",
    title: "Skills & Strengths",
    description: "Help us understand what you're good at.",
  },
  {
    id: "personality",
    title: "Personality Traits",
    description: "Let's learn about how you approach situations and interact with others.",
  },
  {
    id: "academics",
    title: "Academic Performance",
    description: "Share your educational background and achievements.",
  },
  {
    id: "aspirations",
    title: "Future Aspirations",
    description: "What are your goals and what matters to you in a career?",
  },
];

export default function Questionnaire() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const navigate = useNavigate();
  
  const currentSection = sections[currentSectionIndex];
  const progress = ((currentSectionIndex) / (sections.length - 1)) * 100;
  
  const handleNext = () => {
    if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      window.scrollTo(0, 0);
    } else {
      handleSubmit();
    }
  };
  
  const handleBack = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const updateAnswers = (sectionId, sectionAnswers) => {
    setAnswers({
      ...answers,
      [sectionId]: sectionAnswers
    });
  };
  
  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // In a real app, we would send this data to an API
      console.log("Submitting answers:", answers);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Navigate to results
      navigate("/career-results");
    } catch (error) {
      console.error("Error submitting questionnaire:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 py-10">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">
                Step {currentSectionIndex + 1} of {sections.length}
              </p>
              <p className="text-sm text-muted-foreground">
                {Math.round(progress)}% Complete
              </p>
            </div>
            <Progress value={progress} className="h-2" />
            <CardTitle className="mt-4">{currentSection.title}</CardTitle>
            <CardDescription>{currentSection.description}</CardDescription>
          </CardHeader>
          
          <CardContent>
            <QuestionnaireSection 
              section={currentSection}
              onAnswersChange={(answers) => updateAnswers(currentSection.id, answers)}
              savedAnswers={answers[currentSection.id] || {}}
            />
          </CardContent>
          
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentSectionIndex === 0 || isSubmitting}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing
                </>
              ) : currentSectionIndex < sections.length - 1 ? (
                <>
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
