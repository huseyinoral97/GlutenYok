import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import index3glutenfree from "../images/index3glutenfree.png";
import index3biscuit from "../images/index3biscuit.png";
import index3women from "../images/index3women.png";
import index3donut1 from "../images/index3donut1.png";
import index3donut2 from "../images/index3donut2.png";
import "./iletisim.css";
import "./layout/header.css";
export const Slide3 = () => {
    const theme = useTheme();

    return (
        <Box className="slide three" sx={{ position: "relative" }}>
            <Box
                sx={{
                    position: "absolute",
                    [theme.breakpoints.up("lg")]: {
                        width: "55%",
                        bottom: "10%",
                        left: "15%",
                    },
                    [theme.breakpoints.up("md")]: {
                        width: "55%",
                        bottom: "10%",
                        left: "15%",
                    },
                    [theme.breakpoints.up("sm")]: {
                        width: "74%",
                        bottom: "19%",
                        left: "2%",
                    },
                    [theme.breakpoints.up("xs")]: {
                        width: "80%",
                        bottom: "40%",
                        right: "3%",
                    },
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            [theme.breakpoints.up("lg")]: {
                                fontSize: "25px",
                            },
                            [theme.breakpoints.up("md")]: {
                                fontSize: "25px",
                            },
                            [theme.breakpoints.up("sm")]: {
                                fontSize: "25px",
                            },
                            [theme.breakpoints.up("xs")]: {},
                        }}
                    >
                        Sinangil ile hayat Glutensiz de g??zel...
                    </Typography>
                </Box>
                <Box sx={{ marginTop: "20px" }}>
                    <Typography
                        sx={{
                            [theme.breakpoints.up("lg")]: {
                                fontSize: "16px",
                            },
                            [theme.breakpoints.up("md")]: {
                                fontSize: "17px",
                            },
                            [theme.breakpoints.up("sm")]: {
                                fontSize: "17px",
                            },
                            [theme.breakpoints.up("xs")]: {
                                fontSize: "13px",
                                fontWeight: "500",
                            },
                        }}
                    >
                        Sinangil???in glutensiz ya??ama de??er katacak, lezzetli ve
                        sa??l??kl?? ??r??n ailesi Gluten YOK raflardaki yerini ald??!
                        Sinangil???in glutensiz hikayesi ise daha eski.
                    </Typography>
                </Box>
                <Box sx={{ marginTop: "20px" }}>
                    <Typography
                        sx={{
                            [theme.breakpoints.up("lg")]: {
                                fontSize: "16px",
                            },
                            [theme.breakpoints.up("md")]: {
                                fontSize: "17px",
                            },
                            [theme.breakpoints.up("sm")]: {
                                fontSize: "17px",
                            },
                            [theme.breakpoints.up("xs")]: {
                                fontSize: "13px",
                                fontWeight: "500",
                            },
                        }}
                    >
                        Y??l 2006??? ????lyakla Ya??am dernekleriyle i?? birli??ine
                        gidererek glutensiz ya??ama destek olmak amac??yla
                        glutensiz un ??retmeye ba??lad??k. T??rkiye???de bu alanda
                        ilklerden biri olduk.
                    </Typography>
                </Box>
                <Box sx={{ marginTop: "20px" }}>
                    <Typography
                        sx={{
                            [theme.breakpoints.up("lg")]: {
                                fontSize: "16px",
                            },
                            [theme.breakpoints.up("md")]: {
                                fontSize: "17px",
                            },
                            [theme.breakpoints.up("sm")]: {
                                fontSize: "17px",
                            },
                            [theme.breakpoints.up("xs")]: {
                                fontSize: "13px",
                                fontWeight: "500",
                            },
                        }}
                    >
                        ??zenle ??retti??imiz Glutensiz Unlar ??ok sevildi,
                        g??venilirli??i, kalitesi ve hesapl?? fiyat??yla k??sa
                        zamanda kalpleri kazand??. Sinangil olarak glutensiz
                        unlar??m??z ile y??llard??r birbirinden lezzetli ve sa??l??kl??
                        sofralar??n kurulmas??na ??nc??l??k ediyoruz.
                    </Typography>
                </Box>
                <Box sx={{ marginTop: "20px" }}>
                    <Typography
                        sx={{
                            [theme.breakpoints.up("lg")]: {
                                fontSize: "16px",
                            },
                            [theme.breakpoints.up("md")]: {
                                fontSize: "17px",
                            },
                            [theme.breakpoints.up("sm")]: {
                                fontSize: "17px",
                            },
                            [theme.breakpoints.up("xs")]: {
                                fontSize: "13px",
                                fontWeight: "500",
                            },
                        }}
                    >
                        Y??l 2022??? Glutensiz unlar??m??z??n yan??na art??k yepyeni
                        glutensiz ??r??nlerimizi eklemenin zaman?? gelmi??ti. Art??k
                        Sinangil var, Gluten YOK!
                    </Typography>
                </Box>
            </Box>

            <Box
                className="glutenfree"
                component="img"
                src={index3glutenfree}
                sx={{
                    zIndex: "1",
                    position: "absolute",
                    [theme.breakpoints.up("lg")]: {
                        width: "10%",
                        top: "5%",
                        left: "22%",
                    },
                    [theme.breakpoints.up("md")]: {
                        width: "15%",
                        top: "16%",
                        left: "15%",
                    },
                    [theme.breakpoints.up("sm")]: {
                        width: "15%",
                        top: "3%",
                        left: "35%",
                    },
                    [theme.breakpoints.up("xs")]: {
                        width: "25%",
                        bottom: "20%",
                        left: "20%",
                    },
                }}
            />

            <Box
                className="rotate"
                component="img"
                src={index3biscuit}
                sx={{
                    zIndex: "1",
                    position: "absolute",
                    [theme.breakpoints.up("lg")]: {
                        width: "13%",
                        bottom: "0",
                        right: "20%",
                    },
                    [theme.breakpoints.up("md")]: {
                        width: "15%",
                        bottom: "0",
                        right: "20%",
                    },
                    [theme.breakpoints.up("sm")]: {
                        width: "15%",
                        bottom: "0",
                        right: "20%",
                    },
                    [theme.breakpoints.up("xs")]: {
                        width: "25%",
                        bottom: "0",
                        right: "32%",
                    },
                }}
            />

            <Box
                component="img"
                src={index3women}
                sx={{
                    zIndex: "1",
                    position: "absolute",
                    [theme.breakpoints.up("lg")]: {
                        width: "31%",
                        bottom: "0%",
                        right: "-8%",
                    },
                    [theme.breakpoints.up("md")]: {
                        width: "35%",
                        bottom: "0%",
                        right: "-10%",
                    },
                    [theme.breakpoints.up("sm")]: {
                        width: "35%",
                        bottom: "0%",
                        right: "-10%",
                    },
                    [theme.breakpoints.up("xs")]: {
                        width: "50%",
                        bottom: "0%",
                        right: "-10%",
                    },
                }}
            />

            <Box
                className="rotate"
                component="img"
                src={index3donut1}
                sx={{
                    zIndex: "1",
                    position: "absolute",
                    [theme.breakpoints.up("lg")]: {
                        width: "10%",
                        top: "0%",
                        right: "-2%",
                    },
                    [theme.breakpoints.up("md")]: {
                        width: "15%",
                        top: "0%",
                        right: "-6%",
                    },
                    [theme.breakpoints.up("sm")]: {
                        width: "15%",
                        top: "0%",
                        right: "-6%",
                    },
                    [theme.breakpoints.up("xs")]: {
                        width: "25%",
                        top: "0%",
                        right: "-10%",
                    },
                }}
            />

            <Box
                className="rotate"
                component="img"
                src={index3donut2}
                sx={{
                    zIndex: "1",
                    position: "absolute",
                    [theme.breakpoints.up("lg")]: {
                        width: "10%",
                        bottom: "26%",
                        right: "-2%",
                    },
                    [theme.breakpoints.up("md")]: {
                        width: "10%",
                        bottom: "19%",
                        right: "-4%",
                    },
                    [theme.breakpoints.up("sm")]: {
                        width: "10%",
                        bottom: "14%",
                        right: "-4%",
                    },
                    [theme.breakpoints.up("xs")]: {
                        width: "15%",
                        bottom: "12%",
                        right: "-3%",
                    },
                }}
            />
        </Box>
    );
};
