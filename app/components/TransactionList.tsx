'use client'
import React, { useState, useEffect } from "react";
import { Grid, Typography, Card, CardContent } from "@mui/material";
import CardBalance from "./CardBalance";
import NoPaymentDue from "./NoPayment";
import DailyPoints from "./DailyPoints";
import TransactionItem from "./TransactionItem";
import { formatDate } from "../utils";

const TransactionsList: React.FC = () => {
  const cardLimit = 1500;
  const [balance, setBalance] = useState<number>(0);
  const [dailyPoints, setDailyPoints] = useState<number>(0);
  const [transactions, setTransactions] = useState<Array<any>>([]);

  const generateRandomBalance = () => {
    const randomBalance = Math.random() * cardLimit;
    setBalance(randomBalance);
    setDailyPoints(randomBalance * 0.1);
  };

  useEffect(() => {
    generateRandomBalance();

    fetch("/transactions.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch transactions");
    }
    return response.json();
  })
  .then((data) => {
    setTransactions(data.slice(0, 10));
  })
  .catch((error) => {
    console.error(error);
    setTransactions([]);
  });
  }, []);

  const availableLimit = cardLimit - balance;

  return (
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
      <Grid item xs={6} sm={6} md={4}>
        <CardBalance cardLimit={availableLimit} />
      </Grid>

      <Grid item xs={6} sm={6} md={4}>
        <NoPaymentDue />
      </Grid>

      <Grid item xs={6} sm={12} md={4}>
        <DailyPoints />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
          Latest Transactions
        </Typography>
        <Card sx={{ maxWidth: "100%", margin: "0 auto" }}>
          <CardContent>
            <ul>
              {transactions.map((transaction: any) => (
                <TransactionItem
                  key={transaction.id}
                  transaction={transaction}
                  formatDate={formatDate}
                />
              ))}
            </ul>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TransactionsList;
