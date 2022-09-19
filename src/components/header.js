import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const Header = ({ siteTitle, className }) => {
  const links = [
    {
      link: "/",
      title: "Home",
    },
    {
      link: "/team",
      title: "Team",
    },
    {
      link: "/blog",
      title: "Blog",
    },
  ]

  return (
    <header className={className}>
      <Container>
        <Navbar className="bg-transparent" expand="md">
          <Navbar.Brand>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              {links.map(({ link, title }) => (
                <Nav.Item key={title}>
                  <Nav.Link as="span">
                    <Link to={link}>{title}</Link>
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
