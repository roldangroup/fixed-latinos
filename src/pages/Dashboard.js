import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { currentUser } = useAuth();
  const messages = [
    "Ride like the wind!",
    "Pain is temporary, pride is forever!"
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  return (
    <div>
      <h2>Welcome {currentUser?.email}!</h2>
      <p>{randomMessage}</p>
    </div>
  );
}
