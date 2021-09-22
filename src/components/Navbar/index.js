import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import Search from "./Search";
import Category from "./Category";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import family from "../../assets/images/family.png";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";
import { getCookie } from "../../utils/cookie";
import { openLink } from "../../utils/linkRedirect";
import avt_common from "../../assets/images/avt_common.jpg";
import signinIcon from "../../assets/images/signin.png";

const getParam = (param) => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var para = url.searchParams.get(param);
    return para;
};

export default function Navbar({ isHome }) {
    const classes = useStyles();
    const [showSearch, setshowSearch] = useState(false);
    const setShow = (boolean) => {
        setshowSearch(boolean);
    };

    const dispatch = useDispatch();
    let history = useHistory();

    const onClickShowSearch = () => {
        setshowSearch(true);
    };

    const styleSearch = {
        zIndex: showSearch ? 3 : 1,
    };

    const login = (e) => {
        e.preventDefault();
        openLink();
    };

    const goToParent = (e) => {
        e.preventDefault();
    };

    var loginState = useSelector((state) => state.user.login);
    const linkBack = getCookie("linkBack");

    const checkLogin = () => {
        if (getCookie("loginState") == "true") {
            dispatch({ type: "LOGIN", payload: getCookie("loginState") });
            loginState = Boolean(getCookie("loginState"));
        }
        if (getParam("ticket") && !loginState) {
            dispatch(loginUser(getParam("ticket"), loginState));
            history.push("" + linkBack);
        }
    };

    useEffect(() => {
        checkLogin();
    }, [loginState]);

    const [isScroll, setIsScroll] = useState({
        onTop: false,
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.onscroll = () => {
                let currentScrollPos = window.pageYOffset;
                if (currentScrollPos > 0) {
                    setIsScroll({ onTop: true });
                } else {
                    setIsScroll({ onTop: false });
                }
            };
        }
    }, [isScroll, isHome]);

    return (
        <>
            <Grid
                item
                className={classes.avatar}
                xs={2}
                style={{
                    position: !isHome ? "sticky" : null,
                    top: !isHome ? 0 : null,
                }}
            >
                <Grid container className={classes.backAvatar}>
                    <Grid item>
                        <Link to="/parent/profile">
                            <img
                                src={avt_common}
                                alt="avatar"
                                className={classes.avatarProfile}
                                // onClick={() => onClickAvatar()}
                            />
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.search} xs={8} style={styleSearch}>
                <Grid container direction="row">
                    <Grid item xs={12}>
                        <Search
                            showSearch={showSearch}
                            setShow={setShow}
                            isHome={isHome}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                className={classes.lock}
                xs={2}
                style={{
                    position: !isHome ? "sticky" : null,
                    top: !isHome ? 0 : null,
                }}
            >
                <Grid container className={classes.backAvatar}>
                    {isScroll.onTop || !isHome ? (
                        <Grid
                            item
                            xs={12}
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                            }}
                        >
                            {!showSearch ? (
                                <button
                                    type="submit"
                                    className={classes.buttonSearch}
                                    onClick={() => onClickShowSearch()}
                                    style={{
                                        background: !isHome
                                            ? "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
                                            : "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                                    }}
                                >
                                    <SearchIcon
                                        className={classes.iconSearch}
                                    />
                                </button>
                            ) : null}
                        </Grid>
                    ) : (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                            }}
                        >
                            {loginState ? (
                                <Link to="/parent/profile">
                                    <img
                                        src={family}
                                        alt="parent"
                                        className={classes.lockIcon}
                                    />
                                </Link>
                            ) : (
                                <img
                                    src={signinIcon}
                                    alt="signin"
                                    className={classes.lockIcon}
                                    onClick={(e) => login(e)}
                                />
                            )}
                        </Grid>
                    )}
                </Grid>
            </Grid>
            {true ? <Category isScroll={isScroll} isHome={isHome} /> : null}
        </>
    );
}
