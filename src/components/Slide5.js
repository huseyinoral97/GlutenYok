import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import {
    Button,
    Container,
    Grid,
    TextareaAutosize,
    Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./iletisim.css";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useSnackbar } from "notistack";
import LoadingButton from "@mui/lab/LoadingButton";
import yesil from "../images/yesil.png";
import pembe from "../images/pembe.png";
import axiosClient from "../utils/axiosClient";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

export const Slide5 = () => {
    const theme = useTheme();
    const form = useRef();
    const [expanded, setExpanded] = React.useState(false);
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [textareaSizeValidation, setTextareaSizeValidation] = useState("");

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const onChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };

    const [value, setValue] = useState({
        ad: "",
        soyad: "",
        telefon: "",
        eposta: "",
        mesaj: "",
    });

    const handleSubmit = () => {};

    const postContactForm = () => {
        if (value.mesaj === "") {
            console.log(value.mesaj);
            setTextareaSizeValidation("Mesaj alanı zorunludur.");
            return;
        }
        setLoading(true);
        axiosClient
            .post("api/contact/", value)
            .then(function (response) {
                enqueueSnackbar("Formunuz başarıyla gönderildi.");
                setValue({
                    ad: "",
                    soyad: "",
                    telefon: "",
                    mesaj: "",
                    eposta: "",
                });
                setTextareaSizeValidation("");
                setLoading(false);
            })
            .catch(function (error) {
                enqueueSnackbar("Bir hata oluştu!");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Box className="slide5 five" sx={{ position: "relative" }}>
            <Container
                className="ssscontainer"
                maxWidth="sm"
                sx={{
                    overflowY: "scroll",
                    overflowY: "hidden",
                    overflowX: "hidden",

                    [theme.breakpoints.up("lg")]: {
                        padding: "43px 0px",
                        width: "100%",
                        height: "50%",
                    },
                    [theme.breakpoints.up("md")]: {
                        padding: "43px 20px",
                        width: "100%",
                        height: "50%",
                    },
                    [theme.breakpoints.up("sm")]: {
                        padding: "43px 10px",
                        width: "100%",
                        height: "50%",
                        display: "block",
                        background: `none`,
                    },
                    [theme.breakpoints.up("xs")]: {
                        padding: "25px 45px",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "start",
                        justifyContent: "start",
                        flexDirection: "column",
                        background: `url("${pembe}")`,
                    },
                }}
            >
                <Typography
                    className="sss-title"
                    variant="h4"
                    gutterBottom
                    component="div"
                    sx={{
                        color: "white",
                        fontWeight: "500",
                        borderBottom: "3px solid white",
                        width: "fit-content",
                        [theme.breakpoints.up("lg")]: {
                            fontSize: "26px",
                        },
                        [theme.breakpoints.up("md")]: {
                            fontSize: "23px",
                        },
                        [theme.breakpoints.up("sm")]: {
                            fontSize: "20px",
                            marginBottom: "0px",
                        },
                        [theme.breakpoints.up("xs")]: {
                            fontSize: "26px",
                            marginBottom: "25px",
                        },
                    }}
                >
                    Sıkça Sorulan Sorular
                </Typography>
                <Accordion
                    elevation={0}
                    sx={{
                        background: "transparent",
                        [theme.breakpoints.up("lg")]: {
                            display: "block",
                        },
                        [theme.breakpoints.up("md")]: { display: "block" },
                        [theme.breakpoints.up("sm")]: { display: "block" },
                        [theme.breakpoints.up("xs")]: { display: "block" },
                    }}
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                >
                    <AccordionSummary
                        sx={{ padding: "0px" }}
                        expandIcon={
                            <ExpandMoreIcon
                                sx={{
                                    color: "white",
                                    borderBottom: "1px solid white",
                                    [theme.breakpoints.up("lg")]: {
                                        fontSize: "20px",
                                    },
                                    [theme.breakpoints.up("md")]: {
                                        fontSize: "17",
                                    },
                                    [theme.breakpoints.up("sm")]: {
                                        fontSize: "13px",
                                    },
                                    [theme.breakpoints.up("xs")]: {
                                        fontSize: "12px",
                                    },
                                }}
                            />
                        }
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            component="div"
                            sx={{
                                color: "white",
                                borderBottom: "1px solid white",
                                fontWeight: "500",
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "16px",
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "12px",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    fontSize: "12px",
                                },
                            }}
                        >
                            Çölyak Hastalığı Nedir?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            sx={{
                                color: "white",
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "12px",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    fontSize: "12px",
                                },
                            }}
                        >
                            Çölyak hastalığı genetik olarak duyarlı kişilerde
                            başlıca buğday, arpa, çavdar, yulaf gibi tahıllarda
                            bulunan gluten proteinine karşı kalıcı intolerans
                            olarak gelişen bir ince bağırsak hastalığıdır.
                            Çölyak hastası olan birey gluten içeren bir ürün
                            tükettiğinde ince bağırsaklarda besin emilimini
                            sağlayan villus adlı yapılarda alerjik reaksiyonlar
                            çıkar. Bu alerjik reaksiyonların sonucu ince
                            bağırsakların kıvrımlı yapısı zarar görür ve besin
                            emilimi sekteye uğrar. Bu duruma bağlı olarak
                            vücutta çeşitli rahatsızlıklar ortaya çıkmaktadır.
                            Çölyak hastalığının bir tedavisi bulunmamakta ve
                            hastalığın etkilerinin ortaya çıkmaması için sıkı
                            bir glutensiz beslenme diyeti uygulanması
                            gerekmektedir.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    elevation={0}
                    sx={{
                        background: "transparent",
                        [theme.breakpoints.up("lg")]: {
                            display: "block",
                        },
                        [theme.breakpoints.up("md")]: { display: "block" },
                        [theme.breakpoints.up("sm")]: { display: "block" },
                        [theme.breakpoints.up("xs")]: { display: "block" },
                    }}
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                >
                    <AccordionSummary
                        sx={{ padding: "0px" }}
                        expandIcon={
                            <ExpandMoreIcon
                                sx={{
                                    color: "white",
                                    borderBottom: "1px solid white",
                                    [theme.breakpoints.up("lg")]: {
                                        fontSize: "20px",
                                    },
                                    [theme.breakpoints.up("md")]: {
                                        fontSize: "17",
                                    },
                                    [theme.breakpoints.up("sm")]: {
                                        fontSize: "13px",
                                    },
                                    [theme.breakpoints.up("xs")]: {
                                        fontSize: "12px",
                                    },
                                }}
                            />
                        }
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            component="div"
                            sx={{
                                color: "white",
                                borderBottom: "1px solid white",
                                fontWeight: "500",
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "16px",
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "12px",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    fontSize: "12px",
                                },
                            }}
                        >
                            Gluten Yok Nedir?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            sx={{
                                color: "white",
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "12px",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    fontSize: "12px",
                                },
                            }}
                        >
                            Sinangil’in gluten intoleransı olan ve glutensiz
                            diyet yapmak istiyenlerin günlük hayatta ihtiyaç
                            duyabileceği ekmek çeşitlerini ve kurabiyeleri
                            ürettiği markanın adı GLUTEN YOK’tur.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    elevation={0}
                    sx={{
                        background: "transparent",
                        [theme.breakpoints.up("lg")]: {
                            display: "block",
                        },
                        [theme.breakpoints.up("md")]: { display: "block" },
                        [theme.breakpoints.up("sm")]: { display: "block" },
                        [theme.breakpoints.up("xs")]: { display: "none" },
                    }}
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                >
                    <AccordionSummary
                        sx={{ padding: "0px" }}
                        expandIcon={
                            <ExpandMoreIcon
                                sx={{
                                    color: "white",
                                    borderBottom: "1px solid white",
                                    [theme.breakpoints.up("lg")]: {
                                        fontSize: "20px",
                                    },
                                    [theme.breakpoints.up("md")]: {
                                        fontSize: "17",
                                    },
                                    [theme.breakpoints.up("sm")]: {
                                        fontSize: "12px",
                                    },
                                    [theme.breakpoints.up("xs")]: {
                                        fontSize: "13px",
                                    },
                                }}
                            />
                        }
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            component="div"
                            sx={{
                                color: "white",
                                borderBottom: "1px solid white",
                                fontWeight: "500",
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "16px",
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "12px",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    fontSize: "12px",
                                },
                            }}
                        >
                            Glutensiz ürünlerimizi kimler tüketebilir?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            sx={{
                                color: "white",
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "12px",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    fontSize: "12px",
                                },
                            }}
                        >
                            Gluten tüketimiyle ortaya çıkan sağlık
                            problemlerinin yaşanmaması için gluten intoleransı
                            olan kişiler, huzursuz bağırsak sendromu olan
                            kişiler ile beslenme diyetinde gluten olmasını
                            istemeyen kişiler ürünlerimizi rahatlıkla
                            kullanabilirler. Ürünlerimizin süt, yumurta ve susam
                            içerdiğinden dolayı bu ürünlere alerjisi olan
                            kişilerin dikkatli olması gerekmektedir.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    elevation={0}
                    sx={{
                        background: "transparent",
                        [theme.breakpoints.up("lg")]: {
                            display: "none",
                        },
                        [theme.breakpoints.up("md")]: { display: "none" },
                        [theme.breakpoints.up("sm")]: { display: "none" },
                        [theme.breakpoints.up("xs")]: { display: "block" },
                    }}
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                >
                    <AccordionSummary
                        sx={{ padding: "0px" }}
                        expandIcon={
                            <ExpandMoreIcon
                                sx={{
                                    color: "white",
                                    borderBottom: "1px solid white",
                                    [theme.breakpoints.up("lg")]: {
                                        fontSize: "20px",
                                    },
                                    [theme.breakpoints.up("md")]: {
                                        fontSize: "17",
                                    },
                                    [theme.breakpoints.up("sm")]: {
                                        fontSize: "12px",
                                    },
                                    [theme.breakpoints.up("xs")]: {
                                        fontSize: "13px",
                                    },
                                }}
                            />
                        }
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            component="div"
                            sx={{
                                color: "white",
                                borderBottom: "1px solid white",
                                fontWeight: "500",
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "16px",
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "12px",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    fontSize: "12px",
                                },
                            }}
                        >
                            Sağlıklı bireyler Gluten Yok markalı ürünleri
                            tüketebilirler mi?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            sx={{
                                color: "white",
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "12px",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    fontSize: "12px",
                                },
                            }}
                        >
                            Gluten Yok markalı ürünleri sağlıklı bireylerde
                            tüketebilmektedirler.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    elevation={0}
                    sx={{
                        background: "transparent",
                        [theme.breakpoints.up("lg")]: {
                            display: "none",
                        },
                        [theme.breakpoints.up("md")]: { display: "none" },
                        [theme.breakpoints.up("sm")]: { display: "none" },
                        [theme.breakpoints.up("xs")]: { display: "block" },
                    }}
                    expanded={expanded === "panel5"}
                    onChange={handleChange("panel5")}
                >
                    <AccordionSummary
                        sx={{ padding: "0px" }}
                        expandIcon={
                            <ExpandMoreIcon
                                sx={{
                                    color: "white",
                                    borderBottom: "1px solid white",
                                    [theme.breakpoints.up("lg")]: {
                                        fontSize: "20px",
                                    },
                                    [theme.breakpoints.up("md")]: {
                                        fontSize: "17",
                                    },
                                    [theme.breakpoints.up("sm")]: {
                                        fontSize: "12px",
                                    },
                                    [theme.breakpoints.up("xs")]: {
                                        fontSize: "13px",
                                    },
                                }}
                            />
                        }
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            component="div"
                            sx={{
                                color: "white",
                                borderBottom: "1px solid white",
                                fontWeight: "500",
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "16px",
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "12px",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    fontSize: "12px",
                                },
                            }}
                        >
                            Gluten markalı ürünlerde alerjen bulunmaktamıdır?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            sx={{
                                color: "white",
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "12px",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    fontSize: "12px",
                                },
                            }}
                        >
                            Ürünlerimizin süt, yumurta ve susam içerdiğinden
                            dolayı bu ürünlere alerjisi olan kişilerin dikkatli
                            olması gerekmektedir.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    elevation={0}
                    sx={{
                        background: "transparent",
                        [theme.breakpoints.up("lg")]: {
                            display: "none",
                        },
                        [theme.breakpoints.up("md")]: { display: "none" },
                        [theme.breakpoints.up("sm")]: { display: "none" },
                        [theme.breakpoints.up("xs")]: { display: "block" },
                    }}
                    expanded={expanded === "panel6"}
                    onChange={handleChange("panel6")}
                >
                    <AccordionSummary
                        sx={{ padding: "0px" }}
                        expandIcon={
                            <ExpandMoreIcon
                                sx={{
                                    color: "white",
                                    borderBottom: "1px solid white",
                                    [theme.breakpoints.up("lg")]: {
                                        fontSize: "20px",
                                    },
                                    [theme.breakpoints.up("md")]: {
                                        fontSize: "17",
                                    },
                                    [theme.breakpoints.up("sm")]: {
                                        fontSize: "12px",
                                    },
                                    [theme.breakpoints.up("xs")]: {
                                        fontSize: "13px",
                                    },
                                }}
                            />
                        }
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            component="div"
                            sx={{
                                color: "white",
                                borderBottom: "1px solid white",
                                fontWeight: "500",
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "16px",
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "12px",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    fontSize: "12px",
                                },
                            }}
                        >
                            Glutensiz ürünlerimizi PKU(Fenilketonüri) hastaları
                            kullanabilir mi?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            sx={{
                                color: "white",
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "12px",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    fontSize: "12px",
                                },
                            }}
                        >
                            Fenilketonüri hastaları proteinli gıdalarda bulunan
                            fenilalanin isimli bir maddeyi metobilize edemezler.
                            Bu yüzden PKU hastaları diyetlerinde fenilalanin
                            içermeyen besinlerle beslenmesi gerekmektedir.
                            GLUTEN YOK bünyesinde ürettiğimiz ürünlerde
                            fenilalanin içeren hammaddeler kullanıldığından
                            dolayı bu ürünleri PKU hastalarının kullanması uygun
                            değildir.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    elevation={0}
                    sx={{
                        background: "transparent",
                        [theme.breakpoints.up("lg")]: {
                            display: "none",
                        },
                        [theme.breakpoints.up("md")]: { display: "none" },
                        [theme.breakpoints.up("sm")]: { display: "none" },
                        [theme.breakpoints.up("xs")]: { display: "block" },
                    }}
                    expanded={expanded === "panel7"}
                    onChange={handleChange("panel7")}
                >
                    <AccordionSummary
                        sx={{ padding: "0px" }}
                        expandIcon={
                            <ExpandMoreIcon
                                sx={{
                                    color: "white",
                                    borderBottom: "1px solid white",
                                    [theme.breakpoints.up("lg")]: {
                                        fontSize: "20px",
                                    },
                                    [theme.breakpoints.up("md")]: {
                                        fontSize: "17",
                                    },
                                    [theme.breakpoints.up("sm")]: {
                                        fontSize: "12px",
                                    },
                                    [theme.breakpoints.up("xs")]: {
                                        fontSize: "13px",
                                    },
                                }}
                            />
                        }
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            component="div"
                            sx={{
                                color: "white",
                                borderBottom: "1px solid white",
                                fontWeight: "500",
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "16px",
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "12px",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    fontSize: "12px",
                                },
                            }}
                        >
                            Gluten Yok markası ile üretilen ürünlerin Helal
                            belgesi var mıdır?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            sx={{
                                color: "white",
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "12px",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    fontSize: "12px",
                                },
                            }}
                        >
                            GLUTEN YOK bünyesinde ürettiğimiz ürünler TCS
                            Belgelendirme kuruluşu tarafından Helal belgelidir.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    elevation={0}
                    sx={{
                        background: "transparent",
                        [theme.breakpoints.up("lg")]: {
                            display: "none",
                        },
                        [theme.breakpoints.up("md")]: { display: "none" },
                        [theme.breakpoints.up("sm")]: { display: "none" },
                        [theme.breakpoints.up("xs")]: { display: "block" },
                    }}
                    expanded={expanded === "panel8"}
                    onChange={handleChange("panel8")}
                >
                    <AccordionSummary
                        sx={{ padding: "0px" }}
                        expandIcon={
                            <ExpandMoreIcon
                                sx={{
                                    color: "white",
                                    borderBottom: "1px solid white",
                                    [theme.breakpoints.up("lg")]: {
                                        fontSize: "20px",
                                    },
                                    [theme.breakpoints.up("md")]: {
                                        fontSize: "17",
                                    },
                                    [theme.breakpoints.up("sm")]: {
                                        fontSize: "12px",
                                    },
                                    [theme.breakpoints.up("xs")]: {
                                        fontSize: "13px",
                                    },
                                }}
                            />
                        }
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            component="div"
                            sx={{
                                color: "white",
                                borderBottom: "1px solid white",
                                fontWeight: "500",
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "16px",
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "12px",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    fontSize: "12px",
                                },
                            }}
                        >
                            Gluten Yok markası ile üretilen ürünlerin sahip
                            olduğu belgeler nelerdir?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            sx={{
                                color: "white",
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "15px",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "12px",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    fontSize: "12px",
                                },
                            }}
                        >
                            Ürünlerimiz ISO 22000 ve ISO 9001 kalite yönetim
                            sistemi ve Helal belgelerine sahip tesiste üretilip
                            paketlenmiştir.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Link
                    component={RouterLink}
                    to="/iletisim"
                    style={{ textDecoration: "none" }}
                >
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
                        <ArrowCircleRightIcon sx={{ marginLeft: "5px" }} />
                    </Button>
                </Link>
            </Container>

            <Container
                className="iletisim-container"
                maxWidth="sm"
                sx={{
                    [theme.breakpoints.up("lg")]: {
                        padding: "43px 0px",
                        width: "100%",
                        height: "50%",
                    },
                    [theme.breakpoints.up("md")]: {
                        padding: "43px 20px",
                        width: "100%",
                        height: "50%",
                    },
                    [theme.breakpoints.up("sm")]: {
                        padding: "43px 10px",
                        width: "100%",
                        height: "50%",
                        display: "block",
                        background: "none",
                    },
                    [theme.breakpoints.up("xs")]: {
                        padding: "5px 55px",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        background: `url("${yesil}")`,
                        backgroundSize: "cover",
                    },
                }}
            >
                <Typography
                    className="iletisim-title"
                    variant="h4"
                    gutterBottom
                    component="div"
                    sx={{
                        color: "white",
                        fontWeight: "500",
                        [theme.breakpoints.up("lg")]: {
                            fontSize: "26px",
                            display: "block",
                        },
                        [theme.breakpoints.up("md")]: {
                            fontSize: "23px",
                            display: "block",
                        },
                        [theme.breakpoints.up("sm")]: {
                            display: "block",
                            fontSize: "20px",
                            marginBottom: "10px",
                        },
                        [theme.breakpoints.up("xs")]: {
                            display: "block",
                            marginBottom: "25px",
                        },
                    }}
                >
                    İLETİŞİM <span style={{ fontWeight: "bold" }}>YOK</span> MU?
                </Typography>
                <Typography
                    className="iletisim-subtitle"
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    sx={{
                        color: "white",
                        [theme.breakpoints.up("lg")]: {
                            display: "block",
                            fontSize: "15px",
                        },
                        [theme.breakpoints.up("md")]: {
                            display: "block",
                            fontSize: "15px",
                        },
                        [theme.breakpoints.up("sm")]: {
                            display: "block",
                            fontSize: "15px",
                            marginBottom: "0px",
                        },
                        [theme.breakpoints.up("xs")]: {
                            display: "block",
                            fontSize: "15px",
                            marginBottom: "25px",
                        },
                    }}
                >
                    Sormak istediğin tüm soruları sorabilirsin.
                </Typography>
                <Box sx={{ marginTop: "10px" }}>
                    <Link
                        target="_blank"
                        href={"tel:+08503196362"}
                        style={{ textDecoration: "none" }}
                    >
                        <Typography
                            variant="h6"
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
                            variant="h6"
                            gutterBottom
                            component="div"
                            sx={{ color: "white" }}
                        >
                            glutenyok@sinangil.com.tr
                        </Typography>
                    </Link>
                    <Typography
                        variant="h6"
                        gutterBottom
                        component="div"
                        sx={{ color: "white" }}
                    >
                        Dudullu OSB 1.Cadde No:4 Y.Dudullu Ümraniye/İSTANBUL
                    </Typography>
                </Box>

                <ValidatorForm
                    ref={form}
                    onSubmit={postContactForm}
                    autoComplete="off"
                    style={{ display: "none" }}
                >
                    <Grid container spacing={2}>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <TextValidator
                                name="ad"
                                fullWidth
                                id="outlined-basic"
                                label="Ad"
                                variant="outlined"
                                value={value.ad}
                                onChange={onChange}
                                validators={["required"]}
                                errorMessages={["Lütfen adınızı giriniz."]}
                                InputLabelProps={{
                                    style: {
                                        color: "white",
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <TextValidator
                                name="soyad"
                                fullWidth
                                id="outlined-basic"
                                label="Soyad"
                                variant="outlined"
                                value={value.soyad}
                                onChange={onChange}
                                validators={["required"]}
                                errorMessages={["Lütfen soyadınızı giriniz."]}
                                InputLabelProps={{
                                    style: {
                                        color: "white",
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <TextValidator
                                name="telefon"
                                fullWidth
                                id="outlined-basic"
                                label="Telefon"
                                variant="outlined"
                                value={value.telefon}
                                onChange={onChange}
                                validators={[
                                    "required",
                                    "matchRegexp:^(05)([0-9]{2})s?([0-9]{3})s?([0-9]{2})s?([0-9]{2})$",
                                ]}
                                errorMessages={[
                                    "Geçerli bir Telefon Numarası giriniz.",
                                ]}
                                InputLabelProps={{
                                    style: {
                                        color: "white",
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <TextValidator
                                name="eposta"
                                fullWidth
                                id="outlined-basic"
                                label="E-Posta"
                                variant="outlined"
                                value={value.eposta}
                                onChange={onChange}
                                validators={["required", "isEmail"]}
                                errorMessages={[
                                    "Email adresi zorunludur.",
                                    "Lütfen geçerli bir email adresi giriniz.",
                                ]}
                                InputLabelProps={{
                                    style: {
                                        color: "white",
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <TextareaAutosize
                                className="textareaslide5"
                                name="mesaj"
                                aria-label="minimum height"
                                minRows={3}
                                placeholder="Mesaj"
                                style={{
                                    width: "98%",
                                    background: "transparent",
                                    border: "1px solid white",
                                }}
                                value={value.mesaj}
                                onChange={onChange}
                            />
                            <Typography sx={{ color: "red" }}>
                                {textareaSizeValidation}
                            </Typography>
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <Box sx={{ width: "100%", textAlign: "end" }}>
                                <LoadingButton
                                    loading={loading}
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        background: "white",
                                        padding: "10px 75px",
                                        color: "black",
                                        [theme.breakpoints.up("lg")]: {
                                            padding: "5px 75px",
                                        },
                                        [theme.breakpoints.up("md")]: {
                                            padding: "5px 75px",
                                        },
                                        [theme.breakpoints.up("sm")]: {
                                            padding: "2px 50px",
                                        },
                                        [theme.breakpoints.up("xs")]: {
                                            padding: "2px 20px",
                                        },
                                    }}
                                >
                                    Gönder
                                </LoadingButton>
                            </Box>
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </Container>
        </Box>
    );
};
