import React from "react";

import LooksOneIcon from '@material-ui/icons/LooksOne';
import LooksTwoIcon from '@material-ui/icons/LooksTwo';
import Looks3Icon from '@material-ui/icons/Looks3';
import Looks4Icon from '@material-ui/icons/Looks4';
import Looks5Icon from '@material-ui/icons/Looks5';
import Looks6Icon from '@material-ui/icons/Looks6';
import Dialog from "@material-ui/core/Dialog";

function getDiceIcon() {
    const random = Math.floor(Math.random() * 6 + 1);

    switch (random) {
        case 1:
            return <LooksOneIcon/>
        case 2:
            return <LooksTwoIcon/>
        case 3:
            return <Looks3Icon/>
        case 4:
            return <Looks4Icon/>
        case 5:
            return <Looks5Icon/>
        case 6:
            return <Looks6Icon/>
        default:
            return null;
    }
}

export default (props) => {
    const {onClose, open} = props;

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            {
                getDiceIcon()
            }
        </Dialog>
    )
}