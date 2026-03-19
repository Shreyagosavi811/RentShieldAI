import { useState } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent
} from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        ...form
      });
      alert("Registered Successfully!");
      navigate("/login");
    } catch (err) {
      alert("Error registering");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Card>
        <CardContent>
          <Typography variant="h5">Create Account</Typography>

          <TextField
            fullWidth
            label="Name"
            name="name"
            margin="normal"
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            margin="normal"
            onChange={handleChange}
          />

          <TextField
            fullWidth
            type="password"
            label="Password"
            name="password"
            margin="normal"
            onChange={handleChange}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
            onClick={handleRegister}
          >
            Register
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}