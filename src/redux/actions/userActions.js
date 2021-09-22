import axios from "axios";
import { setCookie } from "../../utils/cookie";

export const loginUser = (ticket, loginState) => async (dispatch) => {
    let tick = {
        ticket: ticket,
    };
    axios
        .post(`https://pg.monsters.vn/api/signin`, tick)
        .then((res) => {
            const data = res.data.data;
            console.log("data", res.data, ticket);
            if (data.access_token) {
                localStorage.setItem("access_token", data.access_token);
                localStorage.setItem("refresh_token", data.refresh_token);
            }
            dispatch({ type: "LOGIN", payload: true });
            setCookie("loginState", "true", 8);
        })
        .catch((error) => {
            console.error(error);
        });
};

export const setDetectMobile = (detect) => {
    const detectMobile = detect;
    return { type: "DETECT_MOBILE", payload: detectMobile };
};

export const fetchUser = (ticket) => async (dispatch) => {
    const res = await axios.post(`https://pg.monsters.vn/api/signin`, ticket);
    dispatch(setUser(res.data.data));
};

export const setUser = (user) => {
    return { type: "INFOR_USER", payload: user };
};
