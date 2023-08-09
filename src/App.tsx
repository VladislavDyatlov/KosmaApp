import React from 'react';
import './App.css';
import { Auth } from './component/auth/auth';
import { useAppSelector } from './component/hook/react';
import { Component } from './component/Component';
import {
  Routes,
  Route,
} from "react-router-dom";
import { News } from './News/News';
import {Earth} from './Earth/Earth'
import {Mars} from './Mars/Mars'
import { Navbar } from './component/Navbar/Navbar';
import { Footer } from './component/Footer/Footer';
import { New } from './News/New/New';

function App() {

  const {isAuth} = useAppSelector(auth => auth.auth)

  return (
    <>
    {isAuth ? 
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Component />} />
      <Route path="/news" element={<News />} />
      <Route path="/mars" element={<Earth />} />
      <Route path="/earth" element={<Mars />} />
      <Route path="/news/:id" element={<New />} />
    </Routes>
    <Footer />
    </> 
    : <Auth />
    }

    </>
  );
}

export default App;
