import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from "@material-ui/core/CssBaseline";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: "100%"
    },
    title: {
        marginLeft: theme.spacing(2),
        flexGrow: 1,
    },
}));


export default ({title, iconBtn, buttons, children}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    {iconBtn}
                    <Typography variant="h6" className={classes.title}>
                        {title}
                    </Typography>
                    {buttons}
                </Toolbar>
            </AppBar>
            <main>
                {children}
            </main>
        </div>
    );
}