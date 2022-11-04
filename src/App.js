import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './movie-app/components/Navigation';
import HomePage from './movie-app/pages/HomePage';
import NowPlayingPage from './movie-app/pages/NowPlayingPage';
import SearchPageWrapper from './movie-app/pages/SearchPage';
import UpcomingPage from './movie-app/pages/UpcomingPage';
import DetailPageWrapper from './movie-app/pages/DetailPage';

function App() {
  return (
    <>
    <header>
      <h1>Movie Catalogue</h1>
      <Navigation />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/now-playing" element={<NowPlayingPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
        <Route path="/search" element={<SearchPageWrapper />} />
        <Route path="/movies/:id" element={<DetailPageWrapper />} />
      </Routes>
    </main>
  </>
  );
}

export default App;
