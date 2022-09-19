import React from "react"
import Container from "react-bootstrap/Container"

const Footer = () => (
  <>
    <Container>
      <footer>
        <div>
          <h1>
            Interested to <br /> working together?
          </h1>
          <div className="contact-information">
            <p>
              <a
                href="mailto:codearchindo@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                codearchindo@gmail.com
              </a>
              &nbsp;
            </p>
          </div>
        </div>
      </footer>
    </Container>
       <div className="footers">
         <Container>@Copyright 2022, CodeArch Indonesia</Container>
       </div>
  </>
)

export default Footer
