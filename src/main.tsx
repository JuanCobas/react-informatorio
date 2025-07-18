import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Routes, Route, BrowserRouter } from 'react-router'
import SongCardPage from './Components/SongComponents/SongCardPage/SongCardPage.tsx'
import HomePage from './HomePage.tsx'
import SongCategoryPage from './Components/SongComponents/SongCategoryPage/SongCategoryPage.tsx'
import { FavoritesProvider } from './Contexts/FavoriteContext/FavoriteContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FavoritesProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<HomePage />} />
          <Route path='/category/:id' element={<SongCategoryPage/>}/>
          <Route path='/song/:id' element={<SongCardPage/>}/>
          <Route path='/favoritos'/>
        </Route>
      </Routes>
    </BrowserRouter>
    </FavoritesProvider>
  </StrictMode>,
)
