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
import { useAuth } from "../../context/AuthContext"; // ✅ NEW

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ NEW

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // ✅ optional UX

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    setError("");

    if (!form.email || !form.password) {
      return setError("All fields are required");
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      const user = res.data.user;

      // ✅ USE CONTEXT (instead of localStorage)
      login({
        token: res.data.token,
        role: user.role,
        profileCompleted: user.profileCompleted
      });

      // 🔥 FLOW CONTROL (same logic, cleaner)
      if (!user.role) {
        navigate("/select-role");
      } else if (!user.profileCompleted) {
        navigate("/profile-setup");
      } else {
        navigate("/dashboard");
      }

    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>

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

          {error && (
            <Typography color="error" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2, borderRadius: 2 }}
            onClick={() => navigate("/dashboard")}
            disabled={loading} // ✅ prevents multiple clicks
          >
            {loading ? "Logging in..." : "Login"}
          </Button>

          <Button
            fullWidth
            sx={{ mt: 1 }}
            onClick={() => navigate("/register")}
          >
            Don't have an account? Register
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}