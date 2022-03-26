import React, { useContext } from "react";
import {
  Container,
  Row,
  Col,
  FormControl,
  Form,
  FormLabel,
} from "react-bootstrap";
import { CommonContext } from "../Context/context";

export default function Search() {
  const {
    onGenderChange,
    onStatusChange,
    onSearchText,
    gender,
    status,
    searchText,
  } = useContext(CommonContext);
  return (
    <Container style={{ color: "white" }}>
      <Row>
        <Col xs={12} md={8}>
          <Form.Group className="mb-3">
            <FormLabel
              style={{
                float: "left",
              }}
            >
              Search By Names
            </FormLabel>
            <FormControl
              onChange={({ target: { value } }) => onSearchText(value)}
              value={searchText}
              placeholder="Search Names..."
              aria-label="Search Names"
              style={{
                marginRight: "10px",
              }}
            />
          </Form.Group>
        </Col>
        <Col xs={12} sm={6} md={2}>
          <Form.Group className="mb-3">
            <FormLabel
              style={{
                float: "left",
              }}
            >
              Filter Status
            </FormLabel>
            <Form.Select
              aria-label="Status"
              value={status}
              onChange={({ target: { value } }) => onStatusChange(value)}
            >
              <option value="">All</option>
              <option value="Alive">Alive</option>
              <option value="Dead">Dead</option>
              <option value="unknown">Unknown</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col xs={12} sm={6} md={2}>
          <Form.Group className="mb-3">
            <FormLabel
              style={{
                float: "left",
              }}
            >
              Filter Gender
            </FormLabel>
            <Form.Select
              aria-label="Gender"
              value={gender}
              onChange={({ target: { value } }) => onGenderChange(value)}
            >
              <option value="">All</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Genderless">Genderless</option>
              <option value="unknown">Unknown</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
}
