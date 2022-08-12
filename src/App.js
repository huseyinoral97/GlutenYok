import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./components/layout/Homepage";
import { Marka } from "./components/Marka";
import { SatisNoktalari } from "./components/SatisNoktalari";
import { Urunlerimiz } from "./components/Urunlerimiz";
import { Kampanyalar } from "./components/Kampanyalar";
import { Blog } from "./components/Blog";
import { ReklamFilmleri } from "./components/ReklamFilmleri";
import { Iletisim } from "./components/Iletisim";
import { GlutensizYasam } from "./components/GlutensizYasam";
import { BlogDetay } from "./components/BlogDetay";
import Montserrat from "./font/static/Montserrat-Medium.ttf";
import { createTheme } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";

export default function App() {
    const theme = createTheme({
        typography: {
            fontFamily: "Montserrat, sans-serif",
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: `
                @font-face {
                  font-family: 'Khand';
                  font-style: normal;
                  font-display: swap;
                  font-weight: 400;
                  src: local('Montserrat'), local('Montserrat-Medium'), url(${Montserrat}) format('ttf');
                  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
                }
              `,
            },
        },
    });

    return (
        <SnackbarProvider maxSnack={3}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/neden-yok" element={<Marka />} />
                        <Route
                            path="/satis-noktalarimiz"
                            element={<SatisNoktalari />}
                        />
                        <Route path="/urunlerimiz" element={<Urunlerimiz />} />
                        <Route path="/kampanyalar" element={<Kampanyalar />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:slug" element={<BlogDetay />} />
                        <Route
                            path="/reklam-filmlerimiz"
                            element={<ReklamFilmleri />}
                        />
                        <Route path="/iletisim" element={<Iletisim />} />
                        <Route
                            path="/glutensiz-yasam"
                            element={<GlutensizYasam />}
                        />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </SnackbarProvider>
    );
}
