import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useMemo } from "react";
import { SupportedChainId } from "snet-ui/Blockchain/connectors";
import { useActiveWeb3React } from "snet-ui/Blockchain/web3Hooks";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function EligibilityBanner() {
  const { account, chainId } = useActiveWeb3React();

  const network = useMemo(() => SupportedChainId[chainId ?? ""], [chainId]);

  if (!account) return null;

  return (
    <Box sx={{ bgcolor: "bgHighlight.main", p: 3, borderRadius: 2 }} color="textAdvanced.dark">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="normal">Airdrop Eligibility</Typography>

          <Box sx={{ display: "flex", alignItems: "center", p: 0.5, pr: 0 }}>
            <Box color="success" sx={{ mr: 1 }}>
              <CheckCircleIcon color="success" />
            </Box>

            <Typography variant="priority" color="primary.main">
              Qualified for Airdrop Window 2/2
            </Typography>
          </Box>

          <a href="#">
            <Typography color="secondary.main">View Details</Typography>
          </a>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>Connected Wallet Address</Typography>
          <Typography noWrap variant="priority" component="p">
            {account}
          </Typography>
          <Typography sx={{ textTransform: "capitalize" }} variant="priority">
            Ethereum {network?.toLowerCase()}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
