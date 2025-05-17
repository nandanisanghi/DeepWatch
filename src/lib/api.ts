
// This file contains mock API functions
// In a real implementation, these would connect to your backend

// Mock delay to simulate API calls
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Generate a random ID
const generateId = () => Math.random().toString(36).substring(2, 15);

// Mock video upload function
export const uploadVideo = async (file: File): Promise<{ id: string }> => {
  // Simulate network delay
  await delay(1500);
  
  // Return a mock response
  return { 
    id: generateId()
  };
};

// Mock function to get analysis results
export const getAnalysisResults = async (id: string) => {
  await delay(1000);
  
  // Simulate processing state for the first few seconds
  if (localStorage.getItem(`processed-${id}`) !== 'true') {
    localStorage.setItem(`processed-${id}`, 'true');
    
    return {
      id,
      videoName: "Sample_Video.mp4",
      createdAt: new Date().toISOString(),
      status: "processing",
      deepfakeScore: 0,
      faceSwapDetected: false,
      manipulationScore: 0,
      inconsistencyScore: 0,
      audioAnalysisScore: 0,
      frames: []
    };
  }
  
  // Generate a random score for demo purposes
  // In a real app, this would be the actual analysis result
  const deepfakeScore = Math.floor(Math.random() * 100);
  
  // Generate mock frame data
  const frames = Array.from({ length: 10 }, (_, i) => {
    const anomalyScore = Math.min(100, Math.max(0, 
      deepfakeScore + (Math.random() * 40 - 20)
    ));
    
    // Add detected regions for frames with higher anomaly scores
    const regions = anomalyScore > 60 ? [
      {
        x: 20 + Math.random() * 10,
        y: 20 + Math.random() * 10,
        width: 30 + Math.random() * 10,
        height: 30 + Math.random() * 10,
        score: anomalyScore + (Math.random() * 10 - 5)
      },
      {
        x: 60 + Math.random() * 10,
        y: 40 + Math.random() * 10,
        width: 25 + Math.random() * 5,
        height: 25 + Math.random() * 5,
        score: anomalyScore - (Math.random() * 20)
      }
    ] : anomalyScore > 30 ? [
      {
        x: 40 + Math.random() * 10,
        y: 30 + Math.random() * 10,
        width: 20 + Math.random() * 10,
        height: 20 + Math.random() * 10,
        score: anomalyScore
      }
    ] : [];
    
    return {
      timestamp: i * 12.5, // Mock timestamp in seconds
      anomalyScore,
      regions
    };
  });
  
  return {
    id,
    videoName: "Sample_Video.mp4",
    createdAt: new Date().toISOString(),
    status: "complete",
    deepfakeScore,
    faceSwapDetected: deepfakeScore > 60,
    manipulationScore: Math.min(100, Math.max(0, deepfakeScore + (Math.random() * 20 - 10))),
    inconsistencyScore: Math.min(100, Math.max(0, deepfakeScore + (Math.random() * 20 - 10))),
    audioAnalysisScore: Math.min(100, Math.max(0, deepfakeScore + (Math.random() * 30 - 15))),
    frames
  };
};

// Mock function to get user's analyses
export const getUserAnalyses = async () => {
  await delay(1000);
  
  // Generate between 0 and 8 mock analyses
  const count = Math.floor(Math.random() * 9);
  
  return Array.from({ length: count }, (_, i) => {
    const deepfakeScore = Math.floor(Math.random() * 100);
    const id = generateId();
    
    return {
      id,
      videoName: `Video_${i + 1}.mp4`,
      createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
      status: "complete",
      deepfakeScore
    };
  }).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};
