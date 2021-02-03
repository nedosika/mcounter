import React from "react";
import List from "@material-ui/core/List";
import {makeStyles} from "@material-ui/core/styles";

import {useActions, useStore} from "../../store";
import Player from "../Player/Player";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(1)
    }
}));

export default ({editMode}) => {
    const classes = useStyles();
    const {players} = useStore();
    const {deletePlayer} = useActions();

    return (
        <List dense className={classes.root}>
            {players.map((player) =>
                <Player
                    key={player.id}
                    player={player}
                    editMode={editMode}
                    handleDeletePlayer={deletePlayer}
                />
            )}
        </List>
    );
}