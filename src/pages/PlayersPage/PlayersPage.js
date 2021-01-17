import React from "react";

import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import {useHistory} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import CasinoIcon from '@material-ui/icons/Casino';

import {useActions} from "../../store";
import Layout from "../../components/Layout/Layout";
import PlayerList from "../../components/PlayerList/PlayerList";
import DiceDialog from "../../components/DiceDialog/DiceDialog";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}))

export default () => {
    const history = useHistory();
    const classes = useStyles();
    const {actions} = useActions();
    const [openDiceDialog, setOpenDiceDialog] = React.useState(false);

    const renderButtons = (
        <>
            <IconButton
                edge="end"
                color="inherit"
                onClick={actions.resetPlayers}
            >
                <SettingsBackupRestoreIcon/>
            </IconButton>
            <IconButton
                edge="end"
                color="inherit"
                onClick={setOpenDiceDialog}
            >
                <CasinoIcon/>
            </IconButton>
            <IconButton
                edge="end"
                color="inherit"
            >
                <EditIcon/>
            </IconButton>
        </>
    );

    return (
        <Layout
            title="Манчкины"
            iconBtn={<MenuIcon/>}
            buttons={renderButtons}
        >
            <PlayerList/>
            <Fab
                color="primary"
                size="small"
                className={classes.fab}
            >
                <AddIcon onClick={() => history.push("/add")}/>
            </Fab>
            <DiceDialog open={openDiceDialog} onClose={setOpenDiceDialog}/>
        </Layout>
    );
}