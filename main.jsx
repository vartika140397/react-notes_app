import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './component/Home'
import AddNotes from './component/AddNotes'
import CreateNotesgrp from './component/CreateNotesgrp';
import ShowNotesgrp from './component/ShowNotesgrp';
import EnterText from './component/EnterText';
import NotFound from './component/404';

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <BrowserRouter>
      <Routes> 
       <Route path='/' element={<Home/>}/>
       <Route path='/notes' element={<AddNotes/>}/>
       <Route path='/create' element={<CreateNotesgrp/>}/>
       <Route path='/show' element={<ShowNotesgrp/>}/>
      <Route path='/text' element={<EnterText/>}/>
      <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

