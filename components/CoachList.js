import CoachCard from './CoachCard';

export default function CoachList({ coaches }) {
  if (coaches.length === 0) return <p>No coaches registered yet.</p>;

  return (
    <div>
      {coaches.map((c, i) => <CoachCard key={i} coach={c} />)}
    </div>
  );
}
