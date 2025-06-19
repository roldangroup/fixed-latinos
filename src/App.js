import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Team from './pages/Team';
import RoutesPage from './pages/Routes';
import Admin from './pages/Admin';
import Profile from './pages/Profile';
import TeamCalendar from './pages/Calendar';
import TrainingPlans from './pages/Training';
import GearRecommendations from './pages/Gear';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/team" element={<PrivateRoute><Team /></PrivateRoute>} />
          <Route path="/routes" element={<PrivateRoute><RoutesPage /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/calendar" element={<PrivateRoute><TeamCalendar /></PrivateRoute>} />
          <Route path="/training" element={<PrivateRoute><TrainingPlans /></PrivateRoute>} />
          <Route path="/gear" element={<PrivateRoute><GearRecommendations /></PrivateRoute>} />
          <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
