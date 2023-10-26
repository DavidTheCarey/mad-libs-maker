import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import IndexPage from "../IndexPage/IndexPage";
import CreatePage from "../CreatePage/CreatePage";
import UserPage from "../UserPage/UserPage";




export default function App() {
  const [user, setUser] = useState(getUser());
  const [templates, setTemplates] = useState([]);

  return (
    <main className="App">
      { user ?
          <>
            <NavBar  user={user} setUser={setUser}/>
            <Routes>
              {/* Route components in here */}
              <Route path="/madlibs/new" element={<CreatePage user={user} templates={templates} setTemplates={setTemplates}/>} />
              <Route path="/madlibs" element={<IndexPage templates={templates} setTemplates={setTemplates}/>} /> 
              <Route path={`/madlibs/${user._id}`} element={<UserPage  user={user}/>} /> 
            </Routes>
          </>
          :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
