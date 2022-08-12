import React from "react";
import index1text from "../images/yazi.png";
import card1index1 from "../images/card1-index1.png";
import card2index1 from "../images/card2-index1.png";
import card3index1 from "../images/card3-index1.png";
import card4index1 from "../images/card4-index1.png";
import card5index1 from "../images/card5-index1.png";
import yoklogoindex1 from "../images/yok_logo.png";
import index1ambalaj from "../images/index1ambalaj.png";
import index1ambalaj2 from "../images/index1ambalaj2.png";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Header } from "./layout/Header";
import Tilt from "react-parallax-tilt";
import "aos/dist/aos.css";
import "../app.css"
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Fab from '@mui/material/Fab';

export const Slide1 = () => {
    const theme = useTheme();

    return (
        <Box className="slide one" sx={{ position: "relative" }}>
            <Header />
            <Box className="zoom" sx={{
                position: "absolute",

                [theme.breakpoints.up("lg")]: {
                    bottom: "15%",
                    right: "5%",
                },
                [theme.breakpoints.up("md")]: {
                    bottom: "15%",
                    right: "5%",
                },
                [theme.breakpoints.up("sm")]: {
                    bottom: "15%",
                    right: "5%",
                },
                [theme.breakpoints.up("xs")]: {
                    bottom: "8%",
                    right: "1%",
                },
            }}>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>

                    <Fab variant="extended">
                        <DoubleArrowIcon sx={{ mr: 1 }} />
                        Sağa Kaydır..
                    </Fab>
                </Box>
            </Box>
            <Box
                component="img"
                src={index1text}
                sx={{
                    position: "absolute",
                    [theme.breakpoints.up("lg")]: {
                        top: "24%",
                        left: "3%",
                        width: "38%",
                    },
                    [theme.breakpoints.up("md")]: {
                        top: "26%",
                        left: "3%",
                        width: "48%",
                    },
                    [theme.breakpoints.up("sm")]: {
                        width: "70%",
                        top: "30%",
                        left: "3%",
                    },
                    [theme.breakpoints.up("xs")]: {
                        width: "85%",
                        top: "25%",
                        left: "3%",
                    },
                }}
            />
            <Tilt className="parallax-card1" style={{ position: "absolute" }}>
                <Link to="neden-yok">
                    <Box
                        component="img"
                        src={card1index1}
                        sx={{
                            width: "100%",
                        }}
                    />
                </Link>
            </Tilt>
            <Tilt className="parallax-card2" style={{ position: "absolute" }}>
                <Link to="urunlerimiz">
                    <Box
                        component="img"
                        src={card2index1}
                        sx={{
                            zIndex: "1",
                            width: "100%",
                        }}
                    />
                </Link>
            </Tilt>
            <Tilt className="parallax-card3" style={{ position: "absolute" }}>
                <Link to="satis-noktalarimiz">
                    <Box
                        component="img"
                        src={card3index1}
                        sx={{
                            width: "100%",
                        }}
                    />
                </Link>
            </Tilt>
            <Tilt className="parallax-card4" style={{ position: "absolute" }}>
                <Link to="reklam-filmlerimiz">
                    <Box
                        component="img"
                        src={card4index1}
                        sx={{
                            width: "100%",
                        }}
                    />
                </Link>
            </Tilt>
            <Tilt className="parallax-card5" style={{ position: "absolute" }}>
                <Link to="kampanyalar">
                    <Box
                        component="img"
                        src={card5index1}
                        sx={{
                            width: "100%",
                        }}
                    />
                </Link>
            </Tilt>
            <Box
                component="img"
                src={yoklogoindex1}
                sx={{
                    position: "absolute",
                    [theme.breakpoints.up("lg")]: {
                        right: "5%",
                        top: "45%",
                        display: "block",
                        width: "10%",
                    },
                    [theme.breakpoints.up("md")]: {
                        right: "-5%",
                        top: "45%",
                        display: "block",
                        width: "10%",
                    },
                    [theme.breakpoints.up("sm")]: {
                        display: "none",
                    },
                    [theme.breakpoints.up("xs")]: {
                        display: "none",
                    },
                }}
            />
            <Box
                component="img"
                src={index1ambalaj}
                sx={{
                    position: "absolute",
                    [theme.breakpoints.up("lg")]: {
                        right: "-6%",
                        top: "1%",
                        display: "block",
                        width: "12%",
                    },
                    [theme.breakpoints.up("md")]: {
                        right: "-10%",
                        top: "1%",
                        display: "block",
                        width: "17%",
                    },
                    [theme.breakpoints.up("sm")]: {
                        display: "none",
                    },
                    [theme.breakpoints.up("xs")]: {
                        display: "none",
                    },
                }}
            />
            <Box
                component="img"
                src={index1ambalaj2}
                sx={{
                    position: "absolute",
                    zIndex: "1",
                    [theme.breakpoints.up("lg")]: {
                        right: "-20%",
                        bottom: "0%",
                        display: "block",
                        width: "25%",
                    },
                    [theme.breakpoints.up("md")]: {
                        right: "-20%",
                        bottom: "0%",
                        display: "block",
                        width: "25%",
                    },
                    [theme.breakpoints.up("sm")]: {
                        display: "none",
                    },
                    [theme.breakpoints.up("xs")]: {
                        display: "none",
                    },
                }}
            />
        </Box>
    );
};
