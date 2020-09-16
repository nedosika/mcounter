import React from "react";

import useStyles from "./style";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from '@material-ui/icons/Comment';

import {PlayersContext} from "../../../providers/Users/Provider";

export default () => {
    const classes = useStyles();
    const {players} = React.useContext(PlayersContext);

    return (
        <List dense className={classes.root} style={{marginTop: 10}}>
            {
                players.map((player) =>
                    <ListItem key={player.name} button>
                        <ListItemAvatar>
                            <Avatar
                                alt={player.name}
                                src={`${player.name + 1}.jpg`}
                            />
                        </ListItemAvatar>
                        <ListItemText primary={player.name}/>
                        <ListItemSecondaryAction>
                            <IconButton edge="end">
                                <CommentIcon/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                )
            }
        </List>
    );
}