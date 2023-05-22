
import './App.css';
import Home from "../src/pages/Home";
import Shop from "../src/pages/Shop";
import Cart from "../src/pages/Cart";

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import { Provider } from 'react-redux';
import store ,{persistedStore} from "../src/redux/store";
import { PersistGate } from 'redux-persist/lib/integration/react';

import SingleItem from './components/SingleItem';
import LoginForm from './components/LoginForm';
import Register from './components/Register';



function App() {
  return (

    <Provider store ={store}>
      {/* <PersistGate persistedStore={persistedStore}> */}
         <Router>

           <div className="App">
 
             <Routes>

                <Route  exact path="/" element={<Home/>}/>
                <Route  exact path="/shop/" element={<Shop/>}/>
                <Route  exact path="/cart" element={<Cart/>}/>

                <Route  exact path="/item/:id" element={<SingleItem/>}/>
                {/* <Route  exact path="/item" element={<SingleItem/>}/> */}
                <Route  exact path="/login" element={<LoginForm/>}/>
                <Route  exact path="/register" element={<Register/>}/>
                

             </Routes>
           </div> 

          </Router>
      {/* </PersistGate>   */}
    </Provider>
    
  );
}

export default App;
