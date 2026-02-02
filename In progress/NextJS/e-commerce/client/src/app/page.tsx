import styles from "./page.module.css";

import { redirect } from "next/navigation";


export default function Home() {
  const userIsLoggedin = false;

  if (!userIsLoggedin) {
    redirect('/login');
  }

  return (
    <h1>Welcome to the home page!</h1>
  )
}