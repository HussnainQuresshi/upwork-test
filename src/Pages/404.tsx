import React from "react";
import { Container } from "react-bootstrap";
import NotFound from "../Components/404";
export default function NotFoundPage() {
  return (
    <Container
      id="notfound"
      style={{
        position: "relative",
        height: "100vh",
      }}
    >
      <NotFound />
    </Container>
  );
}
