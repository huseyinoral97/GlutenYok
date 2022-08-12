import React from "react";
import Box from "@mui/material/Box";
import satisnoktalaribg from "../images/4.png";
import satisnoktalaribg2 from "../images/satisnoktalaribg2.png";
import satisnoktalarimizbackground from "../images/satisnoktalarimizbackground.png";
import { Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Footer } from "./layout/Footer";
import { MiniHeader } from "./MiniHeader";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import satis_noktalarimiz from "../images/satis_noktalarimiz.png";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

function createData(name, calories, fat) {
    return { name, calories, fat };
}

const rows = [
    createData(
        "ROTA UNLU MAM. - HADİCE ÇİFTÇİ",
        "Ferhatpaşa Mah. Üsküdar Cad. No:48/B Ataşehir İstanbul/Türkiye",
        "Ataşehir"
    ),
    createData(
        "İBRAHİM DEMİR EKMEK FAB.LTD.ŞTİ.",
        "İçerenköy Mah. Prof. Dr. Necmettin Erbakan Cad. No:49A Ataşehir İstanbul/Türkiye",
        "Ataşehir"
    ),
    createData(
        "YEDİTEPE FIRIN PASTA KAFE İNŞ.SAN. VE TİC.LTD.ŞTİ.",
        "İnönü Mah. Ulubatlı Hasan Sk. Avnioğulları Apt No:47/A Ataşehir/İstanbul",
        "Ataşehir"
    ),
    createData(
        "KURPAŞ GIDA OTOMOTİV TEKSTİL İNŞ.TURZ.SAN. VE DIŞ TİC.LTD.ŞTİ.",
        "Namık Kemal Cad. No:26 Merkez Avcılar İstanbul/Türkiye",
        "Avcilar"
    ),
    createData(
        "KURUOĞLU GIDA OTOMOTİV VE İNŞ. SAN.TİC.LTD.ŞTİ.",
        "Çiğdem Sok. No:13/2 Merkez Avcılar İstanbul/Türkiye",
        "Avcilar"
    ),
    createData(
        "ÖMER UZUN - ÜÇEL UNLU MAMÜLLERİ",
        "Piri Reis Sok. No:1 Bulgurlu Üsküdar İstanbul/Türkiye",
        "Üsküdar"
    ),
    createData(
        "BUĞDAYLIM UN VE UNLU MAM. GIDA SAN.TİC.LTD.ŞTİ.",
        "Zafer Mah. Ahmet Yesevi Cad. No: 89/A Bahçelievler İstanbul/Türkiye",
        "Bahçelievler"
    ),
    createData(
        "ÇITIR UNLU MAM. - NAZMİYE DUMAN",
        "Mithatpaşa Cad. No:42/A Çobançeşme Bahçelievler İstanbul/Türkiye",
        "Bahçelievler"
    ),
    createData(
        "BEREKET EKMEK VE UNLU MAM. - HALİS GÜLER VE ORT.",
        "Cumhuriyet Mah. Bağcılar Cad. No:105/C Bahçelievler İstanbul/Türkiye",
        "Bahçelievler"
    ),
    createData(
        "DİKİLİTAŞ GIDA SAN. VE TİC.LTD.ŞTİ.",
        "Dikilitaş Mah. Emirhan Cad. No: 58 Beşiktaş İstanbul/Türkiye",
        "Beşiktaş"
    ),
    createData(
        "SARAY FIRIN UNLU MAM.LTD.ŞTİ. ",
        "Cemil Meriç Sok. No:36A İcadiye Üsküdar İstanbul/Türkiye",
        "Üsküdar"
    ),
    createData(
        "KARDEN EKMEK GIDA VE TEKS.SAN.LTD.ŞTİ.",
        "Mehmet Akif Ersoy Cad. No:90/1 Soğuksu Beykoz İstanbul/Türkiye",
        "Beykoz"
    ),
    createData(
        "KARDEN UN VE UNLU MAM. GIDA İNŞ.PAZ.SAN.TİC.LTD.ŞTİ.",
        "Kayabaşı Sok. No:3A Paşabahçe Beykoz İstanbul/Türkiye",
        "Beykoz"
    ),
    createData(
        "HARMAN FIRIN - YILMAZ YALÇIN",
        "Kavaklı Mah. Oğuzhan Cad. No: 24/2 Beylikdüzü İstanbul/Türkiye",
        "Beylikdüzü"
    ),
    createData(
        "ANADOLU FIRIN - ADNAN ASLAN",
        "Marmara Mah. Avrasya Cad. No: 11/6 Beylikdüzü İstanbul/Türkiye",
        "Beylikdüzü"
    ),
    createData(
        "ÖZ KAVAKLI FIRATLAR UNLU MAM.GID.İNŞ.TEKS. VE OTO.İMAL.TİC.LTD.ŞTİ. ",
        "Kavaklı Mah. Bayram Sok. No: 5/26 Beylikdüzü İstanbul/Türkiye        ",
        "Beylikdüzü"
    ),
    createData(
        "EKMEK TEKNESİ - NURETTİN DUMAN",
        "Adnan Kahveci Mah. Anadolu Cad. No: 17/12 Beylikdüzü İstanbul/Türkiye",
        "Beylikdüzü"
    ),
    createData(
        "ÇARŞI FIRIN VE UNLU MAM. - SONER DEMİRCİ",
        "Serdar Ömerpaşa Cad. No: 13/1 Bülbül Beyoğlu İstanbul/Türkiye",
        "Beyoğlu"
    ),
    createData(
        "YAKUT FIRINCILIK GID.SAN. VE TİC.LTD.ŞTİ.",
        "Halıcıoğlu Mah. Ünvan Sok. Çaygöz Apt.No: 29/1 Beyoğlu İstanbul/Türkiye",
        "Beyoğlu"
    ),
    createData(
        "PAŞA FIRIN UNLU MAM. - KERİM GÜNDOĞDU",
        "Çatma Mescit Mah. Çivici Sok. No:22B Beyoğlu İstanbul/Türkiye",
        "Beyoğlu"
    ),
    createData(
        "İKRA UNLU MAM. - SELAHATTİN SOYMAZ ",
        "Piyale Paşa Mah. Fatih Sultan. Cad. No:50/A Beyoğlu İstanbul/Türkiye",
        "Beyoğlu"
    ),
    createData(
        "ÇENGELKÖY UNL.MAM.GIDA İNŞ.SAN. VE TİC.LTD.ŞTİ.",
        "Natoyolu Yıldırım Beyazıt Cad. Kireçocağı Sok. No:36 Üsküdar İstanbul/Türkiye",
        "Üsküdar"
    ),
    createData(
        "GÜMÜŞ FIRIN - İLYAS ÜNLÜ ",
        "Bulgurlu Mah. İzzettin Sok. No:6/1 Üsküdar İstanbul/Türkiye",
        "Üsküdar"
    ),
    createData(
        "ANKARA EKMEK FABRİKASI UN VE UNLU MAM.PAZ.SAN.TİC.LTD.ŞTİ.",
        "Selimiye Kışla Cad. No:28B-1 Selimiye Üsküdar İstanbul/Türkiye",
        "Üsküdar"
    ),
    createData(
        "HD BESİN UNLU MAM.SAN. VE TİC.LTD.ŞTİ",
        "Ferah Mah. Ferah Cad. No: 104/A Üsküdar İstanbul/Türkiye",
        "Üsküdar"
    ),
    createData(
        "ALTIYOL EKMEK -SÜLEYMAN DEMİRCİ",
        "Muratreis Mah. M.Duduoğlu Sok. No:20 Üsküdar İstanbul/Türkiye",
        "Üsküdar"
    ),
    createData(
        "TÜYLÜOĞLU UNLU MAMÜLLERİ - HIZIR TÜYLÜ",
        "İnönü Cad. No:13/1 Sahrayıcedid Kadıköy İstanbul/Türkiye",
        "Kadıköy"
    ),
    createData(
        "GÜNIŞIĞI UNLU MAM. VE İNŞ.SAN.TİC.LTD.ŞTİ.",
        "Merdivenköy. Mah. Dr. Ekin Cad. No: 54-56/A Kadıköy İstanbul/Türkiye",
        "Kadıköy"
    ),
    createData(
        "PNYR PANAYIR GIDA VEİHT.MAD.SAN.TİC.LTD.ŞTİ.",
        "Erenköy. Mah. Erenköy İstasyon Cad. No:4A/1 Kadıköy İstanbul/Türkiye",
        "Kadıköy"
    ),
    createData(
        "SUADİYE FIRIN VE UNLU MAM.SAN.TİC.LTD.ŞTİ.",
        "Suadiye Mah. Ayşe Çavuş Cad. No: 10/A Kadıköy İstanbul/Türkiye",
        "Kadıköy"
    ),
    createData(
        "GÖK-PAK GIDA İNŞ.TEKS.OTO.TUR.SAN. VE TİC.LTD.ŞTİ.",
        "Mengü Sok. No:28A/1 Sahrayıcedid Kadıköy İstanbul/Türkiye",
        "Kadıköy"
    ),
    createData(
        "TUBA UNLU MAMÜLLERİ - GÖKMEN KILINÇ",
        "Sahrayıcedid Mah. Mümin Deresi Sok. No:23/2 Kadıköy İstanbul/Türkiye",
        "Kadıköy"
    ),
    createData(
        "BİZİM İNCİ MAM. GIDA İNŞ.SAN. VE TİC.LTD.ŞTİ",
        "Kozyatağı Mah. Bayar Cad. No: 62/A Kadıköy İstanbul/Türkiye",
        "Kadıköy"
    ),
    createData(
        "TİTİZ GIDA VE UNLU MAM.SAN.VE TİC.LTD.ŞTİ",
        "Ömerpaşa Sok. No:32/A Erenköy Kadıköy İstanbul/Türkiye",
        "Kadıköy"
    ),
    createData(
        "PALUZE FIRIN PASTACILIK GIDA SAN.TİC.LTD.ŞTİ.",
        "Kayasultan Sok. No:49/A Kozyatağı Kadıköy İstanbul/Türkiye",
        "Kadıköy"
    ),
    createData(
        "CİHAN EKMEK FABRİKASI - HIZIR YÜCE",
        "No: 216 Mandıra Cad. Merdivenköy Kadıköy İstanbul/Türkiye",
        "Kadıköy"
    ),
    createData(
        "BOSTANCI FIRIN - HARUN DURMAZ",
        "Bostancı Mah. Kitapçı Mehmet Süleyman Sok. No: 39/A Kadıköy İstanbul/Türkiye",
        "Kadıköy"
    ),
    createData(
        "SAHUR ODUN EKMEK FIRINI -AZİZ TÜYSÜZ",
        "Yeni Çamlıca Mah. Dursun Bey Cad. No:48B Ataşehir İstanbul/Türkiye",
        "Ataşehir"
    ),
    createData(
        "NARÇİÇEĞİ ODUN EKMEĞİ - ZELKİF ÇELEN",
        "İnönü Mah. Narçiçeği Sok. No:14 Ataşehir İstanbul/Türkiye",
        "Ataşehir"
    ),
    createData(
        "EKİNCİOĞLU GIDA İNŞ.OTO.KUY. VE TEL.SAN.TİC.LTD.ŞTİ.",
        "Zafer Mah. Ahmet Yesevi Cad. No:189A Bahçelievler İstanbul/Türkiye",
        "Bahçelievler"
    ),
    createData(
        "ALTIN EKMEK GIDA ELEKTRİK SAN. VE TİC.LTD.ŞTİ.",
        "Kavacık Mah. Orhan Veli Kanık Cad. No:48/A Beykoz İstanbul/Türkiye",
        "Beykoz"
    ),
    createData(
        "ŞENOL UNLU MAM.GIDA İNŞ.SAN.VE TİC.LTD.ŞTİ.",
        "Hasanpaşa Mah. Uzunçayır Cad. No: 49/1A Kadıköy İstanbul/Türkiye",
        "Kadıköy"
    ),
    createData(
        "ÇANKAYA UNLU MAM. - TAYFUN BOĞAZ",
        "Şemsettin Günaltay Cad. No:37 Suadiye Kadıköy İstanbul/Türkiye",
        "Kadıköy"
    ),
    createData(
        "YELDEĞİRMENİ EKMEK FAB.SAN.TİC.LTD.ŞTİ.",
        "Rasimpaşa Mah. Karakolhane Cad. No:64/1 Kadıköy İstanbul/Türkiye",
        "Kadıköy"
    ),
    createData(
        "KARUN UNLU MAM.SAN. VE TİC.LTD.ŞTİ.",
        "Gazi Muhtarpaşa Sok. No:38B Feneryolu Kadıköy İstanbul/Türkiye",
        "Kadıköy"
    ),
    createData(
        "HUZUR2 EKMEK UNLU MAM.PASTA CAFE GIDA SAN.İNŞ.TİC.LTD.ŞTİ.",
        "Çınar Mah. Rezzan Has Sok. No:2A Maltepe İstanbul/Türkiye",
        "Maltepe"
    ),
    createData(
        "TAHİROĞLU EKMEK VE UNLU MAM.GIDA İNŞ.SAN.VE TİC.LTD.ŞTİ",
        "Cumhuriyet Mah. Arabayolu Cad. No:69/A Sarıyer İstanbul/Türkiye",
        "Sarıyer"
    ),
    createData(
        "ÖZ BUĞDAYLIM UNLU MAMÜLLERİ OTO.SAN. VE TİC.LTD.ŞTİ",
        "Ferahevler Mah. Adnan Kahveci Cad.No:67/A Sarıyer/İstanbul",
        "Sarıyer"
    ),
    createData(
        "UFUK UNLU MAM.GID.YAT. VE TURZ.SAN.TİC.LTD.ŞTİ.",
        "Bağlar Mevki Cad. Havuzlu Bostan Sok. Sarıyer İstanbul/Türkiye    No:2",
        "Sarıyer"
    ),
    createData(
        "MUTLU UN VE UNLU MAM.GIDA SAN. VE TİC.LTD.ŞTİ.",
        "Bahçeköy Cad. Kazım Karabekir Sarıyer İstanbul/Türkiye    No:94/A",
        "Sarıyer"
    ),
    createData(
        "DAMAK UNLU MAM.GID.İNŞ.SAN. VE TİC.LTD.ŞTİ",
        "Liman Cad. No.6/A Rumeli Kavağı Sarıyer İstanbul/Türkiye",
        "Sarıyer"
    ),
    createData(
        "ONUR EKMEK FIRINI - İDRİS GÜNEY ",
        "Adnan Menderes Cad. No:8 Bahçeköy Sarıyer İstanbul/Türkiye",
        "Sarıyer"
    ),
    createData(
        "BAY-KAR UNLU MAMÜLLERİ-MUSTAFA BAYIR ",
        "Fatih Sultan Mehmet Mah. Evren Paşa Cad. No:52/1 Sarıyer İstanbul/Türkiye",
        "Sarıyer"
    ),
    createData(
        "YEŞİLTEPE UNLU MAM. - CAFER SADIK YAZICI ",
        "Ayazağa Mah. 101. Sok. No:6A/A Sarıyer İstanbul/Türkiye",
        "Sarıyer"
    ),
    createData(
        "BAHÇEKÖY ODUN EKMEK FIRINI - MURAT SÖNMEZ ",
        "Adnan Menderes Cad. No:37A Bahçeköy Sarıyer İstanbul/Türkiye",
        "Sarıyer"
    ),
    createData(
        "ÖKSÜZOĞLU GIDA MAD. İNŞ.TUR.TİC.LTD.ŞTİ.",
        "Merkez. Mah. Yenimahalle Cad. No:53 Sarıyer İstanbul/Türkiye",
        "Sarıyer"
    ),
    createData(
        "GERÇEK EKMEK UN MAM. SAN.VE TİC.LTD.ŞTİ.",
        "Duatepe Mah.Kurtuluş Cd.No:89/A Şişli/İSTANBUL İstanbul/Türkiye",
        "Şişli"
    ),
    createData(
        "TATLEZZET EKMEK PASTA VE UNLU MAM. GIDA İNŞ.SAN.VE TİC.LTD.ŞTİ.",
        "Yayla Mah. Yay Meydanı Cad. No:5 (Kulaksız Ekmek Pasta) Şişli İstanbul/Türkiye",
        "Şişli"
    ),
    createData(
        "SAMET PASTA UNL.MAM. VE EKMEK SAN.PAZ.LTD.ŞTİ.",
        "Bağdat Cad. No:323 Teze Pasta & Fırın Maltepe İstanbul/Türkiye",
        "Maltepe"
    ),
    createData(
        "VELİ ÖZKAN ALTIN EKM.ISI GID.SAN.TİC.LTD.ŞTİ.",
        "Doğu. Mah. Dr. Orhan Maltepe Cad. Pendik İstanbul/Türkiye    No:60",
        "Maltepe"
    ),
    createData(
        "EKMEK SEPETİ - TUNCAY DENİZER",
        "Bağdat Cad. No:218/1 İdealtepe Maltepe İstanbul/Türkiye",
        "Maltepe"
    ),
    createData(
        "ENORM YAPI İNŞ. GIDA SAN.TİC.LTD.ŞTİ.",
        "Feyzullah Mah. Şehit Hikmet Alp Cad. No:36D (İmdat Vakfı Camii) Maltepe İstanbul/Türkiye",
        "Maltepe"
    ),
    createData(
        "YILDIRIM ŞAR.ET ÜR.VE DIŞ TİC.LTD.ŞTİ",
        "Merkez Mah. Bağdat Cad. Maltepe İstanbul/Türkiye    No:100/5",
        "Maltepe"
    ),
    createData(
        "EKDAŞ EKMEK ÜRETİM PAZ.DAN.ORG.A.Ş.",
        "Feyzullah Cad. No: 103/A Bağlarbaşı Maltepe İstanbul/Türkiye",
        "Maltepe"
    ),
    createData(
        "PAKUN - MUSTAFA TEZER",
        "Ünalan Mah. Ayazma. Cad. No:22 Üsküdar İstanbul/Türkiye",
        "Üsküdar"
    ),
    createData(
        "SARI UNLU MAM. GIDA İNŞ.OTO.SAN.TİC.LTD.ŞTİ.",
        "Selçuk Bey Cad. No:42A Aydınevler Maltepe İstanbul/Türkiye",
        "Maltepe"
    ),
    createData(
        "YEŞİL KARADENİZ FIRINI-MUSTAFA HALICI",
        "Atlas Sok. No:39A Esenkent Maltepe İstanbul/Türkiye",
        "Maltepe"
    ),
    createData(
        "KOÇAL GIDA UNLU MAM.İNŞ.SAN. VE TİC.LTD.ŞTİ.",
        "Esenkent Mah. Kani Paşa Cad. No:26B Maltepe İstanbul/Türkiye",
        "Maltepe"
    ),
    createData(
        "ER PALANDÖKEN EĞT.SAĞ.TRZ.İNŞ.NAK.SAN.TİC.LTD.ŞTİ.",
        "Çetin Sok. No:1 İç Kapı No:2 Bulgurlu Üsküdar İstanbul/Türkiye",
        "Üsküdar"
    ),
    createData(
        "ÜÇ CEYLAN UNLU MAM. GIDA SAN.LTD.ŞTİ.",
        "Yavuztürk Mah. Karadeniz Cad. No: 135 Üsküdar İstanbul/Türkiye",
        "Üsküdar"
    ),
    createData(
        "GUMSAŞ GEBZE UN VE UNLU MAM.İNŞ.SAN.TİC. LTD VE ŞTİ. Şube",
        "Çarşı",
        "Gebze"
    ),
];

