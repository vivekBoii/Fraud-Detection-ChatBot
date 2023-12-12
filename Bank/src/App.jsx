import React from 'react';
import { BrowserRouter as Router , Routes , Route, Outlet } from 'react-router-dom';
import Layout from './Layout';
import ChatGpt from './Pages/ChatGpt';
import Bin from './Pages/Bin';
import BinPage from './Pages/BinPage';
import Pro from './Pages/Pro';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          
            <Route path='' element={<ChatGpt/>}/>
          <Route path='/bin' element={<Bin/>}/>
          <Route path='/bin/:id' element={<BinPage/>}/>
          <Route path='/pro' element={<Pro/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;