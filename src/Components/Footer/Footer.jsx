import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
         <Navbar className="bg-primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className='d-grid mx-auto' href="#home">
            Doctors Appoiment <span className='text-secondary-emphasis'><a href='/'>www.Doctorsconnect.com</a></span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Footer