import {UPDATE_PLAYER} from "../consts";

export const incrementFieldAction = ([id, field], {players}) => {
    const index = players.findIndex(item => item.id === id);
    return {
        type: UPDATE_PLAYER,
        payload: {
            id,
            [field]: players[index][field] + 1
        }
    }
}