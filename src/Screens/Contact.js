import Box from "@mui/material/Box";
import mid from "../images/unsplashn.png";
import found from "../images/found.png";
import save from "../images/Save.png";
import address from "../images/Address.png";
import email from "../images/Email.png";
import contact from "../images/Contact.png";
import AppBar from "../Components/AppBar";
import Footer from "../Components/Footer";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const Contact = () => {
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
            //   mt: -9,
            position: "relative",
            mb: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            //   height: "50%",
          }}
        >
          <img
            src={save}
            alt="logo"
            style={{
              width: "100%",
              // height: "50%",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              color: "white",
              fontSize: "34px",
              fontWeight: 700,
              lineHeight: "55px",
              mb: 14,
            }}
          >
            <img src={contact} alt="found" />
          </Box>
          <Box
            sx={{
              position: "absolute",
              color: "white",
              fontSize: "34px",
              fontWeight: 700,
              lineHeight: "55px",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              alignContent: "center",
              alignSelf: "center",
              alignSelf: "center",
            }}
          >
            <Box>{/* <img src={found} alt="found" /> */}</Box>
            <Box>Contact Us </Box>
          </Box>
        </Box>
        {/* form */}
        <Box
          sx={{
            flexGrow: 1,
            //   ml: 5,
            //   mr: 5,
            display: "flex",
            justifyContent: "center",
            pb: 9,
          }}
        >
          <Grid container spacing={0}>
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                backgroundColor: "#FFFFFF",
                p: 5,
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: 500,
                      }}
                    >
                      First Name*
                    </Box>
                    <TextField
                      id="outlined-size-small"
                      placeholder="name"
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: 500,
                      }}
                    >
                      Email*
                    </Box>
                    <TextField
                      id="outlined-size-small"
                      placeholder="Small"
                      size="small"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 2,
                  mb: 1,
                  fontWeight: 500,
                }}
              >
                Orgsanization
              </Box>
              <TextField
                id="outlined-size-small"
                placeholder="organisation"
                size="small"
                fullWidth
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 2,
                  mb: 1,
                  fontWeight: 500,
                }}
              >
                Subject
              </Box>
              <TextField
                id="outlined-size-small"
                placeholder="subject"
                size="small"
                fullWidth
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 2,
                  mb: 1,
                  fontWeight: 500,
                }}
              >
                Message
              </Box>
              <TextField
                fullWidth
                id="outlined-size-small"
                placeholder="message"
                size="small"
                multiline
                rows={4}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 3,
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#0DBA85",
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Grid>

            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                backgroundColor: "#D9D9D9",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src={found} alt="logo" />
              </Box>
              <Box
                sx={{
                  backgroundColor: "#FFFFFF",
                  ml: 2,
                  mr: 2,
                  pl: 3,
                  pr: 3,
                  pt: 3,
                  pb: 3,
                }}
              >
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img src={address} alt="address" />
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: 500,
                        mb: 4,
                      }}
                    >
                      Address
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: 500,
                        mb: 1,
                      }}
                    >
                      Villisa Latsisa 14 ,{" "}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: 500,
                      }}
                    >
                      Moscow , Russia
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img src={email} alt="email" />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: 500,
                        mb: 5,
                      }}
                    >
                      Email
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: 500,
                      }}
                    >
                      2024efoundation@gmail.com
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* end of form */}
      </Box>

      <Footer />
    </>
  );
};

export default Contact;
