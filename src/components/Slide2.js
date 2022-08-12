import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import tv1 from "../images/index2tv1.png";
import tv2 from "../images/index2tv2.png";
import tv3 from "../images/index2tv3.png";
import card from "../images/index2card.jpg";
import index2ambalaj from "../images/index2ambalaj.png";
import index2ambalajdonut from "../images/index2ambalajdonut.png";
import index2donut from "../images/index2donut.png";
import "./layout/header.css";
import Link from "@mui/material/Link";

export const Slide2 = () => {
    const theme = useTheme();

    return (
        <Box className="slide two" sx={{ position: "relative" }}>
            <Box
                sx={{
                    position: "absolute",
                    [theme.breakpoints.up("lg")]: {
                        width: "35%",
                        bottom: "18%",
                        left: "4%",
                    },
                    [theme.breakpoints.up("md")]: {
                        width: "44%",
                        bottom: "15%",
                        left: "8%",
                    },
                    [theme.breakpoints.up("sm")]: {
                        width: "40%",
                        bottom: "15%",
                        left: "8%",
                    },
                    [theme.breakpoints.up("xs")]: {
                        width: "78%",
                        bottom: "18%",
                        left: "8%",
                    },
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            fontWeight: "bolder",
                            [theme.breakpoints.up("lg")]: {
                                fontSize: "40px",
                            },
                            [theme.breakpoints.up("md")]: {
                                fontSize: "35px",
                            },
                            [theme.breakpoints.up("sm")]: {
                                fontSize: "30px",
                            },
                            [theme.breakpoints.up("xs")]: {
                                fontSize: "25px",
                            },
                        }}
                        variant="h3"
                    >
                        Şaşırmayın;
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "bolder",
                            [theme.breakpoints.up("lg")]: {
                                fontSize: "21px",
                            },
                            [theme.breakpoints.up("md")]: {
                                fontSize: "18px",
                            },
                            [theme.breakpoints.up("sm")]: {
                                fontSize: "15px",
                            },
                            [theme.breakpoints.up("xs")]: {
                                fontSize: "13px",
                            },
                        }}
                    >
                        çünkü Sinangil'in yeni Glutensiz ürünlerinin ismi
                        <span
                            style={{
                                color: "red",
                                borderBottom: "5px solid #c0e4ec",
                                marginLeft: "5px",
                            }}
                        >
                            GLUTEN YOK.
                        </span>
                    </Typography>
                </Box>
                <Box sx={{ marginTop: "20px" }}>
                    <Typography
                        sx={{
                            [theme.breakpoints.up("lg")]: {
                                fontSize: "14px",
                            },
                            [theme.breakpoints.up("md")]: {
                                fontSize: "14px",
                            },
                            [theme.breakpoints.up("sm")]: {
                                fontSize: "10px",
                            },
                            [theme.breakpoints.up("xs")]: {
                                fontSize: "10px",
                            },
                        }}
                    >
                        Tabii ismi YOK olan ürünlerin lezzetleri damaklarınızda
                        kalacak.Glutensiz un alanındaki tecrübemizi ve
                        tüketicilerimizin markamıza duyduğu güveni şimdi
                        Sinangil Gluten Yok ürünlerimiz ile sizlerin beğenisine
                        sunuyoruz. Üstelik sektörde ilk defa tek kullanımlık
                        kullanıcı dostu ambalajlarımız ile tazeliğini koruyan
                        glutensiz kurabiye, sandviç ekmeği, hamburger ekmeği
                        gibi birbirinden farklı ürünlerimizi ihtiyacınıza uygun
                        olarak tüketebilirsiniz.
                    </Typography>
                </Box>
            </Box>
            <Link
                target="_blank"
                href={`https://www.youtube.com/watch?v=H2E5G-p0nhs`}
            >
                <Box
                    component="img"
                    src={tv1}
                    sx={{
                        zIndex: "1",
                        position: "absolute",
                        [theme.breakpoints.up("lg")]: {
                            width: "20%",
                            top: "10%",
                            left: "27%",
                        },
                        [theme.breakpoints.up("md")]: {
                            width: "20%",
                            top: "12%",
                            left: "19%",
                        },
                        [theme.breakpoints.up("sm")]: {
                            width: "25%",
                            top: "18%",
                            left: "8%",
                        },
                        [theme.breakpoints.up("xs")]: {
                            width: "30%",
                            top: "15%",
                            left: "1%",
                        },
                    }}
                />
            </Link>
            <Link
                target="_blank"
                href={`
                https://www.youtube.com/watch?v=1iT6DvVnirA`}
            >
                <Box
                    component="img"
                    src={tv2}
                    sx={{
                        position: "absolute",
                        [theme.breakpoints.up("lg")]: {
                            width: "20%",
                            top: "10%",
                            left: "68%",
                        },
                        [theme.breakpoints.up("md")]: {
                            width: "20%",
                            top: "12%",
                            left: "66%",
                        },
                        [theme.breakpoints.up("sm")]: {
                            width: "25%",
                            top: "18%",
                            left: "69%",
                        },
                        [theme.breakpoints.up("xs")]: {
                            width: "30%",
                            top: "17%",
                            left: "71%",
                        },
                    }}
                />
            </Link>
            <Link
                target="_blank"
                href={`
                https://www.youtube.com/watch?v=d4Wujszo_PI`}
            >
                <Box
                    component="img"
                    src={tv3}
                    sx={{
                        position: "absolute",
                        zIndex: "1",
                        [theme.breakpoints.up("lg")]: {
                            width: "15%",
                            top: "54%",
                            left: "65%",
                        },
                        [theme.breakpoints.up("md")]: {
                            width: "15%",
                            top: "47%",
                            left: "62%",
                        },
                        [theme.breakpoints.up("sm")]: {
                            width: "20%",
                            top: "49%",
                            left: "65%",
                        },
                        [theme.breakpoints.up("xs")]: {
                            width: "25%",
                            top: "39%",
                            left: "65%",
                        },
                    }}
                />
            </Link>
            <Box
                component="img"
                src={card}
                sx={{
                    position: "absolute",
                    [theme.breakpoints.up("lg")]: {
                        width: "25%",
                        top: "30%",
                        left: "45%",
                    },
                    [theme.breakpoints.up("md")]: {
                        width: "32%",
                        top: "25%",
                        left: "36%",
                    },
                    [theme.breakpoints.up("sm")]: {
                        width: "40%",
                        top: "29%",
                        left: "31%",
                    },
                    [theme.breakpoints.up("xs")]: {
                        width: "50%",
                        top: "25%",
                        left: "24%",
                    },
                }}
            />

            <Box
                className="rotate"
                component="img"
                src={index2ambalaj}
                sx={{
                    zIndex: "1",
                    position: "absolute",
                    [theme.breakpoints.up("lg")]: {
                        width: "28%",
                        top: "0%",
                        right: "-20%",
                    },
                    [theme.breakpoints.up("md")]: {
                        width: "30%",
                        top: "0%",
                        right: "-20%",
                    },
                    [theme.breakpoints.up("sm")]: {
                        width: "30%",
                        top: "0%",
                        right: "-20%",
                    },
                    [theme.breakpoints.up("xs")]: {
                        width: "45%",
                        top: "0%",
                        right: "-28%",
                    },
                }}
            />

            <Box
                className="rotate"
                component="img"
                src={index2ambalajdonut}
                sx={{
                    zIndex: "1",
                    position: "absolute",
                    [theme.breakpoints.up("lg")]: {
                        width: "7%",
                        top: "15%",
                        right: "-6%",
                    },
                    [theme.breakpoints.up("md")]: {
                        width: "10%",
                        top: "11%",
                        right: "-8%",
                    },
                    [theme.breakpoints.up("sm")]: {
                        width: "10%",
                        top: "8%",
                        right: "-8%",
                    },
                    [theme.breakpoints.up("xs")]: {
                        width: "15%",
                        top: "7%",
                        right: "-10%",
                    },
                }}
            />

            <Box
                className="rotate"
                component="img"
                src={index2donut}
                sx={{
                    zIndex: "1",
                    position: "absolute",
                    [theme.breakpoints.up("lg")]: {
                        width: "15%",
                        bottom: "0%",
                        right: "-5%",
                    },
                    [theme.breakpoints.up("md")]: {
                        width: "15%",
                        bottom: "0%",
                        right: "-5%",
                    },
                    [theme.breakpoints.up("sm")]: {
                        width: "15%",
                        bottom: "0%",
                        right: "-5%",
                    },
                    [theme.breakpoints.up("xs")]: {
                        width: "25%",
                        bottom: "0%",
                        right: "-10%",
                    },
                }}
            />
        </Box>
    );
};
