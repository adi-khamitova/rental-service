import { OffersList } from "../../types/offer";
import { FavoriteCard } from '../favorite-card/favorite-card';

type FavoriteCardListProps = {
  offersList: OffersList[];
};

function FavoriteCardList({ offersList }: FavoriteCardListProps) {
  const favoritesByCity = offersList.reduce((acc, offer) => {
    const city = offer.city.name;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(offer);
    return acc;
  }, {} as Record<string, OffersList[]>);

  return (
    <div className="favorites__list">
      {Object.entries(favoritesByCity).map(([city, offers]) => (
        <li className="favorites__locations-items" key={city}>
                    <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                            <a className="locations__item-link" href="#">
                                <span>{city}</span>
                            </a>
                        </div>
                    </div>
                    <div className="favorites__places">
                        {offers.map((offer) => (
                            <FavoriteCard
                                key={offer.id}
                                id={offer.id}
                                title={offer.title}
                                type={offer.type}
                                price={offer.price}
                                isPremium={offer.isPremium}
                                previewImage={offer.previewImage}
                                rating={offer.rating}
                            />
                        ))}
                    </div>
                </li>
      ))}
    </div>
  );
}

export { FavoriteCardList };