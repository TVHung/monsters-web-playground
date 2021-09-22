import React, { useEffect } from "react";
import useStyles from "./styles";
import {
    HistoryPlay,
    InforGame,
    Profile,
    Progress,
    Subscription,
    SlideBar,
} from "../../components/ParentComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import MetaTags from "react-meta-tags";

export default function Parent({ setHome }) {
    const classes = useStyles();
    const title = "Trang thông tin";
    useEffect(() => {
        setHome(false);
        document.title = title;
    }, []);

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
            title: "Gói vjp pro",
            image: "https://cn24h.net/uploads/img_nd/dinh-dang-anh-tiff-la-gi-1.jpg",
            description: "Gói cơ bản bạn có thể ABC XYZ",
        },
    ];

    return (
        <Container className={classes.container}>
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
            <Router>
                <SlideBar />
                <Switch>
                    <Route path="/parent/profile" exact component={Profile} />
                    <Route path="/parent/infor-game" component={InforGame} />
                    <Route
                        path="/parent/history"
                        render={(props) => <HistoryPlay games={games} />}
                    />
                    <Route path="/parent/progress" component={Progress} />
                    <Route
                        path="/parent/subscription"
                        render={(props) => <Subscription packs={packs} />}
                    />
                </Switch>
            </Router>
        </Container>
    );
}
