import React from "react";
import "./App.css";
import data from "./data";
import "./index.css";
import {BrowserRouter,Route,Link} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import  ProductScreen from './Screens/ProductScreen';
import SigninScreen from "./Screens/signin";
import SignUpScreen from "./Screens/signup";
import CartScreen from "./Screens/CartScreen"
import Login from './LogGoogle';
import Status from './actions/Alogin';


function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button style={{ color: "black" }} onClick={openMenu}>&#9776;</button>
            <Link to ="/" >DPS_Ecommerce</Link>
          </div>
          <div className="header-links">
          <Link  to ="/Cart"  >Cart</Link>
            <Link to ="/sign-in" hidden={false} >sign in</Link>
          </div>
        </header>
        
      
        {/* Side bar****************** */}
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul>
            <li>
              <a href="index.html">Pants</a>
            </li>
            <li>
              <a href="index.html">Shirts</a>
            </li>
          </ul>
        </aside>
        {/* Side bar ** ***********/}
        <main className="main">
          
        <nav className="head-cat">
        <b><Link  className="Link" to ="/"  >Categoria 1</Link></b>
        <Link className="Link" to ="/"  >Categoria 2</Link>
        <Link  className="Link" to ="/"  >Categoria 3</Link>
        <Link  className="Link" to ="/"  >Categoria 4</Link>
          </nav>
          <div className="content">
            <Route path="/product/:id" component={ProductScreen}/>
            <Route path="/" exact={true} component={HomeScreen}/>
            <Route path="/sign-in" component={SigninScreen}/>
            <Route path="/sign-up" component={SignUpScreen}/>
            <Route path="/Cart/:id" component={CartScreen}/>
            <ul className="products">
            </ul>
          </div>
        </main>
        <footer className="footer">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
