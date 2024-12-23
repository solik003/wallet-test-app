
'use client';
import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { TransactionItemProps } from "../types";
import Link from "next/link";
import { useRouter } from "next/navigation";


const TransactionItem: React.FC<TransactionItemProps> = ({
  transaction,
  formatDate,
}) => {
  const { id,type, amount, transactionName, description, date, pending, authorisedUser} =
    transaction;

    const router = useRouter();

    const handleRedirect = () => {
        router.push(`/transaction/${id}`);
    };

  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AccountBalanceIcon fontSize="large" color="primary" />
        <div style={{ flex: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>{transactionName}</Typography>

          <Typography variant="body2" color="text.secondary">
            {pending && <p>Pending | {type === "payment" ? "Payment" : "Credit"}</p>}
            {description}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {authorisedUser ? `${authorisedUser} - ` : ""}
            {formatDate(date)} 
          </Typography>
        </div>

        <Typography variant="h6">
          ${amount.toFixed(2)}
        </Typography>

        <IconButton onClick={handleRedirect}>
            <ArrowForwardIosIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default TransactionItem;
          