
import { TravelPlan } from "../types";

export const mockTravelPlans: TravelPlan[] = [
  {
    id: "plan-1",
    destination: "Bali, Indonesia",
    summary: "Experience the perfect blend of beautiful beaches, vibrant culture, and delicious cuisine in Bali. Your 5-day itinerary balances relaxation with adventure, including temple visits, beachside dining, and a traditional dance performance.",
    totalCost: 850,
    currency: "USD",
    createdAt: "2025-05-15",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1170&auto=format&fit=crop",
    weatherInfo: "Expect warm tropical weather with temperatures between 75-88°F (24-31°C). May bring light showers in the afternoon.",
    itinerary: [
      {
        day: 1,
        date: "2025-05-20",
        activities: [
          {
            time: "09:00",
            name: "Arrival and Check-in",
            description: "Arrive at Ngurah Rai International Airport and transfer to your beachside accommodation in Seminyak.",
            location: {
              name: "Ngurah Rai International Airport",
              coordinates: { lat: -8.7467, lng: 115.1667 }
            }
          },
          {
            time: "13:00",
            name: "Seminyak Beach Relaxation",
            description: "Unwind from your journey with a relaxing afternoon at Seminyak Beach. Enjoy the sunset and perhaps a beachside massage.",
            location: {
              name: "Seminyak Beach",
              coordinates: { lat: -8.6913, lng: 115.1571 }
            },
            cost: 20
          },
          {
            time: "19:00",
            name: "Welcome Dinner",
            description: "Enjoy a traditional Balinese dinner at a local restaurant with ocean views.",
            location: {
              name: "Seaside Restaurant",
              coordinates: { lat: -8.6933, lng: 115.1561 }
            },
            cost: 30
          }
        ],
        accommodation: {
          name: "Bali Dream Villa",
          description: "Charming villa with private pool just minutes from the beach",
          location: {
            name: "Seminyak",
            coordinates: { lat: -8.6913, lng: 115.1571 }
          },
          pricePerNight: 120,
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1170&auto=format&fit=crop"
        },
        meals: [
          {
            type: "lunch",
            name: "Light lunch at hotel",
            cost: 15
          },
          {
            type: "dinner",
            name: "Traditional Balinese dinner",
            location: {
              name: "Seaside Restaurant",
              coordinates: { lat: -8.6933, lng: 115.1561 }
            },
            cost: 30
          }
        ]
      },
      {
        day: 2,
        date: "2025-05-21",
        activities: [
          {
            time: "08:00",
            name: "Breakfast at Villa",
            description: "Enjoy a tropical breakfast at your accommodation.",
            location: {
              name: "Bali Dream Villa",
              coordinates: { lat: -8.6913, lng: 115.1571 }
            },
            cost: 0
          },
          {
            time: "10:00",
            name: "Uluwatu Temple Visit",
            description: "Visit the stunning clifftop Uluwatu Temple with its dramatic ocean views and resident monkeys.",
            location: {
              name: "Uluwatu Temple",
              coordinates: { lat: -8.8291, lng: 115.0849 }
            },
            cost: 10
          },
          {
            time: "16:00",
            name: "Kecak Fire Dance",
            description: "Experience the traditional Kecak Fire Dance performance at sunset.",
            location: {
              name: "Uluwatu Temple",
              coordinates: { lat: -8.8291, lng: 115.0849 }
            },
            cost: 15
          },
          {
            time: "19:30",
            name: "Seafood Dinner at Jimbaran Bay",
            description: "Enjoy fresh seafood on the beach at Jimbaran Bay.",
            location: {
              name: "Jimbaran Bay",
              coordinates: { lat: -8.7897, lng: 115.1601 }
            },
            cost: 40
          }
        ],
        accommodation: {
          name: "Bali Dream Villa",
          description: "Charming villa with private pool just minutes from the beach",
          location: {
            name: "Seminyak",
            coordinates: { lat: -8.6913, lng: 115.1571 }
          },
          pricePerNight: 120,
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1170&auto=format&fit=crop"
        },
        meals: [
          {
            type: "breakfast",
            name: "Tropical breakfast buffet",
            cost: 0
          },
          {
            type: "lunch",
            name: "Light lunch near Uluwatu",
            cost: 15
          },
          {
            type: "dinner",
            name: "Seafood dinner at Jimbaran Bay",
            location: {
              name: "Jimbaran Bay",
              coordinates: { lat: -8.7897, lng: 115.1601 }
            },
            cost: 40
          }
        ]
      },
      {
        day: 3,
        date: "2025-05-22",
        activities: [
          {
            time: "09:00",
            name: "Ubud Monkey Forest",
            description: "Visit the sacred monkey forest sanctuary in Ubud.",
            location: {
              name: "Sacred Monkey Forest Sanctuary",
              coordinates: { lat: -8.5188, lng: 115.2582 }
            },
            cost: 10
          },
          {
            time: "12:00",
            name: "Lunch at Local Warung",
            description: "Traditional Balinese lunch at a local warung (small family-owned restaurant).",
            location: {
              name: "Warung Babi Guling",
              coordinates: { lat: -8.5150, lng: 115.2640 }
            },
            cost: 10
          },
          {
            time: "14:00",
            name: "Tegallalang Rice Terraces",
            description: "Explore the stunning Tegallalang rice terraces with their dramatic stepped landscape.",
            location: {
              name: "Tegallalang Rice Terraces",
              coordinates: { lat: -8.4359, lng: 115.2773 }
            },
            cost: 5
          },
          {
            time: "16:30",
            name: "Ubud Art Market",
            description: "Shop for souvenirs and local crafts at the Ubud Art Market.",
            location: {
              name: "Ubud Art Market",
              coordinates: { lat: -8.5068, lng: 115.2624 }
            },
            cost: 20
          }
        ],
        accommodation: {
          name: "Bali Dream Villa",
          description: "Charming villa with private pool just minutes from the beach",
          location: {
            name: "Seminyak",
            coordinates: { lat: -8.6913, lng: 115.1571 }
          },
          pricePerNight: 120,
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1170&auto=format&fit=crop"
        },
        meals: [
          {
            type: "breakfast",
            name: "Breakfast at villa",
            cost: 0
          },
          {
            type: "lunch",
            name: "Traditional lunch at local warung",
            location: {
              name: "Warung Babi Guling",
              coordinates: { lat: -8.5150, lng: 115.2640 }
            },
            cost: 10
          },
          {
            type: "dinner",
            name: "Dinner in Ubud",
            location: {
              name: "Ubud Center",
              coordinates: { lat: -8.5068, lng: 115.2624 }
            },
            cost: 25
          }
        ]
      },
      {
        day: 4,
        date: "2025-05-23",
        activities: [
          {
            time: "08:00",
            name: "Sunrise Yoga",
            description: "Start your day with a beachside yoga session.",
            location: {
              name: "Seminyak Beach",
              coordinates: { lat: -8.6913, lng: 115.1571 }
            },
            cost: 15
          },
          {
            time: "11:00",
            name: "Spa Treatment",
            description: "Indulge in a traditional Balinese massage and spa treatment.",
            location: {
              name: "Bali Relaxation Spa",
              coordinates: { lat: -8.6920, lng: 115.1575 }
            },
            cost: 50
          },
          {
            time: "15:00",
            name: "Tanah Lot Temple Visit",
            description: "Visit the iconic sea temple of Tanah Lot perched on a rock formation.",
            location: {
              name: "Tanah Lot Temple",
              coordinates: { lat: -8.6215, lng: 115.0869 }
            },
            cost: 10
          },
          {
            time: "18:00",
            name: "Sunset Dinner",
            description: "Enjoy dinner with a spectacular view of the sunset at Tanah Lot.",
            location: {
              name: "Sunset Point Restaurant",
              coordinates: { lat: -8.6210, lng: 115.0875 }
            },
            cost: 35
          }
        ],
        accommodation: {
          name: "Bali Dream Villa",
          description: "Charming villa with private pool just minutes from the beach",
          location: {
            name: "Seminyak",
            coordinates: { lat: -8.6913, lng: 115.1571 }
          },
          pricePerNight: 120,
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1170&auto=format&fit=crop"
        },
        meals: [
          {
            type: "breakfast",
            name: "Light breakfast before yoga",
            cost: 0
          },
          {
            type: "lunch",
            name: "Healthy lunch after spa",
            location: {
              name: "Health Food Cafe",
              coordinates: { lat: -8.6925, lng: 115.1580 }
            },
            cost: 20
          },
          {
            type: "dinner",
            name: "Sunset dinner at Tanah Lot",
            location: {
              name: "Sunset Point Restaurant",
              coordinates: { lat: -8.6210, lng: 115.0875 }
            },
            cost: 35
          }
        ]
      },
      {
        day: 5,
        date: "2025-05-24",
        activities: [
          {
            time: "09:00",
            name: "Water Palace Visit",
            description: "Explore the beautiful Tirta Gangga royal water palace with its fountains and gardens.",
            location: {
              name: "Tirta Gangga",
              coordinates: { lat: -8.4129, lng: 115.5879 }
            },
            cost: 10
          },
          {
            time: "12:30",
            name: "Lunch at Local Restaurant",
            description: "Enjoy authentic Balinese cuisine at a restaurant overlooking rice fields.",
            location: {
              name: "Warung Organic",
              coordinates: { lat: -8.4140, lng: 115.5870 }
            },
            cost: 15
          },
          {
            time: "14:30",
            name: "Besakih Temple",
            description: "Visit Bali's largest and holiest temple, known as the Mother Temple.",
            location: {
              name: "Besakih Temple",
              coordinates: { lat: -8.3726, lng: 115.4526 }
            },
            cost: 10
          },
          {
            time: "19:00",
            name: "Farewell Dinner",
            description: "Enjoy a special farewell dinner with traditional Balinese dance performance.",
            location: {
              name: "Cultural Restaurant",
              coordinates: { lat: -8.6900, lng: 115.1580 }
            },
            cost: 45
          }
        ],
        accommodation: {
          name: "Bali Dream Villa",
          description: "Charming villa with private pool just minutes from the beach",
          location: {
            name: "Seminyak",
            coordinates: { lat: -8.6913, lng: 115.1571 }
          },
          pricePerNight: 120,
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1170&auto=format&fit=crop"
        },
        meals: [
          {
            type: "breakfast",
            name: "Breakfast at villa",
            cost: 0
          },
          {
            type: "lunch",
            name: "Authentic Balinese lunch",
            location: {
              name: "Warung Organic",
              coordinates: { lat: -8.4140, lng: 115.5870 }
            },
            cost: 15
          },
          {
            type: "dinner",
            name: "Farewell dinner with cultural show",
            location: {
              name: "Cultural Restaurant",
              coordinates: { lat: -8.6900, lng: 115.1580 }
            },
            cost: 45
          }
        ]
      }
    ],
    packingList: [
      {
        category: "Clothing",
        items: [
          "Lightweight, breathable clothing",
          "Swimwear",
          "Light rain jacket",
          "Sun hat",
          "Comfortable walking shoes",
          "Sandals/flip flops",
          "Light scarf/sarong (for temple visits)"
        ]
      },
      {
        category: "Essentials",
        items: [
          "Passport",
          "Travel insurance documents",
          "Cash/credit cards",
          "Smartphone/charger",
          "Travel adapter",
          "Sunglasses"
        ]
      },
      {
        category: "Health & Toiletries",
        items: [
          "Sunscreen (SPF 30+)",
          "Insect repellent",
          "Basic first-aid kit",
          "Personal toiletries",
          "Hand sanitizer",
          "Prescription medications"
        ]
      },
      {
        category: "Activities",
        items: [
          "Camera",
          "Beach towel",
          "Day backpack",
          "Water bottle",
          "Waterproof phone case"
        ]
      }
    ]
  },
  {
    id: "plan-2",
    destination: "Barcelona, Spain",
    summary: "Discover the vibrant art, architecture, and cuisine of Barcelona. Your 4-day city getaway balances iconic Gaudí masterpieces with authentic tapas experiences and Mediterranean beaches.",
    totalCost: 780,
    currency: "EUR",
    createdAt: "2025-05-14",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=1170&auto=format&fit=crop",
    weatherInfo: "Expect mild Mediterranean weather with temperatures between 65-75°F (18-24°C). Occasional light showers possible.",
    itinerary: [
      {
        day: 1,
        date: "2025-06-10",
        activities: [
          {
            time: "10:00",
            name: "Arrival and Check-in",
            description: "Arrive at Barcelona–El Prat Airport and transfer to your hotel in the Gothic Quarter.",
            location: {
              name: "Barcelona–El Prat Airport",
              coordinates: { lat: 41.2974, lng: 2.0833 }
            }
          },
          {
            time: "13:00",
            name: "Gothic Quarter Walking Tour",
            description: "Explore the narrow medieval streets of Barcelona's Gothic Quarter with its hidden squares and ancient Roman ruins.",
            location: {
              name: "Gothic Quarter",
              coordinates: { lat: 41.3840, lng: 2.1777 }
            },
            cost: 0
          },
          {
            time: "19:00",
            name: "Tapas Dinner",
            description: "Enjoy authentic Spanish tapas at a local restaurant.",
            location: {
              name: "El Xampanyet",
              coordinates: { lat: 41.3846, lng: 2.1804 }
            },
            cost: 30
          }
        ],
        accommodation: {
          name: "Hotel Barcelona Gothic",
          description: "Boutique hotel in the heart of the Gothic Quarter",
          location: {
            name: "Gothic Quarter",
            coordinates: { lat: 41.3840, lng: 2.1777 }
          },
          pricePerNight: 150,
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1170&auto=format&fit=crop"
        },
        meals: [
          {
            type: "lunch",
            name: "Light lunch at local café",
            location: {
              name: "Café del Art",
              coordinates: { lat: 41.3845, lng: 2.1780 }
            },
            cost: 15
          },
          {
            type: "dinner",
            name: "Tapas dinner",
            location: {
              name: "El Xampanyet",
              coordinates: { lat: 41.3846, lng: 2.1804 }
            },
            cost: 30
          }
        ]
      },
      {
        day: 2,
        date: "2025-06-11",
        activities: [
          {
            time: "09:00",
            name: "Sagrada Familia Visit",
            description: "Visit Antoni Gaudí's masterpiece, the Sagrada Familia basilica.",
            location: {
              name: "Sagrada Familia",
              coordinates: { lat: 41.4036, lng: 2.1744 }
            },
            cost: 25
          },
          {
            time: "13:00",
            name: "Lunch at Local Restaurant",
            description: "Enjoy lunch near the Sagrada Familia.",
            location: {
              name: "Restaurant Gaudi",
              coordinates: { lat: 41.4040, lng: 2.1750 }
            },
            cost: 20
          },
          {
            time: "15:00",
            name: "Park Güell",
            description: "Explore Gaudí's colorful park with amazing city views.",
            location: {
              name: "Park Güell",
              coordinates: { lat: 41.4145, lng: 2.1527 }
            },
            cost: 10
          },
          {
            time: "20:00",
            name: "Dinner on La Rambla",
            description: "Dinner at a restaurant on Barcelona's famous boulevard.",
            location: {
              name: "La Rambla",
              coordinates: { lat: 41.3797, lng: 2.1746 }
            },
            cost: 35
          }
        ],
        accommodation: {
          name: "Hotel Barcelona Gothic",
          description: "Boutique hotel in the heart of the Gothic Quarter",
          location: {
            name: "Gothic Quarter",
            coordinates: { lat: 41.3840, lng: 2.1777 }
          },
          pricePerNight: 150,
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1170&auto=format&fit=crop"
        },
        meals: [
          {
            type: "breakfast",
            name: "Continental breakfast at hotel",
            cost: 0
          },
          {
            type: "lunch",
            name: "Lunch near Sagrada Familia",
            location: {
              name: "Restaurant Gaudi",
              coordinates: { lat: 41.4040, lng: 2.1750 }
            },
            cost: 20
          },
          {
            type: "dinner",
            name: "Dinner on La Rambla",
            location: {
              name: "La Rambla",
              coordinates: { lat: 41.3797, lng: 2.1746 }
            },
            cost: 35
          }
        ]
      },
      {
        day: 3,
        date: "2025-06-12",
        activities: [
          {
            time: "09:30",
            name: "Casa Batlló",
            description: "Visit another Gaudí masterpiece, the fantastical Casa Batlló.",
            location: {
              name: "Casa Batlló",
              coordinates: { lat: 41.3917, lng: 2.1649 }
            },
            cost: 25
          },
          {
            time: "12:00",
            name: "La Boqueria Market",
            description: "Explore the famous food market and enjoy lunch from the stalls.",
            location: {
              name: "La Boqueria Market",
              coordinates: { lat: 41.3816, lng: 2.1723 }
            },
            cost: 15
          },
          {
            time: "15:00",
            name: "Barceloneta Beach",
            description: "Relax at Barcelona's popular city beach.",
            location: {
              name: "Barceloneta Beach",
              coordinates: { lat: 41.3797, lng: 2.1925 }
            },
            cost: 0
          },
          {
            time: "20:00",
            name: "Seafood Dinner",
            description: "Enjoy seafood paella at a beachside restaurant.",
            location: {
              name: "Restaurant Marina",
              coordinates: { lat: 41.3805, lng: 2.1915 }
            },
            cost: 40
          }
        ],
        accommodation: {
          name: "Hotel Barcelona Gothic",
          description: "Boutique hotel in the heart of the Gothic Quarter",
          location: {
            name: "Gothic Quarter",
            coordinates: { lat: 41.3840, lng: 2.1777 }
          },
          pricePerNight: 150,
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1170&auto=format&fit=crop"
        },
        meals: [
          {
            type: "breakfast",
            name: "Continental breakfast at hotel",
            cost: 0
          },
          {
            type: "lunch",
            name: "Market food at La Boqueria",
            location: {
              name: "La Boqueria Market",
              coordinates: { lat: 41.3816, lng: 2.1723 }
            },
            cost: 15
          },
          {
            type: "dinner",
            name: "Seafood paella dinner",
            location: {
              name: "Restaurant Marina",
              coordinates: { lat: 41.3805, lng: 2.1915 }
            },
            cost: 40
          }
        ]
      },
      {
        day: 4,
        date: "2025-06-13",
        activities: [
          {
            time: "09:00",
            name: "Montjuïc Hill",
            description: "Take the cable car up Montjuïc Hill for panoramic views of the city.",
            location: {
              name: "Montjuïc Hill",
              coordinates: { lat: 41.3641, lng: 2.1677 }
            },
            cost: 15
          },
          {
            time: "11:00",
            name: "National Art Museum of Catalonia",
            description: "Visit the museum housed in the National Palace.",
            location: {
              name: "National Art Museum of Catalonia",
              coordinates: { lat: 41.3688, lng: 2.1534 }
            },
            cost: 15
          },
          {
            time: "14:30",
            name: "Magic Fountain",
            description: "See the famous fountain before heading to the airport.",
            location: {
              name: "Magic Fountain of Montjuïc",
              coordinates: { lat: 41.3715, lng: 2.1525 }
            },
            cost: 0
          },
          {
            time: "17:00",
            name: "Departure",
            description: "Transfer to Barcelona–El Prat Airport for departure.",
            location: {
              name: "Barcelona–El Prat Airport",
              coordinates: { lat: 41.2974, lng: 2.0833 }
            },
            cost: 0
          }
        ],
        accommodation: {
          name: "Hotel Barcelona Gothic",
          description: "Boutique hotel in the heart of the Gothic Quarter",
          location: {
            name: "Gothic Quarter",
            coordinates: { lat: 41.3840, lng: 2.1777 }
          },
          pricePerNight: 150,
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1170&auto=format&fit=crop"
        },
        meals: [
          {
            type: "breakfast",
            name: "Continental breakfast at hotel",
            cost: 0
          },
          {
            type: "lunch",
            name: "Lunch near the museum",
            location: {
              name: "Café Montjuïc",
              coordinates: { lat: 41.3690, lng: 2.1540 }
            },
            cost: 20
          }
        ]
      }
    ],
    packingList: [
      {
        category: "Clothing",
        items: [
          "Light, comfortable clothing",
          "Walking shoes",
          "Light jacket or sweater for evenings",
          "Swimwear (for beach)",
          "Smart casual outfit for nice restaurants"
        ]
      },
      {
        category: "Essentials",
        items: [
          "Passport",
          "Travel insurance documents",
          "Euro currency/credit cards",
          "Smartphone/charger",
          "Travel adapter for Spain",
          "Hotel reservation details"
        ]
      },
      {
        category: "Health & Toiletries",
        items: [
          "Sunscreen",
          "Personal toiletries",
          "Hand sanitizer",
          "Basic medications",
          "Face masks (if required)"
        ]
      },
      {
        category: "Activities",
        items: [
          "Camera",
          "Comfortable day bag",
          "Water bottle",
          "Guide book or city map",
          "Spanish phrasebook or translation app"
        ]
      }
    ]
  }
];
