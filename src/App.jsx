
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignupForm from './pages/SignUp';
import {Dashboard} from './pages/Dashboard';
import HeaderFooterRoute from './components/HeaderFooter';
import StartupRegistrationForm from './pages/RegisterStartupForm';
import UserProfileForm from './pages/AdditionalInfo';



function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignupForm/>}/>
      <Route path="/" element={<HeaderFooterRoute><Dashboard/></HeaderFooterRoute>}/>
      <Route path="/register-startup" element={<StartupRegistrationForm/>}/>
      <Route path="/user-profile" element={<UserProfileForm/>}/>

    </Routes>
  );
}

export default App;
