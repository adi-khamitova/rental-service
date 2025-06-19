import { FullOffer } from '../types/offer';

const offers: FullOffer[] = [
    {
        'id': 'bb68b0a8-3f92-446d-99c6-cb645d38e2cb',
        'title': 'Wood and stone place',
        'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families',
        'type': 'apartment',
        'price': 370,
        'previewImage': "img/paris1.jpg",
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
        'avatarUrl': '/avatar-angelina.jpg'
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 4.9,
        'bedrooms': 2,
        'maxAdults': 3
    },
    {
    'id': 'c3d4e5f6-g7h8-9012-i3j4-k5l6m7n8o9p0',
    'title': 'Budget-friendly studio near Sorbonne',
    'description': 'Affordable and clean studio apartment located in a quiet neighborhood. Walking distance to restaurants, museums and metro stations.',
    'type': 'apartment',
    'price': 130,
    'previewImage': "img/paris3.jpg",
    'images': [
        'img/paris3.jpg',
        'img/paris2.jpg',
        'img/paris1.jpg'
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
        'latitude': 48.84661,
        'longitude': 2.34149,
        'zoom': 16
    },
    'goods': [
        'Wi-Fi',
        'Fridge',
        'Microwave',
        'Toaster',
        'Towels',
        'Heating',
        'Shower only'
    ],
    'host': {
        'isPro': false,
        'name': 'Lucas',
        'avatarUrl': '/avatar-angelina.jpg'
    },
    'isPremium': false,
    'isFavorite': false,
    'rating': 4.4,
    'bedrooms': 1,
    'maxAdults': 2
},
    {
    'id': 'a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8',
    'title': 'Cozy apartment in the heart of Paris',
    'description': 'A charming and recently renovated apartment located in the city center. Close to Eiffel Tower and major attractions. Perfect for couples or solo travelers.',
    'type': 'apartment',
    'price': 220,
    'previewImage': "img/paris2.jpg",
    'images': [
        'img/paris2.jpg',
        'img/paris1.jpg',
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
        'latitude': 48.8586100,
        'longitude': 2.352499,
        'zoom': 16
    },
    'goods': [
        'Heating',
        'Wi-Fi',
        'Fridge',
        'Kitchen',
        'Towels',
        'Breakfast',
        'Elevator',
        'Hair dryer',
        'Iron'
    ],
    'host': {
        'isPro': false,
        'name': 'Pierre',
        'avatarUrl': '/avatar-angelina.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.7,
    'bedrooms': 1,
    'maxAdults': 2
},


    {
  "id": "a1b2c3d4-5678-90ef-ghij-klmnopqrstuv",
  "title": "Cozy house in Amsterdam",
  "description": "Charming house near the canals. Perfect for couples or solo travelers. Includes a small garden and bike rental.",
  "type": "house",
  "price": 210,
  'previewImage': "img/amsterdam1.jpg",
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
    "avatarUrl": "/avatar-angelina.jpg"
  },
  "isPremium": true,
  "isFavorite": false,
  "rating": 4.7,
  "bedrooms": 1,
  "maxAdults": 2
},

{
    'id': 'd4e5f6a7-b8c9-4d5e-9f0a-1b2c3d4e5f6a',
    'title': 'Charming canal-side apartment in Amsterdam',
    'description': 'Lovely 1-bedroom apartment located along a quiet canal. Historic building with wooden beams and modern amenities. Close to the city center and main attractions.',
    'type': 'apartment',
    'price': 280,
    'previewImage': "img/amsterdam1.jpg",
    'images': [
        'img/amsterdam1.jpg',
        'img/amsterdam2.jpg',
        'img/amsterdam3.jpg'
    ],
    'city': {
        'name': 'Amsterdam',
        'location': {
            'latitude': 52.3676,
            'longitude': 4.8955,
            'zoom': 13
        }
    },
    'location': {
        'latitude': 52.3696,
        'longitude': 4.8965,
        'zoom': 16
    },
    'goods': [
        'Heating',
        'Wi-Fi',
        'Fridge',
        'Kitchen',
        'Towels',
        'Coffee machine',
        'Laptop friendly workspace',
        'Washer',
        'Breakfast'
    ],
    'host': {
        'isPro': true,
        'name': 'Julia',
        'avatarUrl': '/avatar-angelina.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.8,
    'bedrooms': 1,
    'maxAdults': 2
},

{
    'id': 'e5f6a7b8-c9d0-4e1f-9a0b-2c3d4e5f6a7b',
    'title': 'Cozy studio near Vondelpark',
    'description': 'Small but comfortable studio apartment just a 5-minute walk from Vondelpark. Ideal for travelers who want to explore Amsterdam by bike or on foot.',
    'type': 'apartment',
    'price': 160,
    'previewImage': "img/amsterdam2.jpg",
    'images': [
        'img/amsterdam2.jpg',
        'img/amsterdam3.jpg',
        'img/amsterdam1.jpg'
    ],
    'city': {
        'name': 'Amsterdam',
        'location': {
            'latitude': 52.3676,
            'longitude': 4.8955,
            'zoom': 13
        }
    },
    'location': {
        'latitude': 52.3596,
        'longitude': 4.8765,
        'zoom': 16
    },
    'goods': [
        'Wi-Fi',
        'Fridge',
        'Microwave',
        'Towels',
        'Heating',
        'Shower only',
        'Bike storage'
    ],
    'host': {
        'isPro': false,
        'name': 'Mark',
        'avatarUrl': '/avatar-angelina.jpg'
    },
    'isPremium': false,
    'isFavorite': true,
    'rating': 4.6,
    'bedrooms': 1,
    'maxAdults': 2
},

{
    'id': 'f6a7b8c9-d0e1-4f2a-9b3c-4d5e6f7a8b9c',
    'title': 'Stylish apartment in the city center of Brussels',
    'description': 'Beautifully decorated apartment located just a short walk from Grand Place and Central Station. Perfect for couples or solo travelers looking to explore the city.',
    'type': 'apartment',
    'price': 190,
    'previewImage': "img/berlin1.jpg",
    'images': [
        'img/berlin1.jpg',
        'img/berlin2.jpg',
        'img/berlin3.jpg'
    ],
    'city': {
        'name': 'Brussels',
        'location': {
            'latitude': 50.8466,
            'longitude': 4.3525,
            'zoom': 13
        }
    },
    'location': {
        'latitude': 50.8476,
        'longitude': 4.3515,
        'zoom': 16
    },
    'goods': [
        'Heating',
        'Wi-Fi',
        'Fridge',
        'Kitchen',
        'Towels',
        'Coffee machine',
        'Laptop friendly workspace',
        'Shower',
        'Elevator'
    ],
    'host': {
        'isPro': true,
        'name': 'Emma',
        'avatarUrl': '/avatar-angelina.jpg'
    },
    'isPremium': false,
    'isFavorite': true,
    'rating': 4.7,
    'bedrooms': 1,
    'maxAdults': 2
},

{
    'id': 'a7b8c9d0-e1f2-4a3b-9c4d-5e6f7a8b9c0d',
    'title': 'Modern apartment near Cologne Cathedral',
    'description': 'Bright and stylish one-bedroom apartment located just 10 minutes on foot from the famous Cologne Cathedral. Fully equipped for a comfortable stay.',
    'type': 'apartment',
    'price': 210,
    'previewImage': "/img/barcelona1.jpg",
    'images': [
        'img/barcelona1.jpg',
        'img/barcelona2.jpg',
        'img/barcelona3.jpg'
    ],
    'city': {
        'name': 'Cologne',
        'location': {
            'latitude': 50.9375,
            'longitude': 6.9603,
            'zoom': 13
        }
    },
    'location': {
        'latitude': 50.9385,
        'longitude': 6.9613,
        'zoom': 16
    },
    'goods': [
        'Heating',
        'Wi-Fi',
        'Fridge',
        'Kitchen',
        'Towels',
        'Coffee machine',
        'Laptop friendly workspace',
        'Washer',
        'Breakfast',
        'Elevator'
    ],
    'host': {
        'isPro': true,
        'name': 'Lena',
        'avatarUrl': '/avatar-angelina.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.8,
    'bedrooms': 1,
    'maxAdults': 2
},
{
    'id': 'b8c9d0e1-f2a3-4b4c-9d5e-6f7a8b9c0d1e',
    'title': 'Cozy studio in a quiet neighborhood',
    'description': 'Affordable and cozy studio apartment in a peaceful area of Cologne, yet well connected to the city center by public transport.',
    'type': 'apartment',
    'price': 120,
    'previewImage': "img/barcelona2.jpg",
    'images': [
        'img/barcelona2.jpg',
        'img/barcelona3.jpg',
        'img/barcelona1.jpg'
    ],
    'city': {
        'name': 'Cologne',
        'location': {
            'latitude': 50.9375,
            'longitude': 6.9603,
            'zoom': 13
        }
    },
    'location': {
        'latitude': 50.9285,
        'longitude': 6.9503,
        'zoom': 16
    },
    'goods': [
        'Heating',
        'Wi-Fi',
        'Fridge',
        'Microwave',
        'Towels',
        'Shower only',
        'Public parking nearby'
    ],
    'host': {
        'isPro': false,
        'name': 'Max',
        'avatarUrl': '/avatar-angelina.jpg'
    },
    'isPremium': false,
    'isFavorite': true,
    'rating': 4.5,
    'bedrooms': 1,
    'maxAdults': 2
},

{
    'id': 'c9d0e1f2-a3b4-4c5d-9e6f-7a8b9c0d1e2f',
    'title': 'Bright apartment near Alster Lake',
    'description': 'Comfortable and modern one-bedroom apartment located just a 10-minute walk from the banks of Alster Lake. Quiet neighborhood with great transport links.',
    'type': 'apartment',
    'price': 230,
    'previewImage': "img/berlin2.jpg",
    'images': [
        'img/berlin2.jpg',
        'img/berlin1.jpg',
        'img/berlin3.jpg'
    ],
    'city': {
        'name': 'Hamburg',
        'location': {
            'latitude': 53.5507,
            'longitude': 9.9930,
            'zoom': 13
        }
    },
    'location': {
        'latitude': 53.5517,
        'longitude': 9.9940,
        'zoom': 16
    },
    'goods': [
        'Heating',
        'Wi-Fi',
        'Fridge',
        'Kitchen',
        'Towels',
        'Coffee machine',
        'Laptop friendly workspace',
        'Washer',
        'Breakfast',
        'Balcony'
    ],
    'host': {
        'isPro': true,
        'name': 'Anna',
        'avatarUrl': '/avatar-angelina.jpg'
    },
    'isPremium': false,
    'isFavorite': true,
    'rating': 4.7,
    'bedrooms': 1,
    'maxAdults': 2
},
]

export { offers };