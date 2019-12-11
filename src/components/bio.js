/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpeg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            linkedin
            dev
          }
          contact {
            form
          }
        }
      }
    }
  `)

  const { author, social, contact } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Hi, my name is <strong>{author}</strong>. I live in Seattle, WA and I'm a web developer. I love working in Javascript with React, Node.js, and Express. I also love Semantic HTML, CSS, Python, and making command line applications. My favorite way to think about code is how I can make tools for people to be more successful in what they are doing. If my work can empower people to do better then I can consider myself successful.
        <br></br>
        <br></br>
        Here you will find a collection of information about me and the projects I work on. You can find writing of mine more specifically about code and my experiences on the DEV Community at <a href={`https://dev.to/${social.dev}`} target="_blank" rel="noopener noreferrer">dev.to/{social.dev}</a>
        <br></br>
        <br></br>
        If you'd like to reach out you can find me on{` `}
        <a href={`https://twitter.com/${social.twitter}`} target="_blank" rel="noopener noreferrer">
          Twitter
        </a>{` `}
        &amp;{` `}
        <a href={`https://www.linkedin.com/in/${social.linkedin}`} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        {` `}
        or fill out my <a href={`${contact.form}`} target="_blank" rel="noopener noreferrer">Contact form</a>.
      </p>
    </div>
  )
}

export default Bio
