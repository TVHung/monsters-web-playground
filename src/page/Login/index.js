import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import Container from "@material-ui/core/Container";
import axios from "axios";

export default function Signin({ setAuth }) {
    const classes = useStyles();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [validate, setvalidate] = useState({
        //trang thai show hide thong bao
        email: false,
        password: false,
    });
    const [messValidate, setmessValidate] = useState({
        //text hien thi
        messEmail: "",
        messPassword: "",
    });

    const handleOnChange = (e) => {
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        console.log(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(checkNull(user.email, user.password));

        if (checkNull(user.email, user.password) == true) {
            if (!validateEmail(user.email) && user.email !== "") {
                //sai dinh dang email
                setvalidate((prevState) => ({
                    ...prevState,
                    email: true,
                }));
                setmessValidate((prevState) => ({
                    ...prevState,
                    messEmail: "*Email của bạn không đúng định dạng!",
                }));
            } else {
                setvalidate(false);
                axios
                    .post("https://mshooter.monsters.vn/rest/loginsignup", user)
                    .then((res) => {
                        const token = {
                            email: user.email,
                            password: user.password,
                        };
                        console.log(token);
                        localStorage.setItem("token", token);
                        setAuth(true);
                    })
                    .catch((error) => {
                        setAuth(false);
                        console.error(error);
                    });
            }
        } else {
            setAuth(false);
        }
    };

    const validateEmail = (email) => {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase()) && email.length > 0;
    };

    const checkNull = (email, password) => {
        let status = true;
        if (email == "") {
            setvalidate((prevState) => ({
                ...prevState,
                email: true,
            }));
            setmessValidate((prevState) => ({
                ...prevState,
                messEmail: "*Email kông được để trống!",
            }));
            status = false;
        }

        if (password == "") {
            setvalidate((prevState) => ({
                ...prevState,
                password: true,
            }));
            setmessValidate((prevState) => ({
                ...prevState,
                messPassword: "*Password kông được để trống!",
            }));
            status = false;
        }

        return status;
    };

    useEffect(() => {
        document.title = "Đăng nhập";
    }, []);

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Đăng nhập
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e) => handleOnChange(e)}
                    />
                    {validate.email ? (
                        <p id="validateEmail" className={classes.nofi}>
                            {messValidate.messEmail}
                        </p>
                    ) : null}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => handleOnChange(e)}
                    />
                    {validate.password ? (
                        <p id="validateEmail" className={classes.nofi}>
                            {messValidate.messPassword}
                        </p>
                    ) : null}
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={(e) => handleSubmit(e)}
                    >
                        Login
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to="/nothing" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Facebook
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                            >
                                Google
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
