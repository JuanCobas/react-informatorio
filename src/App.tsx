import { Outlet } from 'react-router';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <>
      <div className='navBar-Container'>
        <NavBar/>
      </div>
      <Outlet />
    </>
  );
}

export default App