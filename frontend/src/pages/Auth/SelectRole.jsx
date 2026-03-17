import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext"; // ✅ NEW

export default function SelectRole() {
  const navigate = useNavigate();
  const { auth, setRole } = useAuth(); // ✅ NEW

  const [loading, setLoading] = useState(false);

  const handleSelect = async (role) => {
    try {
      setLoading(true);

      await axios.post(
        "http://localhost:5000/api/user/set-role",
        { role },
        {
          headers: {
            Authorization: `Bearer ${auth.token}` // ✅ use context
          }
        }
      );

      // ✅ update context (auto updates UI)
      setRole(role);

      // redirect
      navigate("/profile-setup");

    } catch (err) {
      console.error(err);
      alert("Error setting role");
    } finally {
      setLoading(false);
    }
  };

  const roles = [
    {
      title: "I'm a Student",
      description: "Search safe PGs, analyze rent, and avoid fraud listings.",
      icon: <SchoolIcon sx={{ fontSize: 50 }} />,
      role: "student"
    },
    {
      title: "I'm a Landlord",
      description: "List properties, manage tenants, and build trust.",
      icon: <HomeWorkIcon sx={{ fontSize: 50 }} />,
      role: "landlord"
    }
  ];

  return (
    <Container sx={{ mt: 10, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Join RentShield AI
      </Typography>

      <Typography variant="subtitle1" color="text.secondary">
        Choose how you want to use the platform
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 5 }}>
        {roles.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              onClick={() => !loading && handleSelect(item.role)} // ✅ prevent spam clicks
              sx={{
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.6 : 1,
                p: 3,
                height: "100%",
                transition: "0.3s",
                borderRadius: 3,
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: 6
                }
              }}
            >
              <CardContent>
                <Box mb={2}>{item.icon}</Box>

                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>

                <Typography color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}