import { makeStyles } from "@material-ui/core/styles";
import bg_pc from "../../assets/images/footerbg_pc.png";
import bg_mb from "../../assets/images/footerbg_mobile.png";
import { detectDevice_isMobile } from "../../utils/DeviceDetect";
const device = detectDevice_isMobile();

export default makeStyles((theme) => ({
    container: {
        padding: 0,
        margin: 0,
        width: "100%",
        height: device == false ? 160 : 80,
    },

    line: {
        width: "100%",
        backgroundImage: device == false ? `url(${bg_pc})` : `url(${bg_mb})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    },
}));
