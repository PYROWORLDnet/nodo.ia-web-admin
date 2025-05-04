'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Map } from '@/components/ui/map';

interface LocationDemandMapProps {
  timeRange: string;
  detailed?: boolean;
}

export function LocationDemandMap({ timeRange, detailed = false }: LocationDemandMapProps) {
  // Mock data for location-based demand
  const locationData = {
    type: 'FeatureCollection' as const,
    features: [
      {
        type: 'Feature' as const,
        properties: {
          name: 'Santo Domingo Este',
          value: 1250
        },
        geometry: {
          type: 'Point' as const,
          coordinates: [-69.8167, 18.4833] as [number, number]
        }
      },
      {
        type: 'Feature' as const,
        properties: {
          name: 'Santo Domingo Norte',
          value: 980
        },
        geometry: {
          type: 'Point' as const,
          coordinates: [-69.9333, 18.5167] as [number, number]
        }
      },
      {
        type: 'Feature' as const,
        properties: {
          name: 'Santo Domingo Oeste',
          value: 850
        },
        geometry: {
          type: 'Point' as const,
          coordinates: [-70.0167, 18.4667] as [number, number]
        }
      },
      {
        type: 'Feature' as const,
        properties: {
          name: 'Gazcue',
          value: 1500
        },
        geometry: {
          type: 'Point' as const,
          coordinates: [-69.9333, 18.4667] as [number, number]
        }
      },
      {
        type: 'Feature' as const,
        properties: {
          name: 'Piantini',
          value: 1800
        },
        geometry: {
          type: 'Point' as const,
          coordinates: [-69.9500, 18.4833] as [number, number]
        }
      },
      {
        type: 'Feature' as const,
        properties: {
          name: 'Bella Vista',
          value: 1600
        },
        geometry: {
          type: 'Point' as const,
          coordinates: [-69.9167, 18.4667] as [number, number]
        }
      },
      {
        type: 'Feature' as const,
        properties: {
          name: 'Los Prados',
          value: 1200
        },
        geometry: {
          type: 'Point' as const,
          coordinates: [-69.9500, 18.5000] as [number, number]
        }
      },
      {
        type: 'Feature' as const,
        properties: {
          name: 'Villa Mella',
          value: 950
        },
        geometry: {
          type: 'Point' as const,
          coordinates: [-69.9500, 18.5500] as [number, number]
        }
      },
      {
        type: 'Feature' as const,
        properties: {
          name: 'La Caleta',
          value: 800
        },
        geometry: {
          type: 'Point' as const,
          coordinates: [-69.7000, 18.4500] as [number, number]
        }
      },
      {
        type: 'Feature' as const,
        properties: {
          name: 'Boca Chica',
          value: 1100
        },
        geometry: {
          type: 'Point' as const,
          coordinates: [-69.6000, 18.4500] as [number, number]
        }
      }
    ]
  };

  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!googleMapsApiKey) {
    return (
      <Card className={`${detailed ? 'col-span-2' : ''} border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow duration-200`}>
        <CardHeader className="border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
          <CardTitle className="text-xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-500"></span>
            Location-Based Demand
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121090.55491241552!2d-69.94687995!3d18.48004235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89f1107ea5ab%3A0xd6c587b82715c164!2sSanto%20Domingo%2C%20Dominican%20Republic!5e0!3m2!1sen!2s!4v1746283421621!5m2!1sen!2s" width="100%" height="450" style={{ border: 0 }}></iframe>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`${detailed ? 'col-span-2' : ''} border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow duration-200`}>
      <CardHeader className="border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
        <CardTitle className="text-xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-500"></span>
          Location-Based Demand
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="relative rounded-lg bg-gray-50 dark:bg-gray-800/50 min-h-[220px]">
          <Map data={locationData} />
          <div className="absolute top-2 right-2 text-gray-900 dark:bg-brand-500 dark:text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow bg-brand-500">
            {timeRange === '7d' ? 'Last 7 Days' : 'Last 30 Days'}
          </div>
          <div className="absolute bottom-2 left-2 text-xs text-gray-500 dark:text-gray-400 bg-white/80 dark:bg-gray-900/80 px-2 py-1 rounded shadow">
            <span className="font-semibold">Legend:</span> Marker size = demand
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 