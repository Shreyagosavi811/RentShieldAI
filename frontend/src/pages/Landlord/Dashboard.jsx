import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

export default function LandlordDashboard() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4">Landlord Dashboard</Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Add Listing</Typography>
              <Typography>Post your property</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Manage Listings</Typography>
              <Typography>Edit & track properties</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}