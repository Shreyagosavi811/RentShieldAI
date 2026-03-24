import {
  Container,
  TextField,
  Grid,
  Card,
  CardContent,
  Typography,
  Button
} from "@mui/material";
import { useState } from "react";

export default function PGSearch() {
  const [search, setSearch] = useState({
    location: "",
    budget: ""
  });

  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // 🔥 Dummy data (later connect backend)
    setResults([
      {
        name: "Sunshine PG",
        location: "Pune",
        rent: 8000
      },
      {
        name: "Green View Hostel",
        location: "Mumbai",
        rent: 10000
      }
    ]);
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Find Your Perfect PG
      </Typography>

      {/* SEARCH BAR */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <TextField
            fullWidth
            label="Location"
            onChange={(e) =>
              setSearch({ ...search, location: e.target.value })
            }
          />
        </Grid>

        <Grid item xs={12} md={5}>
          <TextField
            fullWidth
            label="Max Budget"
            onChange={(e) =>
              setSearch({ ...search, budget: e.target.value })
            }
          />
        </Grid>

        <Grid item xs={12} md={2}>
          <Button fullWidth variant="contained" onClick={handleSearch}>
            Search
          </Button>
        </Grid>
      </Grid>

      {/* RESULTS */}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {results.map((pg, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6">{pg.name}</Typography>
                <Typography color="text.secondary">
                  {pg.location}
                </Typography>
                <Typography>₹{pg.rent}/month</Typography>

                <Button sx={{ mt: 2 }} variant="outlined">
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}