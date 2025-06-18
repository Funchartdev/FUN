import { useEffect, useState } from 'react';
import faker from 'faker';

export default function Leaderboard() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const generate = () => Array.from({ length: 5 }, () => ({
      name: faker.internet.userName(),
      pnl: (Math.random() * 20).toFixed(2)
    }));
    setPlayers(generate());
    const interval = setInterval(() => setPlayers(generate()), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ marginTop: 40 }}>
      <h2>Top PNL</h2>
      <ul>
        {players.map((p, i) => (
          <li key={i}>{i + 1}. {p.name} - +{p.pnl} SOL</li>
        ))}
      </ul>
    </div>
  );
}