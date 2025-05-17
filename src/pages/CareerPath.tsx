
import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, BookOpen, Briefcase, Calendar, GraduationCap, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

// Mock career paths data
const careerPaths = {
  "software-engineer": {
    title: "Software Engineer",
    description: "Software engineers design, develop, and maintain software systems using programming languages, frameworks, and software engineering principles.",
    overview: "Software engineering is a dynamic field that involves creating software solutions for a wide range of applications. As a software engineer, you'll use programming languages, development tools, and engineering principles to build reliable and efficient software systems. The role can range from developing mobile apps and websites to designing complex systems for businesses, healthcare, finance, and more.",
    matchScore: 95,
    salary: "$105,000 - $150,000",
    growth: "22% (Much faster than average)",
    education: [{
      level: "Bachelor's degree",
      field: "Computer Science, Software Engineering, or related field",
      importance: "Essential for most positions"
    }],
    skills: [
      { name: "Programming Languages", importance: "Critical" },
      { name: "Data Structures & Algorithms", importance: "Critical" },
      { name: "Software Development Methodologies", importance: "High" },
      { name: "Version Control", importance: "High" },
      { name: "Testing & Debugging", importance: "High" },
      { name: "Problem Solving", importance: "Critical" }
    ],
    courses: [
      { name: "Introduction to Computer Science", provider: "edX (CS50)", duration: "12 weeks", level: "Beginner" },
      { name: "Data Structures and Algorithms", provider: "Coursera", duration: "8 weeks", level: "Intermediate" },
      { name: "Web Development Bootcamp", provider: "Udemy", duration: "24 weeks", level: "Beginner to Intermediate" },
      { name: "Software Engineering Principles", provider: "MIT OpenCourseWare", duration: "16 weeks", level: "Advanced" }
    ],
    certifications: [
      { name: "AWS Certified Developer", provider: "Amazon", importance: "Medium" },
      { name: "Microsoft Certified: Azure Developer Associate", provider: "Microsoft", importance: "Medium" },
      { name: "Professional Scrum Developer", provider: "Scrum.org", importance: "Medium" }
    ],
    careerPath: [
      { position: "Junior Software Engineer", experience: "0-2 years", description: "Entry-level position focused on coding and basic software development tasks under supervision." },
      { position: "Software Engineer", experience: "2-5 years", description: "More independent work on features and components, with growing responsibility for design decisions." },
      { position: "Senior Software Engineer", experience: "5-8 years", description: "Leading the development of major features, mentoring junior engineers, and making architectural decisions." },
      { position: "Lead Software Engineer / Tech Lead", experience: "8+ years", description: "Technical leadership of teams, responsible for technical direction and quality of projects." },
      { position: "Software Architect", experience: "10+ years", description: "Designing overall system architecture, making strategic technical decisions, and setting standards." }
    ]
  },
  "data-scientist": {
    title: "Data Scientist",
    description: "Data Scientists analyze complex data sets to find patterns, build predictive models, and help organizations make data-driven decisions.",
    overview: "Data science combines statistics, mathematics, programming, and domain knowledge to extract insights from data. As a data scientist, you'll collect, process, and analyze large datasets, develop machine learning models, and communicate findings to stakeholders. This rapidly growing field applies across industries from healthcare and finance to tech and entertainment.",
    matchScore: 88,
    salary: "$100,000 - $140,000",
    growth: "36% (Much faster than average)",
    education: [{
      level: "Master's degree or PhD",
      field: "Data Science, Statistics, Computer Science, or related field",
      importance: "Highly recommended for competitive positions"
    }],
    skills: [
      { name: "Statistics & Mathematics", importance: "Critical" },
      { name: "Programming (Python, R)", importance: "Critical" },
      { name: "Machine Learning", importance: "Critical" },
      { name: "Data Visualization", importance: "High" },
      { name: "SQL & Database Knowledge", importance: "High" },
      { name: "Critical Thinking", importance: "Critical" }
    ],
    courses: [
      { name: "Introduction to Data Science", provider: "Coursera (IBM)", duration: "10 weeks", level: "Beginner" },
      { name: "Machine Learning", provider: "Stanford Online", duration: "11 weeks", level: "Intermediate" },
      { name: "Deep Learning Specialization", provider: "Coursera (deeplearning.ai)", duration: "12 weeks", level: "Advanced" },
      { name: "SQL for Data Science", provider: "DataCamp", duration: "4 weeks", level: "Beginner" }
    ],
    certifications: [
      { name: "Microsoft Certified: Azure Data Scientist Associate", provider: "Microsoft", importance: "Medium" },
      { name: "IBM Data Science Professional Certificate", provider: "IBM", importance: "Medium" },
      { name: "TensorFlow Developer Certificate", provider: "Google", importance: "Medium" }
    ],
    careerPath: [
      { position: "Data Analyst", experience: "0-2 years", description: "Entry-level position focused on data collection, cleaning, and basic analysis." },
      { position: "Junior Data Scientist", experience: "2-4 years", description: "Building and implementing simple models, contributing to larger data science projects." },
      { position: "Data Scientist", experience: "4-7 years", description: "Leading end-to-end data science projects and developing complex models." },
      { position: "Senior Data Scientist", experience: "7+ years", description: "Setting data strategy, mentoring junior team members, and tackling the most complex problems." },
      { position: "Lead Data Scientist / Head of Data Science", experience: "10+ years", description: "Leading data science teams and setting organization-wide data science strategy." }
    ]
  },
};

