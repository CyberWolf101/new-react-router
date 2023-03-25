import { Outlet, NavLink, ScrollRestoration } from "react-router-dom"
import Breadcrumbs from "../components/Breadcrumbs"

//this page serves as the main contain as we specified in our router tree

export default function RootLayout() {
  return (
    <div className="root-layout">
      <ScrollRestoration />
      <header>
        <nav>
          <h1>MAIN CONTSINER</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>      {/*nav links adds active classes to to element in case we want to style by saying a.active */}
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
        </nav>
        <Breadcrumbs />
      </header>
      <main>
        <Outlet /> {/*this outlet is very important else this element will not render it's children */}
      </main>
    </div>
  )
}
