import LiveChart from '../components/LiveChart';
import Leaderboard from '../components/Leaderboard';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: 20 }}>
      <h1 style={{ fontSize: 32, marginBottom: 20 }}>FUNCHART.FUN</h1>
      <LiveChart />
      <Leaderboard />
    </div>
  );
}