import {UPDATE_PLAYER} from "../consts";

export const toggleGenderAction = (id, {players}) => {
    const index = players.findIndex(item => item.id === id);
    return {
        type: UPDATE_PLAYER,
        payload: {
            id,
            gender: players[index].gender === "male" ? "female" : "male"
        }
    }
}