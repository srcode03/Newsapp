import React, {useState} from 'react'
import Navbar2 from './components/Navbar2'
import News from './components/News'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
const App=()=> {
  
  const [progress,setProgress]=useState(0);
  
  
    
    return (
      <div>
        <Router>
        <Navbar2/>
        <LoadingBar
        color='#f11946'
        
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
        
        <Route exact path="/" element={<News setProgress={setProgress}  pagesize={10} country="in" key={'general'} category='general'/>} />
        <Route exact path="/health" element={<News setProgress={setProgress}  pagesize={10} country="in" key={'health'} category='health'/>} />
        <Route exact path="/technology" element={<News setProgress={setProgress}  pagesize={10} country="in" key={'technology'} category='technology'/>} />
        <Route exact path="/science" element={<News setProgress={setProgress}  pagesize={10} country="in" key={'science'} category='science'/>} />
        <Route exact path="/sports" element={<News setProgress={setProgress}  pagesize={10} country="in" key={'sports'} category='sports'/>} />
        <Route exact path="/entertainment" element={<News setProgress={setProgress}  pagesize={10} country="in" key={'entertainment'} category='entertainment'/>} />
        <Route exact path="/business" element={<News setProgress={setProgress}  pagesize={10} country="in" key={'business'} category='business'/>} />
        </Routes>
        </Router>
      </div>
    )
  }


export default App
