import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import PlayersPage from "../pages/PlayersPage/PlayersPage";
import AddPlayerPage from "../pages/AddPlayerPage/AddPlayerPage";
import EditPlayerPage from "../pages/PlayerStatsPage/PlayerStatsPage";

export default function Routes() {
    return (
        <Router>
            <Route path="/" exact component={PlayersPage}/>
            <Route path="/add" component={AddPlayerPage}/>
            <Route path="/player/:id" component={EditPlayerPage}/>
        </Router>
    );
}