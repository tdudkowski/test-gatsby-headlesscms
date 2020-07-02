import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PrismCode } from "../components/prism"
import SSMenu from "../components/ssmenu2"

const code1 = `
const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
`
const code2 = `p {
  color: red;
}
`

// const hrefs = ["section-1", "section-2", "section-3"]
// const titles = ["Section 1", "Section 2", "Section 3"]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <SSMenu hrefs={hrefs} titles={titles} /> */}
    <SSMenu />

    <div className="ss-content">
      <section id="section-1">
        <h3>Section1</h3>
        <ul>
          <li>
            <strong>Prism.js</strong>{" "}
            <a href="https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/">
              gatsby-remark-prismjs
            </a>{" "}
            |{" "}
            <a href="https://betterstack.dev/blog/code-highlighting-in-react-using-prismjs/">
              "Code highlighting in React using Prism.js"
            </a>{" "}
            |{" "}
            <a href="https://spectrum.chat/gatsby-js/general/im-getting-and-error-on-develop-build~3c8402f3-ed4d-4ba3-981c-86821dc98ee2">
              "I'm getting and error on develop/build"
            </a>
          </li>
          <li>
            <strong>Dark Mode</strong>{" "}
            <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-dark-mode/">
              gatsby-plugin-dark-mode
            </a>{" "}
            |{" "}
            <a href="https://dev.to/amaltapalov/how-i-set-dark-mode-for-gatsby-website-4ni0">
              Amal Tapalov "
              <span role="img" aria-label="moon svg">
                🌙
              </span>{" "}
              How I set Dark Mode for Gatsby website"
            </a>{" "}
            |{" "}
            <a href="https://dev.to/kim_hart/how-to-implement-dark-mode-with-gatsby-react-hooks-k5a">
              Kim Hart "How to Implement "dark mode" with Gatsby & React Hooks"
            </a>
          </li>
          <li>
            <strong>Scrollspy</strong>{" "}
            <a href="https://www.npmjs.com/package/react-scrollspy">
              react-scrollspy
            </a>
            |{" "}
            <a href="https://stackoverflow.com/questions/44446671/my-position-sticky-element-isnt-sticky-when-using-flexbox">
              "My position: sticky element isn't sticky when using flexbox"
            </a>{" "}
            |{" "}
            <a href="https://redq.io/blog/react-use-scrollspy/">
              React Use Scrollspy
            </a>{" "}
            |
            <a href="https://gist.github.com/souporserious/ce6fdfda410b72ecf1dfe33982f27e0e">
              souporserious/react-scrollspy.js - Two simple components to build
              a ScrollSpy in React
            </a>{" "}
            |{" "}
            <a href="http://mg.github.io/ngScrollSpy/">
              gScrollSpy A scrollspy and affix implementation for AngularJS
            </a>
          </li>
          <li>
            <a href="https://www.npmjs.com/package/react-multi-carousel">
              react-multi-carousel{" "}
              <span role="img" aria-label="hand">
                👋
              </span>
            </a>
          </li>
          <li>
            <strong>Google Analytics</strong>{" "}
            <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-gtag/">
              gatsby-plugin-gtag
            </a>
          </li>
          <li>
            gatsby-plugin-react-helmet, gatsby-source-filesystem,
            gatsby-transformer-sharp, gatsby-plugin-sharp,
            gatsby-plugin-manifest
          </li>
        </ul>
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
      <section id="section-2">
        <h3>Section2</h3>
        <hr />
        <pre className="language-bash">
          <code className="language-bash">npm install -g gatsby-cli</code>
        </pre>
        <hr />
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
      <section id="section-3">
        <h3>Section3</h3>
        <pre className="language-css">
          <code className="language-css">color: red; font-size: 10px;</code>
        </pre>

        <PrismCode code={code1} language="js" plugins={["line-numbers"]} />

        <PrismCode code={code2} language="css" plugins={["line-numbers"]} />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quae
          possimus, accusamus tenetur facilis nemo recusandae ullam officia
          maxime eligendi quaerat consectetur cumque deleniti quisquam vero est
          maiores iure enim.
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

export default IndexPage
