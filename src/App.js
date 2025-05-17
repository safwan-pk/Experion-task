// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import ContentArea from './components/contentArea';



function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <React.Fragment>
      <div className="main-wrapper">
        <Header onToggleSidebar={toggleSidebar}/>
        <div className="inner-wrapper">
          <Sidebar isOpen={sidebarOpen} />
          <ContentArea/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
