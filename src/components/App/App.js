import React from 'react';
import Routes from "../../routes/Routes";
import {StoreProvider} from "../../store";

export default function App() {
    return (
        <StoreProvider>
            <Routes/>
        </StoreProvider>
    );
}
