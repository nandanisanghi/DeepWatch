
import { useState, useEffect } from 'react';
import { DailyItinerary, Activity } from '@/types';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface ItineraryTimelineProps {
  itinerary: DailyItinerary[];
  selectedDay: number;
  onDayChange: (day: number) => void;
}

const ItineraryTimeline: React.FC<ItineraryTimelineProps> = ({ 
  itinerary, 
  selectedDay,
  onDayChange
}) => {
  const [currentDay, setCurrentDay] = useState<DailyItinerary | null>(null);

  useEffect(() => {
    if (itinerary && itinerary.length > 0) {
      const day = itinerary.find(day => day.day === selectedDay);
      if (day) {
        setCurrentDay(day);
      }
    }
  }, [selectedDay, itinerary]);

  if (!itinerary || itinerary.length === 0) {
    return (
      <div className="text-center p-6">
        <p>No itinerary available yet. Fill out your preferences to get started!</p>
      </div>
    );
  }

  if (!currentDay) {
    return (
      <div className="text-center p-6">
        <p>Loading day information...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 px-1">
      {/* Day selector */}
      <div className="flex flex-wrap gap-2 justify-center">
        {itinerary.map((day) => (
          <Button
            key={day.day}
            variant={day.day === selectedDay ? "default" : "outline"}
            onClick={() => onDayChange(day.day)}
            className={`rounded-full min-w-[40px] ${
              day.day === selectedDay 
                ? "bg-gradient-to-r from-purple-500 to-pink-500 border-none text-white hover:opacity-90" 
                : "hover:border-primary/50"
            }`}
          >
            {day.day}
          </Button>
        ))}
      </div>

      {/* Day header */}
      <div className="dream-card text-center">
        <h3 className="text-lg font-semibold mb-1">Day {currentDay.day}</h3>
        <div className="flex items-center justify-center gap-1.5 text-sm text-gray-600">
          <Calendar size={16} className="inline" />
          <span>{currentDay.date}</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-6">
        {currentDay.activities.map((activity, index) => (
          <div key={`${activity.time}-${index}`} className="relative pl-8">
            {/* Timeline line */}
            {index !== currentDay.activities.length - 1 && (
              <div className="absolute left-3 top-6 bottom-0 w-0.5 bg-gradient-to-b from-purple-300 to-pink-300"></div>
            )}
            
            {/* Timeline dot */}
            <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
            
            {/* Activity content */}
            <div className="dream-card hover:translate-y-[-3px] transition-all">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-base">{activity.name}</h4>
                <div className="flex items-center text-gray-600">
                  <Clock size={14} className="mr-1" />
                  <span className="text-sm">{activity.time}</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
              
              {activity.location && (
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin size={14} className="mr-1 text-gray-400" />
                  <span>{activity.location.name}</span>
                </div>
              )}
              
              {activity.cost !== undefined && (
                <div className="mt-2 text-sm">
                  <span className="text-gray-500">Estimated cost: </span>
                  <span className="font-medium">${activity.cost}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Accommodation */}
      <div className="dream-card space-y-2">
        <h3 className="font-medium">Accommodation</h3>
        <div className="flex flex-col sm:flex-row gap-4">
          {currentDay.accommodation.image && (
            <div className="sm:w-1/3">
              <img
                src={currentDay.accommodation.image}
                alt={currentDay.accommodation.name}
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
          )}
          <div className="sm:w-2/3 space-y-2">
            <h4 className="font-medium">{currentDay.accommodation.name}</h4>
            <p className="text-sm text-gray-600">{currentDay.accommodation.description}</p>
            <div className="flex items-center text-sm text-gray-500">
              <MapPin size={14} className="mr-1 text-gray-400" />
              <span>{currentDay.accommodation.location.name}</span>
            </div>
            <div className="text-sm">
              <span className="text-gray-500">Cost per night: </span>
              <span className="font-medium">${currentDay.accommodation.pricePerNight}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryTimeline;
