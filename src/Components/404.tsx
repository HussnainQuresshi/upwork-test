import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function _404() {
  return (
    <div className="notfound">
      <div className="notfound-404">
        <h3>Oops! Page not found</h3>
        <h1>
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </h1>
      </div>
      <h2>we are sorry, but the page you requested was not found</h2>
      <Link to="/">
        <Button variant="outline-dark">Go Back</Button>
      </Link>
    </div>
  );
}
