import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";
import MainGatalog from "../Components/trending/MainCatalog";
import Watched from "../Components/local/watched/WatchedFilms";
import Queue from "../Components/local/queue/QueueFilms";
import OneCardFilm from "../Components/cardFilm/OneCardFilm";
import Search from "../Components/search/Search";

export default function Router() {
  return (
    <>
      <Switch>
        <Route exact path={routes.home} component={MainGatalog} />
        <Route exact path={routes.watched} component={Watched} />
        <Route exact path={routes.queue} component={Queue} />
        <Route exact path={routes.search} component={Search} />
        <Route exact path={routes.film_detail} component={OneCardFilm} />
      </Switch>
    </>
  );
}
