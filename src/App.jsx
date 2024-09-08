import './App.scss'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './Header';
import Home from './Home';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
