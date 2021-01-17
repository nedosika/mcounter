import React from 'react';
import routes from "../../config/routes";
import Routing from "../Routing/Routing";
import {StoreProvider} from "../../store";

export default function App() {
    return (
        <StoreProvider>
            <Routing routes={routes}/>
        </StoreProvider>
    );
}
