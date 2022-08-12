import React from "react";
import Box from "@mui/material/Box";
import satisnoktalaribg from "../images/satisnoktalaribg.png";
import satisnoktalarimizbackground from "../images/satisnoktalarimizbackground.png";
import { Container, Typography } from "@mui/material";
import glutenfree from "../images/index3glutenfree.png";
import glutensizpaket1 from "../images/glutensizpaket1.png";
import glutensizdonut1 from "../images/glutensizdonut1.png";
import glutensizdonut2 from "../images/glutensizdonut2.png";
import glutensizwomen from "../images/index3women.png";
import glutensizbiscuit from "../images/glutensizbiscuit.png";
import glutensizdonut3 from "../images/glutensizdonut3.png";
import glutensizdonut4 from "../images/glutensizdonut4.png";
import glutensizdonut5 from "../images/glutensizdonut5.png";
import glutensizambalaj from "../images/glutensizambalaj.png";
import glutensizambalaj2 from "../images/glutensizambalaj2.png";
import { useTheme } from "@mui/material/styles";
import { Footer } from "./layout/Footer";
import { MiniHeader } from "./MiniHeader";
import "./iletisim.css";
import glutensizyasam from "../images/glutensiz_yasam.png";

export const GlutensizYasam = () => {
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
                    <Box component="img" src={glutensizyasam} />
                </Box>
            </Box>

            <Box
                sx={{
                    width: "70%",
                    height: 500,
                    backgroundColor: "#ebe96a",
                    marginTop: "100px",
                    marginBottom: "100px",
                    position: "relative",
                }}
            >
                <Box
                    component="img"
                    src={glutensizpaket1}
                    sx={{
                        position: "absolute",

                        [theme.breakpoints.up("lg")]: {
                            top: "-20%",
                            left: "0%",
                            width: "20%",
                        },
                        [theme.breakpoints.up("md")]: {
                            top: "-15%",
                            left: "0%",
                            width: "20%",
                        },
                        [theme.breakpoints.up("sm")]: {
                            top: "-10%",
                            left: "0%",
                            width: "20%",
                        },
                        [theme.breakpoints.up("xs")]: {
                            top: "-5%",
                            left: "0%",
                            width: "20%",
                        },
                    }}
                />
                <Box
                    className="rotate"
                    component="img"
                    src={glutensizdonut1}
                    sx={{
                        position: "absolute",
                        [theme.breakpoints.up("lg")]: {
                            top: "-10%",
                            left: "15%",
                            width: "8%",
                        },
                        [theme.breakpoints.up("md")]: {},
                        [theme.breakpoints.up("sm")]: {},
                        [theme.breakpoints.up("xs")]: {
                            top: "0%",
                            left: "15%",
                            width: "8%",
                        },
                    }}
                />
                <Box
                    className="rotate"
                    component="img"
                    src={glutensizbiscuit}
                    sx={{
                        position: "absolute",
                        [theme.breakpoints.up("lg")]: {
                            bottom: "0%",
                            right: "1%",
                            width: "15%",
                        },
                        [theme.breakpoints.up("md")]: {},
                        [theme.breakpoints.up("sm")]: {},
                        [theme.breakpoints.up("xs")]: {
                            bottom: "0%",
                            right: "1%",
                            width: "20%",
                        },
                    }}
                />
                <Box
                    component="img"
                    src={glutensizambalaj}
                    sx={{
                        position: "absolute",

                        zIndex: "1",
                        [theme.breakpoints.up("lg")]: {
                            bottom: "-13%",
                            left: "0%",
                            width: "12%",
                        },
                        [theme.breakpoints.up("md")]: {
                            bottom: "-9%",
                            left: "0%",
                            width: "12%",
                        },
                        [theme.breakpoints.up("sm")]: {
                            bottom: "-9%",
                            left: "0%",
                            width: "15%",
                        },
                        [theme.breakpoints.up("xs")]: {
                            bottom: "-6%",
                            left: "0%",
                            width: "20%",
                        },
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        [theme.breakpoints.up("lg")]: {
                            left: "14%",
                            bottom: "5%",
                            width: "70%",
                        },
                        [theme.breakpoints.up("md")]: {
                            left: "14%",
                            bottom: "5%",
                            width: "70%",
                        },
                        [theme.breakpoints.up("sm")]: {
                            left: "14%",
                            bottom: "5%",
                            width: "70%",
                        },
                        [theme.breakpoints.up("xs")]: {
                            left: "14%",
                            bottom: "5%",
                            width: "70%",
                        },
                    }}
                >
                    <Box
                        component="img"
                        src={glutenfree}
                        sx={{ width: "20%" }}
                    />
                    <Box>
                        <Typography
                            variant="h5"
                            gutterBottom
                            component="div"
                            sx={{
                                fontWeight: "bold",
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    fontSize: "15px",
                                },
                            }}
                        >
                            Sinangil ile hayat Glutensiz de güzel...
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                            sx={{
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    fontSize: "12px",
                                },
                            }}
                        >
                            Glutensiz yaşama artı (+) değerler katan Sinangil,
                            sofralarında lezzet ve sağlık arayanlar için
                            glutensiz ürünler üretiyor.
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                            sx={{
                                marginTop: "20px",
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    fontSize: "12px",
                                },
                            }}
                        >
                            Glutene karşı hassasiyet taşıyan Sinangil, glutensiz
                            olarak ürettiği fonksiyonel unlar ile lezzetli hamur
                            işleri yapmanızı sağlıyor.
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                            sx={{
                                marginTop: "20px",
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    fontSize: "12px",
                                },
                            }}
                        >
                            2006 yılından beri Çölyakla Yaşam Dernekleriyle
                            sürdürülen iş birliği ile glutensiz yaşama destek
                            verme amacıyla üretilmiş olan Glutensiz Un, benzer
                            ürünlere göre güvenilirliği, kalitesi ve hesaplı
                            fiyatıyla öne çıkıyor.
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ position: "relative", marginBottom: "50px" }}>
                <Box
                    component="img"
                    className="glutensizdonut4 rotate"
                    src={glutensizdonut4}
                    sx={{
                        position: "absolute",
                        [theme.breakpoints.up("lg")]: {
                            bottom: "30%",
                            left: "0%",
                            width: "6%",
                        },
                        [theme.breakpoints.up("md")]: {
                            bottom: "24%",
                            left: "0%",
                            width: "3%",
                        },
                        [theme.breakpoints.up("sm")]: {
                            bottom: "25%",
                            left: "0%",
                            width: "5%",
                        },
                        [theme.breakpoints.up("xs")]: {
                            bottom: "30%",
                            left: "0%",
                            width: "10%",
                        },
                    }}
                />
                <Box
                    className="rotate"
                    component="img"
                    src={glutensizdonut5}
                    sx={{
                        position: "absolute",

                        [theme.breakpoints.up("lg")]: {
                            bottom: "5%",
                            left: "0%",
                            width: "3%",
                        },
                        [theme.breakpoints.up("md")]: {},
                        [theme.breakpoints.up("sm")]: {
                            bottom: "-7%",
                            left: "0%",
                            width: "2%",
                        },
                        [theme.breakpoints.up("xs")]: {
                            bottom: "-4%",
                            left: "0%",
                            width: "5%",
                        },
                    }}
                />
                <Box
                    component="img"
                    src={glutensizambalaj2}
                    sx={{
                        position: "absolute",

                        [theme.breakpoints.up("lg")]: {
                            bottom: "45%",
                            right: "0%",
                            width: "10%",
                        },
                        [theme.breakpoints.up("md")]: {
                            bottom: "44%",
                            right: "0%",
                            width: "10%",
                        },
                        [theme.breakpoints.up("sm")]: {
                            bottom: "45%",
                            right: "0%",
                            width: "13%",
                        },
                        [theme.breakpoints.up("xs")]: {
                            bottom: "55%",
                            right: "0%",
                            width: "17%",
                        },
                    }}
                />
                <Container maxWidth="lg">
                    <Box>
                        <Typography
                            variant="h6"
                            gutterBottom
                            component="div"
                            sx={{ color: "#e96b65" }}
                        >
                            Gluten Nedir?
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                        >
                            Gluten ismi, unun suyla karıştığında oluşturduğu
                            tutkal benzeri özellikten türemiştir. Gluten, hamur
                            yapımı sırasında oluşan ve hamurun bütünlüğünü
                            sağlayan elastik bir proteindir. Hamurda esnek bir
                            yapı oluşturur. Gluten olmadan hamur mayalanmaz ve
                            kabarmaz. Bu yüzden, gluten için hamurun iskeleti
                            diyebiliriz.
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: "50px" }}>
                        <Typography
                            variant="h6"
                            gutterBottom
                            component="div"
                            sx={{ color: "#96c4ec" }}
                        >
                            Gluten Hangi Besinlerde Bulunur?
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                        >
                            En yoğun gluten proteini, buğdayda bulunmaktadır.
                            Aynı zamanda arpa, çavdar, yulaf, hububat, ekmek,
                            makarna, kraker, salata sosları, pasta-kurabiye gibi
                            hamur işleri ve buğdayın karışımından üretilen
                            tahılların içinde de bulunur.
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: "50px" }}>
                        <Typography
                            variant="h6"
                            gutterBottom
                            component="div"
                            sx={{ color: "#bba0bb" }}
                        >
                            Kimler Gluten Tüketmemeli?
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                        >
                            Gluten, çoğu insan için faydalı bir proteindir.
                            Ancak belirli vücut yapısına sahip olanlar için
                            çeşitli reaksiyonlara yol açabiliyor. Bu duruma
                            örnek olarak gluten duyarlılığı, buğday alerjisi ve
                            çölyaktan söz edilebilir. Bu hassasiyetlere sahip
                            kişiler gluten tüketmemelidir. Bu semptomlara sahip
                            olmayan insanlar gluten içeren ürünler tüketebilir.
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: "50px" }}>
                        <Typography
                            variant="h6"
                            gutterBottom
                            component="div"
                            sx={{ color: "#f2951c" }}
                        >
                            Çölyak/Glutene Karşı Hassasiyet Nedir? Belirtileri
                            Nelerdir?
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                        >
                            Çölyak, gluten duyarlılığının en üst seviyesidir.
                            Bağışıklık sistemi, gluteni zararlı bir protein
                            olarak görüp, tedavi için glutene ve aynı zamanda
                            bağırsak duvarına saldırır. Bu durum ise bağırsak
                            duvarlarına zarar verdiği için besin eksikliği,
                            anemi ve sindirim sorunlarına yol açar.
                            Çölyak/glütene karşı hassasiyetin en büyük
                            belirtileri ise sindirim rahatsızlığı, şişkinlik,
                            ishal, kabızlık, baş ağrısı, yorgunluk, deri
                            döküntüleri, zayıflama ve depresyon gibi psikolojik
                            bozukluklardır.
                        </Typography>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </Box>
    );
};
