/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = ({location}) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let heights

  if (isRootPath) {
    heights = "h-32 xs:h-24 sm:h-auto"
  } else {
    heights = ""
  }

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className={`bio flex-col ${heights}`}>
      {author?.name && (
        <>
          <p>
            Vi er <strong>{author.name}</strong>{author?.summary || null}
            {` `}
            Har du et tip, der skal deles på siden? Find os i campen!
          </p>
        </>
      )}
    </div>
  )
}

export default Bio
