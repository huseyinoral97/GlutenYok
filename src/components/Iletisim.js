import React, { useRef, useState } from "react";
import { Box, Grid, TextareaAutosize } from "@mui/material";
import satisnoktalarimizbackground from "../images/satisnoktalarimizbackground.png";
import satisnoktalaribg from "../images/3.png";
import { Container, Typography } from "@mui/material";
import { Footer } from "./layout/Footer";
import sssbg from "../images/iletisimsssbg.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./iletisim.css";
import { useTheme } from "@mui/material/styles";
import { MiniHeader } from "./MiniHeader";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import LoadingButton from "@mui/lab/LoadingButton";
import { useSnackbar } from "notistack";
import axiosClient from "../utils/axiosClient";
import Link from "@mui/material/Link";
import iletisim from "../images/iletisim.png";

export const Iletisim = () => {
    const theme = useTheme();
    const form = useRef();
    const [expanded, setExpanded] = React.useState(false);
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [textareaSizeValidation, setTextareaSizeValidation] = useState("");

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
                }}
            >
                <Box component="img" src={iletisim} />
            </Box>
            <Container maxWidth="lg" sx={{ padding: "75px 0px" }}>
                <Typography
                    sx={{
                        color: "#e84047",
                        fontWeight: "bold",
                    }}
                    variant="h4"
                    gutterBottom
                    component="div"
                >
                    İletişim yok mu?
                </Typography>
                <ValidatorForm
                    ref={form}
                    onSubmit={postContactForm}
                    autoComplete="off"
                    style={{ display: "none" }}
                >
                    <Grid container spacing={5} sx={{ marginTop: "30px" }}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <TextValidator
                                fullWidth
                                name="ad"
                                id="outlined-basic"
                                label="Ad"
                                variant="outlined"
                                value={value.ad}
                                onChange={onChange}
                                sx={{ background: "#f7f7f7" }}
                                InputLabelProps={{
                                    style: {
                                        color: "#8abce8",
                                    },
                                }}
                                validators={["required"]}
                                errorMessages={["Lütfen adınızı giriniz."]}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <TextValidator
                                fullWidth
                                value={value.soyad}
                                onChange={onChange}
                                name="soyad"
                                id="outlined-basic"
                                label="Soyad"
                                variant="outlined"
                                sx={{ background: "#f7f7f7" }}
                                InputLabelProps={{
                                    style: {
                                        color: "#e96b65",
                                    },
                                }}
                                validators={["required"]}
                                errorMessages={["Lütfen soyadınızı giriniz."]}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <TextValidator
                                fullWidth
                                value={value.telefon}
                                onChange={onChange}
                                name="telefon"
                                id="outlined-basic"
                                label="Telefon"
                                variant="outlined"
                                sx={{ background: "#f7f7f7" }}
                                validators={[
                                    "required",
                                    "matchRegexp:^(05)([0-9]{2})s?([0-9]{3})s?([0-9]{2})s?([0-9]{2})$",
                                ]}
                                errorMessages={[
                                    "Lütfen geçerli bir Telefon Numarası giriniz.",
                                ]}
                                InputLabelProps={{
                                    style: {
                                        color: "#f7abad",
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <TextValidator
                                fullWidth
                                value={value.eposta}
                                onChange={onChange}
                                name="eposta"
                                id="outlined-basic"
                                label="E-Posta"
                                variant="outlined"
                                sx={{ background: "#f7f7f7" }}
                                InputLabelProps={{
                                    style: {
                                        color: "#f2951c",
                                    },
                                }}
                                validators={["required", "isEmail"]}
                                errorMessages={[
                                    "Email adresi zorunludur.",
                                    "Lütfen geçerli bir email adresi giriniz.",
                                ]}
                            />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <TextareaAutosize
                                className="iletisimtextarea"
                                name="mesaj"
                                aria-label="minimum height"
                                minRows={7}
                                placeholder="Mesajınız"
                                value={value.mesaj}
                                onChange={onChange}
                                style={{ width: "98%", background: "#f7f7f7" }}
                            />
                            <Typography sx={{ color: "red" }}>
                                {textareaSizeValidation}
                            </Typography>
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <Box sx={{ width: "100%", textAlign: "center" }}>
                                <LoadingButton
                                    loading={loading}
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        background: "#62a7e2",
                                        padding: "10px 150px",
                                    }}
                                >
                                    Gönder
                                </LoadingButton>
                            </Box>
                        </Grid>
                    </Grid>
                </ValidatorForm>
                <Typography
                    className="iletisim-subtitle"
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    sx={{
                        color: "black",
                        fontWeight: "bold",
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
                            sx={{ color: "black" }}
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
                            sx={{ color: "black" }}
                        >
                            glutenyok@sinangil.com.tr
                        </Typography>
                    </Link>
                    <Typography
                        variant="h6"
                        gutterBottom
                        component="div"
                        sx={{ color: "black" }}
                    >
                        Dudullu OSB 1.Cadde No:4 Y.Dudullu Ümraniye/İSTANBUL
                    </Typography>
                </Box>
            </Container>
            <Box
                sx={{
                    padding: "25px 0px",
                    width: "100%",
                    height: "fit-content",
                    background: `#62a7e2`,
                    marginBottom: "50px",
                    marginTop: "50px",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                        }}
                    >
                        <Typography
                            sx={{
                                color: "black",
                                fontWeight: "bold",
                            }}
                            variant="h4"
                            gutterBottom
                            component="div"
                        >
                            Sıkça Sorulan Sorular
                        </Typography>
                        <Box
                            sx={{
                                border: "3px solid black",
                                color: "black",
                                [theme.breakpoints.up("lg")]: { width: "20%" },
                                [theme.breakpoints.up("md")]: { width: "25%" },
                                [theme.breakpoints.up("sm")]: { width: "30%" },
                                [theme.breakpoints.up("xs")]: { width: "50%" },
                            }}
                        ></Box>
                    </Box>
                    <Box>
                        <Accordion
                            sx={{
                                background: "transparent",
                                borderBottom: "1px solid black",
                            }}
                            elevation={0}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography sx={{ color: "black" }}>
                                    Çölyak Hastalığı Nedir?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ color: "black" }}>
                                    Çölyak hastalığı genetik olarak duyarlı
                                    kişilerde başlıca buğday, arpa, çavdar,
                                    yulaf gibi tahıllarda bulunan gluten
                                    proteinine karşı kalıcı intolerans olarak
                                    gelişen bir ince bağırsak hastalığıdır.
                                    Çölyak hastası olan birey gluten içeren bir
                                    ürün tükettiğinde ince bağırsaklarda besin
                                    emilimini sağlayan villus adlı yapılarda
                                    alerjik reaksiyonlar çıkar. Bu alerjik
                                    reaksiyonların sonucu ince bağırsakların
                                    kıvrımlı yapısı zarar görür ve besin emilimi
                                    sekteye uğrar. Bu duruma bağlı olarak
                                    vücutta çeşitli rahatsızlıklar ortaya
                                    çıkmaktadır. Çölyak hastalığının bir
                                    tedavisi bulunmamakta ve hastalığın
                                    etkilerinin ortaya çıkmaması için sıkı bir
                                    glutensiz beslenme diyeti uygulanması
                                    gerekmektedir.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            sx={{
                                background: "transparent",
                                borderBottom: "1px solid black",
                            }}
                            elevation={0}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography sx={{ color: "black" }}>
                                    Gluten Yok Nedir?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ color: "black" }}>
                                    Sinangil’in gluten intoleransı olan ve
                                    glutensiz diyet yapmak istiyenlerin günlük
                                    hayatta ihtiyaç duyabileceği ekmek
                                    çeşitlerini ve kurabiyeleri ürettiği
                                    markanın adı GLUTEN YOK’tur.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            sx={{
                                background: "transparent",
                                borderBottom: "1px solid black",
                            }}
                            elevation={0}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon sx={{ color: "black" }} />
                                }
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography sx={{ color: "black" }}>
                                    Glutensiz ürünlerimizi kimler tüketebilir?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ color: "black" }}>
                                    Gluten tüketimiyle ortaya çıkan sağlık
                                    problemlerinin yaşanmaması için gluten
                                    intoleransı olan kişiler, huzursuz bağırsak
                                    sendromu olan kişiler ile beslenme diyetinde
                                    gluten olmasını istemeyen kişiler
                                    ürünlerimizi rahatlıkla kullanabilirler.
                                    Ürünlerimizin süt, yumurta ve susam
                                    içerdiğinden dolayı bu ürünlere alerjisi
                                    olan kişilerin dikkatli olması
                                    gerekmektedir.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            sx={{
                                background: "transparent",
                                borderBottom: "1px solid black",
                            }}
                            elevation={0}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon sx={{ color: "black" }} />
                                }
                                aria-controls="panel4a-content"
                                id="panel4a-header"
                            >
                                <Typography sx={{ color: "black" }}>
                                    Sağlıklı bireyler Gluten Yok markalı
                                    ürünleri tüketebilirler mi?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ color: "black" }}>
                                    Gluten Yok markalı ürünleri sağlıklı
                                    bireylerde tüketebilmektedirler.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            sx={{
                                background: "transparent",
                                borderBottom: "1px solid black",
                            }}
                            elevation={0}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon sx={{ color: "black" }} />
                                }
                                aria-controls="panel5a-content"
                                id="panel5a-header"
                            >
                                <Typography sx={{ color: "black" }}>
                                    Gluten markalı ürünlerde alerjen
                                    bulunmaktamıdır?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ color: "black" }}>
                                    Ürünlerimizin süt, yumurta ve susam
                                    içerdiğinden dolayı bu ürünlere alerjisi
                                    olan kişilerin dikkatli olması
                                    gerekmektedir.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            sx={{
                                background: "transparent",
                                borderBottom: "1px solid black",
                            }}
                            elevation={0}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon sx={{ color: "black" }} />
                                }
                                aria-controls="panel6a-content"
                                id="panel6a-header"
                            >
                                <Typography sx={{ color: "black" }}>
                                    Glutensiz ürünlerimizi PKU(Fenilketonüri)
                                    hastaları kullanabilir mi?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ color: "black" }}>
                                    Fenilketonüri hastaları proteinli gıdalarda
                                    bulunan fenilalanin isimli bir maddeyi
                                    metobilize edemezler. Bu yüzden PKU
                                    hastaları diyetlerinde fenilalanin içermeyen
                                    besinlerle beslenmesi gerekmektedir. GLUTEN
                                    YOK bünyesinde ürettiğimiz ürünlerde
                                    fenilalanin içeren hammaddeler
                                    kullanıldığından dolayı bu ürünleri PKU
                                    hastalarının kullanması uygun değildir.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            sx={{
                                background: "transparent",
                                borderBottom: "1px solid black",
                            }}
                            elevation={0}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon sx={{ color: "black" }} />
                                }
                                aria-controls="panel7a-content"
                                id="panel7a-header"
                            >
                                <Typography sx={{ color: "black" }}>
                                    Gluten Yok markası ile üretilen ürünlerin
                                    Helal belgesi var mıdır?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ color: "black" }}>
                                    GLUTEN YOK bünyesinde ürettiğimiz ürünler
                                    TCS Belgelendirme kuruluşu tarafından Helal
                                    belgelidir.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            sx={{
                                background: "transparent",
                                borderBottom: "1px solid black",
                            }}
                            elevation={0}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon sx={{ color: "black" }} />
                                }
                                aria-controls="panel8a-content"
                                id="panel8a-header"
                            >
                                <Typography sx={{ color: "black" }}>
                                    Gluten Yok markası ile üretilen ürünlerin
                                    sahip olduğu belgeler nelerdir?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ color: "black" }}>
                                    Ürünlerimiz ISO 22000 ve ISO 9001 kalite
                                    yönetim sistemi ve Helal belgelerine sahip
                                    tesiste üretilip paketlenmiştir.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            sx={{
                                background: "transparent",
                                borderBottom: "1px solid black",
                            }}
                            elevation={0}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon sx={{ color: "black" }} />
                                }
                                aria-controls="panel9a-content"
                                id="panel9a-header"
                            >
                                <Typography sx={{ color: "black" }}>
                                    Gluten Yok markalı ürünlerin gıda güvenliği
                                    nasıl sağlanmaktadır?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ color: "black" }}>
                                    Sinangil firması Türkiye’de ilk glutensiz
                                    unu üreten firmadır. Yıllardır birçok
                                    tüketici ile temas etmesi ve sektörün
                                    çoğunluğuna hakim olması nedeniyle yüksek
                                    tecrübeye sahip olmuştur. Alerjik
                                    hastalıklara sahip bireyler için üretilecek
                                    ürünlerde en önemli kritik nokta ürün
                                    güvenliğidir. Gluten Yok markalı tüm ürün
                                    gruplarımız tamamen tecrid edilmiş, tümüyle
                                    kontrollü bir alanda üretilmektedir.
                                    Tesisimizin giriş çıkışları, hatlarımızın
                                    hijyeni ile ürün takipleri oldukça sıkı bir
                                    şekilde yürütülmektedir. Glutensiz
                                    tesisimize giren tüm hammaddelerin gluten
                                    varlığı araştırılmakta ve analizlere
                                    gönderilmektedir. Üretim süreçleri sonunda
                                    elde edilen mamüllerde analize gönderilmekte
                                    ve uygunluk verildiği zaman piyasaya
                                    gönderilmektedir.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            sx={{
                                background: "transparent",
                                borderBottom: "1px solid black",
                            }}
                            elevation={0}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon sx={{ color: "black" }} />
                                }
                                aria-controls="panel10a-content"
                                id="panel10a-header"
                            >
                                <Typography sx={{ color: "black" }}>
                                    Ürünlerin açıldıktan sonra tazeliğini nasıl
                                    koruyabilirim?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ color: "black" }}>
                                    Ürünlerimiz gıda güvenliğinin tam olarak
                                    sağlanabilmesi için modifiye atmosferde
                                    paketlenmiştir. Ambalaj açıldıktan sonra
                                    içindeki modifiye atmosfer uçacağından
                                    dolayı ürünün daha taze kalabilmesi adına
                                    buzdolabının +4 kısmına koyabilirsiniz.
                                    Tekrar kullanılacağı zaman ısıtılarak
                                    tüketilmesini tavsiye ederiz.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            sx={{
                                background: "transparent",
                                borderBottom: "1px solid black",
                            }}
                            elevation={0}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon sx={{ color: "black" }} />
                                }
                                aria-controls="panel11a-content"
                                id="panel11a-header"
                            >
                                <Typography sx={{ color: "black" }}>
                                    Ekmekler oldukça sertleşti nasıl daha rahat
                                    tüketebilirim?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ color: "black" }}>
                                    Ekmek grubumuzda bulunan ürünlerimizin
                                    (Baton,sandviç,hamburger ve tost) ısıtarak
                                    tüketilmesini tavsiye ederiz. (Mikrodalga da
                                    1 dk. ,fırında ise yüksek sıcaklıkta
                                    (180-200 derecede) 1 ila 2 dk.)
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            sx={{
                                background: "transparent",
                                borderBottom: "1px solid black",
                            }}
                            elevation={0}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon sx={{ color: "black" }} />
                                }
                                aria-controls="panel12a-content"
                                id="panel12a-header"
                            >
                                <Typography sx={{ color: "black" }}>
                                    Glutensiz ürünleriniz nelerdir?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ color: "black" }}>
                                    Sinangil, 2022 yılı itibariyle Glutensiz un
                                    grubunun yanında glutensiz ekmekler ve
                                    kurabiyeler üretmeye başlamıştır. Un
                                    grubundaki ürünler glutensiz un,
                                    karabuğdaylı glutensiz un, glutensiz un plus
                                    ve düşük proteinli/glutensiz nişastalı
                                    karışımdır. Kurmuş olduğumuz yeni
                                    tesisimizde ekmek grubunda Karabuğdaylı
                                    Baton Ekmek, Dilimli Tost Ekmeği, Sandviç
                                    Ekmeği ile Hamburger Ekmeği üretirken,
                                    kurabiye grubunda ise tuzlu sınıfta
                                    Zerdeçallı-Kırmızı Biberli Kurabiye,
                                    Susamlı-Çörek Otlu Kurabiye, tatlı sınıfında
                                    ise Kuş Üzümlü Kurabiye ile Hindistan
                                    Cevizli Tatlı Kurabiye üretilmektedir.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </Box>
    );
};
