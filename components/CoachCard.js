export default function CoachCard({ coach }) {
  return (
    <div style={{border:'1px solid #ccc', padding:'12px', borderRadius:'8px', margin:'10px'}}>
      <img src={coach.image} alt={coach.name} width={100} height={100} />
      <h3>{coach.name}</h3>
      <p>Specialty: {coach.specialty}</p>
      <p>Experience: {coach.experience} years</p>
    </div>
  );
}
