import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import CheckBlock from "./Components/CheckBlock";
import mockData from "./mock-data/mock-data";

function App() {
  return (
    <Container style={{ padding: "2rem" }}>
      <h1>Knowledge Check Block</h1>
      <Row style={{ padding: "1rem 0 1rem 0" }}>
        {mockData.map((data, i) => (
          <Col key={i} lg={4} style={{ margin: "1rem 0" }}>
            <CheckBlock
              text={<p>{data.text}</p>}
              media={data.media}
              mediaType={data.mediaType}
              answers={data.answers}
              correctAnswer={data.correctAnswer}
              message={data.message}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
