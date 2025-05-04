'use client';

interface MapProps {
  data: {
    type: 'FeatureCollection';
    features: Array<{
      type: 'Feature';
      properties: {
        name: string;
        value: number;
      };
      geometry: {
        type: 'Point';
        coordinates: [number, number];
      };
    }>;
  };
}

export function Map({ data }: MapProps) {
  
  // Create markers string for the map
  const markers = data.features.map(feature => {
    const [lng, lat] = feature.geometry.coordinates;
    const size = Math.max(10, Math.min(30, feature.properties.value / 100));
    return `markers=size:${size}|${lat},${lng}`;
  }).join('&');

  // Create the Google Maps embed URL
  const mapUrl = `https://www.google.com/maps/embed/v1/view?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&center=18.4833,-69.9333&zoom=11&${markers}`;

  return (
    <iframe
      src={mapUrl}
      width="100%"
      height="100%"
      style={{ border: 0, minHeight: '220px' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
} 