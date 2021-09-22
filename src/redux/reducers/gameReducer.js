const initialState = {
    gameCategory: "Tổng hợp",
    listGame: [],
    gameCurrent: "",
    linkBack: "",
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_GAME":
            return {
                ...state,
                listGame: action.payload,
            };
        case "SET_ALL_GAME":
            return {
                ...state,
                listGame: action.payload,
            };
        case "CHANGE_CATEGORY":
            return {
                ...state,
                gameCategory: action.payload,
            };
        case "CHANGE_GAME_CURRENT":
            return {
                ...state,
                gameCurrent: action.payload,
            };
        case "SET_LINK_BACK":
            return {
                ...state,
                linkBack: action.payload,
            };
        default:
            return state;
    }
};

export default gameReducer;
