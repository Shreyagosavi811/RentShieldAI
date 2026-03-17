import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Box
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO SECTION */}
      <Box
        sx={{
          background: "linear-gradient(to right, #1976d2, #42a5f5)",
          color: "#fff",
          py: 10,
          textAlign: "center"
        }}
      >
        <Container>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            RentShield AI 🏠
          </Typography>

          <Typography variant="h6" gutterBottom>
            AI-Powered Rental Risk & Trust Intelligence Platform
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{ mt: 3, backgroundColor: "#fff", color: "#1976d2" }}
            onClick={() => navigate("/select-role")}
          >
            Get Started
          </Button>

          <Button
            variant="outlined"
            size="large"
            sx={{ mt: 3, ml: 2, color: "#fff", borderColor: "#fff" }}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </Container>
      </Box>

      {/* FEATURES SECTION */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Why Choose RentShield AI?
        </Typography>

        <Grid container spacing={4} sx={{ mt: 3 }}>
          <Grid item xs={12} md={4}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6">
                  🔍 Fake Listing Detection
                </Typography>
                <Typography>
                  AI detects fraudulent property listings instantly.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6">
                  💰 Rent Fairness Analysis
                </Typography>
                <Typography>
                  Compare rent with market trends using AI insights.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6">
                  🛡 Safe Renting
                </Typography>
                <Typography>
                  Ensures trust between students and landlords.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* HOW IT WORKS */}
      <Box sx={{ backgroundColor: "#f5f5f5", py: 8 }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            How It Works
          </Typography>

          <Grid container spacing={4} sx={{ mt: 3 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6">1. Sign Up</Typography>
              <Typography>Choose Student or Landlord</Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="h6">2. Explore / List</Typography>
              <Typography>Search PG or add your property</Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="h6">3. AI Analysis</Typography>
              <Typography>Get fraud detection & rent insights</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA SECTION */}
      <Box sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Ready to find safe rentals?
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/select-role")}
        >
          Get Started Now
        </Button>
      </Box>
    </>
  );
}