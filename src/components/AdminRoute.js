import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function AdminRoute({ children }) {
  const { currentUser } = useAuth();
  // Add your admin check logic here (e.g., user.role === 'admin')
  return currentUser ? children : <Navigate to="/" />;
}
