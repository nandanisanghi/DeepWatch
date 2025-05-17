
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface FrameProps {
  frame: {
    timestamp: number;
    anomalyScore: number;
    regions?: { x: number; y: number; width: number; height: number; score: number }[];
  };
  frameIndex: number;
}

export default function FrameAnalysis({ frame, frameIndex }: FrameProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  // For demo purposes, we're using a placeholder image
  // In a real app, this would be an actual frame from the video
  const getFrameImageUrl = (index: number) => {
    // This would normally fetch the actual frame from the backend
    return `https://picsum.photos/seed/${index}/800/450`;
  };

  const formatTimestamp = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">
          Frame at {formatTimestamp(frame.timestamp)}
        </h3>
        <span className="text-sm px-2 py-1 rounded bg-gray-100">
          Anomaly Score: {frame.anomalyScore}%
        </span>
      </div>

      <div className="relative w-full h-auto aspect-video bg-muted rounded-md overflow-hidden">
        <img
          src={getFrameImageUrl(frameIndex)}
          alt={`Frame at ${formatTimestamp(frame.timestamp)}`}
          className="w-full h-auto"
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Overlay anomaly regions */}
        {imageLoaded && frame.regions && frame.regions.map((region, idx) => (
          <div
            key={idx}
            className="absolute border-2 border-red-500"
            style={{
              left: `${region.x}%`,
              top: `${region.y}%`,
              width: `${region.width}%`,
              height: `${region.height}%`,
              opacity: 0.7,
            }}
          >
            <div className="absolute top-0 left-0 bg-red-500 text-white text-xs px-1">
              {Math.round(region.score)}%
            </div>
          </div>
        ))}
      </div>

      <Separator />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4">
          <h4 className="font-medium mb-2">Visual Artifacts</h4>
          <p className="text-sm text-muted-foreground">
            {frame.anomalyScore > 70
              ? "Significant visual inconsistencies detected in this frame, including unnatural lighting, edge artifacts, and texture inconsistencies."
              : frame.anomalyScore > 30
              ? "Some minor visual inconsistencies detected that may indicate manipulation, but could also be compression artifacts."
              : "No significant visual inconsistencies detected in this frame."}
          </p>
        </Card>
        
        <Card className="p-4">
          <h4 className="font-medium mb-2">Face Analysis</h4>
          <p className="text-sm text-muted-foreground">
            {frame.anomalyScore > 70
              ? "Facial features show signs of manipulation, including unnatural skin texture, inconsistent lighting on face, and irregular blending with background."
              : frame.anomalyScore > 30
              ? "Some potential inconsistencies in facial features that warrant closer inspection."
              : "Facial features appear consistent with natural video capture."}
          </p>
        </Card>
      </div>
    </div>
  );
}
