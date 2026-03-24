import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

export default function StudentDashboard() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Student Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Search PG</Typography>
              <Typography>Find safe rentals</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">AI Analysis</Typography>
              <Typography>Check rent fairness & fraud</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}