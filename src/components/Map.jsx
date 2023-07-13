import { useRef, useEffect } from 'react';
import maplibregl from 'maplibre-gl';

const Map = ({ routeCoordinates, className }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = new maplibregl.Map({
      container: mapContainerRef.current,
      style: `https://api.maptiler.com/maps/basic-v2/style.json?key=${import.meta.env.VITE_MAPLIBRE_KEY}`,
      center: [106.84394624756091, -6.201340987157193], // Initial map center coordinates
      zoom: 10, // Initial map zoom level
    });

    mapRef.current.on('load', () => {
      mapRef.current.addSource('route', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: [],
              },
            },
          ],
        },
      });

      mapRef.current.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#FF9900',
          'line-width': 8,
        },
      });
    });

    return () => mapRef.current.remove(); // Clean up on component unmount
  }, []);

  useEffect(() => {
    if (routeCoordinates.length > 1) {
      mapRef.current.getSource('route').setData({
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: routeCoordinates,
        },
      });

      const bounds = routeCoordinates.reduce((bounds, coord) => {
        return bounds.extend(coord);
      }, new maplibregl.LngLatBounds(routeCoordinates[0], routeCoordinates[0]));

      mapRef.current.fitBounds(bounds, { padding: 50 });
    }
  }, [routeCoordinates]);

  return <div ref={mapContainerRef} className={className} />;
};

export default Map;
