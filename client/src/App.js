import { Home, Login} from './pages';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { useSelector } from 'react-redux';
import { NavBar } from './components';
import ProtectedRoutes from './components/ProtectedRoutes';
import {Spinner} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {


  const isLoading = useSelector(state => state.isLoading);
  
  return (
   
    <HashRouter>
     <NavBar /> 
      <Container>
        { isLoading && <Spinner color="success"/>}
        <Routes>

        <Route path='/' element={<Login/>} />

          <Route element={<ProtectedRoutes />}>
          <Route path='/home' element={<Home />} />
          
         
        
           
          </Route>

        </Routes>
       </Container>


    </HashRouter>
  );
}

export default App;
