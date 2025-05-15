// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import ContentArea from './components/contentArea';



function App() {
  return (
    <React.Fragment>
      <div className="main-wrapper">
        <Header/>
        <div className="inner-wrapper">
          <Sidebar/>
          <ContentArea/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
