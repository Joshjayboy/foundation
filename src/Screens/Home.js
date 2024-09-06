import AppBar from "../Components/AppBar";
import React from "react";
import Middle from "../Components/Middle";
import Mix from "../Components/Mix";
import Box from "@mui/material/Box";
import Footer from "../Components/Footer";
import IText from "../Components/IText";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#E9E5DC",
        }}
      >
        <AppBar />
        <IText />
        <Middle />
        <Mix />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
