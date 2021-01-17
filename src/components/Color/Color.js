import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 40,
        height: 40,
        borderRadius: "50%",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.5)",
    }
}));

export default (props) => {
    const classes = useStyles();
    return(
        <div className={classes.root} {...props}/>
    );
}