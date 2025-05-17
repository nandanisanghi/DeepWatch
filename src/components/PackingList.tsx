
import { PackingItem } from '@/types';
import { useState } from 'react';
import { Check } from 'lucide-react';

interface PackingListProps {
  packingItems: PackingItem[];
}

const PackingList: React.FC<PackingListProps> = ({ packingItems }) => {
  // Track which items are checked
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  
  const toggleItem = (category: string, item: string) => {
    const itemKey = `${category}:${item}`;
    setCheckedItems(prev => ({
      ...prev,
      [itemKey]: !prev[itemKey]
    }));
  };
  
  if (!packingItems || packingItems.length === 0) {
    return <div className="p-4 text-center text-gray-500">No packing suggestions available</div>;
  }

  return (
    <div className="p-2 space-y-6">
      <h3 className="text-lg font-semibold text-center">Packing Recommendations</h3>
      
      {packingItems.map((category) => (
        <div key={category.category} className="dream-card space-y-3">
          <h4 className="font-medium text-gray-800 pb-1 border-b border-gray-100">
            {category.category}
          </h4>
          <ul className="space-y-2">
            {category.items.map((item) => {
              const itemKey = `${category.category}:${item}`;
              const isChecked = checkedItems[itemKey] || false;
              
              return (
                <li 
                  key={item} 
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => toggleItem(category.category, item)}
                >
                  <div 
                    className={`w-5 h-5 rounded flex items-center justify-center border transition-all ${
                      isChecked 
                        ? 'bg-primary border-primary' 
                        : 'border-gray-300 hover:border-primary/70'
                    }`}
                  >
                    {isChecked && <Check size={14} className="text-white" />}
                  </div>
                  <span className={`text-sm ${isChecked ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PackingList;
