// App.js
import React from 'react'; // optional with new JSX transform but safe
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

function Card() {
  return (
    <div className="carditems">
      This is Card Component
    </div>
  );
}

export default function App() {
  return (
    <div className="main">
      <Container className="my-3">
        <Header />
      </Container>

      <div className="row d-flex justify-content-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div className="container my-4">
        <h1 className="text-danger">Danger Bhai</h1>
      </div>

      <Footer />
    </div>
  );
}
