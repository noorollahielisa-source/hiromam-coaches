"use client";
import { useState, useEffect } from "react";
import CoachList from "../components/CoachList";

export default function Home() {
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("coaches") || "[]");
    setCoaches(stored);
  }, []);

  return (
    <main style={{padding:'20px', textAlign:'center'}}>
      <h1>Hiromam Club Coaches 🏋️‍♂️</h1>
      <CoachList coaches={coaches} />
    </main>
  );
}
