import React from 'react';
import { OffersList } from '../../types/offer';

type ListProps = {
  offers: OffersList[];
  onListItemHover: (id: string) => void;
};

function List({ offers, onListItemHover }: ListProps) {
  const handleListItemHover = (id: string) => () => {
    onListItemHover(id);
  };

  return (
    <ul className="list" style={{ width: '300px' }}>
      {offers.map((offer) => {

        return (
          <li
            key={offer.id}
            onMouseEnter={handleListItemHover(offer.id)}
          >
            {offer.title}
          </li>
        );
      })}
    </ul>
  );
}

export default List;