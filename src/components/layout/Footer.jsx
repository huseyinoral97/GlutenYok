import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import footeryoklogo from "../../images/footeryoklogo.png";
import glutenfree from "../../images/index3glutenfree.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTheme } from "@mui/material/styles";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

export const Footer = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                minHeight: "300px",
                display: "flex",
                alignItems: "center",
                background: "black",
            }}
        >
            <Container maxWidth="lg" sx={{ padding: "0px 0px" }}>
                <Grid container>
                    <Grid
                        item
                        lg={3}
                        md={3}
                        sm={12}
                        xs={12}
                        sx={{
                            [theme.breakpoints.up("lg")]: {
                                marginTop: "0px",
                            },
                            [theme.breakpoints.up("md")]: {
                                marginTop: "0px",
                            },
                            [theme.breakpoints.up("sm")]: {
                                marginTop: "50px",
                            },
                            [theme.breakpoints.up("xs")]: {
                                marginTop: "50px",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "start",
                                alignItems: "center",
                                [theme.breakpoints.up("lg")]: {
                                    justifyContent: "start",
                                },
                                [theme.breakpoints.up("md")]: {
                                    justifyContent: "start",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    justifyContent: "center",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    justifyContent: "center",
                                },
                            }}
                        >
                            <Box
                                component="img"
                                sx={{
                                    [theme.breakpoints.up("lg")]: {
                                        width: "70%",
                                    },
                                    [theme.breakpoints.up("md")]: {
                                        width: "50%",
                                    },
                                    [theme.breakpoints.up("sm")]: {
                                        width: "30%",
                                    },
                                    [theme.breakpoints.up("xs")]: {
                                        width: "30%",
                                    },
                                }}
                                alt="The house from the offer."
                                src={footeryoklogo}
                            />
                        </Box>
                    </Grid>
                    <Grid
                        item
                        lg={3}
                        md={3}
                        sm={6}
                        xs={6}
                        sx={{
                            [theme.breakpoints.up("lg")]: {
                                marginTop: "0px",
                            },
                            [theme.breakpoints.up("md")]: {
                                marginTop: "0px",
                            },
                            [theme.breakpoints.up("sm")]: {
                                marginTop: "50px",
                            },
                            [theme.breakpoints.up("xs")]: {
                                marginTop: "50px",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                padding: "0px 35px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "start",
                                [theme.breakpoints.up("lg")]: {
                                    justifyContent: "start",
                                },
                                [theme.breakpoints.up("md")]: {
                                    justifyContent: "start",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    justifyContent: "center",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    justifyContent: "center",
                                },
                            }}
                        >
                            <Box>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    component="div"
                                    sx={{
                                        color: "white",
                                        textDecoration: "underline",
                                    }}
                                >
                                    Merkez
                                </Typography>
                            </Box>
                            <Box sx={{ marginTop: "10px" }}>
                                <Typography
                                    variant="subtitle2"
                                    gutterBottom
                                    component="div"
                                    sx={{ color: "white" }}
                                >
                                    Dudullu OSB 1.Cadde No:4 Y.Dudullu
                                    Ümraniye/İSTANBUL
                                </Typography>
                                <Link
                                    target="_blank"
                                    href={"tel:+08503196362"}
                                    style={{ textDecoration: "none" }}
                                >
                                    <Typography
                                        variant="subtitle2"
                                        gutterBottom
                                        component="div"
                                        sx={{ color: "white" }}
                                    >
                                        0850 319 63 62
                                    </Typography>
                                </Link>
                                <Link
                                    target="_blank"
                                    href={"mailto:glutenyok@sinangil.com.tr"}
                                    style={{ textDecoration: "none" }}
                                >
                                    <Typography
                                        variant="subtitle2"
                                        gutterBottom
                                        component="div"
                                        sx={{ color: "white" }}
                                    >
                                        glutenyok@sinangil.com.tr
                                    </Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        lg={3}
                        md={3}
                        sm={6}
                        xs={6}
                        sx={{
                            [theme.breakpoints.up("lg")]: {
                                marginTop: "0px",
                            },
                            [theme.breakpoints.up("md")]: {
                                marginTop: "0px",
                            },
                            [theme.breakpoints.up("sm")]: {
                                marginTop: "50px",
                            },
                            [theme.breakpoints.up("xs")]: {
                                marginTop: "50px",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "start",
                                flexDirection: "column",
                                alignItems: "start",
                                [theme.breakpoints.up("lg")]: {
                                    justifyContent: "start",
                                },
                                [theme.breakpoints.up("md")]: {
                                    justifyContent: "start",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    justifyContent: "center",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    justifyContent: "center",
                                },
                            }}
                        >
                            <Box>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    component="div"
                                    sx={{
                                        color: "white",
                                        textDecoration: "underline",
                                    }}
                                >
                                    Kısayol Menü
                                </Typography>
                            </Box>
                            <Box sx={{ marginTop: "10px" }}>
                                <Link
                                    component={RouterLink}
                                    to={`/neden-yok`}
                                    style={{ textDecoration: "none" }}
                                >
                                    <Typography
                                        variant="subtitle2"
                                        gutterBottom
                                        component="div"
                                        sx={{ color: "white" }}
                                    >
                                        Neden Yok?
                                    </Typography>
                                </Link>
                                <Link
                                    component={RouterLink}
                                    to={`/urunlerimiz`}
                                    style={{ textDecoration: "none" }}
                                >
                                    <Typography
                                        variant="subtitle2"
                                        gutterBottom
                                        component="div"
                                        sx={{ color: "white" }}
                                    >
                                        Ürünlerimiz
                                    </Typography>
                                </Link>
                                <Link
                                    component={RouterLink}
                                    to={`/satis-noktalari`}
                                    style={{ textDecoration: "none" }}
                                >
                                    <Typography
                                        variant="subtitle2"
                                        gutterBottom
                                        component="div"
                                        sx={{ color: "white" }}
                                    >
                                        Satış Noktaları
                                    </Typography>
                                </Link>
                                <Link
                                    component={RouterLink}
                                    to={`/kampanyalar`}
                                    style={{ textDecoration: "none" }}
                                >
                                    <Typography
                                        variant="subtitle2"
                                        gutterBottom
                                        component="div"
                                        sx={{ color: "white" }}
                                    >
                                        Kampanyalar
                                    </Typography>
                                </Link>
                                <Link
                                    component={RouterLink}
                                    to={`/glutensiz-yasam`}
                                    style={{ textDecoration: "none" }}
                                >
                                    <Typography
                                        variant="subtitle2"
                                        gutterBottom
                                        component="div"
                                        sx={{ color: "white" }}
                                    >
                                        Glutensiz Yaşam
                                    </Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        lg={3}
                        md={3}
                        sm={12}
                        xs={12}
                        sx={{
                            [theme.breakpoints.up("lg")]: {
                                marginTop: "0px",
                            },
                            [theme.breakpoints.up("md")]: {
                                marginTop: "0px",
                            },
                            [theme.breakpoints.up("sm")]: {
                                marginTop: "50px",
                            },
                            [theme.breakpoints.up("xs")]: {
                                marginTop: "50px",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                flexDirection: "column",
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "start",
                                [theme.breakpoints.up("lg")]: {
                                    alignItems: "end",
                                },
                                [theme.breakpoints.up("md")]: {
                                    alignItems: "end",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    alignItems: "center",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    alignItems: "center",
                                },
                            }}
                        >
                            <Box
                                component="img"
                                sx={{
                                    [theme.breakpoints.up("lg")]: {
                                        width: "100px",
                                    },
                                    [theme.breakpoints.up("md")]: {
                                        width: "100px",
                                    },
                                    [theme.breakpoints.up("sm")]: {
                                        width: "90px",
                                    },
                                    [theme.breakpoints.up("xs")]: {
                                        width: "70px",
                                    },
                                }}
                                alt="The house from the offer."
                                src={glutenfree}
                            />
                            <Typography
                                variant="h6"
                                gutterBottom
                                component="div"
                                sx={{
                                    color: "white",
                                    [theme.breakpoints.up("lg")]: {
                                        fontSize: "1.25rem",
                                    },
                                    [theme.breakpoints.up("md")]: {
                                        fontSize: "1.25rem",
                                    },
                                    [theme.breakpoints.up("sm")]: {
                                        fontSize: "1rem",
                                    },
                                    [theme.breakpoints.up("xs")]: {
                                        fontSize: "1rem",
                                    },
                                }}
                            >
                                Sosyal Medya
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    width: "100%",
                                    [theme.breakpoints.up("lg")]: {
                                        justifyContent: "space-between",
                                    },
                                    [theme.breakpoints.up("md")]: {
                                        justifyContent: "space-between",
                                    },
                                    [theme.breakpoints.up("sm")]: {
                                        justifyContent: "center",
                                    },
                                    [theme.breakpoints.up("xs")]: {
                                        justifyContent: "center",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        [theme.breakpoints.up("lg")]: {
                                            marginLeft: "0px",
                                        },
                                        [theme.breakpoints.up("md")]: {
                                            marginLeft: "0px",
                                        },
                                        [theme.breakpoints.up("sm")]: {
                                            marginLeft: "20px",
                                        },
                                        [theme.breakpoints.up("xs")]: {
                                            marginLeft: "20px",
                                        },
                                    }}
                                >
                                    <Link
                                        target="_blank"
                                        href={`https://www.facebook.com/bizeglutenyok/`}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <FacebookIcon sx={{ color: "green" }} />
                                    </Link>
                                </Box>
                                <Box
                                    sx={{
                                        [theme.breakpoints.up("lg")]: {
                                            marginLeft: "0px",
                                        },
                                        [theme.breakpoints.up("md")]: {
                                            marginLeft: "0px",
                                        },
                                        [theme.breakpoints.up("sm")]: {
                                            marginLeft: "20px",
                                        },
                                        [theme.breakpoints.up("xs")]: {
                                            marginLeft: "20px",
                                        },
                                    }}
                                >
                                    <Link
                                        target="_blank"
                                        href={`https://www.twitter.com/bizeglutenyok/`}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <TwitterIcon sx={{ color: "green" }} />
                                    </Link>
                                </Box>
                                <Box
                                    sx={{
                                        [theme.breakpoints.up("lg")]: {
                                            marginLeft: "0px",
                                        },
                                        [theme.breakpoints.up("md")]: {
                                            marginLeft: "0px",
                                        },
                                        [theme.breakpoints.up("sm")]: {
                                            marginLeft: "20px",
                                        },
                                        [theme.breakpoints.up("xs")]: {
                                            marginLeft: "20px",
                                        },
                                    }}
                                >
                                    <Link
                                        target="_blank"
                                        href={`https://www.instagram.com/bizeglutenyok/`}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <InstagramIcon
                                            sx={{ color: "green" }}
                                        />
                                    </Link>
                                </Box>
                                <Box
                                    sx={{
                                        [theme.breakpoints.up("lg")]: {
                                            marginLeft: "0px",
                                        },
                                        [theme.breakpoints.up("md")]: {
                                            marginLeft: "0px",
                                        },
                                        [theme.breakpoints.up("sm")]: {
                                            marginLeft: "20px",
                                        },
                                        [theme.breakpoints.up("xs")]: {
                                            marginLeft: "20px",
                                        },
                                    }}
                                >
                                    <Link
                                        target="_blank"
                                        href={`https://www.twitter.com/bizeglutenyok/`}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <LinkedInIcon sx={{ color: "green" }} />
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
