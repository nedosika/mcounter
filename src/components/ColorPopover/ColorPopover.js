import React from "react";

import Color from "../Color/Color";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";

const colors = ["red", "green", "black", "orange"];

export default (props) => {
    const { onSelect, anchorEl } = props;

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return(
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
        <Popper
            id={id}
            open={open}
            anchorEl={anchorEl}
        >
            <Typography className={classes.typography}>
                {colors.map((color) => (
                    <Color
                        style={{backgroundColor: color, margin: 5}}
                        onClick={() => onSelect(color)}
                    />
                ))}
            </Typography>
        </Popper>
    );
}