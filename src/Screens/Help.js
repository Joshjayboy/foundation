import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import logo from "../images/LOGO.png";
import AppBar from "../Components/AppBar";
import Footer from "../Components/Footer";
const Help = () => {
  return (
    <>
      <AppBar />
      <Box
        sx={{
          backgroundColor: "#E9E5DC",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#000000",
            lineHeight: "72px",
            color: "white",
            pl: 5,
            pr: 5,
          }}
        >
          Esinath Foundation is here to support you. Are you facing challenges
          that you need assistance with? We are committed to making a positive
          impact on our community. Please fill out the form below to share your
          needs. Our dedicated team will review your request and provide
          appropriate support. How can we help you? Please describe your
          situation briefly and clearly.
        </Box>

        {/* form */}

        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            // ml: 25,
            // mr: 25,
            // display: "flex",
            // justifyContent: "center",
            pt: 5,
            mb: 5,
          }}
        >
          {/* LOGO */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box>
              <img src={logo} alt="logo" />
            </Box>
            <Box
              sx={{
                pt: 12,
                fontWeight: 800,
                fontSize: "26px",
                ml: -9,
              }}
            >
              Get Help Form
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "Left",
              fontWeight: 500,
              fontSize: "26px",
              ml: { xs: 1, sm: 20, md: 20 },
              mb: 5,
            }}
          >
            <span
              style={{
                fontWeight: 800,
              }}
            >
              Kid’s details
            </span>{" "}
            (Enter all the details needed below)
          </Box>

          <Box
            sx={{
              mb: 2,
              ml: { xs: 1, sm: 20, md: 20 },
              mr: { xs: 1, sm: 20, md: 20 },
            }}
          >
            <Grid container>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "left", md: "left" },
                }}
              >
                <Box sx={{ fontWeight: 500, fontSize: "20px" }}>Surname</Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "right", md: "left" },
                }}
              >
                <Box>
                  <TextField
                    id="outlined-basic"
                    placeholder="surname"
                    variant="outlined"
                    sx={{ width: { xs: 300, md: 400 } }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              mb: 2,
              ml: { xs: 1, sm: 20, md: 20 },
              mr: { xs: 1, sm: 20, md: 20 },
            }}
          >
            <Grid container>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "left", md: "left" },
                }}
              >
                <Box sx={{ fontWeight: 500, fontSize: "20px" }}>Name</Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "right", md: "left" },
                }}
              >
                <Box>
                  <TextField
                    id="outlined-basic"
                    placeholder="Name"
                    variant="outlined"
                    sx={{ width: { xs: 300, md: 400 } }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              mb: 2,
              ml: { xs: 1, sm: 20, md: 20 },
              mr: { xs: 1, sm: 20, md: 20 },
            }}
          >
            <Grid container>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "left", md: "left" },
                }}
              >
                <Box sx={{ fontWeight: 500, fontSize: "20px" }}>Age:</Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "right", md: "left" },
                }}
              >
                <Box>
                  <TextField
                    id="outlined-basic"
                    placeholder="Age"
                    variant="outlined"
                    sx={{ width: { xs: 300, md: 400 } }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              mb: 2,
              ml: { xs: 1, sm: 20, md: 20 },
              mr: { xs: 1, sm: 20, md: 20 },
            }}
          >
            <Grid container>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "left", md: "left" },
                }}
              >
                <Box sx={{ fontWeight: 500, fontSize: "20px" }}>Grade</Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "right", md: "left" },
                }}
              >
                <Box>
                  <TextField
                    id="outlined-basic"
                    placeholder="Grade"
                    variant="outlined"
                    sx={{ width: { xs: 300, md: 400 } }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              mb: 2,
              ml: { xs: 1, sm: 20, md: 20 },
              mr: { xs: 1, sm: 20, md: 20 },
            }}
          >
            <Grid container>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "left", md: "left" },
                }}
              >
                <Box sx={{ fontWeight: 500, fontSize: "20px" }}>
                  School Name
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "right", md: "left" },
                }}
              >
                <Box>
                  <TextField
                    id="outlined-basic"
                    placeholder="School Name"
                    variant="outlined"
                    sx={{ width: { xs: 300, md: 400 } }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              ml: { xs: 1, sm: 20, md: 20 },
              mt: 9,
              mb: 3,
              fontSize: "26px",
              fontWeight: 800,
            }}
          >
            Guardian's Details (Enter all the details below)
          </Box>

          <Box
            sx={{
              mb: 2,
              ml: { xs: 1, sm: 20, md: 20 },
              mr: { xs: 1, sm: 20, md: 20 },
            }}
          >
            <Grid container>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "left", md: "left" },
                }}
              >
                <Box sx={{ fontWeight: 500, fontSize: "20px" }}>Mother</Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "right", md: "left" },
                }}
              >
                <Box>
                  <TextField
                    id="outlined-basic"
                    placeholder="Mother"
                    variant="outlined"
                    sx={{ width: { xs: 300, md: 400 } }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              mb: 2,
              ml: { xs: 1, sm: 20, md: 20 },
              mr: { xs: 1, sm: 20, md: 20 },
            }}
          >
            <Grid container>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "left", md: "left" },
                }}
              >
                <Box sx={{ fontWeight: 500, fontSize: "20px" }}>Father</Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "right", md: "left" },
                }}
              >
                <Box>
                  <TextField
                    id="outlined-basic"
                    placeholder="Father"
                    variant="outlined"
                    sx={{ width: { xs: 300, md: 400 } }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              ml: { xs: 1, sm: 20, md: 20 },
              mt: 9,
              mb: 3,
              fontSize: "26px",
              fontWeight: 800,
            }}
          >
            If there are others put the information below;
          </Box>

          <Box
            sx={{
              mb: 2,
              ml: { xs: 1, sm: 20, md: 20 },
              mr: { xs: 1, sm: 20, md: 20 },
            }}
          >
            <Grid container>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "left", md: "left" },
                }}
              >
                <Box sx={{ fontWeight: 500, fontSize: "20px" }}>Others;</Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "right", md: "left" },
                }}
              >
                <Box>
                  <TextField
                    id="outlined-basic"
                    placeholder="others"
                    variant="outlined"
                    sx={{ width: { xs: 300, md: 400 } }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              ml: { xs: 1, sm: 20, md: 20 },
              mt: 9,
              mb: 3,
              fontSize: "26px",
              fontWeight: 800,
            }}
          >
            Location (Enter all the details below)
          </Box>

          <Box
            sx={{
              mb: 2,
              ml: { xs: 1, sm: 20, md: 20 },
              mr: { xs: 1, sm: 20, md: 20 },
            }}
          >
            <Grid container>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "left", md: "left" },
                }}
              >
                <Box sx={{ fontWeight: 500, fontSize: "20px" }}>
                  Urban | Rural
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "right", md: "left" },
                }}
              >
                <Box>
                  <TextField
                    id="outlined-basic"
                    placeholder="Urban | Rural"
                    variant="outlined"
                    sx={{ width: { xs: 300, md: 400 } }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              mb: 2,
              ml: { xs: 1, sm: 20, md: 20 },
              mr: { xs: 1, sm: 20, md: 20 },
            }}
          >
            <Grid container>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "left", md: "left" },
                }}
              >
                <Box sx={{ fontWeight: 500, fontSize: "20px" }}>Country</Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "right", md: "left" },
                }}
              >
                <Box>
                  <TextField
                    id="outlined-basic"
                    placeholder="Country"
                    variant="outlined"
                    sx={{ width: { xs: 300, md: 400 } }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              mb: 2,
              ml: { xs: 1, sm: 20, md: 20 },
              mr: { xs: 1, sm: 20, md: 20 },
            }}
          >
            <Grid container>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "left", md: "left" },
                }}
              >
                <Box sx={{ fontWeight: 500, fontSize: "20px" }}>State</Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "right", md: "left" },
                }}
              >
                <Box>
                  <TextField
                    id="outlined-basic"
                    placeholder="State"
                    variant="outlined"
                    sx={{ width: { xs: 300, md: 400 } }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              mb: 2,
              ml: { xs: 1, sm: 20, md: 20 },
              mr: { xs: 1, sm: 20, md: 20 },
            }}
          >
            <Grid container>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "left", md: "left" },
                }}
              >
                <Box sx={{ fontWeight: 500, fontSize: "20px" }}>Province</Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "right", md: "left" },
                }}
              >
                <Box>
                  <TextField
                    id="outlined-basic"
                    placeholder="Province"
                    variant="outlined"
                    sx={{ width: { xs: 300, md: 400 } }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* financial status */}
          <Box
            sx={{
              ml: { xs: 1, sm: 20, md: 20 },
              mt: 9,
              mb: 3,
              fontSize: "26px",
              fontWeight: 800,
            }}
          >
            Financial Status
          </Box>
          <Box
            sx={{
              mb: 2,
              ml: { xs: 1, sm: 20, md: 20 },
              mr: { xs: 1, sm: 20, md: 20 },
            }}
          >
            <Grid container>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "left", md: "left" },
                }}
              >
                <Box sx={{ fontWeight: 500, fontSize: "20px" }}>
                  How much is the total fees?
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "right", md: "left" },
                }}
              >
                <Box>
                  <TextField
                    id="outlined-basic"
                    placeholder=""
                    variant="outlined"
                    sx={{ width: { xs: 300, md: 400 } }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              mb: 2,
              ml: { xs: 1, sm: 20, md: 20 },
              mr: { xs: 1, sm: 20, md: 20 },
            }}
          >
            <Grid container>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "left", md: "left" },
                }}
              >
                <Box sx={{ fontWeight: 500, fontSize: "20px" }}>
                  How much is the family able to provide?
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "right", md: "left" },
                }}
              >
                <Box>
                  <TextField
                    id="outlined-basic"
                    placeholder=""
                    variant="outlined"
                    sx={{ width: { xs: 300, md: 400 } }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              mb: 2,
              ml: { xs: 1, sm: 20, md: 20 },
              mr: { xs: 1, sm: 20, md: 20 },
            }}
          >
            <Grid container>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "left", md: "left" },
                }}
              >
                <Box sx={{ fontWeight: 500, fontSize: "20px" }}>
                  How much does the child need?
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "right", md: "left" },
                }}
              >
                <Box>
                  <TextField
                    id="outlined-basic"
                    placeholder=""
                    variant="outlined"
                    sx={{ width: { xs: 300, md: 400 } }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              mb: 2,
              ml: { xs: 1, sm: 20, md: 20 },
              mr: { xs: 1, sm: 20, md: 20 },
            }}
          >
            <Grid container>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "left", md: "left" },
                }}
              >
                <Box sx={{ fontWeight: 500, fontSize: "20px" }}>
                  Is the kid on another fund, please specify?
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "right", md: "left" },
                }}
              >
                <Box>
                  <TextField
                    id="outlined-basic"
                    placeholder=""
                    variant="outlined"
                    sx={{ width: { xs: 300, md: 400 } }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              mb: 2,
              ml: { xs: 1, sm: 20, md: 20 },
              mr: { xs: 1, sm: 20, md: 20 },
            }}
          >
            <Grid container>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "left", md: "left" },
                }}
              >
                <Box sx={{ fontWeight: 500, fontSize: "20px" }}>
                  Is there any need besides fees (PLEASE SPECIFY)?
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "right", md: "left" },
                }}
              >
                <Box>
                  <TextField
                    id="outlined-basic"
                    placeholder=""
                    variant="outlined"
                    rows={4}
                    sx={{ width: { xs: 300, md: 400 } }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              ml: { xs: 1, sm: 20, md: 20 },
              mt: 9,
              mb: 3,
              fontSize: "26px",
              fontWeight: 800,
            }}
          >
            Kids Grades
          </Box>

          <Box
            sx={{
              mb: 2,
              ml: { xs: 1, sm: 20, md: 20 },
              mr: { xs: 1, sm: 20, md: 20 },
            }}
          >
            <Grid container>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "left", md: "left" },
                }}
              >
                <Box sx={{ fontWeight: 500, fontSize: "20px" }}>
                  Last academic results
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "right", md: "left" },
                }}
              >
                <Box>
                  <TextField
                    id="outlined-basic"
                    placeholder=""
                    variant="outlined"
                    sx={{ width: { xs: 300, md: 400 } }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              mb: 2,
              ml: { xs: 1, sm: 20, md: 20 },
              mr: { xs: 1, sm: 20, md: 20 },
            }}
          >
            <Grid container>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "left", md: "left" },
                }}
              >
                <Box sx={{ fontWeight: 500, fontSize: "20px" }}>
                  Any special skills?
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "right", md: "left" },
                }}
              >
                <Box>
                  <TextField
                    id="outlined-basic"
                    placeholder=""
                    variant="outlined"
                    sx={{ width: { xs: 300, md: 400 } }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Help;
