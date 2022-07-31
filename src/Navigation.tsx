import React from 'react';
import UserListScreen from './screens/UserListScreen';
import { Routes, Route } from "react-router-dom";
import ImagesScreen from './screens/ImagesScreen';
import AlbumsScreen from './screens/AlbumsScreen';
import ComingSoon from './components/comingSoon/ComingSoon';
import NotFound from './components/notFound/NotFound';


const Navigation = () => {
  return (
    <div>
        <Routes>
    <Route path="/" element={<UserListScreen />} />
    <Route path="/images/:UserName/:AlbumId/:AlbumTitle" element={<ImagesScreen />} />
    <Route path="albums/:userId/:UserName" element={<AlbumsScreen />} />
    <Route path="/profile" element={<ComingSoon/>} />
    <Route path="*" element={<NotFound/>} />
  </Routes>
    </div>
  )
}

export default Navigation
