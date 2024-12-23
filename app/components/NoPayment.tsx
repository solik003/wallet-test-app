import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const NoPaymentDue: React.FC = () => (
  <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
    <CardContent>
      <Typography variant="h5" component="div">
        No Payment Due
      </Typography>
      <Typography variant="body1" color="text.secondary">
        You've paid your balance.
      </Typography>
    </CardContent>
  </Card>
);

export default NoPaymentDue;
