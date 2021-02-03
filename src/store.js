import React from "react";

import {incrementFieldAction} from "./actions/incrementFieldAction";
import {decrementFieldAction} from "./actions/decrementFieldAction";
import {addPlayerAction} from "./actions/addPlayerAction";
import {toggleGenderAction} from "./actions/toggleGenderAction";
import {resetPlayerAction} from "./actions/resetPlayerAction";
import {reducer} from "./reducers/rootReducer";
import {deletePlayerAction} from "./actions/deletePlayerAction";

const initialState = {
    players: [
        {id: 0, name: "Паша", level: 1, things: 5, color: "#000", gender: "male"},
        {id: 1, name: "Вика", level: 2, things: 6, color: "#f0f", gender: "female"},
        {id: 2, name: "Артем", level: 10, things: 7, color: "#f00", gender: "male"},
        {id: 3, name: "Ника", level: 10, things: 99, color: "#00f", gender: "female"},
    ],
    editMode: false
};
const localState = JSON.parse(localStorage.getItem("mcounter"))

const StoreContext = React.createContext(null);
const ActionsContext = React.createContext(null);

const StoreProvider = (props) => {
    const [state, dispatch] = React.useReducer(reducer, localState || initialState);

    const actionCreator = (action) => {
        return (params) => {
            dispatch(action(params, state))
        }
    }

    const actions = {
        incrementField: actionCreator(incrementFieldAction),
        decrementField: actionCreator(decrementFieldAction),
        addPlayer: actionCreator(addPlayerAction),
        deletePlayer: actionCreator(deletePlayerAction),
        toggleGender: actionCreator(toggleGenderAction),
        resetPlayers: actionCreator(resetPlayerAction)
    };

    React.useEffect(() => {
        localStorage.setItem("mcounter", JSON.stringify(state))
    }, [state])

    return (
        <StoreContext.Provider value={{players: state.players, editMode: state.editMode}}>
            <ActionsContext.Provider value={{actions}}>
                {props.children}
            </ActionsContext.Provider>
        </StoreContext.Provider>
    );
}

const useStore = () => React.useContext(StoreContext);
const useActions = () => React.useContext(ActionsContext);

export {useStore, useActions, StoreProvider}