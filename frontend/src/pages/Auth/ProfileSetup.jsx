import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProfileSetup() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const [form, setForm] = useState({
    college: "",
    location: "",
    budget: "",
    propertyType: "",
    rooms: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/api/user/profile", form);

    localStorage.setItem("profileCompleted", true);
    navigate("/dashboard");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Card>
        <CardContent>
          <Typography variant="h5">Complete Profile</Typography>

          {/* STUDENT */}
          {role === "student" && (
            <>
              <TextField
                fullWidth
                label="College"
                name="college"
                margin="normal"
                onChange={handleChange}
              />

              <TextField
                fullWidth
                label="Preferred Location"
                name="location"
                margin="normal"
                onChange={handleChange}
              />

              <TextField
                fullWidth
                label="Budget"
                name="budget"
                margin="normal"
                onChange={handleChange}
              />
            </>
          )}

          {/* LANDLORD */}
          {role === "landlord" && (
            <>
              <TextField
                fullWidth
                label="Property Type"
                name="propertyType"
                margin="normal"
                onChange={handleChange}
              />

              <TextField
                fullWidth
                label="Rooms Available"
                name="rooms"
                margin="normal"
                onChange={handleChange}
              />
            </>
          )}

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
            onClick={handleSubmit}
          >
            Save Profile
          </Button>

          <Button
            fullWidth
            sx={{ mt: 1 }}
            onClick={() => navigate("/dashboard")}
          >
            Skip for now
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}