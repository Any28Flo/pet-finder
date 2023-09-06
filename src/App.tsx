
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import RequireAuth from './components/RequireAuth';
import SearchBreed from './pages/SearchBreed';


const Login = lazy(() => import('./pages/Login'));
const Search = lazy(() => import('./pages/Search'));

const App = () => {
  return (
    <Suspense fallback={<h1>Cargando...</h1>}>
       <Routes>
        <Route index element={<Login />} />
        <Route element={<RequireAuth/>}>
          <Route path='/search-breed' element={< SearchBreed/>} />
          <Route path='/search' element={<Search />} />
          <Route path='*' element={<Navigate to='/search' />}></Route>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App

