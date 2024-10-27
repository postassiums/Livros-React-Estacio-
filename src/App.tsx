
import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import JavaScript bundle (includes Popper)

import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';


function App() {

  return (
    <>
    <NavBar>

    </NavBar>

    <main className='container mt-5'>
      <Outlet>

      </Outlet>
    </main>
    </>
  )
}

export default App
