import {ADD_PLAYER} from "../consts";

export const addPlayerAction = (player) => {
    return {
        type: ADD_PLAYER,
        payload: player
    }
}