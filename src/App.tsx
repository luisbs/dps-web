import React, { useState } from "react"
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom"

import { Container } from "@material-ui/core"
import { createComponentWithAuth, WrappedComponentProps } from "./plugins/auth"

//* Estilos
import "./App.css"

//* Vistas
import Footer from "./components/Footer"
import SignInScreen from "./views/auth/SignIn"
import SignUpScreen from "./views/auth/SignUp"

import HomeScreen from "./views/HomeScreen"
import CartScreen from "./views/CartScreen"
import ProductScreen from "./views/ProductScreen"

const Pages = [
  { url: "/signin", component: SignInScreen, requiresAuth: false },
  { url: "/signup", component: SignUpScreen, requiresAuth: false },
  { url: "/cart/:id", component: CartScreen, requiresAuth: true },
  { url: "/product/:id", component: ProductScreen, requiresAuth: true },
]

function AppContent({ user }: WrappedComponentProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button style={{ color: "black" }} onClick={() => setIsOpen(true)}>
            &#9776;
          </button>
          <Link to="/">DPS_Ecommerce</Link>
        </div>
        <div className="header-links">
          <Link to="/cart">Cart</Link>
          <Link to="/signin" hidden={false}>
            sign in
          </Link>
        </div>
      </header>

      {/* Aside */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={() => setIsOpen(false)}>
          x
        </button>
        <ul>
          <li>
            <a href="#">Pants</a>
          </li>
          <li>
            <a href="#">Shirts</a>
          </li>
        </ul>
      </aside>

      {/* Main */}
      <main className="main">
        <nav className="head-cat">
          <b>
            <Link className="Link" to="/">
              Categoria 1
            </Link>
          </b>
          <Link className="Link" to="/">
            Categoria 2
          </Link>
          <Link className="Link" to="/">
            Categoria 3
          </Link>
          <Link className="Link" to="/">
            Categoria 4
          </Link>
        </nav>
        <div className="content">
          <Switch>
            <Route path="/" exact component={HomeScreen} />

            {!user ? (
              Pages.filter(page => !page.requiresAuth).map(page => (
                <Route key={page.url} component={page.component} />
              ))
            ) : (
              <>
                {Pages.filter(page => page.requiresAuth).map(page => (
                  <Route key={page.url} component={page.component} />
                ))}
                <Redirect to="/signin" />
              </>
            )}

            {/* fallback general route */}
            <Redirect to="/" />
          </Switch>
        </div>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      {createComponentWithAuth(AppContent)}
      <Footer />
    </BrowserRouter>
  )
}
