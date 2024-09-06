import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import twitter from "../images/TwitterX.png";
import youtube from "../images/YouTube.png";
import linkedin from "../images/LinkedIn.png";
import instagram from "../images/Instagram.png";
import facebook from "../images/Facebook.png";
import Divider from "@mui/material/Divider";
const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#000000", color: "#FFFFFF" }}>
      <Box
        sx={{
          pt: 4,
        }}
      >
        <Box
          // sx={{
          //   ml: 15,
          // }}
          sx={{ ml: { xs: 2, md: 15 } }}
        >
          <Divider
            sx={{
              color: "#0DBA85",
              backgroundColor: "#0DBA85",
              width: "112px",
              height: "5px",
            }}
          />
        </Box>
        <Box
          sx={{
            fontSize: "20px",
            fontWeight: 800,
            // ml: 15,
            ml: { xs: 2, md: 15 },
            pt: 3,
            mb: 1,
          }}
        >
          Keep up
          <span
            style={{
              color: "#0DBA85",
            }}
          >
            -
          </span>
          to
          <span
            style={{
              color: "#0DBA85",
            }}
          >
            -
          </span>
          date
        </Box>
      </Box>
      <Grid
        container
        spacing={0}
        sx={{
          // ml: 15,
          ml: { xs: 2, md: 15 },
        }}
      >
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              mt: 3,
              fontSize: "13px",
              mb: 3,
              fontWeight: 800,
            }}
          >
            <Box>Get in touch</Box>
          </Box>
          <Box
            sx={{
              fontSize: "8px",
              mb: 3,
            }}
          >
            We'd love to hear from you
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0DBA85",
                fontSize: "9px",
                fontWeight: 800,
                borderRadius: "5px",
                textTransform: "inherit",
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              mt: 3,
              fontSize: "13px",
              mb: 3,
              fontWeight: 800,
            }}
          >
            Don't miss out
          </Box>
          <Box
            sx={{
              fontSize: "8px",
              mb: 3,
            }}
          >
            sign up for updates
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0DBA85",
                fontSize: "9px",
                fontWeight: 800,
                borderRadius: "5px",
                textTransform: "inherit",
              }}
            >
              Updates
            </Button>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              mt: 3,
              fontSize: "13px",
              mb: 3,
              fontWeight: 800,
            }}
          >
            Make a Difference
          </Box>
          <Box
            sx={{
              fontSize: "8px",
              mb: 3,
            }}
          >
            Make a donation
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0DBA85",
                fontSize: "9px",
                fontWeight: 800,
                borderRadius: "5px",
                textTransform: "inherit",
              }}
            >
              Donate
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 7,
          fontSize: "13px",
          fontWeight: 800,
          mb: 1,
        }}
      >
        Follow Us
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "9px",
        }}
      >
        Keep up with the conversation across social media.
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          mt: 2,
          pb: 3,
        }}
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 2, md: 2 }}>
            <img src={twitter} alt="twitter" width="50px" />
          </Grid>
          <Grid size={{ xs: 2, md: 2 }}>
            <img src={facebook} alt="twitter" width="50px" />
          </Grid>
          <Grid size={{ xs: 2, md: 2 }}>
            <img src={instagram} alt="twitter" width="50px" />
          </Grid>
          <Grid size={{ xs: 2, md: 2 }}>
            <img src={linkedin} alt="twitter" width="50px" />
          </Grid>
          <Grid size={{ xs: 2, md: 2 }}>
            <img src={youtube} alt="twitter" width="50px" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
