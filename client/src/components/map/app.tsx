import React, { useState } from 'react';
import List from './list';
import { Map } from './map';
import { OffersList } from '../../types/offer';
import { offersList } from '../../mocks/offers-list';

function App() {
  const [selectedOffer, setSelectedOffer] = useState<OffersList | null>(null);

  const handleListItemHover = (id: string) => {
    const offer = offersList.find((o) => o.id === id) || null;
    setSelectedOffer(offer);
  };

  const handleMarkerClick = (id: string) => {
    const offer = offersList.find((o) => o.id === id) || null;
    setSelectedOffer(offer);
  };

  return (
    <>
      <header>
        <h1>Квартиры в {offersList[0].city.name}:</h1>
      </header>
      <main style={{ display: 'flex', gap: '20px' }}>
        <List offers={offersList} onListItemHover={handleListItemHover} />
        <Map
          city={offersList[0].city}
          offers={offersList}
          selectedOffer={selectedOffer}
          onMarkerClick={handleMarkerClick}
        />
      </main>
    </>
  );
}

export default App;