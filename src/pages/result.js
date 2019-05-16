import React, {useEffect} from "react";
import {getLocationStart} from "../store/actions/getData";
import {connect} from "react-redux";
import Loader from "../components/loader";
import {Container, Row, Col} from "reactstrap";

const Result = props => {
  useEffect(() => {
    props.getLocation();
    //props.findbathroom();
  }, []);

  const result = (
    <section>
      <Container>
        <Row>
          {props.data.map(bathroom => (
            <Col key={bathroom.id} xs="12">
              {" "}
              <h2>{bathroom.name}</h2>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
  return props.loading ? <Loader /> : result;
};

const mapDispatchToProps = dispatch => {
  return {
    getLocation: () => dispatch(getLocationStart())
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
