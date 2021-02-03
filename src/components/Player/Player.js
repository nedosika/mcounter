import React from "react";
import {useHistory} from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import MaleIcon from "../MaleIcon/MaleIcon";
import FemaleIcon from "../FemaleIcon/FemaleIcon";
import DeleteIcon from '@material-ui/icons/Delete';
import Badge from "@material-ui/core/Badge";
import ColorizeIcon from '@material-ui/icons/Colorize';
import {makeStyles} from "@material-ui/core/styles";
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';

const useStyles = makeStyles((theme) => ({
    root:{
        marginTop:  theme.spacing(1)
    },
    info:{
        marginRight: theme.spacing(1)
    },
    delete: {
        marginLeft: theme.spacing(1)
    }
}));

export default ({player, editMode, handleDeletePlayer}) => {
    const history = useHistory();
    const classes = useStyles();

    return(
        <ListItem
            key={player.name}
            button
            onClick={() => history.push(`/player/${player.id}`)}
        >
            <ListItemAvatar>
                <Avatar
                    alt={player.name}
                    src={`${player.name + 1}.jpg`}
                    style={{backgroundColor: player.color}}
                />
            </ListItemAvatar>
            <ListItemText
                primary={player.name}
                secondary={player.gender === "male" ? <MaleIcon/> : <FemaleIcon/>}
            />
            <Badge
                badgeContent={player.level}
                max={9}
                color="primary"
                className={classes.info}
            >
                <DirectionsWalkIcon/>
            </Badge>
            <Badge
                badgeContent={player.level + player.things}
                max={99}
                color="error"
                className={classes.info}
            >
                <ColorizeIcon/>
            </Badge>
            {editMode && <DeleteIcon className={classes.delete} onClick={handleDeletePlayer}/>}
        </ListItem>
    );
}