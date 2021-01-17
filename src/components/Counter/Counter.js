import React from "react";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    counterBtn: {
        margin: theme.spacing(1)
    }
}));

export default ({title, value, onIncrement, onDecrement}) => {
    const classes = useStyles();

    return(
        <Box>
            <Typography variant="h4" component="h2" gutterBottom>
                {title}
            </Typography>
            <Typography variant="h4" component="h2" gutterBottom align="center">
                {value}
            </Typography>
            <Typography component="div" align="center">
                <Fab
                    color="primary"
                    size="small"
                    onClick={onDecrement}
                    className={classes.counterBtn}
                >
                    <ExpandMoreIcon/>
                </Fab>
                <Fab
                    color="primary"
                    size="small"
                    onClick={onIncrement}
                    className={classes.counterBtn}
                >
                    <ExpandLessIcon/>
                </Fab>
            </Typography>
        </Box>
    );
}