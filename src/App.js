// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import ContentArea from './components/contentArea';

/**
 * Main App component that serves as the root of the application
 * Manages the sidebar state and renders the main layout structure
 * including Header, Sidebar, and ContentArea components
 */
function App() {
  // State to track whether sidebar is open or closed
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <React.Fragment>
      {/* Skip to main content link for keyboard users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="main-wrapper">
        <Header onToggleSidebar={toggleSidebar} />
        <div className="inner-wrapper">
          <Sidebar isOpen={sidebarOpen} />
          <main id="main-content" tabIndex="-1">
            <ContentArea />
          </main>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
