import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styles from "../styles/media-kit.module.css"

import Download from "../components/media-kit/Download"

const MediaKitPage = () => (
  <Layout>
    <div className={styles.page}>
      <Container>
        <SEO title="Press" />
        <Row className="justify-content-center align-items-center">
          <Col xs="8">
            <h1 className="main-title text-center pt-5">CodeArch Files</h1>
            <p className="text-center pt-2">
              This is a page of CodeArch Indonesia Assets, Like logo or the teams guidelines !
            </p>
            <p className="text-center pt-2 mb-0">
              If you got any questions or want to request extra assets,
              please contact us at
            </p>
            <p className="mail text-center font-weight-bold pt-0">
              <a
                href="mailto:codearchindo@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                codearchindo@gmail.com
              </a>
            </p>
          </Col>
        </Row>
        <Download />
      </Container>
    </div>
  </Layout>
)

export default MediaKitPage
