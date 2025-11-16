// App.js
import React, { useState } from 'react';

import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

function Card() {
  let template = '';
  let [count, setCount] = useState(1);
  let [pshow, setPshow] = useState(false);

  if (pshow) {
    template = <>
     <button onClick={()=>setPshow(!pshow)} >Hide</button>   <p>India</p></>

  }
  else {
    template =  <button onClick={()=>setPshow(!pshow)} >Show</button>  
  }

  let displayData = () => {
    setCount(count + 1);

  }
  return (
    <>
      {template}
      <Button className='bg-danger' onClick={displayData}>Increase n</Button>

      <div className="carditems">
        This is Card Component n = {count}
      </div>
    </>
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
