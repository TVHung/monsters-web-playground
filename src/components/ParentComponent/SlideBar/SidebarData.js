import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import HistoryIcon from "@material-ui/icons/History";
import TimelineIcon from "@material-ui/icons/Timeline";
import TurnedInIcon from "@material-ui/icons/TurnedIn";

export const SidebarData = [
    {
        title: "Thông tin người dùng",
        path: "/parent/profile",
        icon: <AccountCircleIcon />,
        cName: "nav-text",
    },
    {
        title: "Thông tin trên game",
        path: "/parent/infor-game",
        icon: <SportsEsportsIcon />,
        cName: "nav-text",
    },
    {
        title: "Lịch sử chơi game",
        path: "/parent/history",
        icon: <HistoryIcon />,
        cName: "nav-text",
    },
    {
        title: "Tiến trình",
        path: "/parent/progress",
        icon: <TimelineIcon />,
        cName: "nav-text",
    },
    {
        title: "Gói đăng kí",
        path: "/parent/subscription",
        icon: <TurnedInIcon />,
        cName: "nav-text",
    },
];
