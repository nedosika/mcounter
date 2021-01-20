import {UPDATE_PLAYER} from "../consts";

export const decrementFieldAction = ([id, field], {players}) => {
    const index = players.findIndex(item => item.id === id);
    const newValue = players[index][field] > 0 ? players[index][field] - 1 : 0;
    return {
        type: UPDATE_PLAYER,
        payload: {
            id,
            [field]: newValue
        }
    }
}