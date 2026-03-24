import {
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent
} from "@mui/material";
import { useState } from "react";
import axios from "axios";

export default function AddProperty() {
  const [form, setForm] = useState({
    title: "",
    location: "",
    rent: "",
    description: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/property/add",
        form,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      alert("Property added successfully!");
      setForm({ title: "", location: "", rent: "", description: "" });

    } catch (err) {
      console.error(err);
      alert("Error adding property");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Card sx={{ borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Add New Property
          </Typography>

          <TextField
            fullWidth
            label="Title"
            name="title"
            margin="normal"
            value={form.title}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Location"
            name="location"
            margin="normal"
            value={form.location}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Rent"
            name="rent"
            type="number"
            margin="normal"
            value={form.rent}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Description"
            name="description"
            multiline
            rows={3}
            margin="normal"
            value={form.description}
            onChange={handleChange}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
            onClick={handleSubmit}
          >
            Add Property
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}