// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/app/app';
import { offers } from './mocks/offers';
import React from 'react';
import { Setting } from './const';
import { offersList } from './mocks/offers-list';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App 
      rentalOffersCount= { Setting.rentalOffersCount }
      offersList = { offersList }
      offers = { offers }
    />
  </React.StrictMode>
)