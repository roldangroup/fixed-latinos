import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const [profile, setProfile] = useState({
    name: '',
    favoriteBike: '',
    nutrition: []
  });

  return (
    <div>
      <h2>Your Profile</h2>
      <input
        value={profile.name}
        onChange={(e) => setProfile({...profile, name: e.target.value})}
        placeholder="Your Name"
      />
      <input
        value={profile.favoriteBike}
        onChange={(e) => setProfile({...profile, favoriteBike: e.target.value})}
        placeholder="Favorite Bike"
      />
    </div>
  );
}
