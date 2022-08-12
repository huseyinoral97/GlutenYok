import React from "react";
import Box from "@mui/material/Box";
import markabg from "../images/markabg.png";
import { Typography } from "@mui/material";
import glutenfree from "../images/index3glutenfree.png";
import markaambalaj from "../images/markaambalaj.png";
import markaambalaj2 from "../images/markaambalaj2.png";
import markaambalaj3 from "../images/markaambalaj3.png";
import markalayer from "../images/markalayer.jpg";
import background from "../images/satisnoktalarimizbackground.png";
import { useTheme } from "@mui/material/styles";
import { Footer } from "./layout/Footer";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { MiniHeader } from "./MiniHeader";
import nedenyok from "../images/neden_yok.png";

export const Marka = () => {
    const theme = useTheme();
    return (
        <Box sx={{ background: `url(${background})` }}>
            <MiniHeader />
            <Box
                sx={{
                    background: `url(${markabg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "300px",
                    width: "100%",
                    position: "relative",
                }}
            >
                <Box
                    sx={{
                        poisition: "absolute",
                        width: "100%",
                        height: "100%",
                        background: "#00000054",
                        left: "0px",
                        top: "0px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box component="img" src={nedenyok} />
                </Box>
            </Box>
            <Box sx={{ flexGrow: 1, marginTop: "100px", position: "relative" }}>
                <Box
                    component="img"
                    src={markaambalaj}
                    sx={{
                        position: "absolute",
                        [theme.breakpoints.up("lg")]: {
                            right: "0%",
                            top: "-30%",
                            width: "15%",
                        },
                        [theme.breakpoints.up("md")]: {
                            right: "0%",
                            top: "-30%",
                            width: "15%",
                        },
                        [theme.breakpoints.up("sm")]: {
                            right: "0%",
                            top: "-30%",
                            width: "15%",
                        },
                        [theme.breakpoints.up("xs")]: {
                            right: "0%",
                            top: "-20%",
                            width: "25%",
                        },
                    }}
                />
                <Box
                    component="img"
                    src={markaambalaj3}
                    sx={{
                        position: "absolute",
                        [theme.breakpoints.up("lg")]: {
                            right: "0%",
                            bottom: "-40%",
                            width: "19%",
                        },
                        [theme.breakpoints.up("md")]: {
                            right: "0%",
                            bottom: "-40%",
                            width: "20%",
                        },
                        [theme.breakpoints.up("sm")]: {
                            right: "0%",
                            bottom: "-40%",
                            width: "20%",
                        },
                        [theme.breakpoints.up("xs")]: {
                            right: "0%",
                            bottom: "-15%",
                            width: "20%",
                        },
                    }}
                />
                <Grid container spacing={2}>
                    <Grid item lg={3} md={3} sm={3} xs={3}>
                        <Box
                            sx={{
                                bgcolor: "#cfe8fc",
                                height: "500px",
                                width: "100%",
                                position: "relative",
                            }}
                        >
                            <Box
                                component="img"
                                src={glutenfree}
                                sx={{
                                    [theme.breakpoints.up("lg")]: {
                                        width: "35%",
                                        position: "absolute",
                                        right: "20%",
                                        top: "10%",
                                    },
                                    [theme.breakpoints.up("md")]: {
                                        width: "35%",
                                        position: "absolute",
                                        right: "20%",
                                        top: "10%",
                                    },
                                    [theme.breakpoints.up("sm")]: {
                                        width: "35%",
                                        position: "absolute",
                                        right: "20%",
                                        top: "10%",
                                    },
                                    [theme.breakpoints.up("xs")]: {
                                        width: "70%",
                                        position: "absolute",
                                        right: "15%",
                                        top: "20%",
                                    },
                                }}
                            />
                            <Box
                                component="img"
                                src={markaambalaj2}
                                sx={{
                                    position: "absolute",
                                    [theme.breakpoints.up("lg")]: {
                                        left: "0%",
                                        bottom: "-30%",
                                        width: "80%",
                                    },
                                    [theme.breakpoints.up("md")]: {
                                        left: "0%",
                                        bottom: "-15%",
                                        width: "80%",
                                    },
                                    [theme.breakpoints.up("sm")]: {
                                        left: "0%",
                                        bottom: "-10%",
                                        width: "80%",
                                    },
                                    [theme.breakpoints.up("xs")]: {
                                        left: "0%",
                                        bottom: "-5%",
                                        width: "100%",
                                    },
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item lg={9} md={9} sm={9} xs={9}>
                        <Box>
                            <Typography
                                variant="h3"
                                gutterBottom
                                component="div"
                                sx={{
                                    fontWeight: "bolder",
                                    [theme.breakpoints.up("lg")]: {
                                        width: "45%",
                                        fontSize: "3rem",
                                    },
                                    [theme.breakpoints.up("md")]: {
                                        width: "61%",
                                        fontSize: "3rem",
                                    },
                                    [theme.breakpoints.up("sm")]: {
                                        width: "85%",
                                        fontSize: "3rem",
                                    },
                                    [theme.breakpoints.up("xs")]: {
                                        width: "100%",
                                        fontSize: "1.6rem",
                                    },
                                }}
                            >
                                SİNANGİL İLE HAYAT{" "}
                                <span style={{ color: "#e96b65" }}>
                                    GLUTENSİZ
                                </span>{" "}
                                DE GÜZEL...
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                gutterBottom
                                component="div"
                                sx={{
                                    [theme.breakpoints.up("lg")]: {
                                        fontSize: "17px",
                                        marginTop: "25px",
                                    },
                                    [theme.breakpoints.up("md")]: {
                                        fontSize: "16px",
                                        marginTop: "25px",
                                    },
                                    [theme.breakpoints.up("sm")]: {
                                        fontSize: "14px",
                                        marginTop: "25px",
                                    },
                                    [theme.breakpoints.up("xs")]: {
                                        fontSize: "12px",
                                        marginTop: "25px",
                                    },
                                }}
                            >
                                Sinangil’in glutensiz yaşama değer katacak,
                                lezzetli ve sağlıklı ürün ailesi Gluten YOK
                                raflardaki yerini aldı! Sinangil’in glutensiz
                                hikayesi ise daha eski.
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                gutterBottom
                                component="div"
                                sx={{
                                    [theme.breakpoints.up("lg")]: {
                                        fontSize: "17px",
                                        marginTop: "25px",
                                    },
                                    [theme.breakpoints.up("md")]: {
                                        fontSize: "16px",
                                        marginTop: "25px",
                                    },
                                    [theme.breakpoints.up("sm")]: {
                                        fontSize: "14px",
                                        marginTop: "25px",
                                    },
                                    [theme.breakpoints.up("xs")]: {
                                        fontSize: "12px",
                                        marginTop: "25px",
                                    },
                                }}
                            >
                                Yıl 2006… Çölyakla Yaşam dernekleriyle iş
                                birliğine gidererek glutensiz yaşama destek
                                olmak amacıyla glutensiz un üretmeye başladık.
                                Türkiye’de bu alanda ilklerden biri olduk.
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                gutterBottom
                                component="div"
                                sx={{
                                    [theme.breakpoints.up("lg")]: {
                                        fontSize: "17px",
                                        marginTop: "25px",
                                    },
                                    [theme.breakpoints.up("md")]: {
                                        fontSize: "16px",
                                        marginTop: "25px",
                                    },
                                    [theme.breakpoints.up("sm")]: {
                                        fontSize: "14px",
                                        marginTop: "25px",
                                    },
                                    [theme.breakpoints.up("xs")]: {
                                        fontSize: "12px",
                                        marginTop: "25px",
                                    },
                                }}
                            >
                                Özenle ürettiğimiz Glutensiz Unlar çok sevildi,
                                güvenilirliği, kalitesi ve hesaplı fiyatıyla
                                kısa zamanda kalpleri kazandı. Sinangil olarak
                                glutensiz unlarımız ile yıllardır birbirinden
                                lezzetli ve sağlıklı sofraların kurulmasına
                                öncülük ediyoruz.
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                gutterBottom
                                component="div"
                                sx={{
                                    [theme.breakpoints.up("lg")]: {
                                        fontSize: "17px",
                                        marginTop: "25px",
                                    },
                                    [theme.breakpoints.up("md")]: {
                                        fontSize: "16px",
                                        marginTop: "25px",
                                    },
                                    [theme.breakpoints.up("sm")]: {
                                        fontSize: "14px",
                                        marginTop: "25px",
                                    },
                                    [theme.breakpoints.up("xs")]: {
                                        fontSize: "12px",
                                        marginTop: "25px",
                                    },
                                }}
                            >
                                Yıl 2022… Glutensiz unlarımızın yanına artık
                                yepyeni glutensiz ürünlerimizi eklemenin zamanı
                                gelmişti. Artık Sinangil var, Gluten YOK!
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Container
                maxWidth="md"
                sx={{
                    marginTop: "100px",
                    marginBottom: "50px",

                    position: "relative",
                    [theme.breakpoints.up("lg")]: {
                        marginTop: "100px",
                    },
                    [theme.breakpoints.up("md")]: { marginTop: "130px" },
                    [theme.breakpoints.up("sm")]: { marginTop: "140px" },
                    [theme.breakpoints.up("xs")]: {
                        marginTop: "100px",
                    },
                }}
            >
                <Grid container>
                    <Grid item lg={5} md={5} sm={5} xs={12}>
                        <Box
                            component="img"
                            src={markalayer}
                            sx={{
                                width: "100%",
                                height: "400px",
                            }}
                        />
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12}>
                        <Box>
                            <Typography
                                variant="h4"
                                gutterBottom
                                component="div"
                                sx={{
                                    [theme.breakpoints.up("lg")]: {
                                        width: "51%",
                                    },
                                    [theme.breakpoints.up("md")]: {
                                        width: "50%",
                                    },
                                    [theme.breakpoints.up("sm")]: {
                                        width: "60%",
                                    },
                                    [theme.breakpoints.up("xs")]: {
                                        width: "100%",
                                    },
                                }}
                            >
                                SİNANGİL’İN YENİ MARKASI{" "}
                                <span
                                    style={{
                                        background: "#b99eb9",
                                        color: "white",
                                        fontWeight: "bolder",
                                        fontSize: "45px",
                                        padding: "0px 10px",
                                    }}
                                >
                                    YOK
                                </span>
                                OLDU!
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                gutterBottom
                                component="div"
                                sx={{
                                    [theme.breakpoints.up("lg")]: {
                                        fontSize: "14px",
                                        paddingLeft: "10px",
                                    },
                                    [theme.breakpoints.up("md")]: {
                                        fontSize: "14px",
                                        paddingLeft: "10px",
                                    },
                                    [theme.breakpoints.up("sm")]: {
                                        fontSize: "14px",
                                        paddingLeft: "10px",
                                    },
                                    [theme.breakpoints.up("xs")]: {
                                        fontSize: "16px",
                                    },
                                }}
                            >
                                Şaşırmayın; çünkü Sinangil’in yeni Glutensiz
                                ürünlerinin ismi GLUTEN YOK. Tabii ismi YOK olan
                                ürünlerin lezzetleri damaklarınızda kalacak.
                                Glutensiz un alanındaki tecrübemizi ve
                                tüketicilerimizin markamıza duyduğu güveni şimdi
                                Sinangil Gluten Yok ürünlerimiz ile sizlerin
                                beğenisine sunuyoruz. Üstelik sektörde ilk defa
                                tek kullanımlık kullanıcı dostu ambalajlarımız
                                ile tazeliğini koruyan glutensiz kurabiye,
                                sandviç ekmeği, hamburger ekmeği gibi
                                birbirinden farklı ürünlerimizi ihtiyacınıza
                                uygun olarak tüketebilirsiniz.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Footer />
        </Box>
    );
};
