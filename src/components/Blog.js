import React from "react";
import { Box, Grid } from "@mui/material";
import satisnoktalarimizbackground from "../images/satisnoktalarimizbackground.png";
import satisnoktalaribg from "../images/satisnoktalaribg.png";
import { Container, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Footer } from "./layout/Footer";
import { MiniHeader } from "./MiniHeader";
import { blog } from "../blog";
import { Link } from "react-router-dom";

export const Blog = () => {
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
                <Grid container spacing={2}>
                    {blog.map((blog) => (
                        <Grid key={blog.id} item lg={6} md={6} sm={12} xs={12}>
                            <Card
                                elevation={0}
                                sx={{ background: "transparent" }}
                            >
                                <CardMedia
                                    component="img"
                                    height="270"
                                    image={blog.img}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: blog.title }}
                                    />
                                </CardContent>
                                <CardActions sx={{ justifyContent: "end" }}>
                                    <Link
                                        to={`/blog/${blog.slug}`}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Button
                                            size="small"
                                            sx={{
                                                color: "white",
                                                backgroundColor: "#bba0bb",
                                                padding: "5px",
                                            }}
                                        >
                                            Blog Detaylarını görüntüle
                                        </Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Footer />
        </Box>
    );
};
