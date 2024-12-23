import { ReactNode } from "react";

export interface CardBalanceProps {
    cardLimit: number; 
}

export interface DailyPointsProps {
    dailyPoints: number;
}

export interface TransactionDetailProps {
    transaction: {
      amount: number;
      date: string;
      time: string;
      status: string;
      author?: string;
      total: number;
    };
}

export interface TransactionItemProps {
    transaction: {
      id: string;
      type: string;
      amount: number;
      transactionName: string;
      description: string;
      date: string;
      pending: boolean;
      authorisedUser?: string; 
    };
    formatDate: (date: string) => string;
  }
  