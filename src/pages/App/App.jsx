import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as templatesAPI from "../../utilities/templates-api"
import * as entriesAPI from "../../utilities/entries-api"
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import IndexPage from "../IndexPage/IndexPage";
import CreatePage from "../CreatePage/CreatePage";
import UserPage from "../UserPage/UserPage";
import EditPage from '../EditPage/EditPage';
import EntryPage from '../EntryPage/EntryPage';
import HomePage from '../HomePage/HomePage';




export default function App() {
  const [user, setUser] = useState(getUser());
  const [templates, setTemplates] = useState([]);
  const [entries, setEntries] = useState([])

  const navigate = useNavigate();

  useEffect(function(){
    async function getTemplates(){
        const temps = await templatesAPI.getAll();
        setTemplates(temps);
    }
    async function getEntries(){
      const allEntries = await entriesAPI.getAll();
      setEntries(allEntries);
    }
    getTemplates();
    getEntries();
  }, []); 

  return (
        <main className="App">
          { user ?
              <>
                <NavBar  user={user} setUser={setUser}/>
                <div className="contents">
                <Routes>
                  {/* Route components in here */}
                  <Route path="/madlibs/new" element={<CreatePage user={user} templates={templates} setTemplates={setTemplates}/>} />
                  <Route path="/madlibs" element={<IndexPage user={user} templates={templates} setTemplates={setTemplates}/>} /> 
                  <Route path={`/madlibs/${user._id}`} element={<UserPage  user={user} templates={templates} setTemplates={setTemplates} entries={entries} setEntries={setEntries}/>} />
                  <Route path={`/madlibs/edit`} element={<EditPage templates={templates} setTemplates={setTemplates} />} /> 
                  <Route path={`/madlibs/entry/new`} element={<EntryPage entries={entries} setEntries={setEntries} />} />
                  <Route path={`/madlibs/home`} element={<HomePage />} />
                </Routes>
                </div>
              </>
              :
              <AuthPage setUser={setUser}/>
          }
        </main>
  );
}
