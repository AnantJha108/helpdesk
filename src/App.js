import { BrowserRouter,Routes, Route} from 'react-router-dom';
import './App.css';
import AdminDashboard from './components/Admin/AdminDashboard';
import DatabaseUserPage from './components/Admin/DatabaseUserPage';
import Setting from './components/Admin/Setting';
import ForgetPassword from './components/Auth/ForgetPassword';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import MyTicket from './components/OperationTeam/MyTicket';
import OperationTeamDashboard from './components/OperationTeam/OperationTeamDashboard';
import Performance from './components/OperationTeam/Performance';
import TicketApproval from './components/OperationTeam/TicketApproval';
import CreateTicket from './components/users/CreateTicket';
import Dashboard from './components/users/Dashboard';
import EditUserProfile from './components/users/EditUserProfile';
import MyTickets from './components/users/MyTickets';
import UserProfile from './components/users/UserProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Dashboard/>}>
          <Route path="admin" element={<AdminDashboard/>} />
          <Route path="operationTeam" element={<OperationTeamDashboard/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
