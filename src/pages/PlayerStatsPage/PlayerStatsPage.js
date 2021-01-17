import React from "react";
import {useHistory} from "react-router-dom";
import SwipeableViews from 'react-swipeable-views';

import Container from "@material-ui/core/Container";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from "@material-ui/core/IconButton";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';

import Layout from "../../components/Layout/Layout";
import Counter from "../../components/Counter";
import FemaleIcon from "../../components/FemaleIcon/FemaleIcon";
import MaleIcon from "../../components/MaleIcon/MaleIcon";
import {useActions, useStore} from "../../store";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "space-around",
        marginTop: theme.spacing(2),
    },
    genderBtn:{
        margin: theme.spacing(1)
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    }
}));

export default (props) => {
    const history = useHistory();
    const classes = useStyles();
    const {players} = useStore();
    const {actions} = useActions();
    const id = Number(props.match.params.id);

    const renderBackButton = (
        <IconButton
            edge="start"
            color="inherit"
            onClick={() => history.push("/")}
        >
            <ArrowBackIcon/>
        </IconButton>
    )

    return (
        <Layout title={players[id].name} iconBtn={renderBackButton}>
            <SwipeableViews
                onChangeIndex={index => history.push(`/player/${index}`)}
                index={id}
                enableMouseEvents
                resistance
            >
                {players.map(({gender, level, things}) =>
                    <Container className={classes.container}>
                        <Counter
                            title="Уровень"
                            value={level}
                            onDecrement={actions.decrementField(id, "level")}
                            onIncrement={actions.incrementField(id, "level")}
                        />
                        <Counter
                            title="Шмотки"
                            value={things}
                            onDecrement={actions.decrementField(id, "things")}
                            onIncrement={actions.incrementField(id, "things")}
                        />
                        <Box style={{textAlign: "center"}}>
                            <Typography variant="h4" component="h2" gutterBottom>
                                Сила
                            </Typography>
                            <Typography variant="h4" component="h2" gutterBottom align="center">
                                {things + level}
                            </Typography>
                            <Fab
                                color="primary"
                                size="small"
                                onClick={actions.toggleGender(id)}
                                className={classes.genderBtn}
                            >
                                {gender === "male" ? <MaleIcon/> : <FemaleIcon/>}
                            </Fab>
                        </Box>
                    </Container>
                )}
            </SwipeableViews>

            <Fab color="primary" size="small" className={classes.fab}>
                <SportsKabaddiIcon/>
            </Fab>
        </Layout>
    );
}