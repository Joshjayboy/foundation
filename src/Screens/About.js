import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import twitter from "../images/TwitterX.png";
import youtube from "../images/YouTube.png";
import grant from "../images/Grant.png";
import unsplash from "../images/unsplash.png";
import linkedin from "../images/LinkedIn.png";
import instagram from "../images/Instagram.png";
import facebook from "../images/Facebook.png";
import save from "../images/Save.png";
import Divider from "@mui/material/Divider";
import Footer from "../Components/Footer";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import AppBar from "../Components/AppBar";

const About = () => {
  return (
    <>
      <AppBar />
      <Box
        sx={{
          backgroundColor: "#E9E5DC",
        }}
      >
        {/* image */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={save} alt="save" width="70%" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "31px",
            fontWeight: 600,
          }}
        >
          Who We Are
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            lineHeight: "45px",
            // ml: 40,
            ml: { xs: 2, sm: 20, md: 40 },
            // mr: 40,
            mr: { xs: 2, sm: 20, md: 40 },
          }}
        >
          Esinath Foundation is a beacon of hope for children in need. Our
          mission is to unlock the potential of young minds by providing access
          to quality education and essential support. We believe that every
          child deserves the opportunity to thrive, regardless of their
          circumstances. Through our education programs, healthcare initiatives,
          and community development projects, we strive to create a brighter
          future for generations to come
        </Box>
        {/* vision */}
        <Box
          sx={{
            backgroundColor: "#0DBA85",
            borderRadius: "20px",
            mt: 3,
            // ml: 50,
            ml: { xs: 3, sm: 3, md: 50 },
            // mr: 50,
            mr: { xs: 3, sm: 3, md: 50 },
            pt: 3,
            pb: 3,
            pl: 3,
            pr: 3,
          }}
        >
          <Divider
            color="black"
            sx={{
              color: "white",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            Our Vision
          </Divider>
          <Box
            sx={{
              color: "black",
              lineHeight: "40px",
              fontWeight: 600,
              fontSize: "13px",
            }}
          >
            A world where every African child has the opportunity to reach their
            full potential and become a catalyst for positive change.
          </Box>
        </Box>
        {/* Mission */}
        <Box
          sx={{
            backgroundColor: "#0DBA85",
            borderRadius: "20px",
            mt: 3,
            // ml: 50,
            ml: { xs: 3, sm: 3, md: 50 },
            // mr: 50,
            mr: { xs: 3, sm: 3, md: 50 },
            pt: 3,
            pb: 3,
            pl: 3,
            pr: 3,
          }}
        >
          <Divider
            color="black"
            sx={{
              color: "white",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            Our Misson
          </Divider>
          <Box
            sx={{
              color: "black",
              lineHeight: "40px",
              fontWeight: 600,
              fontSize: "13px",
            }}
          >
            To empower 100 million+ African children by cultivating a growth
            mindset and equipping them with essential 21st-century skills
            through education, mentorship, and financial support
          </Box>
        </Box>

        {/* impact */}

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
              fontSize: "31px",
              fontWeight: 600,
              borderRadius: "10px",
              textTransform: "inherit",
            }}
          >
            Our Impact
          </Button>
        </Box>
        {/* card */}
        <Box
          sx={{
            // ml: 35,
            ml: { xs: 3, sm: 3 },
            // mr: 15,
            mr: { xs: 3, sm: -5 },
            mt: "50px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
              <Box
                sx={{
                  fontWeight: 500,
                  fontSize: "25px",
                  mb: 2,
                }}
              >
                Igniting Minds
              </Box>
              <Card
                sx={{
                  maxWidth: 345,
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                  borderBottomLeftRadius: "20px",
                  borderBottomRightRadius: "20px",
                }}
              >
                <CardMedia
                  sx={{ height: 240, borderRadius: "20px" }}
                  image={grant}
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "13px",
                      lineHeight: "31px",
                      fontWeight: 600,
                    }}
                  >
                    Establishing 10 million education cohorts across Africa to
                    instill critical thinking, coding, marketing, innovation,
                    and entrepreneurial skills.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
              <Box
                sx={{
                  fontWeight: 500,
                  fontSize: "25px",
                  mb: 2,
                }}
              >
                Providing Solutions
              </Box>
              <Card
                sx={{
                  maxWidth: 345,
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                  borderBottomLeftRadius: "20px",
                  borderBottomRightRadius: "20px",
                }}
              >
                <CardMedia
                  sx={{ height: 240, borderRadius: "20px" }}
                  image={unsplash}
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "13px",
                      lineHeight: "31px",
                      fontWeight: 600,
                    }}
                  >
                    Providing over $10 million in educational grants to support
                    the dreams and aspirations of young African leaders.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 5,
            pb: 3,
            fontWeight: 600,
            pl: { xs: 3, sm: 3 },
            pr: { xs: 3, sm: 3 },
          }}
        >
          Join us in creating a brighter future for Africa's children. Your
          compassion and support can make a profound difference.
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",

            pb: 3,
            fontWeight: 600,
            fontSize: "20px",
            pl: { xs: 3, sm: 3 },
            pr: { xs: 3, sm: 3 },
          }}
        >
          Together, we can unlock the limitless potential of an entire
          generation.
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default About;
