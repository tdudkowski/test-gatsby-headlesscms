import React from "react"
import Header from "./header"
import Footer from "./footer"
import Nav from "./nav"
import Simple1 from "../components/simple"

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <Simple1 />
      <main>
        <Nav />
        <article>{children}</article>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
