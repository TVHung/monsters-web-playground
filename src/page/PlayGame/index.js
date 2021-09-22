import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import ListGameSuggest from "../../components/ListGameSuggest";
import useStyles from "./styles";
import { useParams } from "react-router-dom";
import RatingForm from "../../components/Rate/RatingForm";
import RateSummary from "../../components/Rate/RateSummary";
import {
    FacebookShareButton,
    FacebookIcon,
    EmailIcon,
    EmailShareButton,
} from "react-share";
import Iframe from "react-iframe";
import axios from "axios";
import fullScreenIcon from "../../assets/images/full-icon.png";
import { useSelector, useDispatch } from "react-redux";
import { changegameCurrent } from "../../redux/actions/gameActions";
import MetaTags from "react-meta-tags";
import { useHistory } from "react-router-dom";
import { openLink } from "../../utils/linkRedirect";
import Button from "@material-ui/core/Button";

export default function PlayGame({ setHome }) {
    const classes = useStyles();
    const [isFull, setIsFull] = useState(false);
    const [game, setGame] = useState([]);
    const [suggestGames, setSuggestGames] = useState([]);
    const history = useHistory();
    const dispatch = useDispatch();

    console.log("Trang choi game");

    const isFullScreen = () => {
        setIsFull(!isFull);
        const iframe = document.getElementById("iframeGame");

        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.webkitRequestFullscreen) {
            iframe.webkitRequestFullscreen();
        } else if (iframe.mozRequestFullscreen) {
            iframe.mozRequestFullscreen();
        } else if (iframe.msRequestFullscreen) {
            iframe.msRequestFullscreen();
        } else {
            iframe.requestFullscreen();
        }
    };

    var loginState = Boolean(useSelector((state) => state.user.login));

    var { id } = useParams();

    useEffect(() => {
        axios
            .get("https://pg.monsters.vn/api/games/" + id)
            .then((res) => {
                const data = res.data.data;
                dispatch(changegameCurrent(data.name));
                setGame(data);
            })
            .catch((error) => {
                console.error(error);
            });
        axios
            .get("https://pg.monsters.vn/api/recommend?playgame=" + id)
            .then((res) => {
                const dataSuggest = res.data.data;
                setSuggestGames(dataSuggest);
                console.log("Data suggest", dataSuggest);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    var titlePlayGame = `${useSelector(
        (state) => state.game.gameCurrent
    )}  - Monsters playground`;

    // const item = games.find((game) => game._id == id);
    const linkGame = `https://test.monsters.vn${game.url}`;

    useEffect(() => {
        setHome(false);
    }, [loginState]);

    const handleLogin = () => {
        openLink();
    };

    return (
        <div className={classes.root}>
            <MetaTags>
                <title>{titlePlayGame}</title>
                <meta
                    name="description"
                    content="Sân chơi dành cho các bạn nhỏ, vừa học vừa chơi, phát triển tư duy."
                />
                <meta property="og:title" content={titlePlayGame} />
                <meta property="og:image" content={game.thumbnail_url} />
            </MetaTags>
            <Grid container>
                <Grid item xs={12} md={9} className={classes.playGameArea}>
                    <Grid item className={classes.gameContainer}>
                        <div className={classes.iframeContainer}>
                            {loginState ? (
                                <Iframe
                                    // url={linkGame}
                                    src={linkGame}
                                    key="http://localhost:1111/"
                                    id="iframeGame"
                                    className={classes.iframe}
                                    allowfullscreen="allowfullscreen"
                                    width="100%"
                                    height="100%"
                                    scrolling="no"
                                />
                            ) : (
                                <div className={classes.nofi}>
                                    <Grid container>
                                        <Grid
                                            item
                                            xs={12}
                                            style={{
                                                width: "100%",
                                                fontWeight: "bold",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                display: "flex",
                                                margin: 10,
                                            }}
                                        >
                                            <h3>
                                                Cần login để lưu trữ tiến bộ học
                                                tập và có bài học được chọn lọc
                                                riêng cho bé
                                            </h3>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            style={{
                                                alignItems: "center",
                                                justifyContent: "center",
                                                display: "flex",
                                            }}
                                        >
                                            <Button
                                                onClick={() => handleLogin()}
                                                style={{
                                                    fontWeight: "bold",
                                                    color: "white",
                                                    background:
                                                        "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                                                }}
                                            >
                                                Đến trang login
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </div>
                            )}
                        </div>
                        {loginState ? (
                            <div>
                                <img
                                    onClick={() => isFullScreen()}
                                    alt="full"
                                    className={classes.fullBtn}
                                    src={fullScreenIcon}
                                    width="30px"
                                    height="30px"
                                />
                            </div>
                        ) : null}
                    </Grid>
                    <Grid item className={classes.gameInfor}>
                        <h2 style={{ marginTop: 0, paddingTop: 0 }}>
                            {game.name}
                        </h2>
                        <p style={{ padding: 0, margin: 0 }}>
                            {game.description}
                        </p>
                    </Grid>
                    <Grid item className={classes.social}>
                        <FacebookShareButton
                            url={"https://test.monsters.vn/"}
                            quote={"Monster - Vừa học vừa chơi"}
                            hashtag="#monster_education"
                            className={classes.socialMediaButton}
                        >
                            <FacebookIcon size={40} round={true} />
                        </FacebookShareButton>
                        <EmailShareButton
                            url={"https://test.monsters.vn/"}
                            quote={"Monster - Vừa học vừa chơi"}
                            hashtag="#monster_education"
                            className={classes.socialMediaButton}
                        >
                            <EmailIcon size={40} round={true} />
                        </EmailShareButton>
                    </Grid>
                    <Grid item className={classes.RateSummary}>
                        <RateSummary />
                    </Grid>
                    <Grid item className={classes.RatingForm}>
                        <RatingForm rating={game.rating} />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3} className={classes.otherGame}>
                    <ListGameSuggest games={suggestGames} />
                </Grid>
            </Grid>
        </div>
    );
}
