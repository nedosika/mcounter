import React from "react";
import Layout from "../../components/Layout/Layout";
import PlayerList from "./PlayerList/PlayerList";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import Container from "@material-ui/core/Container";

import {useHistory} from "react-router-dom";

import useStyles from "./style";

import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import CasinoIcon from '@material-ui/icons/Casino';

export default () => {
    const classes = useStyles();
    const history = useHistory();

    const renderButtons = (
        <>
            <IconButton
                edge="end"
                color="inherit"
            >
                <SettingsBackupRestoreIcon/>
            </IconButton>
            <IconButton
                edge="end"
                color="inherit"
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
        <Layout title="Манчкины" iconBtn={<MenuIcon/>} buttons={renderButtons}>
            <PlayerList/>
            <Container>
                <Fab color="primary" size="small" className={classes.fab}>
                    <AddIcon onClick={() => history.push("/add")}/>
                </Fab>
            </Container>
        </Layout>
    );
}