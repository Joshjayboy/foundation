import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import orphanage from "../images/Ophanange.png";
import HChildren from "../images/HChildren.png";
import Ghana from "../images/Ghana.png";
import Button from "@mui/material/Button";

const Mix = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, mt: 12 }}>
        <Grid
          container
          spacing={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            // pl: 35,
            pl: { xs: 2, md: 35 },
            // mr: 35,
            mr: { xs: 2, md: 35 },
          }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={orphanage} alt="logo" width="300" height="200" />
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            // sx={{

            // }}
            sx={{
              lineHeight: "35px",
              fontSize: "15px",
              fontWeight: 500,
              textAlign: "center",
              border: "2px",
              borderRadius: "20px",

              // "--Grid-borderWidth": "1px",
              borderTop: "5px solid",
              borderRight: "5px solid",
              borderBottom: "5px solid",
              // borderTop: "var(--Grid-borderWidth) solid",
              // borderLeft: "var(--Grid-borderWidth) solid",
              borderColor: "black",
              // borderColor: "divider",
              "& > div": {
                // borderRight: "var(--Grid-borderWidth) solid",
                // borderBottom: "var(--Grid-borderWidth) solid",
                // borderColor: "divider",
              },
            }}
          >
            We instill biblical values in African children, equipping them with
            spiritual armor to overcome challenges and become beacons of hope.
            Through faith-based education and mentorship, we empower the next
            generation to transform Africa.
          </Grid>
        </Grid>
      </Box>
      {/* part two  */}
      <Box
        sx={{
          mt: 9,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={HChildren} alt="logo" width="300" height="200" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            ml: { xs: 2, md: 50 },
            // ml: 50,
            mr: { xs: 2, md: 50 },
            fontSize: "15px",
            fontWeight: 500,
            lineHeight: "30px",
            textAlign: "center",
            mt: 5,
            pl: 3,
            pr: 3,
            border: "2px",
            borderRadius: "20px",

            // "--Grid-borderWidth": "1px",
            borderLeft: "5px solid",
            borderRight: "5px solid",
            borderBottom: "5px solid",
            // borderTop: "var(--Grid-borderWidth) solid",
            // borderLeft: "var(--Grid-borderWidth) solid",
            borderColor: "black",
            // borderColor: "divider",
            "& > div": {
              // borderRight: "var(--Grid-borderWidth) solid",
              // borderBottom: "var(--Grid-borderWidth) solid",
              // borderColor: "divider",
            },
          }}
        >
          Knowledge is power. We empower young minds through education. From
          rural roads to university halls, we break down barriers and fund
          dreams. Every child deserves a future.
        </Box>
      </Box>
      {/* part three */}

      <Box sx={{ flexGrow: 1, mt: 12 }}>
        <Grid
          container
          spacing={15}
          sx={{
            display: "flex",
            justifyContent: "center",
            ml: { xs: 2, md: 35 },
            // ml: 35,
            mr: { xs: 2, md: 35 },
            // mr: 35,
          }}
        >
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              lineHeight: "35px",
              fontSize: "15px",
              fontWeight: 500,
              textAlign: "center",
              border: "2px",
              borderRadius: "20px",
              pl: 3,
              pr: 3,

              // "--Grid-borderWidth": "1px",
              borderTop: "5px solid",
              borderLeft: "5px solid",
              borderBottom: "5px solid",
              // borderTop: "var(--Grid-borderWidth) solid",
              // borderLeft: "var(--Grid-borderWidth) solid",
              borderColor: "black",
              // borderColor: "divider",
              "& > div": {
                // borderRight: "var(--Grid-borderWidth) solid",
                // borderBottom: "var(--Grid-borderWidth) solid",
                // borderColor: "divider",
              },
            }}
          >
            We are committed to nurturing the holistic well-being of children.
            Our work encompasses providing essential healthcare, combating
            malnutrition, and offering vital mental health support to build
            strong foundations for their future
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={Ghana} alt="logo" width="300" height="200" />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* button */}
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
            textTransform: "inherit",
          }}
        >
          Learn More About Us
        </Button>
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
            fontSize: "9px",
            fontWeight: 500,
            borderRadius: "50px",
            textTransform: "inherit",
          }}
        >
          Back to top
        </Button>
      </Box>
    </>
  );
};

export default Mix;
