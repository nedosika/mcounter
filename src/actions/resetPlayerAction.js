import {UPDATE_PLAYERS} from "../store";

export const resetPlayerAction = (params, {players}) => {
    return {
        type: UPDATE_PLAYERS,
        payload: players.map(player => ({
            ...player,
            level: 1,
            things: 0
        }))
    }
}