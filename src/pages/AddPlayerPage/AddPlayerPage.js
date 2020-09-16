import React from "react";
import Layout from "../../components/Layout/Layout";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useHistory} from "react-router-dom";
import CheckIcon from '@material-ui/icons/Check';
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/core/SvgIcon/SvgIcon";

export default () => {
    const [value, setValue] = React.useState('female');
    const history = useHistory();

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const renderButtons = (
        <IconButton
            edge="end"
            color="inherit"
        >
            <CheckIcon />
        </IconButton>
    );

    return (
        <Layout title="Новый манчкин" iconBtn={<ArrowBackIcon onClick={() => history.push("/")}/>} buttons={renderButtons}>
            <FormControl component="fieldset" fullWidth margin="dense">
                <Container>
                    <TextField
                        name="name"
                        label="Имя"
                        fullWidth
                        margin="dense"
                        style={{marginBottom: 20}}
                    />
                    <FormControl style={{width: "50%"}}>
                        <FormLabel component="legend">Пол</FormLabel>
                        <RadioGroup id="gender" name="gender" value={value} onChange={handleChange}>
                            <FormControlLabel value="female" control={<Radio/>} label="Муж"/>
                            <FormControlLabel value="male" control={<Radio/>} label="Жен"/>
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel component="legend">Цвет</FormLabel>
                        <Fab size="small" color="secondary" style={{marginTop: 10}}/>
                    </FormControl>
                </Container>
            </FormControl>
        </Layout>
    );
}