const initialState = {
    login: false,
    deviceIsMobile: false,
    user: {},
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                login: action.payload,
            };
        case "DETECT_MOBILE":
            return {
                ...state,
                deviceIsMobile: action.payload,
            };
        case "INFOR_USER":
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
