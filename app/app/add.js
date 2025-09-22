"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddCoach() {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [experience, setExperience] = useState("");
  const [image, setImage] = useState("");

  const router = useRouter();

  const handleAdd = () => {
    if (!name || !specialty || !experience || !image) {
      alert("All fields are required.");
      return;
    }
    const stored = JSON.parse(localStorage.getItem("coaches") || "[]");
    stored.push({ name, specialty, experience, image });
    localStorage.setItem("coaches", JSON.stringify(stored));
    router.push("/"); // بازگشت به صفحه اصلی
  };

  return (
    <div style={{padding:'20px', textAlign:'center'}}>
      <h1>Add New Coach</h1>
      <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} /><br/>
      <input placeholder="Specialty" value={specialty} onChange={e=>setSpecialty(e.target.value)} /><br/>
      <input type="number" placeholder="Experience (years)" value={experience} onChange={e=>setExperience(e.target.value)} /><br/>
      <input placeholder="Image URL" value={image} onChange={e=>setImage(e.target.value)} /><br/>
      <button onClick={handleAdd}>Add Coach</button>
    </div>
  );
}
