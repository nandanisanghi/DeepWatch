
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/hooks/use-toast";
import { FileVideo, Upload, AlertTriangle } from "lucide-react";
import { uploadVideo } from "@/lib/api";

export default function Verify() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      
      // Check if file is a video
      if (!selectedFile.type.startsWith("video/")) {
        toast({
          title: "Invalid file type",
          description: "Please upload a video file",
          variant: "destructive",
        });
        return;
      }
      
      // Check file size (limit to 100MB)
      if (selectedFile.size > 100 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a video smaller than 100MB",
          variant: "destructive",
        });
        return;
      }
      
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    
    try {
      setUploading(true);
      
      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 95) {
            clearInterval(interval);
            return 95;
          }
          return prev + 5;
        });
      }, 300);
      
      // Simulate API call to upload video
      const response = await uploadVideo(file);
      
      clearInterval(interval);
      setUploadProgress(100);
      
      toast({
        title: "Upload successful",
        description: "Your video is being analyzed",
      });
      
      // Redirect to results page after short delay
      setTimeout(() => {
        navigate(`/results/${response.id}`);
      }, 1000);
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was a problem uploading your video",
        variant: "destructive",
      });
      setUploading(false);
    }
  };

  return (
    <div className="container max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Video Verification</h1>
      
      <div className="dream-card mb-6">
        <div className="flex flex-col items-center justify-center p-8">
          {!file ? (
            <>
              <FileVideo className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium mb-2">Upload your video</h3>
              <p className="text-muted-foreground text-center mb-4">
                Supported formats: MP4, MOV, AVI, MKV (max 100MB)
              </p>
              <label htmlFor="video-upload">
                <div className="bg-primary text-primary-foreground rounded-md px-4 py-2 cursor-pointer hover:bg-primary/90 transition-colors">
                  <span className="flex items-center">
                    <Upload className="mr-2 h-4 w-4" />
                    Select Video
                  </span>
                </div>
              </label>
              <input
                id="video-upload"
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </>
          ) : (
            <>
              <div className="w-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <FileVideo className="h-8 w-8 text-primary mr-2" />
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => setFile(null)}
                    disabled={uploading}
                  >
                    Change
                  </Button>
                </div>
                
                {uploading ? (
                  <div className="space-y-2">
                    <Progress value={uploadProgress} className="w-full" />
                    <p className="text-sm text-center text-muted-foreground">
                      {uploadProgress < 100
                        ? `Uploading: ${uploadProgress}%`
                        : "Processing..."}
                    </p>
                  </div>
                ) : (
                  <div className="flex justify-end mt-4">
                    <Button onClick={handleUpload}>
                      Start Analysis
                    </Button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      
      <div className="dream-card">
        <div className="p-4 flex items-start">
          <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-medium">Privacy Notice</h4>
            <p className="text-sm text-muted-foreground">
              Your videos are analyzed securely and not stored permanently. All analysis data is deleted after 30 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
