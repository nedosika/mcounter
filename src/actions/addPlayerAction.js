import {ADD_PLAYER} from "../store";

export const addPlayerAction = (player) => {
    return {
        type: ADD_PLAYER,
        payload: player
    }
}