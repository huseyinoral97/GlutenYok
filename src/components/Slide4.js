import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import { Button, Grid, ImageListItemBar, Typography } from "@mui/material";
import circle1 from "../images/circle1.png";
import circle2 from "../images/circle2.png";
import circle3 from "../images/circle3.png";
import circle4 from "../images/circle4.png";
import circle5 from "../images/circle5.png";
import circle6 from "../images/circle6.png";
import circle7 from "../images/circle7.png";
import blog from "../images/blog.png";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useTheme } from "@mui/material/styles";
import "./layout/header.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./iletisim.css";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import axiosClient from "../utils/axiosClient";

export const Slide4 = () => {
    const theme = useTheme();
    const [users, setUsers] = useState([]);
    useEffect(async () => {
        try {
            const response = await axiosClient.get("api/insta/");
            setUsers(
                response.data.data.filter(
                    (data) => !data.media_url.includes("video")
                )
            );
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <Box className="slide four" sx={{ position: "relative" }}>
            <Box
                component="img"
                src={circle1}
                sx={{
                    zIndex: "1",
                    position: "absolute",
                    [theme.breakpoints.up("lg")]: {
                        width: "3%",
                        bottom: "16.1%",
                        left: "0.5%",
                    },
                    [theme.breakpoints.up("md")]: {
                        width: "3%",
                        bottom: "10%",
                        left: "1.7%",
                    },
                    [theme.breakpoints.up("sm")]: {
                        width: "3%",
                        bottom: "9.5%",
                        left: "4%",
                    },
                    [theme.breakpoints.up("xs")]: {
                        width: "5%",
                        bottom: "6%",
                        left: "1%",
                    },
                }}
            />
            <Box
                component="img"
                src={circle2}
                sx={{
                    zIndex: "1",
                    position: "absolute",
                    [theme.breakpoints.up("lg")]: {
                        width: "4%",
                        bottom: "20%",
                        left: "1.3%",
                    },
                    [theme.breakpoints.up("md")]: {
                        width: "4%",
                        bottom: "13%",
                        left: "2.5%",
                    },
                    [theme.breakpoints.up("sm")]: {
                        width: "4%",
                        bottom: "11.5%",
                        left: "4.7%",
                    },
                    [theme.breakpoints.up("xs")]: {
                        width: "7%",
                        bottom: "8%",
                        left: "2%",
                    },
                }}
            />
            <Box
                component="img"
                src={circle3}
                sx={{
                    zIndex: "1",
                    position: "absolute",
                    [theme.breakpoints.up("lg")]: {
                        width: "5%",
                        bottom: "25.5%",
                        left: "2.4%",
                    },
                    [theme.breakpoints.up("md")]: {
                        width: "5%",
                        bottom: "16.8%",
                        left: "3.7%",
                    },
                    [theme.breakpoints.up("sm")]: {
                        width: "6%",
                        bottom: "14%",
                        left: "5.5%",
                    },
                    [theme.breakpoints.up("xs")]: {
                        width: "10%",
                        bottom: "10.5%",
                        left: "3.5%",
                    },
                }}
            />
            <Box
                component="img"
                src={circle4}
                sx={{
                    zIndex: "1",
                    position: "absolute",
                    [theme.breakpoints.up("lg")]: {
                        width: "6%",
                        bottom: "31.9%",
                        left: "3.9%",
                    },
                    [theme.breakpoints.up("md")]: {
                        width: "7%",
                        bottom: "21%",
                        left: "5%",
                    },
                    [theme.breakpoints.up("sm")]: {
                        width: "8%",
                        bottom: "17.5%",
                        left: "7%",
                    },
                    [theme.breakpoints.up("xs")]: {
                        width: "12%",
                        bottom: "14%",
                        left: "5.8%",
                    },
                }}
            />
            <Box
                component="img"
                src={circle5}
                sx={{
                    zIndex: "1",
                    position: "absolute",
                    [theme.breakpoints.up("lg")]: {
                        width: "7%",
                        bottom: "40%",
                        left: "6%",
                    },
                    [theme.breakpoints.up("md")]: {
                        width: "10%",
                        bottom: "27%",
                        left: "7%",
                    },
                    [theme.breakpoints.up("sm")]: {
                        width: "10%",
                        bottom: "23%",
                        left: "9%",
                    },
                    [theme.breakpoints.up("xs")]: {
                        width: "15%",
                        bottom: "18.7%",
                        left: "8.5%",
                    },
                }}
            />
            <Box
                component="img"
                src={circle6}
                sx={{
                    zIndex: "1",
                    position: "absolute",
                    [theme.breakpoints.up("lg")]: {
                        width: "8%",
                        bottom: "49%",
                        left: "8.5%",
                    },
                    [theme.breakpoints.up("md")]: {
                        width: "12%",
                        bottom: "36%",
                        left: "10%",
                    },
                    [theme.breakpoints.up("sm")]: {
                        width: "12%",
                        bottom: "30%",
                        left: "12%",
                    },
                    [theme.breakpoints.up("xs")]: {
                        width: "17%",
                        bottom: "24.5%",
                        left: "12.5%",
                    },
                }}
            />
            <Box
                component="img"
                src={circle7}
                sx={{
                    zIndex: "1",
                    position: "absolute",
                    [theme.breakpoints.up("lg")]: {
                        width: "10%",
                        bottom: "59%",
                        left: "11%",
                    },
                    [theme.breakpoints.up("md")]: {
                        width: "15%",
                        bottom: "47%",
                        left: "14%",
                    },
                    [theme.breakpoints.up("sm")]: {
                        width: "17%",
                        bottom: "38%",
                        left: "15%",
                    },
                    [theme.breakpoints.up("xs")]: {
                        width: "21%",
                        bottom: "31%",
                        left: "17%",
                    },
                }}
            />
            <Box
                className="instagramListContainer"
                sx={{
                    position: "absolute",
                    [theme.breakpoints.up("lg")]: {
                        left: "20%",
                        top: "35%",
                        width: "28%",
                    },
                    [theme.breakpoints.up("md")]: {
                        left: "30%",
                        top: "45%",
                        width: "30%",
                    },
                    [theme.breakpoints.up("sm")]: {
                        left: "20%",
                        top: "5%",
                        width: "27%",
                    },
                    [theme.breakpoints.up("xs")]: {
                        left: "30%",
                        top: "1%",
                        width: "62%",
                    },
                }}
            >
                <Link
                    target="_blank"
                    href={`https://www.instagram.com/bizeglutenyok/`}
                    style={{ textDecoration: "none" }}
                >
                    <Typography
                        sx={{
                            textAlign: "center",
                            marginBottom: "10px",
                            fontWeight: "bold",
                            background:
                                "linear-gradient(to right, #f09433, #e6683c, #dc2743, #cc2366, #bc1888 )",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            [theme.breakpoints.up("lg")]: {
                                fontSize: "25px",
                            },
                            [theme.breakpoints.up("md")]: {
                                fontSize: "25px",
                            },
                            [theme.breakpoints.up("sm")]: {
                                fontSize: "25px",
                            },
                            [theme.breakpoints.up("xs")]: {
                                fontSize: "15px",
                            },
                        }}
                    >
                        @bizeglutenyok
                    </Typography>
                </Link>
                <ImageList
                    className="instagramList"
                    sx={{
                        [theme.breakpoints.up("lg")]: {
                            width: 400,
                            height: 400,
                        },
                        [theme.breakpoints.up("md")]: {
                            width: 300,
                            height: 300,
                        },
                        [theme.breakpoints.up("sm")]: {
                            width: 200,
                            height: 200,
                        },
                        [theme.breakpoints.up("xs")]: {
                            width: 260,
                            height: 260,
                        },
                    }}
                    cols={3}
                >
                    {users.map((user) => (
                        <ImageListItem key={user.id}>
                            <img
                                src={`${user.media_url}`}
                                style={{ borderRadius: "10px" }}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>

            <Box
                className="yokblog"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    position: "absolute",
                    [theme.breakpoints.up("lg")]: {
                        width: "38%",
                        bottom: "0%",
                        left: "54%",
                    },
                    [theme.breakpoints.up("md")]: {
                        width: "44%",
                        bottom: "0%",
                        left: "57%",
                    },
                    [theme.breakpoints.up("sm")]: {
                        width: "50%",
                        bottom: "0%",
                        left: "45%",
                    },
                    [theme.breakpoints.up("xs")]: {
                        width: "70%",
                        bottom: "0%",
                        left: "33%",
                    },
                }}
            >
                <Box
                    component="img"
                    sx={{ width: "100%", height: "100%" }}
                    src={blog}
                />
                <Box
                    sx={{
                        width: " 75%",
                        height: "60%",
                        position: "absolute",
                        top: "26%",
                        left: "15%",
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Grid item xs={12}>
                                <Typography
                                    sx={{
                                        color: "#5d554c",
                                        fontWeight: "bold",
                                        [theme.breakpoints.up("lg")]: {},
                                        [theme.breakpoints.up("md")]: {
                                            fontSize: "20px",
                                        },
                                        [theme.breakpoints.up("sm")]: {
                                            fontSize: "15px",
                                        },
                                        [theme.breakpoints.up("xs")]: {
                                            fontSize: "16px",
                                        },
                                    }}
                                    variant="h5"
                                    gutterBottom
                                    component="div"
                                >
                                    Gluten YOK ile sağlık ve lezzet bir arada!
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    variant="subtitle1"
                                    gutterBottom
                                    component="div"
                                    sx={{
                                        textOverflow: " ellipsis",
                                        overflowY: "hidden",
                                        [theme.breakpoints.up("lg")]: {
                                            fontSize: "14px",
                                        },
                                        [theme.breakpoints.up("md")]: {
                                            fontSize: "12px",
                                        },
                                        [theme.breakpoints.up("sm")]: {
                                            fontSize: "10px",
                                        },
                                        [theme.breakpoints.up("xs")]: {
                                            fontSize: "11px",
                                        },
                                    }}
                                >
                                    Glutensiz yaşama lezzet katıyoruz. Sinangil
                                    olarak glutensiz unlardan sonra şimdi de
                                    Gluten YOK ekmek çeşitleri ve tatlı tuzlu
                                    atıştırmalıklarımızla kalpleri fethediyoruz.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ marginTop: "10px" }}>
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "1px",
                                        background: "white",
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sx={{
                                [theme.breakpoints.up("lg")]: {
                                    display: "block",
                                },
                                [theme.breakpoints.up("md")]: {
                                    display: "block",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    display: "block",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    display: "block",
                                },
                            }}
                        >
                            <Grid item xs={12}>
                                <Typography
                                    sx={{
                                        color: "#5d554c",
                                        fontWeight: "bold",
                                        [theme.breakpoints.up("lg")]: {},
                                        [theme.breakpoints.up("md")]: {
                                            fontSize: "20px",
                                            display: "block",
                                        },
                                        [theme.breakpoints.up("sm")]: {
                                            fontSize: "15px",
                                            display: "block",
                                        },
                                        [theme.breakpoints.up("xs")]: {
                                            display: "none",
                                        },
                                    }}
                                    variant="h5"
                                    gutterBottom
                                    component="div"
                                >
                                    Glutensiz Diyet/Beslenme Programları Hakkında En Çok Merak Edilenler!
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    variant="subtitle1"
                                    gutterBottom
                                    component="div"
                                    sx={{
                                        [theme.breakpoints.up("lg")]: {
                                            fontSize: "14px",
                                            display: "block",
                                        },
                                        [theme.breakpoints.up("md")]: {
                                            fontSize: "12px",
                                            display: "block",
                                        },
                                        [theme.breakpoints.up("sm")]: {
                                            fontSize: "10px",
                                            display: "block",
                                        },
                                        [theme.breakpoints.up("xs")]: {
                                            display: "none",
                                        },
                                    }}
                                >
                                    Son yıllarda 'glutensiz diyet' terimini sıkça duymuş olabilirsiniz. İlgili beslenme şekli, insanların kilo
                                    vermesine yardımcı olmak için tasarlanmadığından klasik diyetlerden oldukça farklıdır ve bu yanıyla da pek çok kişi için bir miktar kafa karıştırıcıdır.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ marginTop: "10px" }}>
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "1px",
                                        background: "white",
                                        [theme.breakpoints.up("lg")]: {
                                            fontSize: "14px",
                                            display: "block",
                                        },
                                        [theme.breakpoints.up("md")]: {
                                            fontSize: "12px",
                                            display: "block",
                                        },
                                        [theme.breakpoints.up("sm")]: {
                                            display: "none",
                                        },
                                        [theme.breakpoints.up("xs")]: {
                                            display: "none",
                                        },
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            className="blogthird"
                            item
                            xs={12}
                            sx={{
                                [theme.breakpoints.up("lg")]: {
                                    display: "none",
                                },
                                [theme.breakpoints.up("md")]: {
                                    display: "none",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    display: "none",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    display: "none",
                                },
                            }}
                        >
                            <Grid item xs={12}>
                                <Typography
                                    sx={{
                                        color: "#5d554c",
                                        fontWeight: "bold",
                                        [theme.breakpoints.up("lg")]: {
                                            display: "block",
                                        },
                                        [theme.breakpoints.up("md")]: {
                                            display: "block",
                                            fontSize: "20px",
                                        },
                                        [theme.breakpoints.up("sm")]: {
                                            display: "none",
                                        },
                                        [theme.breakpoints.up("xs")]: {
                                            display: "none",
                                        },
                                    }}
                                    variant="h5"
                                    gutterBottom
                                    component="div"
                                >
                                    Heading
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    variant="subtitle1"
                                    gutterBottom
                                    component="div"
                                    sx={{
                                        [theme.breakpoints.up("lg")]: {
                                            display: "block",
                                            fontSize: "14px",
                                        },
                                        [theme.breakpoints.up("md")]: {
                                            display: "block",
                                            fontSize: "12px",
                                        },
                                        [theme.breakpoints.up("sm")]: {
                                            display: "none",
                                        },
                                        [theme.breakpoints.up("xs")]: {
                                            display: "none",
                                        },
                                    }}
                                >
                                    subtitle1. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Quos
                                    blanditiis tenetursubtitle1. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing
                                    elit. Quos blanditiis tenetur
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ marginTop: "10px" }}>
                                <Box
                                    sx={{
                                        [theme.breakpoints.up("lg")]: {
                                            width: "100%",
                                            height: "1px",
                                            background: "white",
                                        },
                                        [theme.breakpoints.up("md")]: {
                                            width: "100%",
                                            height: "1px",
                                            background: "white",
                                        },
                                        [theme.breakpoints.up("sm")]: {
                                            display: "none",
                                        },
                                        [theme.breakpoints.up("xs")]: {
                                            display: "none",
                                        },
                                    }}
                                />
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Link component={RouterLink} to="/blog">
                                <Button
                                    sx={{
                                        background: "white",
                                        borderRadius: "15px",
                                        color: "#5d554c",
                                        float: "right",
                                        [theme.breakpoints.up("lg")]: {},
                                        [theme.breakpoints.up("md")]: {
                                            fontSize: "10px",
                                        },
                                        [theme.breakpoints.up("sm")]: {
                                            fontSize: "8px",
                                        },
                                        [theme.breakpoints.up("xs")]: {
                                            fontSize: "8px",
                                        },
                                        "&:hover": {
                                            background: "white",
                                        },
                                    }}
                                >
                                    Tümünü Gör
                                    <ArrowCircleRightIcon
                                        sx={{ marginLeft: "5px" }}
                                    />
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};
