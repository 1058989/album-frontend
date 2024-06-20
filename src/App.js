import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Container } from '@mui/material';
import './App.css';
import AlbumOverview from './components/AlbumOverview';
import AlbumDetail from './components/AlbumDetail';
import CreateAlbum from './components/CreateAlbum';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Link to="/">
              |My app|
            </Link>
            <Link to="/AlbumOverview">
              |Album Overview|
            </Link>
          </Toolbar>
        </AppBar>
        <Container>
          <Routes>
            <Route path="/album/:id" element={<AlbumDetail />} />
            <Route path="/AlbumOverview" element={<AlbumOverview />} />
            <Route path="/new" element={<CreateAlbum />} />
          </Routes>
         
        </Container>
      </div>
    </Router>
  );
}

export default App;
