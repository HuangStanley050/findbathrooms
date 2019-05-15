import React from "react";
import {Container, Row, Col} from "reactstrap";
import NearBy from "../components/nearbyBTN";
import Search from "../components/searchBTN";

class Landing extends React.Component {
  render() {
    return (
      <section style={{marginTop: "3rem"}}>
        <Container>
          <Row>
            <Col md="6">
              <h1 style={{textAlign: "center"}}>
                <NearBy />
              </h1>
            </Col>
            <Col md="6">
              <h1 style={{textAlign: "center"}}>
                <Search />
              </h1>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Landing;
