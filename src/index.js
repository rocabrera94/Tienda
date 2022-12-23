import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './store/store';
import {Provider} from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MensClothing from './components/MensClothing';
import Product from './components/Product';
import Cart from './components/Cart';
import Jewelery from './components/Jewelery';
import Electronics from './components/Electronics';
import WomensClothing from './components/WomensClothing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter >
        <Routes >
          <Route path='/' element={<App />}></Route>
          <Route path='/mensclothing' element={<MensClothing/>}></Route>
          <Route path='/jewelery' element={<Jewelery/>}></Route>
          <Route path='/electronics' element={<Electronics/>}></Route>
          <Route path='/womensclothing' element={<WomensClothing/>}></Route>
          <Route path='/:category/:productId' element={<Product/>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>

      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
