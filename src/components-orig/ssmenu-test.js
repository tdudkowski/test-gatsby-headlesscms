import React from "react"
import { Link } from "gatsby"
import Scrollspy from "react-scrollspy"

let listofH3s = [
  { id: "section-1", textContent: "Section1" },
  { id: "section-2", textContent: "Section2" },
  { id: "section-3", textContent: "Section3" },
]

// listofH3s = Array.from(document.querySelectorAll("section>h3"))
let listofH3s = document.getElementsByClassName("paragraphs")
// console.log(document.querySelectorAll("section>h3"))
// console.log(listofh3s[0].textContent)
// console.log(listofh3s[0].id)
// const hrefs = ["section-1", "section-2", "section-3"]
// const titles = ["Section 1", "Section 2", "Section 3"]

function createArray(arr) {
  let itemsList = []
  let listItems = []
  console.log(arr.length)
  for (let i = 0; i < arr.length; i++) {
    let item = { key: i, href: `#${arr[i].id}`, label: arr[i].textContent }
    let listItem = (
      <Link key={item.key} to={item.href}>
        {item.label}
      </Link>
    )
    console.log(item)
    itemsList.push(item)
    listItems.push(listItem)
  }
  console.log(itemsList)
  return listItems
}

function getValues(arr) {
  //   let listofH3s = document.querySelectorAll("section>h3")
  //   console.log(arr)
  //   console.log(listofH3s)
  createArray(arr)
}

getValues(listofH3s)

const SSMenu = itemsList => (
  <Scrollspy
    items={itemsList}
    currentClassName="is-current"
    className="ss-menu"
  >
    {itemsList.forEach(item => (
      <li key={item.key}>
        <Link to={"#" + item.id}>{item.label}</Link>
      </li>
    ))}
  </Scrollspy>
)

export default SSMenu
