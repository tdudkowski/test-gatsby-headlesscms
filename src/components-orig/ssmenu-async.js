import React from "react"
import { Link } from "gatsby"
import Scrollspy from "react-scrollspy"

const promise1 = new Promise((resolve, reject) => {
  resolve("Success!")
})

promise1.then(value => {
  console.log(value)
  // expected output: "Success!"
})

// async function createArray() {
//   listofh3s = Array.from(document.querySelectorAll("section>h3"))

// await  {
//   const hrefs = ["section-1", "section-2", "section-3"]
//   const titles = ["Section 1", "Section 2", "Section 3"]

//   console.log(listofh3s.length)
//   // console.log(listofh3s[0].textContent)
//   // console.log(listofh3s[0].id)

//   let itemsList = []
//   for (let i = 0; i < hrefs.length; i++) {
//     let item = { key: i, href: `#${hrefs[i]}`, label: titles[i] }
//     console.log(item)
//     itemsList.push(item)
//   }}

const SSMenu = () => (
  <p>{promise1}</p>
  // <Scrollspy items={hrefs} currentClassName="is-current" className="ss-menu">
  //   {itemsList.map(item => (
  //     <li key={item.key}>
  //       <Link to={item.href}>{item.label}</Link>
  //     </li>
  //   ))}
  // </Scrollspy>
)

export default SSMenu
