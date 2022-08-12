import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import markabg from "../images/markabg.png";
import urunlerimizsagbg from "../images/urunlerimizsagbg.png";
import urunlerimizsolbg from "../images/urunlerimizsolbg.png";
import detayglutenfree1 from "../images/detayglutenfree1.png";
import { useTheme } from "@mui/material/styles";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import CloseIcon from "@mui/icons-material/Close";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Footer } from "./layout/Footer";
import { MiniHeader } from "./MiniHeader";
import batonekmek from "../images/karabugdaybatonekmek01.png";
import dilimlitostekm from "../images/dilimlitostekm.png";
import hamburgerekmegi01 from "../images/hamburgerekmegi01.png";
import hindistancevkur from "../images/hindistancevkur.png";
import kusuzumlukur01 from "../images/kusuzumlukur01.png";
import hindistankurabiye from "../images/M80A9445.png";
import sandvicekmegi01 from "../images/sandvicekmegi01.png";
import susamlıcorekotlukur01 from "../images/susamlicorekotlukur01.png";
import kusuzumluteklikurabiye from "../images/M80A9462.png";
import Zerdecallıkbiberlikur01 from "../images/Zerdecallikbiberlikur01.png";
import "./iletisim.css";
import urunlerimiz from "../images/urunlerimiz.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: "KARABUĞDAYLI BATON EKMEĞİ",
        desc: "Glutensiz Baton ekmeğimizi mısır nişastası, mısır unu, pirinç unu, sorgum unu ve karabuğday unundan oluşan özel bir un tarifiyle üretiyoruz. Lezzet ve besin değerini arttırması için %2 oranında filizlenmiş karabuğday taneleri de eklendi.",
        icindekiler:
            "*Ürünümüz yumurta, süt ve süt ürünleri içerir, eser miktarda susam içerebilir.",
        tavsiye:
            "*Baton ekmeğimizi ısıtarak sıcacık tüketmenizi tavsiye ederiz. Mikrodalga fırında 1 dk veya fırında 180-200 derecede 1-2 dakika ısıtabilirsiniz.",
        imgPath: `${batonekmek}`,
        id: 0,
    },
    {
        label: "DİLİMLİ TOST EKMEĞİ",
        desc: "Glutensiz Dilimli Tost ekmeğimizi mısır nişastası, mısır unu, pirinç unu ve sorgum unundan oluşan özel bir un tarifiyle üretiyoruz. Dilimli tost ekmeğimiz, farklı zamanlarda aynı tazelikte tüketilebilmeniz için kolay ayrılabilen 4 parçalı aç-bitir ambalajında!",
        icindekiler:
            "*Ürünümüz yumurta, süt ve süt ürünleri içerir, eser miktarda susam içerebilir.",
        tavsiye:
            "*Dilimli tost ekmeğimizi ısıtarak sıcacık tüketmenizi tavsiye ederiz. Mikrodalga fırında 1 dk veya fırında 180-200 derecede 1-2 dakika ısıtabilirsiniz",
        imgPath: `${dilimlitostekm}`,
        id: 1,
    },
    {
        label: "HAMBURGER EKMEĞİ",
        desc: "Glutensiz Hamburger Ekmeğimizi mısır nişastası, mısır unu, pirinç unu ve sorgum unundan oluşan özel bir un tarifiyle üretmekteyiz. Sandviç ekmeğimiz, farklı zamanlarda aynı tazelikte tüketilebilmeniz için kolay ayrılabilen 4 parçalı aç-bitir ambalajında ve içine istediğiniz malzemeyi hemen koyabilmeniz için kesilmiş halde",
        icindekiler:
            "*Ürünümüz yumurta, süt ve süt ürünleri içerir, eser miktarda susam içerebilir.",
        tavsiye:
            "*Dilimli tost ekmeğimizi ısıtarak sıcacık tüketmenizi tavsiye ederiz. Mikrodalga fırında 1 dk veya fırında 180-200 derecede 1-2 dakika ısıtabilirsiniz",
        imgPath: `${hamburgerekmegi01}`,
        id: 2,
    },
    {
        label: "SANDVİÇ EKMEĞİ",
        desc: "Glutensiz Sandviç Ekmeğimizi mısır nişastası, mısır unu, pirinç unu ve sorgum unundan oluşan özel bir tarifiyle üretiyoruz. Sandviç ekmeğimiz, farklı zamanlarda aynı tazelikte tüketilebilmeniz için kolay ayrılabilen 4 parçalı aç-bitir ambalajında ve içine istediğiniz malzemeyi hemen koyabilmeniz için kesilmiş halde!",
        icindekiler:
            "*Ürünümüz yumurta, süt ve süt ürünleri içerir, eser miktarda susam içerebilir.",
        tavsiye:
            "*Dilimli tost ekmeğimizi ısıtarak sıcacık tüketmenizi tavsiye ederiz. Mikrodalga fırında 1 dk veya fırında 180-200 derecede 1-2 dakika ısıtabilirsiniz",
        imgPath: `${sandvicekmegi01}`,
        id: 3,
    },
    {
        label: "HİNDİSTAN CEVİZLİ TATLI KURABİYE",
        desc: "Gluten YOK’un tüm kurabiyeleri aynı zamanda tekli paketlerde, hemen aç, hemen ye!",
        icindekiler:
            "*Ürünümüz yumurta, süt ve süt ürünleri içerir, eser miktarda susam içerebilir.",
        tavsiye:
            "*Dilimli tost ekmeğimizi ısıtarak sıcacık tüketmenizi tavsiye ederiz. Mikrodalga fırında 1 dk veya fırında 180-200 derecede 1-2 dakika ısıtabilirsiniz",
        imgPath: `${hindistancevkur}`,
        id: 4,
    },
    {
        label: "KUŞ ÜZÜMLÜ KURABİYE",
        desc: "Glutensiz Kuş Üzümlü Kurabiyemizi mısır nişastası, mısır unu, pirinç unu ve sorgum unundan oluşan özel bir un tarifiyle üretmekteyiz. Kuş üzümü ile özel olarak lezzetlendirdiğimiz kurabiyelerimizi iki gözlü ambalajıyla farklı zamanlarda taze bir şekilde tüketebilirsiniz.",
        icindekiler:
            "*Ürünümüz yumurta, süt ve süt ürünleri içerir, eser miktarda susam içerebilir.",
        imgPath: `${kusuzumlukur01}`,
        id: 5,
    },

    {
        label: "SUSAMLI ÇÖREK OTLU KURABİYE",
        desc: "Glutensiz Susamlı ve Çörek Otlu Kurabiyemizi mısır nişastası, mısır unu, pirinç unu ve sorgum unundan oluşan özel bir un tarifiyle üretmekteyiz. Susam ve çörek otu ile harmanladığımız kurabiyelerimizi iki gözlü ambalajıyla farklı zamanlarda taze bir şekilde tüketebilirsiniz.",
        icindekiler:
            "*Ürünümüz yumurta, süt ve süt ürünleri içerir, eser miktarda susam içerebilir.",
        imgPath: `${susamlıcorekotlukur01}`,
        id: 6,
    },

    {
        label: "ZERDEÇALLI KIRMIZI BİBERLİ",
        desc: "Glutensiz Zerdeçallı ve Kırmızı Biberli Kurabiyemizi mısır nişastası, mısır unu, pirinç unu ve sorgum unundan oluşan özel bir un tarifiyle üretmekteyiz. Zerdeçal ve kırmızı biber harmanıyla lezzetlendirdiğimiz kurabiyelerimizi iki gözlü ambalajıyla farklı zamanlarda taze bir şekilde tüketebilirsiniz.",
        icindekiler:
            "*Ürünümüz yumurta, süt ve süt ürünleri içerir, eser miktarda susam içerebilir.",
        imgPath: `${Zerdecallıkbiberlikur01}`,
        id: 7,
    },
    {
        label: "KUŞ ÜZÜMLÜ TEKLİ KURABİYE",
        desc: "",
        icindekiler:
            "*Ürünümüz yumurta, süt ve süt ürünleri içerir, eser miktarda susam içerebilir.",
        imgPath: `${kusuzumluteklikurabiye}`,
        id: 8,
    },
    {
        label: "HİNDİSTAN CEVİZLİ TATLI KURABİYE",
        desc: "Glutensiz Hindistan Cevizli Tatlı Kurabiyemizi mısır nişastası, mısır unu, pirinç unu ve sorgum unundan oluşan özel bir un tarifiyle üretmekteyiz. Hindistan ceviziyle özel olarak lezzetlendirdiğimiz kurabiyelerimizi iki gözlü ambalajıyla farklı zamanlarda taze bir şekilde tüketebilirsiniz.",
        icindekiler:
            "*Ürünümüz yumurta, süt ve süt ürünleri içerir, eser miktarda susam içerebilir.",
        imgPath: `${hindistankurabiye}`,
        id: 9,
    },
];

