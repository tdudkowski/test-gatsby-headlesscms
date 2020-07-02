import React, { useRef } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import UAParser from "ua-parser-js"
// import Simple from "../components/simple"
import { PrismCode } from "../components/prism"
import useScrollSpy from "react-use-scrollspy"

const code1 = `
const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
`
const code2 = `p {
  color: red;
}
`

const AboutPage = ({ deviceType }) => {
  const sectionRefs = [useRef(null), useRef(null), useRef(null)]

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -80,
  })

  let langArray = []
  let flag = false
  let numberOfSum = 0

  let paragraphsListN = document.getElementsByClassName("paragraphs")
  let numberOfElements = document.getElementsByClassName("numberOfElements")
  let numberOfSumSpan = document.getElementsByClassName("numberOfSum")
  let btns = document.getElementsByClassName("selectorList")

  const reset = paragraphsList => {
    let arr = Array.from(btns[0].children)
    let langList = arr.map(child => child.childNodes[0].id)
    langArray = langList.splice(0, langList.length - 1)

    arr.map(child => child.childNodes[0].classList.remove("activeButton"))
    flag = true
    numberOfSum = 0
    toggleVisibility(langArray, paragraphsList)
  }

  const sum = (langArray, paragraphsList) => {
    if (langArray.length >= 2 && flag === false) {
      let paragraphsListSum = paragraphsList.filter(
        pli => !Array.from(pli.classList).includes("hidden")
      )

      for (let i = 0; i < paragraphsListSum.length; i++) {
        if (
          langArray.length ===
          Array.from(paragraphsListSum[i].classList).filter(value =>
            langArray.includes(value)
          ).length
        ) {
          paragraphsListSum[i].classList.add("hiper")
          numberOfSum = paragraphsListSum.filter(paragraph =>
            Array.from(paragraph.classList).includes("hiper")
          ).length
          numberOfSumSpan[0].textContent = numberOfSum
        }
      }
    }
  }

  const toggleVisibility = (langArray, paragraphsList) => {
    if (langArray.length === 0 && flag === false) {
      reset(paragraphsList)
      return
    }
    let arrayToShow = []
    for (let i = 0; i < paragraphsList.length; i++) {
      let val = Array.from(paragraphsList[i].classList)
      for (let j = 0; j < val.length; j++) {
        if (langArray.includes(val[j])) {
          if (!arrayToShow.includes(paragraphsList[i])) {
            arrayToShow.push(paragraphsList[i])
          }
        } else {
          paragraphsList[i].classList.add("hidden")
        }
      }
    }
    arrayToShow.forEach(paragraph => paragraph.classList.remove("hidden"))
    numberOfElements[0].textContent =
      arrayToShow.length > 0 ? arrayToShow.length : paragraphsList.length

    numberOfSumSpan[0].textContent = numberOfSum
    sum(langArray, paragraphsList)
  }

  const toggleLangStatus = e => {
    const clickedLanguage = e.target.id
    let btnreset = Array.from(btns[0].children).pop().children[0]
    const paragraphsList = Array.from(paragraphsListN[0].childNodes)
    paragraphsList.forEach(paragraph => paragraph.classList.remove("hiper"))
    numberOfSum = 0
    if (clickedLanguage === "reset") {
      reset(paragraphsList)
      return
    }
    e.target.classList.toggle("activeButton")
    if (langArray.length === 4 && flag === true) {
      langArray.length = 0
    }
    if (langArray.includes(clickedLanguage)) {
      langArray.splice(langArray.indexOf(clickedLanguage), 1)
    } else {
      langArray.push(clickedLanguage)
      flag = false
    }

    if (langArray.length > 0) {
      btnreset.classList.add("activeButton")
    }

    toggleVisibility(langArray, paragraphsList)
  }

  return (
    <Layout>
      <SEO title="Use Scroll" />
      <nav className="App-navigation">
        <ul>
          <li>
            <a
              href="#section-1"
              className={
                activeSection === 0
                  ? "App-navigation-item App-navigation-item--active"
                  : "App-navigation-item"
              }
            >
              Section 1
            </a>
          </li>
          <li>
            <a
              href="#section-2"
              className={
                activeSection === 1
                  ? "App-navigation-item App-navigation-item--active"
                  : "App-navigation-item"
              }
            >
              Section 2
            </a>
          </li>
          <li>
            <a
              href="#section-3"
              className={
                activeSection === 2
                  ? "App-navigation-item App-navigation-item--active"
                  : "App-navigation-item"
              }
            >
              Section 3
            </a>
          </li>
        </ul>
      </nav>

      <div className="ss-content">
        <h2>Use Scroll</h2>
        <p>
          Liczba OR:{" "}
          <span id="numberOfElements" className="numberOfElements">
            7
          </span>
          <br />
          Liczba AND:{" "}
          <span id="numberOfSum" className="numberOfSum">
            0
          </span>
        </p>
        <section className="App-section" ref={sectionRefs[0]}>
          <h3 id="section-1">Section1</h3>
          <ul className="selectorList">
            <li>
              <button onClick={toggleLangStatus} id="pl">
                PL
              </button>
            </li>
            <li>
              <button onClick={toggleLangStatus} id="cz">
                CZ
              </button>
            </li>
            <li>
              <button onClick={toggleLangStatus} id="de">
                DE
              </button>
            </li>
            <li>
              <button onClick={toggleLangStatus} id="en">
                EN
              </button>
            </li>
            <li>
              <button onClick={toggleLangStatus} id="reset">
                Reset
              </button>
            </li>
          </ul>
        </section>
        <section className="slider">
          {/* <Simple deviceType={deviceType} /> */}
        </section>
        <section className="App-section" ref={sectionRefs[1]}>
          <h3 id="section-2">Section2</h3>

          <ul className="paragraphs" id="paragraph">
            <li className="pl">
              <p>
                1. [PL] Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li className="pl en de">
              <p>
                2. [PL EN DE] Lorem ipsum dolor sit amet consectetur adipisicing
                elit.
              </p>
            </li>
            <li className="pl de">
              <p>
                3. [PL DE] Lorem ipsum dolor sit amet consectetur adipisicing
                elit.
              </p>
            </li>
            <li className="de en">
              <p>
                4. [DE EN] Lorem ipsum dolor sit amet consectetur adipisicing
                elit.
              </p>
            </li>
            <li className="pl cz en">
              <p>
                5. [PL CZ EN] Lorem ipsum dolor sit amet consectetur adipisicing
                elit.
              </p>
            </li>
            <li className="cz en">
              <p>
                6. [CZ EN] Lorem ipsum dolor sit amet consectetur adipisicing
                elit.
              </p>
            </li>
            <li className="pl cz">
              <p>
                7. [PL CZ] Lorem ipsum dolor sit amet consectetur adipisicing
                elit.
              </p>
            </li>
          </ul>
        </section>
        <section className="App-section" ref={sectionRefs[2]}>
          <h3 id="section-3">Section3</h3>
          <pre className="language-css">
            <code className="language-css">color: red; font-size: 10px;</code>
          </pre>

          <PrismCode code={code1} language="js" plugins={["line-numbers"]} />

          <PrismCode code={code2} language="css" plugins={["line-numbers"]} />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quae
            possimus, accusamus tenetur facilis nemo recusandae ullam officia
            maxime eligendi quaerat consectetur cumque deleniti quisquam vero
            est maiores iure enim.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            deserunt porro blanditiis voluptatem sit voluptate natus veritatis,
            cum placeat nulla ut, at sequi nesciunt est asperiores eveniet
            necessitatibus ipsam a!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            deserunt porro blanditiis voluptatem sit voluptate natus veritatis,
            cum placeat nulla ut, at sequi nesciunt est asperiores eveniet
            necessitatibus ipsam a!
          </p>
        </section>
      </div>
    </Layout>
  )
}
// AboutPage.getInitialProps = ({ req }) => {
//   let userAgent
//   if (req) {
//     userAgent = req.headers["user-agent"]
//   } else {
//     userAgent = navigator.userAgent
//   }
//   const parser = new UAParser()
//   parser.setUA(userAgent)
//   const result = parser.getResult()
//   const deviceType = (result.device && result.device.type) || "desktop"
//   return { deviceType }
// }

export default AboutPage
