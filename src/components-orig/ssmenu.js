import React from "react"
import { Link } from "gatsby"
import Scrollspy from "react-scrollspy"

// let itemsList = ["section-2221", "section-2222", "section-322"]

let listofH3s = Array.from(document.querySelectorAll("section>h3"))

const hrefs = ["section-1", "section-2", "section-3"]
const titles = ["Section 1", "Section 2", "Section 3"]

// let hrefs2 = listofH3s.map(item => item.parentElement.id)
// let titles2 = listofH3s.map(item => item.innerText)

let itemsList = []
for (let i = 0; i < listofH3s.length; i++) {
  itemsList.shift()
  itemsList.push(listofH3s[i].parentElement.id)
}

// console.log(listofH3s)

// console.log(hrefs3)

// console.log(itemsList)

const SSMenu = () => (
  <Scrollspy items={hrefs} currentClassName="is-current" className="ss-menu">
    {hrefs.map((item, i) => (
      <li key={i}>
        <Link to={"#" + item}>{titles[i]}</Link>
      </li>
    ))}
  </Scrollspy>
)

export default SSMenu
