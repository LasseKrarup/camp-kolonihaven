import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  let polygonTop

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )

    polygonTop = (
      <svg xmlns="http://www.w3.org/2000/svg" className="fill-darkgreen absolute top-0 w-full h-96 xs:h-80 sm:h-60 md:h-64" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,0 100,0 100,80 0,100"></polygon>
      </svg>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )

    polygonTop = (
      <svg xmlns="http://www.w3.org/2000/svg" className="fill-teal-500 absolute top-0 w-full h-80 sm:h-60" viewBox="0 0 100 100" preserveAspectRatio="none">
					<polygon points="0,0 100,0 100,100 0,90"></polygon>
			</svg>
    )
  }

  return (
    <div className="flex flex-col bg-lightgreen min-h-screen">  
      {polygonTop}
      <div className="global-wrapper relative flex-grow" data-is-root-path={isRootPath}>
        <header className="global-header">{header}</header>
        <main>{children}</main>
      </div>
      <footer className="bg-darkgreen text-sm flex justify-center items-center">
        <div className="global-wrapper">
          &copy; {new Date().getFullYear()} Design by&nbsp;
          <a href="https://www.lassekrarup.com">Lasse Krarup</a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
