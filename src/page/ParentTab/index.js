import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import {
    HistoryPlay,
    InforGame,
    Profile,
    Progress,
    Subscription,
} from "../../components/ParentComponent";
import { Grid } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import HistoryIcon from "@material-ui/icons/History";
import TimelineIcon from "@material-ui/icons/Timeline";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import MetaTags from "react-meta-tags";

export default function Parent({ setHome, props }) {
    const classes = useStyles();
    const title = "Trang thông tin";
    useEffect(() => {
        setHome(false);
        document.title = title;
    }, []);

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log("new", newValue);
    };

    const games = [
        {
            name: "Đại chiến ô tô",
            description:
                "Đại chiến ô tô tri thức, điều khiển ô tô hạ gục đối phương bằng cách kết hợp các loại đạn khác nhau, có thể chơi đâu đơn độc lập hoặc theo team",
            url: "/kw",
            thumbnail_url: "https://monsters.vn/files/playground/kw.jpg",
            tags: [
                "wars",
                "tổng hợp",
                "car",
                "ô tô",
                "solo",
                "team",
                "network",
            ],
            categories: ["Tổng hợp", "Mầm non", "Tiểu học"],
            opriority: 5,
            rating: 0,
            nrater: 0,
            _id: "611f7510141790d4fe2f94ad",
        },
        {
            name: "Chạy chạy chạy",
            description:
                "Dùng cơ thể điều khiển nhân vật trong game trinh phục các màn đua và trường ngại vật",
            url: "am",
            thumbnail_url: "https://monsters.vn/files/playground/am.jpg",
            tags: ["thể dục", "cơ thể điều khiển", "body control"],
            categories: ["Tổng hợp", "Mầm non", "Tiểu học", "Vận động"],
            opriority: 5,
            rating: 0,
            nrater: 0,
            _id: "611f7510141790d4fe2f94b7",
        },
        {
            name: "Luyện chính tả",
            description:
                "Luyện chính tả với bạn bè qua cuộc thi điền âm vần chính tả thích hợp.",
            url: "/ms",
            thumbnail_url: "https://monsters.vn/files/playground/ms.jpg",
            tags: ["tiếng việt", "network"],
            categories: ["Tổng hợp", "Tiểu học"],
            opriority: 3,
            rating: 0,
            nrater: 0,
            _id: "611f7510141790d4fe2f94ae",
        },
    ];

    const packs = [
        {
            id: "1",
            title: "Gói cơ bản",
            image: "https://cn24h.net/uploads/img_nd/dinh-dang-anh-tiff-la-gi-1.jpg",
            description: "Gói cơ bản bạn có thể ABC XYZ",
        },
        {
            id: "2",
            title: "Gói vip",
            image: "https://cn24h.net/uploads/img_nd/dinh-dang-anh-tiff-la-gi-1.jpg",
            description: "Gói cơ bản bạn có thể ABC XYZ",
        },
        {
            id: "3",
            title: "Gói siêu cấp vjp pro",
            image: "https://cn24h.net/uploads/img_nd/dinh-dang-anh-tiff-la-gi-1.jpg",
            description: "Gói cơ bản bạn có thể ABC XYZ",
        },
    ];

    console.log("Trang cha me");

    return (
        <Container>
            <MetaTags>
                <title>Trang cha mẹ</title>
                <meta
                    name="description"
                    content="Theo dõi thông tin học, chơi của bé."
                />
                <meta property="og:title" content="Trang cha mẹ" />
                <meta
                    property="og:image"
                    content="../../assets/images/logo1.png"
                />
            </MetaTags>
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} md={3} className={classes.tabContainer}>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            className={classes.tabs}
                            TabIndicatorProps={{
                                style: {
                                    background: "black",
                                    width: "100%",
                                    zIndex: 1,
                                    opacity: 0.1,
                                    borderTopLeftRadius: 5,
                                    borderBottomLeftRadius: 5,
                                },
                            }}
                        >
                            <Tab
                                label={
                                    <div style={{ alignItems: "baseline" }}>
                                        <AccountCircleIcon
                                            className={classes.itemTab}
                                        />
                                        {"Thông tin người dùng"}
                                    </div>
                                }
                                {...a11yProps(0)}
                                className={classes.tab}
                            />
                            <Tab
                                label={
                                    <div>
                                        <SportsEsportsIcon
                                            className={classes.itemTab}
                                        />
                                        {"Thông tin trên game"}
                                    </div>
                                }
                                {...a11yProps(1)}
                                className={classes.tab}
                            />
                            <Tab
                                label={
                                    <div>
                                        <HistoryIcon
                                            className={classes.itemTab}
                                        />
                                        {"Lịch sử chơi"}
                                    </div>
                                }
                                {...a11yProps(2)}
                                className={classes.tab}
                            />
                            <Tab
                                label={
                                    <div>
                                        <TimelineIcon
                                            className={classes.itemTab}
                                        />
                                        {"Tiến độ"}
                                    </div>
                                }
                                {...a11yProps(3)}
                                className={classes.tab}
                            />
                            <Tab
                                label={
                                    <div>
                                        <TurnedInIcon
                                            className={classes.itemTab}
                                        />
                                        {"Gói đăng kí"}
                                    </div>
                                }
                                {...a11yProps(4)}
                                className={classes.tab}
                            />
                        </Tabs>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <TabPanel
                            value={value}
                            index={0}
                            className={classes.tabPanel}
                        >
                            <Profile />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <InforGame />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <HistoryPlay games={games} />
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <Progress />
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <Subscription packs={packs} />
                        </TabPanel>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}
