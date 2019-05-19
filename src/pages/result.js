import React, { useEffect } from "react";
import { getLocationStart } from "../store/actions/getData";
import { connect } from "react-redux";
import Loader from "../components/loader";
//import {FaToiletPaper} from "react-icons/fa";
import Pagination from "../components/pagination";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardHeader,
  Button
} from "reactstrap";

const Result = props => {
  useEffect(() => {
    props.getLocation();
    //props.findbathroom();
  }, []);
  //let googleMapUrl = "https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393";
  const openMap = (long, lat) => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${lat},${long}`,
      "_blank"
    );
    //console.log(long, lat);
  };
  const result = (
    <section style={{ marginTop: "2rem" }}>
      <Container>
        <Row>
          {props.data.map(bathroom => (
            <Col xs="10" md="7" className="mx-auto" key={bathroom.id}>
              {" "}
              <Card className="text-center">
                <CardHeader>{bathroom.name}</CardHeader>
                <CardBody>
                  <CardText>
                    <span className="text-info">Direction: </span>
                    {bathroom.directions === "" ? "N/A" : bathroom.directions}
                  </CardText>
                  <CardText className="text-danger">
                    {bathroom.comment}
                  </CardText>
                  <Button
                    onClick={() =>
                      openMap(bathroom.longitude, bathroom.latitude)
                    }
                  >
                    Show on Map
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        <Pagination />
      </Container>
    </section>
  );
  return props.loading ? <Loader /> : result;
};

const mapDispatchToProps = dispatch => {
  return {
    getLocation: () => dispatch(getLocationStart())
    //getMap: (long, lat) => dispatch(showOnGoogleMap(long, lat))
    //findbathroom: () => dispatch(findBathroomsStart(12, 15))
  };
};

const mapStateToProps = state => {
  return {
    loading: state.data.loading,
    data: state.data.bathroomsData
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);
