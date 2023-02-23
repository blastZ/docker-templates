"use client";

import { useEffect, useState } from "react";

import styles from "./page.module.css";

const AppInfo = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("/api/app-info")
      .then((o) => o.json())
      .then((o) => setName(o.name));
  }, []);

  return <p>{name}</p>;
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <AppInfo />
      </div>
    </main>
  );
}
