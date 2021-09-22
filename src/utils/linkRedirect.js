export const openLink = () => {
    // const linkLogin =
    //     "https://accounts.monsters.vn/signin?continue=https://test.monsters.vn";
    const linkLogin =
        "http://localhost:3000/signin?continue=http://localhost:1111";

    const win = window.open(linkLogin, "_self");
};
