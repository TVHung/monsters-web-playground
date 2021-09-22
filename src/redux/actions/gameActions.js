import axios from "axios";

export const fetchListGames = () => async (dispatch) => {
    const res = await axios.get("https://pg.monsters.vn/api/games");
    dispatch(setListGames(res.data.data));
};

export const setListGames = (listGame) => {
    return { type: "SET_ALL_GAME", payload: listGame };
};

export const changeCateGory = (category) => {
    const gameCategory = category;
    return { type: "CHANGE_CATEGORY", payload: gameCategory };
};

export const changegameCurrent = (gameCurent) => {
    const game = gameCurent;
    return { type: "CHANGE_GAME_CURRENT", payload: game };
};
