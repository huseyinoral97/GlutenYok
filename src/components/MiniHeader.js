import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../images/logo.png";
import { SearchOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "./layout/header.css";
import footeryoklogo from "../images/footeryoklogo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ClearIcon from "@mui/icons-material/Clear";
import { makeStyles } from "tss-react/mui";
import "./layout/searchbar.css";
import { urunler } from "../urunler";
import line from "../images/line.png";
import Link from "@mui/material/Link";

const useStyles = makeStyles()((theme) => {
    return {
        menuItem: {
            border: "none",
            "&:hover": {
                background: "none",
            },
        },
    };
});

export const MiniHeader = () => {
    const theme = useTheme();
    const iOS =
        typeof navigator !== "undefined" &&
        /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const { classes } = useStyles();

    const [openDrawer, setOpenDrawer] = useState(false);
    const [value, setValue] = useState("");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                anchor="right"
            >
                <Box
                    className="deleteicon"
                    sx={{
                        position: "absolute",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "white",
                        width: "40px",
                        height: "40px",
                    }}
                >
                    <IconButton
                        onClick={() => setOpenDrawer(false)}
                        aria-label="delete"
                    >
                        <ClearIcon
                            sx={{
                                color: "#28b664",
                            }}
                        />
                    </IconButton>
                </Box>

                <Box
                    sx={{
                        [theme.breakpoints.up("lg")]: { marginLeft: "64px" },
                        [theme.breakpoints.up("md")]: { marginLeft: "100px" },
                        [theme.breakpoints.up("sm")]: {
                            marginLeft: "111px",
                        },
                        [theme.breakpoints.up("xs")]: {
                            marginLeft: "95px",
                        },
                    }}
                >
                    <Box
                        component="img"
                        sx={{
                            [theme.breakpoints.up("lg")]: {
                                height: 80,
                                width: 160,
                            },
                            [theme.breakpoints.up("md")]: {
                                height: 80,
                                width: 160,
                            },
                            [theme.breakpoints.up("sm")]: {
                                height: 80,
                                width: 160,
                            },
                            [theme.breakpoints.up("xs")]: {
                                height: 40,
                                width: 80,
                            },
                        }}
                        src={footeryoklogo}
                    />
                    <Box
                        sx={{
                            width: "100%",
                            border: "1px solid white",
                            marginTop: "15px",
                        }}
                    ></Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "15px",
                        }}
                    >
                        <Box>
                            <Link
                                target="_blank"
                                href={`https://www.facebook.com/bizeglutenyok/`}
                                style={{ textDecoration: "none" }}
                            >
                                <FacebookIcon sx={{ color: "white" }} />
                            </Link>
                        </Box>
                        <Box>
                            <Link
                                target="_blank"
                                href={`https://www.twitter.com/bizeglutenyok/`}
                                style={{ textDecoration: "none" }}
                            >
                                <TwitterIcon sx={{ color: "white" }} />
                            </Link>
                        </Box>
                        <Box>
                            <Link
                                target="_blank"
                                href={`https://www.instagram.com/bizeglutenyok/`}
                                style={{ textDecoration: "none" }}
                            >
                                <InstagramIcon sx={{ color: "white" }} />
                            </Link>
                        </Box>
                        <Box>
                            <Link
                                target="_blank"
                                href={`https://www.linkedin.com/bizeglutenyok/`}
                                style={{ textDecoration: "none" }}
                            >
                                <LinkedInIcon sx={{ color: "white" }} />
                            </Link>
                        </Box>
                    </Box>
                </Box>
                <List
                    disablePadding
                    sx={{
                        [theme.breakpoints.up("lg")]: {
                            marginLeft: "100px",
                            marginTop: "50px",
                        },
                        [theme.breakpoints.up("md")]: {
                            marginLeft: "140px",
                            marginTop: "50px",
                        },
                        [theme.breakpoints.up("sm")]: {
                            marginLeft: "150px",
                            marginTop: "50px",
                        },
                        [theme.breakpoints.up("xs")]: {
                            marginLeft: "150px",
                            marginTop: "30px",
                        },
                    }}
                >
                    <ListItem
                        className={classes.menuItem}
                        onClick={() => setOpenDrawer(false)}
                        divider
                        button
                        component={RouterLink}
                        to="/"
                    >
                        <ListItemText
                            disableTypography
                            sx={{
                                color: "white",
                                fontWeight: "bold",
                                fontFamily: "Montserrat",
                                "&:hover": {
                                    color: "#ebe96a",
                                    background: "none",
                                },
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "20px",
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "20px",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "20px",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    fontSize: "15px",
                                },
                            }}
                        >
                            ANASAYFA
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        className={classes.menuItem}
                        onClick={() => setOpenDrawer(false)}
                        button
                        component={RouterLink}
                        to="/neden-yok"
                    >
                        <ListItemText
                            disableTypography
                            sx={{
                                color: "white",
                                fontWeight: "bold",
                                fontFamily: "Montserrat",
                                "&:hover": {
                                    color: "#ebe96a",
                                    background: "none",
                                },
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "20px",
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "20px",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "20px",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    fontSize: "15px",
                                },
                            }}
                        >
                            NEDEN YOK?
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        className={classes.menuItem}
                        onClick={() => setOpenDrawer(false)}
                        button
                        component={RouterLink}
                        to="/urunlerimiz"
                    >
                        <ListItemText
                            disableTypography
                            sx={{
                                "&:hover": {
                                    color: "#ebe96a",
                                    background: "none",
                                },
                                color: "white",
                                fontWeight: "bold",
                                fontFamily: "Montserrat",
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "20px",
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "20px",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "20px",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    fontSize: "15px",
                                },
                            }}
                        >
                            ÜRÜNLERİMİZ
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        className={classes.menuItem}
                        onClick={() => setOpenDrawer(false)}
                        button
                        component={RouterLink}
                        to="/satis-noktalarimiz"
                    >
                        <ListItemText
                            disableTypography
                            sx={{
                                "&:hover": {
                                    color: "#ebe96a",
                                    background: "none",
                                },
                                color: "white",
                                fontWeight: "bold",
                                fontFamily: "Montserrat",
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "20px",
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "20px",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "20px",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    fontSize: "15px",
                                },
                            }}
                        >
                            SATIŞ NOKTALARI
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        className={classes.menuItem}
                        onClick={() => setOpenDrawer(false)}
                        button
                        component={RouterLink}
                        to="/kampanyalar"
                    >
                        <ListItemText
                            disableTypography
                            sx={{
                                color: "white",
                                fontFamily: "Montserrat",
                                "&:hover": {
                                    color: "#ebe96a",
                                    background: "none",
                                },
                                fontWeight: "bold",
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "20px",
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "20px",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "20px",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    fontSize: "15px",
                                },
                            }}
                        >
                            KAMPANYALAR
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        className={classes.menuItem}
                        onClick={() => setOpenDrawer(false)}
                        button
                        component={RouterLink}
                        to="/glutensiz-yasam"
                    >
                        <ListItemText
                            disableTypography
                            sx={{
                                color: "white",
                                fontWeight: "bold",
                                fontFamily: "Montserrat",
                                "&:hover": {
                                    color: "#ebe96a",
                                    background: "none",
                                },
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "20px",
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "20px",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "20px",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    fontSize: "15px",
                                },
                            }}
                        >
                            GLUTENSİZ YAŞAM
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        className={classes.menuItem}
                        onClick={() => setOpenDrawer(false)}
                        button
                        component={RouterLink}
                        to="/iletisim"
                    >
                        <ListItemText
                            disableTypography
                            sx={{
                                color: "white",
                                fontWeight: "bold",
                                fontFamily: "Montserrat",
                                "&:hover": {
                                    color: "#ebe96a",
                                    background: "none",
                                },
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "20px",
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "20px",
                                },
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "20px",
                                },
                                [theme.breakpoints.up("xs")]: {
                                    fontSize: "15px",
                                },
                            }}
                        >
                            İLETİŞİM
                        </ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton
                sx={{
                    "&:hover": {
                        backgroundColor: "transparent",
                    },
                    width: "40px",
                    height: "41px",
                }}
                onClick={() => setOpenDrawer(!openDrawer)}
                disableRipple
            >
                <MenuIcon
                    sx={{
                        width: "30px",
                        height: "30px",
                        color: "white",
                    }}
                />
            </IconButton>
        </React.Fragment>
    );

    return (
        <AppBar
            elevation={0}
            position="fixed"
            sx={{
                background: "transparent",
                position: "absolute",
                left: "0px",
                top: "0px",
                width: "100vw",
            }}
        >
            <Toolbar>
                <Link
                    component={RouterLink}
                    className="logo"
                    to="/"
                    style={{ zIndex: "2" }}
                >
                    <img src={logo} alt="Logo" style={{ width: "100%" }} />
                </Link>

                <Box
                    sx={{
                        display: "flex",
                        padding: "20px",
                        position: " absolute",

                        [theme.breakpoints.up("lg")]: {
                            right: "2%",
                            top: "9%",
                        },
                        [theme.breakpoints.up("md")]: {
                            right: "2%",
                            top: "6%",
                        },
                        [theme.breakpoints.up("sm")]: {
                            right: "2%",
                            top: "8%",
                        },
                        [theme.breakpoints.up("xs")]: {
                            right: "2%",
                            top: "8%",
                        },
                    }}
                >
                    <Box
                        className="container-searchbar"
                        sx={{ flexDirection: "column" }}
                    >
                        <Box
                            className="searchbox"
                            sx={{
                                position: "relative",
                                display: "block",
                                width: "100%",
                                maxWidth: "40px",
                                height: "40px",
                                transition: " 0.4s linear",
                                overflow: "hidden",
                                zIndex: "999",
                                borderRadius: "50%",
                            }}
                        >
                            <input
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                type="text"
                                className="searchbox__input"
                                placeholder="Aradığınız ürünü yazınız..."
                            />
                            <SearchOutlined
                                className="searchbox__icon"
                                sx={{ color: "#91d9af" }}
                            />
                        </Box>

                        {value.length != 0 && (
                            <Box
                                sx={{
                                    background: "white",
                                    borderRadius: "10px",
                                }}
                            >
                                {urunler
                                    .filter((val) => {
                                        if (value == "") {
                                            return val;
                                        } else if (
                                            val.label
                                                .toLowerCase()
                                                .includes(value.toLowerCase())
                                        ) {
                                            return val;
                                        }
                                    })
                                    .map((urun) => (
                                        <Link
                                            key={urun.id}
                                            style={{ textDecoration: "none" }}
                                            to={urun.path}
                                        >
                                            <Typography
                                                gutterBottom
                                                component="div"
                                                sx={{
                                                    color: "black",
                                                    fontWeight: "700",
                                                    padding: "3px",
                                                    [theme.breakpoints.up(
                                                        "lg"
                                                    )]: {
                                                        width: "221px",
                                                        fontSize: "13px",
                                                    },
                                                    [theme.breakpoints.up(
                                                        "md"
                                                    )]: {
                                                        width: "221px",
                                                        fontSize: "13px",
                                                    },
                                                    [theme.breakpoints.up(
                                                        "sm"
                                                    )]: {
                                                        width: "221px",
                                                        fontSize: "13px",
                                                    },
                                                    [theme.breakpoints.up(
                                                        "xs"
                                                    )]: {
                                                        width: "145px",
                                                        fontSize: "9px",
                                                    },
                                                }}
                                            >
                                                {urun.label}
                                            </Typography>
                                        </Link>
                                    ))}
                            </Box>
                        )}
                    </Box>
                    <Box
                        component="img"
                        src={line}
                        sx={{ width: "2px", height: "41px" }}
                    />
                    {drawer}
                </Box>
            </Toolbar>
        </AppBar>
    );
};
