import React from 'react'
import { Container } from 'react-bootstrap'
import './Footer.css'
import FooterBg from '../../img/contact_bg.png'

const Footer = () => {
  return (
    <Container>
        <Footer>
            <img src={FooterBg} alt="FooterBg" />
        </Footer>
    </Container>
  )
}

export default Footer