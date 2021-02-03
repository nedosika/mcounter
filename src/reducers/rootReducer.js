import {
    ADD_PLAYER,
    DELETE_PLAYER,
    UPDATE_PLAYER,
    UPDATE_PLAYERS
} from "../consts";

export const reducer = (state, action) => {
    const {players} = state;
    const {type, payload} = action;

    switch (type) {
        case UPDATE_PLAYER:
            const updateIndex = players.findIndex(player => player.id === Number(payload.id));

            return {
                ...state,
                players: [
                    ...players.slice(0, updateIndex),
                    {
                        ...players[updateIndex],
                        ...payload
                    },
                    ...players.slice(updateIndex + 1)
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
        case DELETE_PLAYER:
            const deleteIndex = players.findIndex(player => player.id === Number(payload.id));

            return {
                ...state,
                players: {
                    ...players.slice(0, deleteIndex),
                    ...players.slice(deleteIndex + 1)
                }
            }
        default:
            return state;
    }
}
