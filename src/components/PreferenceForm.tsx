
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { TravelPreference } from '@/types';

interface PreferenceFormProps {
  onSubmit: (preferences: TravelPreference) => void;
  isLoading: boolean;
}

const PreferenceForm: React.FC<PreferenceFormProps> = ({ onSubmit, isLoading }) => {
  const [budget, setBudget] = useState<number>(1000);
  const [interests, setInterests] = useState<string>("");
  const [duration, setDuration] = useState<number>(5);
  const [region, setRegion] = useState<string>("Europe");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      budget,
      interests,
      duration,
      region
    });
  };

  return (
    <form onSubmit={handleSubmit} className="dream-card space-y-6 animate-float-slow">
      <div className="space-y-2">
        <Label htmlFor="budget">
          <div className="flex justify-between">
            <span>Budget (USD)</span>
            <span className="text-primary font-semibold">${budget}</span>
          </div>
        </Label>
        <Slider
          id="budget"
          min={500}
          max={10000}
          step={100}
          value={[budget]}
          onValueChange={(value) => setBudget(value[0])}
          className="dream-input py-4"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="interests">What are you interested in?</Label>
        <Textarea
          id="interests"
          placeholder="e.g., beaches, food, hiking, culture, relaxation..."
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          className="dream-input resize-none min-h-[80px]"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="duration">
          <div className="flex justify-between">
            <span>Duration (days)</span>
            <span className="text-primary font-semibold">{duration} days</span>
          </div>
        </Label>
        <Slider
          id="duration"
          min={2}
          max={14}
          step={1}
          value={[duration]}
          onValueChange={(value) => setDuration(value[0])}
          className="dream-input py-4"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="region">Preferred Region</Label>
        <Select value={region} onValueChange={setRegion}>
          <SelectTrigger className="dream-input">
            <SelectValue placeholder="Select a region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Europe">Europe</SelectItem>
            <SelectItem value="Asia">Asia</SelectItem>
            <SelectItem value="North America">North America</SelectItem>
            <SelectItem value="South America">South America</SelectItem>
            <SelectItem value="Africa">Africa</SelectItem>
            <SelectItem value="Oceania">Oceania</SelectItem>
            <SelectItem value="Middle East">Middle East</SelectItem>
            <SelectItem value="Caribbean">Caribbean</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button 
        type="submit" 
        disabled={isLoading} 
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 rounded-xl transition-all"
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Creating your dream trip...
          </div>
        ) : (
          "Create My Dream Trip"
        )}
      </Button>
    </form>
  );
};

export default PreferenceForm;
