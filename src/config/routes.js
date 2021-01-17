import React from "react";
import PlayersPage from "../pages/PlayersPage/PlayersPage";
import AddPlayerPage from "../pages/AddPlayerPage/AddPlayerPage";
import EditPlayerPage from "../pages/PlayerStatsPage/PlayerStatsPage";
import {Route} from "react-router-dom";

const routes = [
    <Route key={0} path="/" exact component={PlayersPage}/>,
    <Route key={1} path="/add" component={AddPlayerPage}/>,
    <Route key={2} path="/player/:id" component={EditPlayerPage}/>
];

export default routes;