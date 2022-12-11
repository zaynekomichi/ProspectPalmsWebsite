import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Countdown from './Pages/countdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countdown/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
