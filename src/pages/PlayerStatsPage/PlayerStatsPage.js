import React from "react";
import {useHistory} from "react-router-dom";

import Container from "@material-ui/core/Container";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from "@material-ui/core/IconButton";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";

import Layout from "../../components/Layout/Layout";
import Counter from "../../components/Counter/Counter";
import FemaleIcon from "../../components/FemaleIcon/FemaleIcon";
import MaleIcon from "../../components/MaleIcon/MaleIcon";
import {useStateValue} from "../../store";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: theme.spacing(2),
    },
}));

export default (props) => {
    const id = Number(props.match.params.id);
    const {state: {players}, actions} = useStateValue();
    const {name, gender, level, things} = players[id];

    const classes = useStyles();
    const history = useHistory();

    const handleApprove = () => {

    }

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
        <Layout title={name} iconBtn={renderBackButton}>
            <Container className={classes.root}>
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
                    >
                        {gender === "male" ? <MaleIcon/> : <FemaleIcon/>}
                    </Fab>
                </Box>
            </Container>
        </Layout>
    );
}