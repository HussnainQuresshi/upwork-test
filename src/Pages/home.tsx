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
        <Col key={i} xs={24} sm={6} md={4} lg={3} xl={2}>
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
      <Container className="home-container">
        <ModalHeader className="home-header">
          Frontend Technical Challenge
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
        <Container className="pagination-container">
          <Pagination
            circle
            totalPages={totalPages}
            currentPage={currentPage}
            size="sm"
            threeDots={true}
            prevNext={true}
            onClick={onPageChange}
          />
        </Container>
        <ModalHeader className="home-footer">Rick & Morty</ModalHeader>
      </Container>
    </ThemeProvider>
  );
}
