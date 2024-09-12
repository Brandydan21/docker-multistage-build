import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './components/pages/About';
import ContentsPage from './components/pages/Contents';
import HomePage from './components/pages/Home';
import { createSlice } from '@reduxjs/toolkit'


const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
  },
})

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/contents" element={<ContentsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
