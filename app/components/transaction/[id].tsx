"use client";

import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { TransactionDetailProps } from "@/app/types";

const TransactionDetail: React.FC<TransactionDetailProps> = ({ transaction }) => {
  const { amount, date, time, status, author, total } = transaction;

  return (
    <Card sx={{ maxWidth: 600, margin: "0 auto", padding: 2 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h5">${amount.toFixed(2)}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">{date}|{time}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" color="text.secondary">
              <strong>Status:</strong>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">{status}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" color="text.secondary">
              <strong>Author:</strong>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">{author || "N/A"}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" color="text.secondary">
              <strong>Total:</strong>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">${total.toFixed(2)}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TransactionDetail;