import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TypescriptComponent from './components/TypescriptComponent';
import ReactComponent from './components/ReactComponent';
import JavaScriptComponent from './components/JavaScriptComponent';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [vip, setVip] = useState(true)
  const [col, setCol] = useState('#3F51B5')

  const getRec = async () => {
    try {
      let ver = 0
      if (vip == true) {
        ver = 1
      }
      const res = await axios.get(`https://cb24.vercel.app/api/v1/webm/grc:${ver}`)
      const cObj = {
        'b': '#007BFF',
        'y': "#FFC107",
        'g': "#28A745",
        'o': "#FD7E14",
        'r': "#DC3545"
      }
      for(let x in cObj){
        if(res.data.ms.cRec == x){
          setCol(cObj[x])
        }
      }
    } catch (error) {

    }
  }

  useEffect(() => {
    getRec()
  }, [vip])

  return (
    <div className="App">
      <Router>
        <Navbar col={col} />
        <Routes>
          <Route exact path='/typescript' element={<TypescriptComponent setVip={setVip} />} />
          <Route exact path='/react' element={<ReactComponent getRec={getRec} setVip={setVip} />} />
          <Route exact path='/' element={<JavaScriptComponent />} />
        </Routes>
        <Footer col={col} />
      </Router>
    </div>
  );
}

export default App;
