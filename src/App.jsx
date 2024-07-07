
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignupForm from './pages/SignUp';
import Dashboard from './pages/Dashboard';



function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignupForm/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  );
}

export default App;
