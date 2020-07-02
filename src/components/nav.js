import { Link } from "gatsby"
import React from "react"

const Nav = props => (
  <nav class="navigation_one">
    <ul>
      <li>
        <strong>JavaScript</strong>
        <ul>
          <Link to="/" activeClassName="activeLink">
            Home
          </Link>

          <li>
            <Link to="/about" activeClassName="activeLink">
              About
            </Link>
          </li>
          <li>
            <Link to="/slidergraphql" activeClassName="activeLink">
              Slider GraphQL
            </Link>
          </li>
          {/* <li>
            <Link to="/" activeClassName="activeLink">
              UseScroll
            </Link>
          </li> */}
          <li>
            <Link to="/strapi" activeClassName="activeLink">
              Strapi
            </Link>
          </li>
          <li>
            <Link to="/drupal" activeClassName="activeLink">
              Drupal
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <strong>Frameworki</strong>
        <ul>
          <li>
            <a href="#top">React</a>
          </li>
          <li>
            <a href="#top">Express.js</a>
          </li>
          <li>
            <a href="#top">Next.js</a>
          </li>
        </ul>
      </li>
      <li>
        <strong>Backend</strong>
        <ul>
          <li>
            <a href="#top">Node.js</a>
          </li>
          <li>
            <a href="#top">MongoDB</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
)

export default Nav
