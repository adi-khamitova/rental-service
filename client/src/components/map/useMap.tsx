import { useEffect, useState, MutableRefObject, useRef } from 'react';
import leaflet, { Map as LeafletMap, TileLayer } from 'leaflet';
import { CityOffer } from '../../types/offer';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: CityOffer): LeafletMap | null {
  const [map, setMap] = useState<LeafletMap | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current).setView(
        [city.location.latitude, city.location.longitude],
        city.location.zoom
      );

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      );

      instance.addLayer(layer);
      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;