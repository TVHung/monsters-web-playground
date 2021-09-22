import "./App.css";
import Home from "./page/Home";
import { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import PlayGame from "./page/PlayGame";
import Parent from "./page/Parent";
import ParentTab from "./page/ParentTab";
import Building from "./page/Bulding";
import Footer from "./components/Footer";
import Error from "./page/Error";
import { useDispatch, useSelector } from "react-redux";
import { setDetectMobile, loginUser } from "./redux/actions/userActions";
import { fetchListGames } from "./redux/actions/gameActions";
import store from "./redux/store";
import { detectDevice_isMobile } from "./utils/DeviceDetect";
import { getCookie } from "./utils/cookie";

const openLink = (url) => {
    const win = window.open(url, "_self");
};
const api = "https://pg.monsters.vn/api/";

export default function App() {
    const [isHome, setIsHome] = useState(true);
    const device = useSelector((state) => state.user.deviceIsMobile);
    const dispatch = useDispatch();

    const setHome = (boolean) => {
        setIsHome(boolean);
    };
    // const loginState = useSelector((state) => state.user.login);
    var loginState = Boolean(getCookie("loginState"));

    console.log("APPPPP", loginState);

    useEffect(() => {
        store.dispatch(fetchListGames());
        dispatch(setDetectMobile(detectDevice_isMobile()));
        dispatch({ type: "LOGIN", payload: loginState });
    }, []);

    return (
        <Fragment>
            <Router>
                <Navbar isHome={isHome} openLink={openLink} />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(props) => (
                            <Home {...props} setHome={setHome} />
                        )}
                    />
                    <Route
                        exact
                        path="/signin"
                        render={(props) => (
                            <Home {...props} setHome={setHome} />
                        )}
                    />
                    <Route
                        path="/games/:id"
                        render={(props) => (
                            <PlayGame {...props} setHome={setHome} />
                        )}
                    />
                    {/* <Route
                        path="/parent"
                        render={(props) => <Parent setHome={setHome} />}
                    /> */}
                    <Route
                        path="/parent"
                        render={(props) => <Building setHome={setHome} />}
                    />
                    <Route
                        path="/child"
                        render={(props) => <Building setHome={setHome} />}
                    />
                    <Route
                        path="/:someString"
                        render={(props) => <Error setHome={setHome} />}
                    />
                </Switch>
                <Footer />
                {/* {loginState && isHome ? <Footer /> : null} */}
            </Router>
        </Fragment>
    );
}
