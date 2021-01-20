import {ADD_PLAYER, UPDATE_PLAYER, UPDATE_PLAYERS} from "../consts";

export const reducer = (state, action) => {
    const {players} = state;
    const {type, payload} = action;

    switch (type) {
        case UPDATE_PLAYER:
            const index = players.findIndex(item => item.id === Number(payload.id));

            return {
                ...state,
                players: [
                    ...players.slice(0, index),
                    {
                        ...players[index],
                        ...payload
                    },
                    ...players.slice(index + 1)
                ]
            }
        case UPDATE_PLAYERS:
            return {...state, players: payload}
        case ADD_PLAYER:
            return {
                ...state,
                players: [
                    ...players,
                    {
                        ...payload,
                        level: 1,
                        things: 0
                    }
                ]
            }
        default:
            return state;
    }
}
