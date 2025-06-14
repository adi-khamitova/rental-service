import { Logo } from '../../components/logo/logo';
import { FavoriteCardList } from '../../components/favorite-card-list/favorite-card-list';
import { OffersList } from '../../types/offer';
// import { offers } from '../../mocks/offers';
import { Link } from 'react-router-dom';

type FavoritesProps = {
    offersList: OffersList[];
};

function Favorites({ offersList }: FavoritesProps) {
    return(
        <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo></Logo>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Myemail@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="#">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteCardList
              offersList={offersList}
            />
          </section>
        </div>
      </main>


      <footer className="footer container">
        <Link className="footer__logo-link" to="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="Rent service logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
    );
}

export { Favorites };