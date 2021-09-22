import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import ListGame from "../../components/ListGame";
import { useSelector, useDispatch } from "react-redux";
import { fetchListGames, setListGames } from "../../redux/actions/gameActions";
import axios from "axios";
import MetaTags from "react-meta-tags";

export default function Home({ setHome }) {
    const classes = useStyles();
    const [games, setGames] = useState([]);
    const [gamesFillter, setGamesFillter] = useState([]);
    const title = "Playground Monsters";
    const dispatch = useDispatch();

    const category = useSelector((state) => state.game.gameCategory);

    useEffect(() => {
        axios
            .get("https://pg.monsters.vn/api/games")
            .then((res) => {
                const data = res.data.data;
                setGames(data);
                setGamesFillter(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        // const newArray = games.filter(function (game) {
        //     return (
        //         game.categories[0] == category ||
        //         game.categories[1] == category ||
        //         game.categories[2] == category ||
        //         game.categories[3] == category
        //     );
        // });
        // setGamesFillter(newArray);
        axios
            .get("https://pg.monsters.vn/api/games?category=" + category)
            .then((res) => {
                const data = res.data.data;
                setGamesFillter(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [category]);

    useEffect(() => {
        setHome(true);
        dispatch(setListGames(games));
    }, []);

    console.log("Trang home");

    return (
        <div className={classes.root}>
            <MetaTags>
                <title>{title}</title>
                <meta
                    name="description"
                    content="Sân chơi dành cho các bạn nhỏ, vừa học vừa chơi, phát triển tư duy."
                />
                <meta property="og:title" content={title} />
                <meta
                    property="og:image"
                    content="../../assets/images/logo1.png"
                />
            </MetaTags>
            <Grid container className={classes.container}>
                <Grid item className={classes.left} sm={2}></Grid>
                <Grid item className={classes.listgame} xs={12} sm={8}>
                    <ListGame games={gamesFillter} />
                </Grid>
                <Grid item className={classes.right} sm={2}></Grid>
            </Grid>
        </div>
    );
}