export const SatisNoktalari = () => {
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
                    <Box component="img" src={satis_noktalarimiz} />
                </Box>
            </Box>
            <Container maxWidth="lg">
                <Box sx={{ marginTop: "25px" }}>
                    <Box>
                        <Typography
                            variant="caption"
                            gutterBottom
                            sx={{
                                fontWeight: "bold",
                                fontSize: "14px",
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "14px",
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "14px",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "14px",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    fontSize: "11px",
                                },
                            }}
                        >
                            Birbirinden lezzetli Gluten YOK ürünlerine ulaşma
                            seçeneği ÇOK. Her geçen gün artan sayılarıyla ulusal
                            zincir marketlerden, e-ticaret sitelerinden ve
                            mahallelerimizin fırınlarımızdan bu nefis ürünleri
                            alabilirsiniz. Siz de hala Gluten YOK ürünlerini
                            denemedim diyorsanız, birbirinden lezzetli glutensiz
                            atıştırmalıkları ve ekmek çeşitlerini denemek için
                            anlaşmalı online alışveriş siteleri ya da fiziksel
                            satış noktalarına bekliyoruz.
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ marginTop: "25px" }}>
                    <Accordion sx={{ background: "#f2951c" }}>
                        <AccordionSummary
                            expandIcon={
                                <ExpandMoreIcon sx={{ color: "white" }} />
                            }
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>İstanbul</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TableContainer component={Paper}>
                                <Table
                                    sx={{ minWidth: 700 }}
                                    aria-label="customized table"
                                >
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>
                                                Belge Kimliği
                                            </StyledTableCell>
                                            <StyledTableCell align="right">
                                                Açık Adres
                                            </StyledTableCell>
                                            <StyledTableCell align="right">
                                                İlçe
                                            </StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <StyledTableRow key={row.name}>
                                                <StyledTableCell
                                                    component="th"
                                                    scope="row"
                                                >
                                                    {row.name}
                                                </StyledTableCell>
                                                <StyledTableCell align="right">
                                                    {row.calories}
                                                </StyledTableCell>
                                                <StyledTableCell align="right">
                                                    {row.fat}
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Container>
            <Link to="/iletisim" style={{ textDecoration: "none" }}>
                <Box
                    sx={{
                        background: `url(${satisnoktalaribg2})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "239px",
                        width: "100%",
                        position: "relative",
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        marginTop: "50px",
                        marginBottom: "50px",
                    }}
                >
                    <Typography
                        sx={{
                            color: "white",
                            fontWeight: "bold",
                            marginLeft: "150px",
                            [theme.breakpoints.up("lg")]: {
                                marginLeft: "150px",
                            },
                            [theme.breakpoints.up("md")]: {
                                marginLeft: "10px",
                            },
                            [theme.breakpoints.up("sm")]: {
                                marginLeft: "10px",
                            },
                            [theme.breakpoints.up("xs")]: {
                                marginLeft: "10px",
                            },
                        }}
                        variant="h4"
                        gutterBottom
                        component="div"
                    >
                        SATIŞ NOKTALARIMIZDAN BİRİ
                        <br />
                        <span style={{ fontWeight: "300" }}>
                            OLMAK İSTER MİSİNİZ ?
                        </span>
                    </Typography>
                </Box>
            </Link>
            <Footer />
        </Box>
    );
};
