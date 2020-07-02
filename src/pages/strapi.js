import React from "react"
import { graphql } from "gatsby"
import Scrollspy from "react-scrollspy"
import Layout from "../components/layout"
import SEO from "../components/seo"
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

const StrapiPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Strapi" />

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
        <h2>Strapi</h2>
        <section>
          <h3 id="section-1">Blog Notes</h3>
          {data.allStrapiBlogNotes.edges.map(({ node }) => (
            <section>
              <h4> {node.Title}</h4>
              {node.Text}
            </section>
          ))}
        </section>
        <section>
          <h3 id="section-1">RTF Articles</h3>
          {data.allStrapiRtfArticles.edges.map(({ node }) => (
            <>
              <h4>{node.Title}</h4>
              <div dangerouslySetInnerHTML={{ __html: node.Text }}></div>
              {node.children.id}
            </>
          ))}
        </section>
        <section>
          <h3 id="section-1">RTF Articles 1</h3>
          {data.allStrapiRtfArticles.edges.map(({ node }) => (
            <>{node.Title}</>
          ))}
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
        </section>
      </div>
    </Layout>
  )
}

export default StrapiPage

export const query = graphql`
  query StrapiQuery {
    allStrapiRtfArticles {
      edges {
        node {
          Slug
          Title
          Text
          children {
            ... on ImageSharp {
              id
              fixed {
                width
              }
            }
          }
        }
      }
    }
    allStrapiBlogNotes {
      edges {
        node {
          Title
          Text
        }
      }
    }
  }
`
