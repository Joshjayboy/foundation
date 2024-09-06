import React from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import donation from "./../images/donation.png";
import solidarity from "./../images/solidarity.png";
import Container from "./../images/Container.png";
import Button from "@mui/material/Button";

const Middle = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacint={0}>
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              backgroundColor: "#2F0DBA",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 3,
                mb: 2,
              }}
            >
              <img src={donation} alt="logo" width="50px" height="50px" />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 3,
                color: "white",
              }}
            >
              Developing Skills
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              backgroundColor: "#000000",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 3,
                mb: 2,
              }}
            >
              <img src={solidarity} alt="logo" width="50px" height="50px" />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 3,
                color: "white",
              }}
            >
              Funding Education
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              backgroundColor: "#0DBA85",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 3,
                mb: 2,
              }}
            >
              <img src={Container} alt="logo" width="50px" height="50px" />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 3,
                color: "white",
              }}
            >
              Providing Freedom
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 10,
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            fontSize: "20px",
            fontWeight: 500,
            borderRadius: "10px",
          }}
        >
          What we do!!!
        </Button>
      </Box>
    </>
  );
};

export default Middle;
