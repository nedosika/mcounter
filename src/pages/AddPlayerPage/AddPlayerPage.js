import React from "react";
import {useHistory} from "react-router-dom";

import Layout from "../../components/Layout/Layout";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CheckIcon from '@material-ui/icons/Check';
import IconButton from "@material-ui/core/IconButton";

import FemaleIcon from "../../components/FemaleIcon/FemaleIcon";
import MaleIcon from "../../components/MaleIcon/MaleIcon";
import {useActions, useStore} from "../../store";
import Color from "../../components/Color/Color";
import ColorPopper from "../../components/ColorPopover/ColorPopover";

const TITLE_PAGE = "Новый манчкин";

export default () => {
    const history = useHistory();
    const {players} = useStore();
    const {actions} = useActions();

    const [state, setState] = React.useState(
        {
            name: "",
            gender: "female",
            color: "#000",
            errors: {name: ""}
        }
    );

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleOpenColorPopover= (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleSelectColor = (color) => {
        setAnchorEl(null);
        setState({...state, color});
    };

    const handleCloseColorPopover = () => {
        setAnchorEl(null);
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        const errors = state.errors;

        switch (name) {
            case "name":
                errors.name = value.length < 3 ? "Name must be 3 characters long!" : "";
                break;
            default:
                break;
        }

        setState({...state, [name]: value, errors});
    };

    const handleApprove = () => {
        if (state.errors.name || state.name < 3) {
            setState({...state, errors: {name: "Name must be 3 characters long!"}});
            return;
        }

        actions.addPlayer({
            id: players.length,
            name: state.name,
            gender: state.gender,
            color: state.color,
        });

        history.push("/");
    }

    const renderButtons = (
        <IconButton
            edge="end"
            color="inherit"
            onClick={handleApprove}
        >
            <CheckIcon/>
        </IconButton>
    );

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
        <Layout
            title={TITLE_PAGE}
            iconBtn={renderBackButton}
            buttons={renderButtons}
        >
            <Container>
                <TextField
                    name="name"
                    label="Имя"
                    fullWidth
                    margin="dense"
                    style={{marginBottom: 20}}
                    value={state.name}
                    onChange={handleChange}
                    autoFocus
                    required
                    error={Boolean(state.errors.name)}
                    helperText={state.errors.name}
                />
                <FormControl style={{width: "50%"}}>
                    <FormLabel component="legend">Пол</FormLabel>
                    <RadioGroup id="gender" name="gender" value={state.gender} onChange={handleChange}>
                        <FormControlLabel value="female" control={<Radio/>} label={<FemaleIcon/>}/>
                        <FormControlLabel value="male" control={<Radio/>} label={<MaleIcon/>}/>
                    </RadioGroup>
                </FormControl>
                <FormControl>
                    <FormLabel component="legend">Цвет</FormLabel>
                    <Color
                        style={{marginTop: 10, backgroundColor: state.color}}
                        onClick={handleOpenColorPopover}
                    />
                </FormControl>
                <ColorPopper
                    anchorEl={anchorEl}
                    onSelect={handleSelectColor}
                    onClose={handleCloseColorPopover}
                />
            </Container>
        </Layout>
    );
}