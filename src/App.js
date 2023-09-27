import Header from './Components/Header';
import Navbar from './Components/Navbar';
import FormPage from './Components/FormPage';
import ButtonsDemo from './Components/ButtonsDemo';
import { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [count,setCount] = useState(0);

  const [mode,setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const [theme, setTheme] = useState("darkblue");
  let updateThemeColor = (para)=>{
    setTheme(para);
  }

  let updateMode = ()=>{
    // mode==='light'?setMode('dark'):setMode('light');
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = "#010d3c";
      updateAlert('success','Dark Mode Enabled Succuessfully!');
    }else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      updateAlert('danger','Light Mode Enabled Succuessfully!');
    }
  }
  let updateCount = ()=>{
      setCount(count + 1);
  }

  let updateAlert = (type,msg)=>{
    setAlert({
      type : type,
      msg: msg
    });
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }
  return (
    <>
      <Router>
        <Header/>
        <Navbar title="Demo" msg="Home" mode={mode} updateMode={updateMode} updateThemeColor={updateThemeColor}/>
        <Alert className="alert" alert={alert}/>
        <Routes>
          <Route exact path="/" element={<FormPage theme={theme} mode={mode} count={count} title="String Conversion Project" updateAlert={updateAlert}/>}/>
          <Route exact path="/about" element={<ButtonsDemo count={count} updateCount={updateCount}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
