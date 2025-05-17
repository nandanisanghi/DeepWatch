
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { DailyItinerary, Location } from '@/types';

// Fix for default marker icons in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom marker for current day
const currentDayIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface TravelMapProps {
  itinerary: DailyItinerary[];
  selectedDay: number;
}

// Component to recenter the map when selected location changes
function ChangeMapView({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, 13, {
      animate: true,
      duration: 1.5
    });
  }, [center, map]);
  return null;
}

const TravelMap: React.FC<TravelMapProps> = ({ itinerary, selectedDay }) => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [mapCenter, setMapCenter] = useState<[number, number]>([0, 0]);
  
  // Extract all locations from the itinerary when it changes
  useEffect(() => {
    if (itinerary && itinerary.length > 0) {
      const allLocations: Location[] = [];
      
      // Add locations from activities
      itinerary.forEach(day => {
        // Add accommodation
        if (day.accommodation && day.accommodation.location) {
          allLocations.push(day.accommodation.location);
        }
        
        // Add activity locations
        day.activities.forEach(activity => {
          if (activity.location) {
            allLocations.push(activity.location);
          }
        });
        
        // Add meal locations
        day.meals.forEach(meal => {
          if (meal.location) {
            allLocations.push(meal.location);
          }
        });
      });
      
      // Set unique locations based on coordinates
      const uniqueLocations = allLocations.filter((location, index, self) => 
        index === self.findIndex(l => 
          l.coordinates.lat === location.coordinates.lat && 
          l.coordinates.lng === location.coordinates.lng
        )
      );
      
      setLocations(uniqueLocations);
      
      // Set initial map center to the first activity of first day
      if (itinerary[0] && itinerary[0].activities[0] && itinerary[0].activities[0].location) {
        const { lat, lng } = itinerary[0].activities[0].location.coordinates;
        setMapCenter([lat, lng]);
      }
    }
  }, [itinerary]);
  
  // Update map center when selected day changes
  useEffect(() => {
    if (itinerary && itinerary[selectedDay - 1]) {
      const currentDay = itinerary[selectedDay - 1];
      // Use first activity location as the center for this day
      if (currentDay.activities[0] && currentDay.activities[0].location) {
        const { lat, lng } = currentDay.activities[0].location.coordinates;
        setMapCenter([lat, lng]);
      }
    }
  }, [selectedDay, itinerary]);

  if (!itinerary || itinerary.length === 0) {
    return <div className="h-full flex items-center justify-center">No itinerary data available</div>;
  }

  return (
    <div className="h-full rounded-2xl overflow-hidden shadow-lg">
      <MapContainer 
        center={mapCenter} 
        zoom={13} 
        style={{ height: "100%", width: "100%" }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Render all locations as markers */}
        {locations.map((location, idx) => {
          // Check if this location is from the selected day
          const isCurrentDayLocation = itinerary[selectedDay - 1]?.activities.some(
            activity => activity.location?.coordinates.lat === location.coordinates.lat &&
                      activity.location?.coordinates.lng === location.coordinates.lng
          ) || 
          itinerary[selectedDay - 1]?.accommodation?.location?.coordinates.lat === location.coordinates.lat &&
          itinerary[selectedDay - 1]?.accommodation?.location?.coordinates.lng === location.coordinates.lng;
          
          return (
            <Marker 
              key={`${location.name}-${idx}`}
              position={[location.coordinates.lat, location.coordinates.lng]}
              icon={isCurrentDayLocation ? currentDayIcon : new L.Icon.Default()}
            >
              <Popup>
                <div className="font-medium">{location.name}</div>
                {location.address && <div className="text-sm text-gray-600">{location.address}</div>}
              </Popup>
            </Marker>
          );
        })}
        
        <ChangeMapView center={mapCenter} />
      </MapContainer>
    </div>
  );
};

export default TravelMap;
