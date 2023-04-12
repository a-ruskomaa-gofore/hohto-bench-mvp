import React from 'react';
import Header from './components/Header';
import CardView from './components/CardView';
import Sidebar from './components/Sidebar';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='main-area'>
        <CardView></CardView>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
