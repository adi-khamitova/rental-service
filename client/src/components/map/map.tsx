import React, { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from './const';
import { OffersList } from '../../types/offer';
import { CityOffer } from '../../types/offer';

type MapProps = {
  city: CityOffer;
  offers: OffersList[];
  selectedOffer: OffersList | null;
  onMarkerClick: (id: string) => void;
}

function Map({ city, offers, selectedOffer, onMarkerClick }: MapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      map.setView(
        [city.location.latitude, city.location.longitude],
        city.location.zoom
      );
    }
  }, [map, city]);

  useEffect(() => {
    if (!map) return;

    map.eachLayer((layer) => {
      if ((layer).options && (layer).options.pane === 'markerPane') {
        map.removeLayer(layer);
      }
    });

    offers.forEach((offer) => {
      const isSelected = selectedOffer && offer.id === selectedOffer.id;

      const marker = leaflet.marker(
        {
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        },
        {
          icon: isSelected ? currentCustomIcon : defaultCustomIcon,
        }
      );

      marker.addTo(map);

      marker.on('click', () => {
        onMarkerClick(offer.id);
      });
    });
  }, [map, offers, selectedOffer, onMarkerClick, currentCustomIcon, defaultCustomIcon]);



  return <div style={{ height: '600px' }} ref={mapRef}></div>;
}

export { Map };