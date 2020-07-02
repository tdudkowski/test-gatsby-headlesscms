import React from "react"
import Scrollspy from "react-scrollspy"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import UAParser from "ua-parser-js"
// import Simple from "../components/simple"
import { PrismCode } from "../components/prism"

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
  return (
    <Layout>
      <SEO title="About" />

      <Scrollspy
        items={["section-1", "section-2", "section-3"]}
        currentClassName="is-current"
        className="ss-menu"
      >
        <li>
          <a href="#section-1">section 1</a>
        </li>
        <li>
          <a href="#section-2">section 2</a>
        </li>
        <li>
          <a href="#section-3">section 3</a>
        </li>
      </Scrollspy>

      <div className="ss-content">
        <h2>About</h2>
        <section>
          <h3 id="section-1">Section1</h3>
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
        <section className="slider">
          {/* <Simple deviceType={deviceType} /> */}
        </section>
        <section>
          <h3 id="section-2">Section2</h3>
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
        <section>
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
