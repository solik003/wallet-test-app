import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { CardBalanceProps } from "../types";


const CardBalance: React.FC<CardBalanceProps> = ({ cardLimit }) => {
  const [balance, setBalance] = useState<number>(0);

  const generateRandomBalance = () => {
    const randomBalance = Math.random() * cardLimit;
    setBalance(randomBalance);
  };

  useEffect(() => {
    generateRandomBalance(); 
  }, [cardLimit]);

  const availableLimit = cardLimit - balance;

  return (
    <Card sx={{ maxWidth: 345, margin: "0 auto", marginTop: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Card Balance
        </Typography>
        <Typography variant="body1" color="text.secondary">
          ${balance.toFixed(2)}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          ${availableLimit.toFixed(2)} Available
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardBalance;


