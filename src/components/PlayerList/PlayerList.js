import React from "react";
import List from "@material-ui/core/List";
import {makeStyles} from "@material-ui/core/styles";

import {useStore} from "../../store";
import Player from "../Player/Player";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(1)
    }
}));

export default () => {
    const classes = useStyles();
    const {players} = useStore();

    return (
        <List dense className={classes.root}>
            {players.map((player) =>
                <Player key={player.id} player={player}/>
            )}
        </List>
    );
}