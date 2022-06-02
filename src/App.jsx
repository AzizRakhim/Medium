import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Chosen from './components/Home/Chosen/Chosen';
import Data from './components/Home/Data/Data';
import Draft from './components/Home/Draft/Draft';
import DraftInside from './components/Home/Draft/DraftInside/DraftInside';
import Home from './components/Home/Home';
import Notification from './components/Home/Notification/Notification';
import Save from './components/Home/Save/Save';
import Story from './components/Home/Story/Story';
import User from './components/Home/User/User';
import SignUp from './components/Signup/Signup';

function App() {
  let [save, setSave] = useState([]);
  let [clicked, setClicked] = useState([]);
  let [data, setData] = useState({});
  let [inputSave, setInputSave] = useState([]);
  let [keep, setKeep] = useState(1);
  let [bio, setBio] = useState({
    name : "Hercules",
    lastName : ":",
    phone : "the",
    email : "animated",
    password : "series"
  });
  let [correct, setCorrect] = useState(false);

  useEffect(() => {
    setSave([{
      id : 1,
      name : "Reading list",
      isTrue : true,
      elArr : []
    }]);
  }, []);

  return (
    <div className="medium">
      <Routes>
        <Route 
          path='/' 
          element={<SignUp 
            data={data} 
            setData={setData} 
            bio={bio}
            setBio={setBio}
          />} />
        <Route 
          path='/home' 
          element={<Home 
            save={save} 
            setSave={setSave}
            clicked={clicked}
            setClicked={setClicked}
            data={data}
            setData={setData}
            correct={correct}
            setCorrect={setCorrect}
          />} />
        <Route 
          path='/home/save' 
          element={<Save 
            save={save} 
            setSave={setSave} 
            clicked={clicked}
            setClicked={setClicked}
          />} />
        <Route 
          path='/home/save/chosen' 
          element={<Chosen   
            save={save} 
            setSave={setSave} 
            clicked={clicked}
            setClicked={setClicked} 
            bio={bio}
          />} />
        <Route 
          path='/home/story' 
          element={<Story 
            inputSave={inputSave} setInputSave={setInputSave}
            keep={keep}
            setKeep={setKeep} 
            bio={bio}
            />} />
        <Route 
          path='/home/:id' 
          element={<Data 
            bio={bio}
          />} />
        <Route 
          path='/home/draft' 
          element={<Draft 
            inputSave={inputSave} 
            setInputSave={setInputSave}
          />} />
        <Route 
          path='/home/draft/:id' 
          element={<DraftInside inputSave={inputSave} />} />
        <Route 
          path='/home/notification' 
          element={<Notification />} />
        <Route 
          path='/home/user'
          element={<User 
            inputSave={inputSave}
            setInputSave={setInputSave}
            bio={bio}
          />}
        />
      </Routes>
    </div>
  );
}

export default App;
