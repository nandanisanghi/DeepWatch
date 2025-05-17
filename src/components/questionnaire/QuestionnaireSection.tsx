
import React, { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";

interface QuestionnaireSectionProps {
  section: {
    id: string;
    title: string;
    description: string;
  };
  onAnswersChange: (answers: Record<string, any>) => void;
  savedAnswers: Record<string, any>;
}

export function QuestionnaireSection({ section, onAnswersChange, savedAnswers }: QuestionnaireSectionProps) {
  const [sectionAnswers, setSectionAnswers] = useState<Record<string, any>>(savedAnswers || {});
  
  // Questions based on section ID
  const getQuestions = () => {
    switch(section.id) {
      case "interests":
        return [
          {
            id: "subjects",
            type: "checkbox-group",
            question: "Which subjects do you enjoy the most?",
            options: [
              "Mathematics", "Science", "Literature", "History", 
              "Arts", "Physical Education", "Computer Science", 
              "Foreign Languages", "Economics", "Psychology"
            ]
          },
          {
            id: "activities",
            type: "checkbox-group",
            question: "What activities do you enjoy in your free time?",
            options: [
              "Reading", "Sports", "Programming", "Art/Drawing", 
              "Music", "Socializing", "Gaming", "Writing", 
              "Outdoor Activities", "Volunteering"
            ]
          },
          {
            id: "preference",
            type: "radio",
            question: "Do you prefer working with:",
            options: [
              "People", "Data", "Things/Objects", "Ideas/Concepts"
            ]
          }
        ];
      
      case "skills":
        return [
          {
            id: "technical",
            type: "slider-group",
            question: "Rate your comfort level with the following technical skills:",
            options: [
              "Computer Programming", "Data Analysis", "Design/Graphics", 
              "Scientific Research", "Technical Writing"
            ]
          },
          {
            id: "soft",
            type: "slider-group",
            question: "Rate your soft skills:",
            options: [
              "Communication", "Teamwork", "Leadership", 
              "Problem Solving", "Time Management"
            ]
          },
          {
            id: "other_skills",
            type: "text",
            question: "Are there any other skills you'd like to mention?"
          }
        ];
      
      case "personality":
        return [
          {
            id: "work_style",
            type: "radio",
            question: "How do you prefer to work?",
            options: [
              "Independently", "In a team", "Mix of both"
            ]
          },
          {
            id: "environment",
            type: "radio",
            question: "What type of environment do you thrive in?",
            options: [
              "Quiet and focused", "Dynamic and fast-paced", "Creative and flexible"
            ]
          },
          {
            id: "challenges",
            type: "radio",
            question: "How do you approach new challenges?",
            options: [
              "Analyze thoroughly before acting", 
              "Jump in and learn as I go", 
              "Collaborate with others to find solutions"
            ]
          }
        ];
      
      case "academics":
        return [
          {
            id: "education",
            type: "radio",
            question: "What is your current educational level?",
            options: [
              "High School", "Associate's Degree", "Bachelor's Degree", 
              "Master's Degree", "Doctorate", "Other"
            ]
          },
          {
            id: "performance",
            type: "radio",
            question: "How would you describe your academic performance?",
            options: [
              "Outstanding", "Above Average", "Average", "Below Average"
            ]
          },
          {
            id: "favorite_subjects",
            type: "text",
            question: "Which subjects do you perform best in?"
          }
        ];
      
      case "aspirations":
        return [
          {
            id: "goals",
            type: "checkbox-group",
            question: "What are your career goals?",
            options: [
              "Financial stability", "Work-life balance", "Making an impact", 
              "Leadership position", "Creative expression", "Innovation", 
              "Helping others", "Travel opportunities"
            ]
          },
          {
            id: "values",
            type: "checkbox-group",
            question: "What values are most important to you in a career?",
            options: [
              "Creativity", "Security", "Independence", "Challenge", 
              "Recognition", "Variety", "Teamwork", "Structure"
            ]
          },
          {
            id: "dream_job",
            type: "textarea",
            question: "Describe your ideal job or career (optional)"
          }
        ];
      
      default:
        return [];
    }
  };
  
  const questions = getQuestions();
  
  useEffect(() => {
    onAnswersChange(sectionAnswers);
  }, [sectionAnswers, onAnswersChange]);
  
  const handleInputChange = (questionId: string, value: any) => {
    setSectionAnswers({
      ...sectionAnswers,
      [questionId]: value
    });
  };
  
  return (
    <div className="space-y-8">
      {questions.map((question, index) => (
        <div key={question.id} className="space-y-4">
          <h3 className="text-lg font-medium">{question.question}</h3>
          
          {question.type === "checkbox-group" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {question.options.map((option) => {
                const optionId = `${question.id}-${option}`;
                return (
                  <div key={optionId} className="flex items-center space-x-2">
                    <Checkbox 
                      id={optionId}
                      checked={(sectionAnswers[question.id] || []).includes(option)}
                      onCheckedChange={(checked) => {
                        const currentValues = [...(sectionAnswers[question.id] || [])];
                        if (checked) {
                          if (!currentValues.includes(option)) {
                            handleInputChange(question.id, [...currentValues, option]);
                          }
                        } else {
                          handleInputChange(
                            question.id, 
                            currentValues.filter(item => item !== option)
                          );
                        }
                      }}
                    />
                    <Label htmlFor={optionId}>{option}</Label>
                  </div>
                );
              })}
            </div>
          )}
          
          {question.type === "radio" && (
            <RadioGroup
              value={sectionAnswers[question.id] || ""}
              onValueChange={(value) => handleInputChange(question.id, value)}
            >
              <div className="space-y-2">
                {question.options.map((option) => {
                  const optionId = `${question.id}-${option}`;
                  return (
                    <div key={optionId} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={optionId} />
                      <Label htmlFor={optionId}>{option}</Label>
                    </div>
                  );
                })}
              </div>
            </RadioGroup>
          )}
          
          {question.type === "slider-group" && (
            <div className="space-y-6">
              {question.options.map((option) => {
                const optionId = `${question.id}-${option}`;
                const value = sectionAnswers[optionId] 
                  ? [sectionAnswers[optionId]] 
                  : [0];
                
                return (
                  <div key={optionId} className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor={optionId}>{option}</Label>
                      <span className="text-sm text-muted-foreground">
                        {value[0]} / 10
                      </span>
                    </div>
                    <Slider
                      id={optionId}
                      min={0}
                      max={10}
                      step={1}
                      value={value}
                      onValueChange={(newValue) => {
                        handleInputChange(optionId, newValue[0]);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          )}
          
          {question.type === "text" && (
            <Input
              value={sectionAnswers[question.id] || ""}
              onChange={(e) => handleInputChange(question.id, e.target.value)}
              placeholder="Type your answer here"
            />
          )}
          
          {question.type === "textarea" && (
            <Textarea
              value={sectionAnswers[question.id] || ""}
              onChange={(e) => handleInputChange(question.id, e.target.value)}
              placeholder="Type your answer here"
              rows={4}
            />
          )}
        </div>
      ))}
    </div>
  );
}
