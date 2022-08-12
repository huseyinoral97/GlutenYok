import { Box, Grid } from "@mui/material";
import React from "react";
import satisnoktalarimizbackground from "../images/satisnoktalarimizbackground.png";
import satisnoktalaribg from "../images/1.png";
import satisnoktalaribgmobil from "../images/1mobil.png";
import { Container, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Footer } from "./layout/Footer";
import { MiniHeader } from "./MiniHeader";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";
import gittigidiyor from "../images/git.png";
import kampanyalar from "../images/kampanyalartitle.png";

export const Kampanyalar = () => {
    const theme = useTheme();
    return (
        <Box sx={{ background: `url(${satisnoktalarimizbackground})` }}>
            <MiniHeader />
            <Box
                sx={{
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
                <Box component="img" src={kampanyalar} />
            </Box>
            <Container maxWidth="lg" sx={{ padding: "75px 0px" }}>
                <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Card elevation={0} sx={{ background: "transparent" }}>
                            <CardMedia
                                component="img"
                                height="270"
                                image="../images/trendyol.png"
                                alt="Trendyol"
                            />
                            <CardActions sx={{ justifyContent: "end" }}>
                                <Link
                                    target="_blank"
                                    href="https://www.trendyol.com/magaza/sinangil-m-139442?sst=0"
                                    style={{ textDecoration: "none" }}
                                >
                                    <Button
                                        size="small"
                                        sx={{
                                            color: "white",
                                            backgroundColor: "#ff5b00",
                                            padding: "5px",
                                            "&:hover": {
                                                background: "#ff5b00",
                                            },
                                        }}
                                    >
                                        Kampanya Detaylarını görüntüle
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Card elevation={0} sx={{ background: "transparent" }}>
                            <CardMedia
                                component="img"
                                height="270"
                                alt="Getir"
                                image="../images/getir.png"
                            />

                            <CardActions sx={{ justifyContent: "end" }}>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    component="div"
                                >
                                    ÇOK YAKINDA...
                                </Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Card elevation={0} sx={{ background: "transparent" }}>
                            <CardMedia
                                component="img"
                                height="270"
                                alt="Gittigidiyor"
                                image={gittigidiyor}
                            />

                            <CardActions sx={{ justifyContent: "end" }}>
                                <Link
                                    target="_blank"
                                    href="https://www.gittigidiyor.com/magaza/sinangil"
                                    style={{ textDecoration: "none" }}
                                >
                                    <Button
                                        size="small"
                                        sx={{
                                            color: "white",
                                            backgroundColor: "#FF9F00",
                                            padding: "5px",
                                            "&:hover": {
                                                background: "#ff5b00",
                                            },
                                        }}
                                    >
                                        Kampanya Detaylarını görüntüle
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Card elevation={0} sx={{ background: "transparent" }}>
                            <CardMedia
                                component="img"
                                height="270"
                                alt="İste Gelsin"
                                image="../images/istegelsin.png"
                            />

                            <CardActions sx={{ justifyContent: "end" }}>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    component="div"
                                >
                                    ÇOK YAKINDA...
                                </Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </Box>
    );
};
