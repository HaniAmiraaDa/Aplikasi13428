// src/Components/Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <Container fluid className="py-3">
        <Row>
          <Col md="4" className="text-center text-md-left">
            <h5 className="mb-3">Tanggap Darurat Tanah Longsor</h5>
            <p>Informasi dan layanan untuk penanggulangan bencana tanah longsor.</p>
          </Col>
          <Col md="4" className="text-center">
            <h5 className="mb-3">Navigasi</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white">Contact</Link>
              </li>
            </ul>
          </Col>
          <Col md="4" className="text-center text-md-right">
            <h5 className="mb-3">Kontak Kami</h5>
            <p>Email: info@tanahlongsor.com</p>
            <p>Telepon: +62 123 456 7890</p>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-2 bg-secondary">
        <p className="mb-0">&copy; 2024 Tanggap Darurat Tanah Longsor. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
