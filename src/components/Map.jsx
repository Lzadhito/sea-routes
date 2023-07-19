import { useRef, useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import { JAKARTA_COORDINATES } from '~/constants';

const Map = ({ selectedCoordinates, routeCoordinates, className, isRemoveRoute }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const mapMarkers = useRef([]);

  /**
   * Initialize Map:
   * - Set default center to Jakarta
   * - Initialize route layer
   */
  useEffect(() => {
    mapRef.current = new maplibregl.Map({
      container: mapContainerRef.current,
      style: `https://api.maptiler.com/maps/basic-v2/style.json?key=${import.meta.env.VITE_MAPLIBRE_KEY}`,
      center: JAKARTA_COORDINATES,
      zoom: 10,
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

  // Route draw & undraw
  useEffect(() => {
    if (mapRef.current.getSource('route')) {
      // Add data to route layer to drawn the route line
      if (routeCoordinates) {
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

      // Remove data on not showing route
      else if (isRemoveRoute) {
        mapRef.current.getSource('route').setData({
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: [],
          },
        });
      }
    }

    // Add marker to every selected point
    mapMarkers.current.forEach((marker) => marker.remove());
    selectedCoordinates?.forEach((coordinate) => {
      if (coordinate) {
        const marker = new maplibregl.Marker({ color: 'red' })
          .setLngLat(coordinate.geometry?.coordinates)
          .addTo(mapRef.current);
        mapMarkers.current.push(marker);
      }
    });
  }, [isRemoveRoute, routeCoordinates, selectedCoordinates]);

  return <div ref={mapContainerRef} className={className} />;
};

export default Map;
