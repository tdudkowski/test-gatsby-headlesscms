import React from "react"
import { Link } from "gatsby"
import Scrollspy from "react-scrollspy"

let listofH3s = document.querySelectorAll("section>h3")
console.log(document.querySelectorAll("section>h3"))
// console.log(listofh3s[0].textContent)
// console.log(listofh3s[0].id)
// const hrefs = ["section-1", "section-2", "section-3"]
// const titles = ["Section 1", "Section 2", "Section 3"]

function createMenu(arr) {
  let itemsList = []

  console.log(arr.length)
  for (let i = 0; i < arr.length; i++) {
    let item = { key: i, href: `#${arr[i].id}`, label: arr[i].textContent }

    itemsList.push(item)
  }
  console.log("hello")
  return itemsList
}

function getValues(arr) {
  let listofH3s = document.querySelectorAll("section>h3")
  console.log(arr)
  console.log(listofH3s)
  //   createMenu(arr)
}

getValues(listofH3s)

const SSMenu = itemsList => (
  <p>lorem</p>
  //   <Scrollspy
  //     items={itemsList}
  //     currentClassName="is-current"
  //     className="ss-menu"
  //   >
  //     {itemsList.map(item => (
  //       <li key={item.key}>
  //         <Link to={item.href}>{item.label}</Link>
  //       </li>
  //     ))}
  //   </Scrollspy>
)

export default SSMenu
