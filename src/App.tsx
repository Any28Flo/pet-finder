
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Wrapper from './layout/Wrapper';


const Login = lazy(() => import('./pages/Login'));
const Search = lazy(() => import('./pages/Search'));

const App = () => {
  return (
    <Suspense fallback={<h1>Cargando...</h1>}>
       <Routes>
        <Route index element={<Login />} />
        <Route element={<Wrapper />}>
          <Route path='search' element={<Search />} />
          <Route path='*' element={<Navigate to='/' />}></Route>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App