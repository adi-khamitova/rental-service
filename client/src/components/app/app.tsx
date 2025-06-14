import { Favorites } from "../../pages/favorites/favorites";
import { Login } from "../../pages/login/login";
import { MainPage } from "../../pages/main-page/main-page";
import { Offer } from "../../pages/offer/offer";
import { NotFound } from "../../pages/not-found/not-found";
import { Route, Routes } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import { BrowserRouter } from "react-router-dom";
import { JSX } from "react";
import { PrivateRoute } from "../private-route/private-route";
import { FullOffer, OffersList } from "../../types/offer";

type AppMainPageProps = {
    rentalOffersCount: number;
    offers: FullOffer[];
    offersList: OffersList[];
}

function App({rentalOffersCount, offers, offersList}: AppMainPageProps): JSX.Element {
    return(
        <BrowserRouter>
        <Routes>
            <Route
                path={AppRoute.Main}
                element={<MainPage rentalOffersCount={rentalOffersCount} offersList={ offersList }/>}
            />
            <Route
                path={AppRoute.Login}
                element={<Login/>}
            />
            <Route
                path={AppRoute.Favorites}
                element={
                    <PrivateRoute
                        authorizationStatus={ AuthorizationStatus.NoAuth }
                    >
                        <Favorites offersList={offersList}/>
                    </PrivateRoute>
                }
            />
            <Route
                path={ `${AppRoute.Offer}/:id` }
                element={<Offer offers={offers}/>}
            />
            <Route
                path="*"
                element={<NotFound/>}
            />
        </Routes>
        </BrowserRouter>
    )
}

export { App };