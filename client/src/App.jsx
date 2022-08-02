import React from 'react';
import {
  BrowserRouter, 
  Routes, 
  Route
} from 'react-router-dom';
import './vendor/css/App.css';
import Home from './components/Home'
import ChatComponent from './components/Chat'
import Sigin from './components/auth/signin'
import Sigup from './components/auth/signup'
import Userapproval from './components/Userapproval'

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home />}/>
      <Route path="/chat" element={<ChatComponent />}/>
      <Route path="/signup" element={<Sigup />}/>
      <Route path="/signin" element={<Sigin />}/>
      <Route path="/sittings" element={<Userapproval />}/>
     </Routes>
    </BrowserRouter>
    // <ChatComponent />
  )
}

export default App
