import Box from "@mui/material/Box";
import mid from "../images/unsplashn.png";
import found from "../images/found.png";
const IText = () => {
  return (
    <>
      <Box
        sx={{
          // mt: 4,
          //   mt: -9,
          position: "relative",
          mb: { xs: 13, md: 25 },
          // mb: 25,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10%",
        }}
      >
        <img
          src={mid}
          alt="logo"
          style={{
            width: "90%",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            color: "white",
            fontSize: "34px",
            fontWeight: 700,
            lineHeight: "55px",
            mb: { xs: 3, md: 24 },
            // mb: 24,
            display: { xs: "none", md: "block" },
          }}
        >
          <img src={found} alt="found" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            color: "white",
            // fontSize: "34px",
            fontSize: { xs: "20px", md: "34px" },
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
          <Box>
            Unleashing the potential of humanity <br /> through service.
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default IText;
