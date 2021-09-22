import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import useStyles from "./styles";
import Slide from "@material-ui/core/Slide";
import imgTest from "../../../assets/images/imgTest.png";
import PlayGame from "../../../page/PlayGame";
import { Link, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Post({ game }) {
    const classes = useStyles();
    const [linkId, setLinkId] = useState("");
    let history = useHistory();
    const onLikeBtnClick = React.useCallback(() => {}, []);

    //menulist
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleIconClicks = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleReport = () => {
        handleClose();
    };

    const menu = (
        <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
        >
            <MenuItem onClick={handleReport}>Báo cáo game</MenuItem>
        </Menu>
    );
    console.log("reload");
    const dispatch = useDispatch();
    const getId = () => {
        dispatch({ type: "SET_LINK_BACK", payload: linkId });
    };
    useEffect(() => {
        setLinkId("/games/" + game._id);
    }, [linkId]);

    return (
        <Link to={linkId} style={{ textDecoration: "none" }}>
            <Card className={classes.card} onClick={() => getId()}>
                <CardMedia
                    image={game.thumbnail_url || imgTest}
                    className={classes.media}
                    title="Title"
                />
                <CardContent className={classes.CardContent}>
                    <Typography
                        variant="body2"
                        component="p"
                        noWrap
                        className={classes.content}
                    >
                        <b>{game.name}</b>
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
}
