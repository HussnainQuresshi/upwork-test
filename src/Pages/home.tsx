import React, { useContext, useMemo } from "react";
import {
  ThemeProvider,
  Container,
  Row,
  Col,
  ModalHeader,
} from "react-bootstrap";
import Character from "../Components/character";
import Pagination from "react-bootstrap-4-pagination";
import Search from "../Components/search";
import { CommonContext } from "../Context/context";
import { character } from "../types";
import Loader from "../Components/loader";
export default function Home() {
  const {
    totalPages,
    currentPage,
    onPageChange,
    characters,
    refresh,
    loading,
  } = useContext(CommonContext);
  const Characters = useMemo(
    () =>
      characters.map((character: character, i) => (
        <Col key={i} xs={12} sm={6} md={4} lg={3}>
          <Character character={character} />
        </Col>
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [characters, refresh]
  );

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    >
      <Container
        style={{
          height: "100vh",
          textAlign: "center",
          paddingTop: "20px",
          justifyContent: "center",
        }}
      >
        <ModalHeader
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            justifyContent: "center",
          }}
        >
          Senior Frontend Technical Challenge
        </ModalHeader>
        <Row className="d-flex justify-content-center pt-3">
          <Search />
        </Row>

        {loading ? (
          <Loader />
        ) : (
          <Row className="d-flex justify-content-center pt-3 g-5">
            {Characters}
          </Row>
        )}
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
          }}
        >
          <Pagination
            circle
            totalPages={totalPages}
            currentPage={currentPage}
            showMax={5}
            size="sm"
            threeDots={true}
            prevNext={true}
            onClick={onPageChange}
          />
        </Container>
        <ModalHeader
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            justifyContent: "center",
          }}
        >
          Rick & Morty
        </ModalHeader>
      </Container>
    </ThemeProvider>
  );
}
