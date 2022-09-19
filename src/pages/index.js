import React from "react"
import { Link } from "gatsby"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Layout from "../components/layout"
import SEO from "../components/seo"

import CodearchLogo from "../images/codearch_logo.png";

import ArrowRight from "../images/svg/arrow-right.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero">
      <Container>
        <Row>
          <Col xs={12} lg={8}>
            <h1>
              CodeArch
              <br />
              Indonesia
            </h1>
            <p>
              We are a developers team from Indonesia that create useful projects for many people.
            </p>
          </Col>
          <Col xs={12} lg={3}>
            <div className="codearch"></div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="about-team">
      <Container>
        <Row>
          <Col md={6}>
            <img src={CodearchLogo} alt="" />
          </Col>
          <Col>
            <h1>About The Team</h1>
            <p>
            CodeArch Team is multidisciplinary, composed by students from the Software Engineering, from the Vocational High School of Jakarta in Indonesia.
            </p>
            <p>
              <Link to="/team">
                Meet our team members <ArrowRight className="arrow-right" />
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="principles">
      <Container>
        <Row>
          <Col>
            <h1>Our Principles</h1>
          </Col>
          <Col lg={{ span: 3 }}>
            <div className="number">01</div>
            <h3>Our Vision is</h3>
            <p>To create useful projects for many people.</p>
          </Col>
          <Col lg={{ span: 3, offset: 1 }}>
            <div className="number">02</div>
            <h3>Our Mission is</h3>
            <p>
            Develop the application that can be useful for many people
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default IndexPage
