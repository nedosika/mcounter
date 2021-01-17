import React from "react";

import Color from "../Color/Color";
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";

const colors = ["red", "green", "black", "orange", "yellow", "grey"];

export default (props) => {
    const { onSelect, anchorEl, onClose } = props;

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return(
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            <Typography>
                {colors.map((color) => (
                    <Color
                        style={{backgroundColor: color, margin: 5}}
                        onClick={() => onSelect(color)}
                    />
                ))}
            </Typography>
        </Popover>
    );
}