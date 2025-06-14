import { FullOffer } from '../types/offer';

const offers: FullOffer[] = [
    {
        'id': 'bb68b0a8-3f92-446d-99c6-cb645d38e2cb',
        'title': 'Wood and stone place',
        'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families',
        'type': 'apartment',
        'price': 370,
        'images': [
            'img/paris1.jpg',
            'img/paris2.jpg',
            'img/paris3.jpg'
        ],
        'city': {
            'name': 'Paris',
            'location': {
                'latitude': 48.85661,
                'longitude': 2.351499,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 48.868610000000004,
            'longitude': 2.342499,
            'zoom': 16
        },
        'goods': [
            'Heating',
            'Wi-Fi',
            'Fridge',
            'Laptop friendly workspace',
            'Baby seat',
            'Air conditioning',
            'Washer',
            'Towels',
            'Dishwasher',
            'Kitchen',
            'Washing machine',
            'Breakfast',
            'Coffee machine'
        ],
        'host': {
            'isPro': true,
        'name': 'Angelina',
        'avatarUrl': 'avatar-angelina.jpg'
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 4.9,
        'bedrooms': 2,
        'maxAdults': 3
    },
    {
  "id": "a1b2c3d4-5678-90ef-ghij-klmnopqrstuv",
  "title": "Cozy house in Amsterdam",
  "description": "Charming house near the canals. Perfect for couples or solo travelers. Includes a small garden and bike rental.",
  "type": "house",
  "price": 210,
  "images": [
    "img/amsterdam1.jpg",
    "img/amsterdam2.jpg",
    "img/amsterdam3.jpg"
  ],
  "city": {
    "name": "Amsterdam",
    "location": {
      "latitude": 52.370216,
      "longitude": 4.895168,
      "zoom": 13
    }
  },
  "location": {
    "latitude": 52.368810,
    "longitude": 4.890499,
    "zoom": 16
  },
  "goods": [
    "Wi-Fi",
    "Kitchen",
    "Heating",
    "TV",
    "Washing machine",
    "Coffee machine",
    "Bikes"
  ],
  "host": {
    "isPro": false,
    "name": "Jan",
    "avatarUrl": "avatar-jan.jpg"
  },
  "isPremium": true,
  "isFavorite": false,
  "rating": 4.7,
  "bedrooms": 1,
  "maxAdults": 2
},

{
  "id": "b2c3d4e5-6789-01fg-hijk-lmnopqrstuvw",
  "title": "Modern loft in Berlin",
  "description": "Stylish loft in the heart of Kreuzberg. Industrial design with high ceilings and large windows.",
  "type": "apartment",
  "price": 180,
  "images": [
    "img/berlin1.jpg",
    "img/berlin2.jpg",
    "img/berlin3.jpg"
  ],
  "city": {
    "name": "Berlin",
    "location": {
      "latitude": 52.520008,
      "longitude": 13.404954,
      "zoom": 13
    }
  },
  "location": {
    "latitude": 52.499810,
    "longitude": 13.422499,
    "zoom": 16
  },
  "goods": [
    "Wi-Fi",
    "Air conditioning",
    "Workspace",
    "TV",
    "Washer",
    "Elevator"
  ],
  "host": {
    "isPro": true,
    "name": "Sophie",
    "avatarUrl": "avatar-sophie.jpg"
  },
  "isPremium": false,
  "isFavorite": true,
  "rating": 4.5,
  "bedrooms": 1,
  "maxAdults": 2
},

{
  "id": "c3d4e5f6-7890-12gh-ijkl-mnopqrstuvwx",
  "title": "Seaside villa in Barcelona",
  "description": "Luxury villa with private pool and sea view. Perfect for large groups or families.",
  "type": "villa",
  "price": 450,
  "images": [
    "img/barcelona1.jpg",
    "img/barcelona2.jpg",
    "img/barcelona3.jpg"
  ],
  "city": {
    "name": "Barcelona",
    "location": {
      "latitude": 41.385063,
      "longitude": 2.173404,
      "zoom": 13
    }
  },
  "location": {
    "latitude": 41.378810,
    "longitude": 2.182499,
    "zoom": 16
  },
  "goods": [
    "Wi-Fi",
    "Air conditioning",
    "Pool",
    "Private beach access",
    "Garden",
    "BBQ",
    "Parking",
    "Safe"
  ],
  "host": {
    "isPro": true,
    "name": "Carlos",
    "avatarUrl": "avatar-carlos.jpg"
  },
  "isPremium": true,
  "isFavorite": true,
  "rating": 4.9,
  "bedrooms": 4,
  "maxAdults": 8
},
]

export { offers };