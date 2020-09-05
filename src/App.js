import React from 'react';
import logo from './logo.svg';
import './App.css';

import { withAuthenticator } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Disaster Notification System
        </p>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Emergency_notification_system"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about it here!
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App)
