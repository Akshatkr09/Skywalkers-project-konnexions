
import './style.css';
import React from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <div className='Heading'>
      <h1>Remote</h1>
    </div>
    <div className='desc'>
      <p>All control at one place</p>
      </div>
    
    <Card/>
    </>
  );
}

export default App;
