import {DELETE_PLAYER} from "../consts";

export const deletePlayerAction = (player) => {
    return {
        type: DELETE_PLAYER,
        payload: player
    }
}