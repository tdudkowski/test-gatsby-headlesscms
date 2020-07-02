import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const Header = ({ siteTitle }) => (
  <header>
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label className="theme_toggler">
          <input
            type="checkbox"
            aria-label="theme toggle"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />{" "}
          dark mode
        </label>
      )}
    </ThemeToggler>
    <h1>JavaScript</h1>
    <h2>notatnik, żeby nie zapomnieć</h2>
    <form action="" method="get">
      <input type="text" name="txt" id="txt" aria-label="txt" />
      <input type="submit" id="search" aria-label="Search" value="Szukaj" />
    </form>
  </header>
)

export default Header
