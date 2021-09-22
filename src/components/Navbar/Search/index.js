import React, { useState, useRef, useEffect } from "react";
import useStyles from "./styles";
import SearchIcon from "@material-ui/icons/Search";

export const useMountEffect = (fun) => useEffect(fun, []);
// Gneral Focus Hook
const UseFocus = () => {
    const htmlElRef = useRef(null);
    const setFocus = () => {
        htmlElRef.current && htmlElRef.current.focus();
    };
    return [htmlElRef, setFocus];
};

//kiem tra cham ra ngoai box search
const useOutsideAlerter = (ref, setShow) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                console.log("You clicked outside of me!");
                setShow(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
};

const isFocus = (ref, setShow) => {
    if (document.activeElement === ref.current) {
        setShow(true);
    } else {
        setShow(false);
    }
};

export default function Search({ showSearch, setShow, isHome }) {
    const classes = useStyles();
    const [inputVal, setInputVal] = useState("");
    const [inputRef, setInputFocus] = UseFocus();
    const formRef = useRef(null);

    // useMountEffect(setInputFocus);
    useOutsideAlerter(formRef, setShow);
    // isFocus(inputRef, setShow);

    useEffect(() => {
        if (showSearch) setInputFocus();
        console.log("Thay doi");
    }, [showSearch, inputRef]);

    return (
        <div className={classes.container}>
            <div className={classes.boxSearch} ref={formRef}>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Tìm kiếm trên Monsters"
                    name="search"
                    className={classes.input}
                    value={inputVal}
                    onChange={(e) => {
                        const val = e.target.value;
                        setInputVal(val);
                    }}
                    ref={inputRef}
                    onFocus={() => isFocus(inputRef, setShow)}
                />
                <button
                    type="submit"
                    className={classes.button}
                    style={{
                        background: !isHome
                            ? "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
                            : "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                    }}
                >
                    <SearchIcon className={classes.iconSearch} />
                </button>
            </div>
        </div>
    );
}
