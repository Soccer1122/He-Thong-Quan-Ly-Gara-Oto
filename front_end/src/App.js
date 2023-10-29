import './App.css';
import { Route, Routes } from 'react-router';
import ManagerDashboard from './components/Manager/ManagerDashboard';
import Login from './components/Login';
import RecaiveCar from './components/Manager/ReceiveCar';
function App() {
  return (
    <div className = "App relative">
        <Routes>
          <Route path='' element={<Login/>}/>
          <Route path='/manager/home' element={<ManagerDashboard/>}/>
          <Route path='/manager/receive_car' element={<RecaiveCar/>}/>
        </Routes>
    </div>
  );
}

export default App;
