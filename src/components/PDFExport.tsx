
import { TravelPlan } from '@/types';
import { forwardRef, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download, X } from 'lucide-react';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface PDFExportProps {
  travelPlan: TravelPlan;
  isOpen: boolean;
  onClose: () => void;
}

const PDFExport = forwardRef<HTMLDivElement, PDFExportProps>(({ travelPlan, isOpen, onClose }, ref) => {
  
  const handleExport = async () => {
    const content = document.getElementById('pdf-content');
    if (!content) return;

    const pdf = new jsPDF('p', 'mm', 'a4');
    const canvas = await html2canvas(content);
    const imgData = canvas.toDataURL('image/png');

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${travelPlan.destination.replace(/\s+/g, '_')}_itinerary.pdf`);
  };

  // Fix the useReactToPrint hook to handle the forwardRef properly
  const handlePrint = useReactToPrint({
    content: () => {
      if (typeof ref === 'function') {
        console.warn('Function refs are not supported for printing');
        return null;
      }
      return ref?.current || null;
    },
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Export Itinerary</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X size={20} />
          </Button>
        </div>
        
        <div className="overflow-y-auto p-6" style={{ maxHeight: 'calc(90vh - 140px)' }}>
          <div id="pdf-content" ref={ref} className="bg-white p-6">
            {/* PDF Content */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">{travelPlan.destination}</h1>
              <p className="text-gray-600">{travelPlan.itinerary.length} Day Itinerary</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Trip Summary</h2>
              <p>{travelPlan.summary}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p><strong>Total Cost:</strong> {travelPlan.currency} {travelPlan.totalCost}</p>
                  <p><strong>Weather:</strong> {travelPlan.weatherInfo}</p>
                </div>
                <div>
                  <p><strong>Created:</strong> {new Date(travelPlan.createdAt).toLocaleDateString()}</p>
                  <p><strong>Duration:</strong> {travelPlan.itinerary.length} days</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Daily Itinerary</h2>
              {travelPlan.itinerary.map(day => (
                <div key={day.day} className="mb-8 border-b pb-6">
                  <h3 className="text-lg font-semibold mb-2">Day {day.day} - {day.date}</h3>
                  
                  <div className="mb-4">
                    <h4 className="font-medium">Activities:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {day.activities.map((activity, index) => (
                        <li key={index}>
                          <strong>{activity.time}</strong> - {activity.name}
                          <p className="text-sm text-gray-600">{activity.description}</p>
                          {activity.location && (
                            <p className="text-sm text-gray-500">Location: {activity.location.name}</p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium">Accommodation:</h4>
                    <p>{day.accommodation.name} - {day.accommodation.description}</p>
                    <p className="text-sm text-gray-600">Cost: {travelPlan.currency} {day.accommodation.pricePerNight} per night</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Meals:</h4>
                    <ul className="list-disc pl-5">
                      {day.meals.map((meal, index) => (
                        <li key={index}>
                          <strong>{meal.type.charAt(0).toUpperCase() + meal.type.slice(1)}:</strong> {meal.name}
                          {meal.cost !== undefined && <span className="text-sm text-gray-500"> (Cost: {travelPlan.currency} {meal.cost})</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Packing List</h2>
              <div className="grid grid-cols-2 gap-6">
                {travelPlan.packingList.map(category => (
                  <div key={category.category}>
                    <h3 className="font-medium mb-2">{category.category}</h3>
                    <ul className="list-disc pl-5">
                      {category.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t flex justify-end space-x-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button 
            className="bg-gradient-to-r from-primary to-pink-500 hover:opacity-90 flex gap-2"
            onClick={handleExport}
          >
            <Download size={18} />
            Export as PDF
          </Button>
        </div>
      </div>
    </div>
  );
});

PDFExport.displayName = "PDFExport";

export default PDFExport;
