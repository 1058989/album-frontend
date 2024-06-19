import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Container } from '@mui/material';
import logo from './logo.svg';
import './App.css';
import AlbumOverview from './components/AlbumOverview';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Link to="/">
              My app
            </Link>
          </Toolbar>
        </AppBar>
        <Container>
        <Routes>
        
            <Route path="/AlbumOverview" element={<AlbumOverview />} />
          </Routes>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>

            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <Link to="/AlbumOverview">
              To album Overview
            </Link>
          </header>
        </Container>
      </div>
    </Router>
  );
}

export default App;