export default function CareerPath() {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, we'd fetch this data from an API
  const career = careerPaths[id as keyof typeof careerPaths];
  
  if (!career) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Career not found</h1>
        <p className="mb-6">Sorry, we couldn't find information about this career path.</p>
        <Button asChild>
          <Link to="/career-results">Return to Results</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/career-results">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Results
              </Link>
            </Button>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold">{career.title}</h1>
                <p className="text-muted-foreground">{career.description}</p>
              </div>
              <div className="bg-primary/10 text-primary p-3 rounded-lg text-center">
                <div className="text-2xl font-bold">{career.matchScore}%</div>
                <div className="text-xs">Match Score</div>
              </div>
            </div>
          </div>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Career Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                {career.overview}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-muted-foreground mb-1">Salary Range</span>
                  <span className="font-medium">{career.salary}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-muted-foreground mb-1">Growth Outlook</span>
                  <span className="font-medium">{career.growth}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-muted-foreground mb-1">Education</span>
                  <span className="font-medium">{career.education[0].level}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Tabs defaultValue="roadmap" className="mb-10">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="progression">Progression</TabsTrigger>
            </TabsList>
            
            <TabsContent value="roadmap" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Path to Becoming a {career.title}</CardTitle>
                  <CardDescription>
                    Follow this roadmap to prepare for a successful career in this field
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative pl-8 border-l-2 border-primary/30 space-y-10">
                    <div className="relative">
                      <div className="w-6 h-6 bg-primary rounded-full absolute -left-11 flex items-center justify-center">
                        <BookOpen className="h-3 w-3 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">Education</h3>
                      <p className="mb-4">{career.education[0].level} in {career.education[0].field}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {career.courses.slice(0, 2).map((course, i) => (
                          <Card key={i} className="bg-muted/40">
                            <CardHeader className="p-4 pb-2">
                              <CardTitle className="text-base">{course.name}</CardTitle>
                              <CardDescription>{course.provider}</CardDescription>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Calendar className="h-3 w-3 mr-1" /> 
                                {course.duration} • {course.level}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="w-6 h-6 bg-primary rounded-full absolute -left-11 flex items-center justify-center">
                        <Briefcase className="h-3 w-3 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">Build Experience</h3>
                      <p className="mb-4">Gain practical experience through internships and projects</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-4 h-4 rounded-full bg-primary/20 mr-2 mt-1 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                          </div>
                          <div>Contribute to open-source projects related to {career.title.toLowerCase()}</div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-4 h-4 rounded-full bg-primary/20 mr-2 mt-1 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                          </div>
                          <div>Complete an internship at a technology company</div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-4 h-4 rounded-full bg-primary/20 mr-2 mt-1 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                          </div>
                          <div>Build a portfolio of personal projects</div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="relative">
                      <div className="w-6 h-6 bg-primary rounded-full absolute -left-11 flex items-center justify-center">
                        <GraduationCap className="h-3 w-3 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">Specialize</h3>
                      <p className="mb-4">Develop expertise in specific areas of {career.title}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {career.certifications.slice(0, 2).map((cert, i) => (
                          <Card key={i} className="bg-muted/40">
                            <CardHeader className="p-4 pb-2">
                              <CardTitle className="text-base">{cert.name}</CardTitle>
                              <CardDescription>{cert.provider}</CardDescription>
                            </CardHeader>
                          </Card>
                        ))}
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="w-6 h-6 bg-primary rounded-full absolute -left-11 flex items-center justify-center">
                        <Users className="h-3 w-3 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">Network & Advance</h3>
                      <p className="mb-4">Connect with professionals and find opportunities to grow</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-4 h-4 rounded-full bg-primary/20 mr-2 mt-1 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                          </div>
                          <div>Join professional associations related to {career.title}</div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-4 h-4 rounded-full bg-primary/20 mr-2 mt-1 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                          </div>
                          <div>Attend industry conferences and meetups</div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-4 h-4 rounded-full bg-primary/20 mr-2 mt-1 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                          </div>
                          <div>Find a mentor in the field to guide your career development</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="education" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Education Requirements</CardTitle>
                  <CardDescription>
                    Academic qualifications for this career path
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {career.education.map((edu, i) => (
                    <div key={i} className="mb-6">
                      <h3 className="font-medium text-lg">{edu.level}</h3>
                      <p className="text-muted-foreground">{edu.field}</p>
                      <p className="text-sm mt-1">Importance: {edu.importance}</p>
                    </div>
                  ))}
                  
                  <Separator className="my-6" />
                  
                  <h3 className="font-medium text-lg mb-4">Recommended Courses</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {career.courses.map((course, i) => (
                      <Card key={i}>
                        <CardHeader className="p-4 pb-2">
                          <CardTitle className="text-base">{course.name}</CardTitle>
                          <CardDescription>{course.provider}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" /> 
                            {course.duration} • {course.level}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <h3 className="font-medium text-lg mb-4">Valuable Certifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {career.certifications.map((cert, i) => (
                      <Card key={i}>
                        <CardHeader className="p-4 pb-2">
                          <CardTitle className="text-base">{cert.name}</CardTitle>
                          <CardDescription>{cert.provider}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm text-muted-foreground">Importance: {cert.importance}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="skills" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Required Skills</CardTitle>
                  <CardDescription>
                    Key skills needed for success as a {career.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-4">Technical Skills</h3>
                      <ul className="space-y-4">
                        {career.skills.slice(0, 4).map((skill, i) => (
                          <li key={i} className="flex justify-between">
                            <span>{skill.name}</span>
                            <span className={
                              skill.importance === "Critical" 
                                ? "text-primary font-medium" 
                                : "text-muted-foreground"
                            }>
                              {skill.importance}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-4">Soft Skills</h3>
                      <ul className="space-y-4">
                        {career.skills.slice(4).map((skill, i) => (
                          <li key={i} className="flex justify-between">
                            <span>{skill.name}</span>
                            <span className={
                              skill.importance === "Critical" 
                                ? "text-primary font-medium" 
                                : "text-muted-foreground"
                            }>
                              {skill.importance}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <h3 className="font-medium text-lg mb-4">How to Develop These Skills</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Online Learning Platforms</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        These platforms offer courses to help you develop technical skills:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["Coursera", "Udemy", "edX", "Pluralsight", "FreeCodeCamp"].map((platform, i) => (
                          <span key={i} className="bg-muted px-3 py-1 rounded-full text-sm">
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Practical Experience</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Apply your skills through these practical opportunities:
                      </p>
                      <ul className="space-y-1 text-sm">
                        <li>• Personal projects in {career.title.toLowerCase()}</li>
                        <li>• Open source contributions</li>
                        <li>• Hackathons and competitions</li>
                        <li>• Internships and part-time work</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="progression" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Career Progression</CardTitle>
                  <CardDescription>
                    Typical path of advancement for a {career.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative pl-8 border-l-2 border-primary/30 space-y-10">
                    {career.careerPath.map((level, i) => (
                      <div key={i} className="relative">
                        <div className="w-6 h-6 bg-primary rounded-full absolute -left-11 flex items-center justify-center">
                          {i + 1}
                        </div>
                        <h3 className="text-lg font-bold">{level.position}</h3>
                        <div className="text-sm text-muted-foreground mb-2">
                          Experience: {level.experience}
                        </div>
                        <p>{level.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="flex justify-center">
            <Button asChild>
              <Link to="/dashboard">
                Save to My Career Paths
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
