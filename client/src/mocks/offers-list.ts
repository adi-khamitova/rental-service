import { OffersList } from '../types/offer';

export const offersList: OffersList[] = [
  {
    id: 'bb68b0a8-3f92-446d-99c6-cb645d38e2cb',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 370,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.9,
    previewImage: 'img/paris1.jpg',
  },
  {
  id: 'a1b2c3d4-5678-90ef-ghij-klmnopqrstuv',
  title: 'Cozy house in Amsterdam',
  type: 'house',
  price: 210,
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 13,
    },
  },
  location: {
    latitude: 52.368810,
    longitude: 4.890499,
    zoom: 16,
  },
  isFavorite: false,
  isPremium: true,
  rating: 4.7,
  previewImage: 'img/amsterdam1.jpg',
},
{
  id: 'b2c3d4e5-6789-01fg-hijk-lmnopqrstuvw',
  title: 'Modern loft in Berlin',
  type: 'apartment',
  price: 180,
  city: {
    name: 'Berlin',
    location: {
      latitude: 52.520008,
      longitude: 13.404954,
      zoom: 13,
    },
  },
  location: {
    latitude: 52.499810,
    longitude: 13.422499,
    zoom: 16,
  },
  isFavorite: true,
  isPremium: false,
  rating: 4.5,
  previewImage: 'img/berlin1.jpg',
},
{
  id: 'c3d4e5f6-7890-12gh-ijkl-mnopqrstuvwx',
  title: 'Seaside villa in Barcelona',
  type: 'villa',
  price: 450,
  city: {
    name: 'Barcelona',
    location: {
      latitude: 41.385063,
      longitude: 2.173404,
      zoom: 13,
    },
  },
  location: {
    latitude: 41.378810,
    longitude: 2.182499,
    zoom: 16,
  },
  isFavorite: true,
  isPremium: true,
  rating: 4.9,
  previewImage: 'img/barcelona1.jpg',
},
];