import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Slide1 } from "../Slide1";
import { Slide2 } from "../Slide2";
import { Slide3 } from "../Slide3";
import { Slide4 } from "../Slide4";
import { Slide5 } from "../Slide5";
import "../../app.css";
import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}

export const Homepage = () => {
    const theme = useTheme();
    const [operating, setOperationg] = useState("outer-wrapper");
    const [wrapper, setWrapper] = useState("wrapper");

    useEffect(() => {
        if (getMobileOperatingSystem() === "Android") {
            setOperationg("outer-wrapper-android");
            setWrapper("wrapper-android");
        }
    }, []);

    return (
        <Box className={operating}>
            <Box className={wrapper}>
                <Slide1 className="slide one" />
                <Slide2 className="slide two" />
                <Slide3 className="slide three" />
                <Slide4 className="slide four" />
                <Slide5 className="slide five" />
            </Box>
        </Box>
    );
};
