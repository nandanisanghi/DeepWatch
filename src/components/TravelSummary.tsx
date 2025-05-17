
import { TravelPlan } from '@/types';
import { Button } from '@/components/ui/button';
import { Calendar, Download, Map } from 'lucide-react';

interface TravelSummaryProps {
  travelPlan: TravelPlan;
  onExportPDF: () => void;
  onShowMap: () => void;
}

const TravelSummary: React.FC<TravelSummaryProps> = ({ 
  travelPlan,
  onExportPDF,
  onShowMap
}) => {
  if (!travelPlan) {
    return <div className="p-4 text-center text-gray-500">No travel plan available</div>;
  }

  return (
    <div className="dream-card space-y-6">
      {travelPlan.image && (
        <div className="w-full h-48 overflow-hidden rounded-xl -mt-2 -mx-2" style={{ marginLeft: '-0.5rem', marginRight: '-0.5rem', width: 'calc(100% + 1rem)' }}>
          <img 
            src={travelPlan.image} 
            alt={travelPlan.destination} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="space-y-4">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
          {travelPlan.destination}
        </h2>
        
        <div className="flex items-center text-gray-600 text-sm gap-1.5">
          <Calendar size={16} className="text-primary" />
          <span>{travelPlan.itinerary.length} days</span>
          <span className="mx-1">•</span>
          <span>Created: {new Date(travelPlan.createdAt).toLocaleDateString()}</span>
        </div>
        
        <p className="text-gray-700">{travelPlan.summary}</p>
        
        <div className="bg-gray-50 p-4 rounded-lg space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Total Cost</span>
            <span className="text-xl font-semibold">
              {travelPlan.currency === 'USD' ? '$' : travelPlan.currency} {travelPlan.totalCost}
            </span>
          </div>
          
          <div>
            <span className="text-gray-600 text-sm">Weather</span>
            <p className="text-sm text-gray-700">{travelPlan.weatherInfo}</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button 
            onClick={onShowMap}
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-secondary to-secondary hover:opacity-90"
          >
            <Map size={18} />
            <span>View Map</span>
          </Button>
          
          <Button 
            onClick={onExportPDF}
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-pink-500 hover:opacity-90"
          >
            <Download size={18} />
            <span>Export PDF</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TravelSummary;
