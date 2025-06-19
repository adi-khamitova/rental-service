import { CityOffer } from "./types/offer";


const Setting = {
    rentalOffersCount: 312,
} as const;

const AppRoute = {
    Main: '/',
    Login: '/login',
    Favorites: '/favorites',
    Offer: '/offer/:id',
} as const;


const AuthorizationStatus = {
    Auth: 'AUTH',
    NoAuth: 'NO_AUTH',
    Unknown: 'UNKNOWN',
}

const CITIES_LOCATION: CityOffer[] = [
    {
        name: 'Paris',
        location: {
            latitude: 48.857961940958674, 
            longitude: 2.3487029334470035,
            zoom: 11
        }
    },
    {
        name: 'Cologne',
        location: {
            latitude: 50.9375,
            longitude: 6.9603,
            zoom: 11
        }
    },
    {
        name: 'Brussels',
        location: {
            latitude: 50.8503,
            longitude: 4.3517,
            zoom: 11
        }
    },
    {
        name: 'Amsterdam',
        location: {
            latitude: 52.36922706697589,
            longitude: 4.906007720330443,
            zoom: 11
        }
    },
    {
        name: 'Hamburg',
        location: {
            latitude: 53.5511,
            longitude: 9.9937,
            zoom: 11
        }
    },
    {
        name: 'Dusseldorf',
        location: {
            latitude: 51.2277,
            longitude: 6.7735,
            zoom: 11
        }
    },
];

const SortOffersType = {
    Popular: 'Popular',
    PriceToHigh: 'Price: low to high',
    PriceToLow: 'Price: high to low',
    TopRated: 'Top rated first',
};

export { Setting, AppRoute, AuthorizationStatus, CITIES_LOCATION, SortOffersType };