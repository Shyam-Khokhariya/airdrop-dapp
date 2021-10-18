import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import GradientBox from "snet-ui/GradientBox";
import MuiTextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";

const TextField = styled(MuiTextField)`
  & svg,
  input {
    color: ${({ theme }) => theme.palette.textAdvanced.dark};
  }
`;

export default function SubscribeToNotification() {
  return (
    <GradientBox $background="bgGradient" sx={{ py: 8 }}>
      <Typography align="center" fontWeight="bold" variant="h2" color="text.secondary">
        Get Notification Updates
      </Typography>
      <Box sx={{ mt: 5, px: 4 }}>
        <Grid container component="form" spacing={2}>
          <Grid item md={3} display={{ xs: "none", sm: "block" }} />
          <Grid item xs={12} md={5}>
            <TextField
              name="EMAIL"
              InputProps={{ startAdornment: <EmailIcon /> }}
              placeholder="Please enter your email address"
              sx={{ bgcolor: "bgHighlight.main", borderRadius: 1, width: "100%" }}
              color="secondary"
            />
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: "flex", alignItems: "center" }}>
            <Button type="submit" color="secondary" variant="contained">
              Subscribe
            </Button>
          </Grid>
        </Grid>
      </Box>
    </GradientBox>
  );
}

//export default withStyles(styles)(HowItWorks);