export const Urunlerimiz = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box>
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
                    <Box component="img" src={urunlerimiz} />
                </Box>
            </Box>
            <Container
                maxWidth="lg"
                sx={{ marginTop: "25px", marginBottom: "50px" }}
            >
                <Grid container spacing={2}>
                    {images.map((image) => {
                        return (
                            <Grid
                                sx={{ cursor: "pointer" }}
                                item
                                key={image.id}
                                lg={3}
                                md={4}
                                sm={6}
                                xs={6}
                            >
                                <Popup
                                    trigger={
                                        <Box>
                                            <Box
                                                sx={{
                                                    width: "100%",
                                                    height: "326px",
                                                    background: "#f7f7f7",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    [theme.breakpoints.up(
                                                        "lg"
                                                    )]: {
                                                        height: "326px",
                                                    },
                                                    [theme.breakpoints.up(
                                                        "md"
                                                    )]: {
                                                        height: "326px",
                                                    },
                                                    [theme.breakpoints.up(
                                                        "sm"
                                                    )]: {
                                                        height: "326px",
                                                    },
                                                    [theme.breakpoints.up(
                                                        "xs"
                                                    )]: {
                                                        height: "123px",
                                                    },
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src={image.imgPath}
                                                    sx={{ width: "100%" }}
                                                />
                                            </Box>
                                            <Box
                                                sx={{
                                                    textAlign: "center",
                                                    fontSize: "13px",
                                                    fontWeight: "bold",
                                                    padding: "10px 0px",
                                                    fontFamily:
                                                        "Montserrat, sans-serif",
                                                }}
                                            >
                                                {image.label}
                                            </Box>
                                        </Box>
                                    }
                                    modal={true}
                                >
                                    {(close) => (
                                        <Box
                                            className="popup"
                                            sx={{
                                                background: `white`,
                                                width: "100%",
                                                display: "flex",
                                                [theme.breakpoints.up("lg")]: {
                                                    height: "600px",
                                                },
                                                [theme.breakpoints.up("md")]: {
                                                    height: "500px",
                                                    flexDirection: "row",
                                                },
                                                [theme.breakpoints.up("sm")]: {
                                                    height: "500px",
                                                    flexDirection: "column",
                                                },
                                                [theme.breakpoints.up("xs")]: {
                                                    height: "500px",
                                                    flexDirection: "column",
                                                },
                                            }}
                                        >
                                            <CloseIcon
                                                sx={{
                                                    position: "absolute",
                                                    right: "0%",
                                                    top: "0%",
                                                    zIndex: "1",
                                                }}
                                                onClick={close}
                                            />
                                            <Box
                                                sx={{
                                                    flexGrow: 1,
                                                    height: "100%",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    flexDirection: "column",
                                                    position: "relative",
                                                    background: "#f7f7f7",
                                                    [theme.breakpoints.up(
                                                        "lg"
                                                    )]: {
                                                        width: "50%",
                                                    },
                                                    [theme.breakpoints.up(
                                                        "md"
                                                    )]: {
                                                        width: "50%",
                                                    },
                                                    [theme.breakpoints.up(
                                                        "sm"
                                                    )]: {
                                                        width: "100%",
                                                    },
                                                    [theme.breakpoints.up(
                                                        "xs"
                                                    )]: {
                                                        width: "100%",
                                                    },
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    sx={{
                                                        height: 233,
                                                        width: 350,
                                                    }}
                                                    alt="The house from the offer."
                                                    src={image.imgPath}
                                                />
                                            </Box>
                                            <Box
                                                sx={{
                                                    padding: "50px 10px",
                                                    display: "flex",
                                                    flexWrap: "wrap",
                                                    alignContent:
                                                        "space-between",
                                                    [theme.breakpoints.up(
                                                        "lg"
                                                    )]: {
                                                        padding: "50px 10px",
                                                        width: "50%",
                                                        overflowY: "none",
                                                    },
                                                    [theme.breakpoints.up(
                                                        "md"
                                                    )]: {
                                                        padding: "10px 10px",
                                                        width: "50%",
                                                        overflowY: "none",
                                                    },
                                                    [theme.breakpoints.up(
                                                        "sm"
                                                    )]: {
                                                        padding: "10px 2px",
                                                        width: "100%",
                                                        overflowY: "scroll",
                                                    },
                                                    [theme.breakpoints.up(
                                                        "xs"
                                                    )]: {
                                                        padding: "10px 2px",
                                                        width: "100%",
                                                        overflowY: "scroll",
                                                    },
                                                }}
                                            >
                                                <Typography
                                                    variant="h5"
                                                    gutterBottom
                                                    component="div"
                                                    sx={{
                                                        color: "#d7a54d",
                                                        fontWeight: "bold",
                                                        [theme.breakpoints.up(
                                                            "lg"
                                                        )]: {
                                                            fontSize: "1.5rem",
                                                        },
                                                        [theme.breakpoints.up(
                                                            "md"
                                                        )]: {
                                                            fontSize: "1.2rem",
                                                        },
                                                        [theme.breakpoints.up(
                                                            "sm"
                                                        )]: {
                                                            fontSize: "1.1rem",
                                                        },
                                                        [theme.breakpoints.up(
                                                            "xs"
                                                        )]: {
                                                            fontSize: "1.0rem",
                                                        },
                                                    }}
                                                >
                                                    {image.label}
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    gutterBottom
                                                    component="div"
                                                    sx={{
                                                        fontWeight: "bold",
                                                        [theme.breakpoints.up(
                                                            "lg"
                                                        )]: {
                                                            fontSize: "13px",
                                                        },
                                                        [theme.breakpoints.up(
                                                            "md"
                                                        )]: {
                                                            fontSize: "12px",
                                                        },
                                                        [theme.breakpoints.up(
                                                            "sm"
                                                        )]: {
                                                            fontSize: "12px",
                                                        },
                                                        [theme.breakpoints.up(
                                                            "xs"
                                                        )]: {
                                                            fontSize: "11px",
                                                        },
                                                    }}
                                                >
                                                    {image.desc}
                                                </Typography>
                                                <Box>
                                                    <Accordion
                                                        elevation={0}
                                                        sx={{
                                                            background:
                                                                "transparent",
                                                        }}
                                                    >
                                                        <AccordionSummary
                                                            expandIcon={
                                                                <ExpandMoreIcon />
                                                            }
                                                            aria-controls="panel1a-content"
                                                            id="panel1a-header"
                                                        >
                                                            <Typography
                                                                sx={{
                                                                    [theme.breakpoints.up(
                                                                        "lg"
                                                                    )]: {
                                                                        fontSize:
                                                                            "1rem",
                                                                    },
                                                                    [theme.breakpoints.up(
                                                                        "md"
                                                                    )]: {
                                                                        fontSize:
                                                                            "1rem",
                                                                    },
                                                                    [theme.breakpoints.up(
                                                                        "sm"
                                                                    )]: {
                                                                        fontSize:
                                                                            "0.9rem",
                                                                    },
                                                                    [theme.breakpoints.up(
                                                                        "xs"
                                                                    )]: {
                                                                        fontSize:
                                                                            "0.8rem",
                                                                    },
                                                                }}
                                                            >
                                                                İçindekiler
                                                            </Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography
                                                                sx={{
                                                                    [theme.breakpoints.up(
                                                                        "lg"
                                                                    )]: {
                                                                        fontSize:
                                                                            "12px",
                                                                    },
                                                                    [theme.breakpoints.up(
                                                                        "md"
                                                                    )]: {
                                                                        fontSize:
                                                                            "12px",
                                                                    },
                                                                    [theme.breakpoints.up(
                                                                        "sm"
                                                                    )]: {
                                                                        fontSize:
                                                                            "11px",
                                                                    },
                                                                    [theme.breakpoints.up(
                                                                        "xs"
                                                                    )]: {
                                                                        fontSize:
                                                                            "10px",
                                                                    },
                                                                }}
                                                            >
                                                                {
                                                                    image.icindekiler
                                                                }
                                                            </Typography>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                    <Accordion
                                                        elevation={0}
                                                        sx={{
                                                            background:
                                                                "transparent",
                                                        }}
                                                    >
                                                        <AccordionSummary
                                                            expandIcon={
                                                                <ExpandMoreIcon />
                                                            }
                                                            aria-controls="panel2a-content"
                                                            id="panel2a-header"
                                                        >
                                                            <Typography
                                                                sx={{
                                                                    [theme.breakpoints.up(
                                                                        "lg"
                                                                    )]: {
                                                                        fontSize:
                                                                            "1rem",
                                                                    },
                                                                    [theme.breakpoints.up(
                                                                        "md"
                                                                    )]: {
                                                                        fontSize:
                                                                            "1rem",
                                                                    },
                                                                    [theme.breakpoints.up(
                                                                        "sm"
                                                                    )]: {
                                                                        fontSize:
                                                                            "0.9rem",
                                                                    },
                                                                    [theme.breakpoints.up(
                                                                        "xs"
                                                                    )]: {
                                                                        fontSize:
                                                                            "0.8rem",
                                                                    },
                                                                }}
                                                            >
                                                                Kullanım
                                                                Tavsiyesi
                                                            </Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography
                                                                sx={{
                                                                    [theme.breakpoints.up(
                                                                        "lg"
                                                                    )]: {
                                                                        fontSize:
                                                                            "12px",
                                                                    },
                                                                    [theme.breakpoints.up(
                                                                        "md"
                                                                    )]: {
                                                                        fontSize:
                                                                            "12px",
                                                                    },
                                                                    [theme.breakpoints.up(
                                                                        "sm"
                                                                    )]: {
                                                                        fontSize:
                                                                            "11px",
                                                                    },
                                                                    [theme.breakpoints.up(
                                                                        "xs"
                                                                    )]: {
                                                                        fontSize:
                                                                            "10px",
                                                                    },
                                                                }}
                                                            >
                                                                {image.tavsiye}
                                                            </Typography>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </Box>
                                                <Box>
                                                    <Box
                                                        component="img"
                                                        sx={{ width: "100%" }}
                                                        src={detayglutenfree1}
                                                    />
                                                </Box>
                                            </Box>
                                        </Box>
                                    )}
                                </Popup>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>

            <Grid container spacing={2} sx={{ marginBottom: "50px" }}>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Box
                        sx={{
                            background: `url(${urunlerimizsolbg})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            width: "100%",
                            [theme.breakpoints.up("lg")]: { height: "300px" },
                            [theme.breakpoints.up("md")]: { height: "170px" },
                            [theme.breakpoints.up("sm")]: { height: "170px" },
                            [theme.breakpoints.up("xs")]: { height: "127px" },
                        }}
                    ></Box>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Box
                        sx={{
                            background: `url(${urunlerimizsagbg})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            width: "100%",
                            [theme.breakpoints.up("lg")]: { height: "300px" },
                            [theme.breakpoints.up("md")]: { height: "170px" },
                            [theme.breakpoints.up("sm")]: { height: "170px" },
                            [theme.breakpoints.up("xs")]: { height: "103px" },
                        }}
                    ></Box>
                </Grid>
            </Grid>

            <Footer />
        </Box>
    );
};
