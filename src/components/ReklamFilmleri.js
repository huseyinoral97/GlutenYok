import React from "react";
import { Box, Grid } from "@mui/material";
import satisnoktalarimizbackground from "../images/satisnoktalarimizbackground.png";
import satisnoktalaribg from "../images/2.png";
import satisnoktalaribgmobil from "../images/2mobil.png";
import { Container, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Footer } from "./layout/Footer";
import { MiniHeader } from "./MiniHeader";
import reklamfilmi1 from "../images/reklam-filmi-1.png";
import reklamfilmi2 from "../images/reklam-filmi-2.png";
import reklamfilmi3 from "../images/reklam-filmi-3.png";
import Link from "@mui/material/Link";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { useTheme } from "@mui/material/styles";
import reklamfilmlerimiz from "../images/reklam_filmlerimiz.png";

export const ReklamFilmleri = () => {
    const theme = useTheme();

    return (
        <Box sx={{ background: `url(${satisnoktalarimizbackground})` }}>
            <MiniHeader />
            <Box
                sx={{
                    background: `url(${satisnoktalaribg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "300px",
                    width: "100%",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    [theme.breakpoints.up("lg")]: {
                        background: `url(${satisnoktalaribg})`,
                    },
                    [theme.breakpoints.up("md")]: {
                        background: `url(${satisnoktalaribg})`,
                    },
                    [theme.breakpoints.up("sm")]: {
                        background: `url(${satisnoktalaribg})`,
                    },
                    [theme.breakpoints.up("xs")]: {
                        background: `url(${satisnoktalaribgmobil})`,
                    },
                }}
            >
                <Box component="img" src={reklamfilmlerimiz} />
            </Box>
            <Container maxWidth="lg" sx={{ padding: "75px 0px" }}>
                <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Card
                            elevation={0}
                            sx={{
                                background: "transparent",
                                position: "relative",
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    left: "47%",
                                    top: "40%",
                                }}
                            >
                                <PlayCircleFilledWhiteIcon
                                    sx={{ fontSize: "50px", color: "red" }}
                                />
                            </Box>
                            <Link
                                target="_blank"
                                href={`https://www.youtube.com/watch?v=1iT6DvVnirA`}
                            >
                                <CardMedia
                                    component="img"
                                    height="270"
                                    image={reklamfilmi1}
                                    alt="green iguana"
                                />
                            </Link>
                            <Box
                                sx={{
                                    textAlign: "center",
                                    fontSize: "13px",
                                    fontWeight: "bold",
                                    padding: "10px 0px",
                                    fontFamily: "Montserrat, sans-serif",
                                }}
                            >
                                Sinangil Gluten Yok Sandviç Ekmeği Reklam Filmi
                                HD
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Card
                            elevation={0}
                            sx={{
                                background: "transparent",
                                position: "relative",
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    left: "47%",
                                    top: "40%",
                                }}
                            >
                                <PlayCircleFilledWhiteIcon
                                    sx={{ fontSize: "50px", color: "red" }}
                                />
                            </Box>

                            <Link
                                target="_blank"
                                href={`https://www.youtube.com/watch?v=H2E5G-p0nhs`}
                            >
                                <CardMedia
                                    component="img"
                                    height="270"
                                    image={reklamfilmi2}
                                    alt="green iguana"
                                />
                            </Link>
                            <Box
                                sx={{
                                    textAlign: "center",
                                    fontSize: "13px",
                                    fontWeight: "bold",
                                    padding: "10px 0px",
                                    fontFamily: "Montserrat, sans-serif",
                                }}
                            >
                                Sinangil Gluten Yok Hindistan Cevizli Tatlı
                                Kurabiye Reklam Filmi HD
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Card
                            elevation={0}
                            sx={{
                                background: "transparent",
                                position: "relative",
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    left: "47%",
                                    top: "40%",
                                }}
                            >
                                <PlayCircleFilledWhiteIcon
                                    sx={{ fontSize: "50px", color: "red" }}
                                />
                            </Box>

                            <Link
                                target="_blank"
                                href={`https://www.youtube.com/watch?v=d4Wujszo_PI`}
                            >
                                <CardMedia
                                    component="img"
                                    height="270"
                                    image={reklamfilmi3}
                                    alt="green iguana"
                                />
                            </Link>
                            <Box
                                sx={{
                                    textAlign: "center",
                                    fontSize: "13px",
                                    fontWeight: "bold",
                                    padding: "10px 0px",
                                    fontFamily: "Montserrat, sans-serif",
                                }}
                            >
                                Sinangil Gluten Yok Zerdeçallı Kırmızı Biberli
                                Kurabiye Reklam Filmi HD
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </Box>
    );
};
