import {UPDATE_PLAYER} from "../store";

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