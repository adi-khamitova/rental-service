import { OffersList } from "../../types/offer";
import { CitiesCard } from "../cities-card/cities-card";

type CitiesCardListProps = {
    offersList: OffersList[];
    onListItemHover: (id: string) => void;
};

function CitiesCardList({ offersList, onListItemHover }: CitiesCardListProps) {
    return (
        offersList.map((item) => (
            <CitiesCard
                key={item.id}
                id={item.id}
                title={item.title}
                type={item.type}
                price={item.price}
                previewImage={item.previewImage}
                isPremium={item.isPremium}
                rating={item.rating}
                onHover={onListItemHover}
            />
        ))
    );
}

export { CitiesCardList };