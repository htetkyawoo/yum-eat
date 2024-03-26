import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopNav from './components/TopNav';
import Featured from './components/Featured';
import Delivery from './components/Delivery';

function App() {
  return (
    <div className='flex flex-col'>
      <TopNav></TopNav>
      <Featured></Featured>
      <Delivery></Delivery>
    </div>
  );
}

export default App
