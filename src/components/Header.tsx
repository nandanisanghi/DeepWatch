
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex items-center gap-2 font-semibold">
          <Link to="/" className="flex items-center">
            <FileVideo className="h-5 w-5 text-primary mr-2" />
            <span className="hidden sm:inline-block">DeepWatch</span>
          </Link>
        </div>
        
        <nav className="flex items-center md:gap-6 mx-6 gap-4">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-foreground/80">
            Home
          </Link>
          <Link to="/dashboard" className="text-sm font-medium transition-colors hover:text-foreground/80">
            Dashboard
          </Link>
        </nav>
        
        <div className="ml-auto flex items-center gap-2">
          <Button asChild variant="default" className="hidden sm:flex">
            <Link to="/verify">
              <Upload className="mr-2 h-4 w-4" />
              Upload Video
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

// We need to import FileVideo
import { FileVideo } from "lucide-react";
