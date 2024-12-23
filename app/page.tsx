import Image from "next/image";
import styles from "./page.module.css";
import TransactionsList from "./components/TransactionList";
import TransactionDetail from "./components/TransactionDetail";

export default function Home() {
  return (
    <div>
      <TransactionsList />
    </div>
  );
}
