import React from "react"
import { graphql } from "gatsby"
import Scrollspy from "react-scrollspy"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
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

const DrupalPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Drupal" />

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
        <h2>Drupal</h2>
        <section>
          <h3 id="section-1">Drupal Blog Notes</h3>
          {data.allNodeBlog.edges.map(({ node }) => (
            <section>
              <h4> {node.title}</h4>
              <p>dangerouslySetInnerHTML</p>
              <div dangerouslySetInnerHTML={{ __html: node.body.value }}></div>
              <p>IMG</p>
              <div>{node.relationships.field_image.uri.url}</div>
              <Img
                sizes={
                  node.relationships.field_image.localFile.childImageSharp.sizes
                }
              />
              <p>value</p>
              <div> {node.body.value}</div>
            </section>
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

export default DrupalPage

export const query = graphql`
  query DrupalQuery {
    allNodeBlog {
      edges {
        node {
          title
          body {
            processed
            format
            summary
            value
          }
          relationships {
            field_image {
              uri {
                url
              }
              localFile {
                childImageSharp {
                  sizes(maxWidth: 1000) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
