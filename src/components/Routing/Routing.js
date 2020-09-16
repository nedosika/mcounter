import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

export default function Routing({routes}) {
    return (
        <Router>
            {routes.map(route => route)}
        </Router>
    );
}