import { Box, Container, Typography } from "@mui/material";
import React from "react";
import satisnoktalaribg from "../images/satisnoktalaribg.png";
import satisnoktalarimizbackground from "../images/satisnoktalarimizbackground.png";
import { Footer } from "./layout/Footer";
import { MiniHeader } from "./MiniHeader";
import { blog } from "../blog";
import { useParams } from "react-router-dom";

export const BlogDetay = () => {
    const { slug } = useParams();
    const content = blog.filter((data) => data.slug == slug);
    const kampanya = content[0];
    return (
        <Box sx={{ background: `url(${satisnoktalarimizbackground})` }}>
            <MiniHeader />
            <Box>
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
                    <Typography
                        sx={{
                            color: "white",
                            fontWeight: "bold",
                        }}
                        variant="h4"
                        gutterBottom
                        component="div"
                    >
                        BLOG
                    </Typography>
                </Box>
                <Container maxWidth="lg" sx={{ padding: "75px 0px" }}>
                    <Box>
                        <Box
                            sx={{
                                background: `url(${kampanya.img})`,
                                width: "100%",
                                height: "500px",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        />
                        <Box sx={{ padding: "50px 10px" }}>
                            <div
                                dangerouslySetInnerHTML={{ __html: kampanya.title }}
                            />
                            <div
                                dangerouslySetInnerHTML={{ __html: kampanya.content }}
                            />
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
};
