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
                            Sinangil ile hayat Glutensiz??de g??zel...
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
                            Glutensiz ya??ama art?? (+) de??erler katan Sinangil,
                            sofralar??nda lezzet ve sa??l??k arayanlar i??in
                            glutensiz ??r??nler ??retiyor.
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
                            Glutene kar???? hassasiyet ta????yan Sinangil, glutensiz
                            olarak ??retti??i fonksiyonel unlar ile lezzetli hamur
                            i??leri yapman??z?? sa??l??yor.
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
                            2006 y??l??ndan beri ????lyakla Ya??am Dernekleriyle
                            s??rd??r??len i?? birli??i ile glutensiz ya??ama destek
                            verme amac??yla ??retilmi?? olan Glutensiz Un, benzer
                            ??r??nlere g??re g??venilirli??i, kalitesi ve hesapl??
                            fiyat??yla ??ne ????k??yor.
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
                            Gluten ismi, unun suyla kar????t??????nda olu??turdu??u
                            tutkal benzeri ??zellikten t??remi??tir. Gluten, hamur
                            yap??m?? s??ras??nda olu??an ve hamurun b??t??nl??????n??
                            sa??layan elastik bir proteindir. Hamurda esnek bir
                            yap?? olu??turur. Gluten olmadan hamur mayalanmaz ve
                            kabarmaz. Bu y??zden, gluten i??in hamurun iskeleti
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
                            En yo??un gluten proteini, bu??dayda bulunmaktad??r.
                            Ayn?? zamanda arpa, ??avdar, yulaf, hububat, ekmek,
                            makarna, kraker, salata soslar??, pasta-kurabiye gibi
                            hamur i??leri ve bu??day??n kar??????m??ndan ??retilen
                            tah??llar??n i??inde de bulunur.
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: "50px" }}>
                        <Typography
                            variant="h6"
                            gutterBottom
                            component="div"
                            sx={{ color: "#bba0bb" }}
                        >
                            Kimler Gluten T??ketmemeli?
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                        >
                            Gluten, ??o??u insan i??in faydal?? bir proteindir.
                            Ancak belirli v??cut yap??s??na sahip olanlar i??in
                            ??e??itli reaksiyonlara yol a??abiliyor. Bu duruma
                            ??rnek olarak gluten duyarl??l??????, bu??day alerjisi ve
                            ????lyaktan s??z edilebilir. Bu hassasiyetlere sahip
                            ki??iler gluten t??ketmemelidir. Bu semptomlara sahip
                            olmayan insanlar gluten i??eren ??r??nler t??ketebilir.
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: "50px" }}>
                        <Typography
                            variant="h6"
                            gutterBottom
                            component="div"
                            sx={{ color: "#f2951c" }}
                        >
                            ????lyak/Glutene Kar???? Hassasiyet Nedir? Belirtileri
                            Nelerdir?
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                        >
                            ????lyak, gluten duyarl??l??????n??n en ??st seviyesidir.
                            Ba????????kl??k sistemi, gluteni zararl?? bir protein
                            olarak g??r??p, tedavi i??in glutene ve ayn?? zamanda
                            ba????rsak duvar??na sald??r??r. Bu durum ise ba????rsak
                            duvarlar??na zarar verdi??i i??in besin eksikli??i,
                            anemi ve sindirim sorunlar??na yol a??ar.
                            ????lyak/gl??tene kar???? hassasiyetin en b??y??k
                            belirtileri ise sindirim rahats??zl??????, ??i??kinlik,
                            ishal, kab??zl??k, ba?? a??r??s??, yorgunluk, deri
                            d??k??nt??leri, zay??flama ve depresyon gibi psikolojik
                            bozukluklard??r.
                        </Typography>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </Box>
    );
};
