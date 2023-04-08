import React from 'react'
import './App.scss'
import Netflix from './component/pages/Netflix'
import Signup from './component/pages/Signup'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './component/pages/Login';
import MoviePage from './component/pages/Movies';
import TVShows from './component/pages/TVShows';
import Player from './component/pages/Player';
// import UserListedMovies from "./component/pages/UserListedMovies";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={ <Netflix />  } />
          <Route path='/signup' element={<Signup /> } />
           <Route exact path="/login" element={<Login />} />
           <Route exact path="/movies" element={<MoviePage />} />
           <Route exact path="/player" element={<Player />} />
           {/* <Route exact path="/mylist" element={<UserListedMovies/>} /> */}
        <Route exact path="/tv" element={<TVShows />} />
       
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
