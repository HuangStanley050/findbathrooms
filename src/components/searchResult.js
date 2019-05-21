import React from "react";
import {Table, Button} from "reactstrap";
import {openMap} from "../store/actions/getData";
import {connect} from "react-redux";

const SearchResult = props => {
  let tableResult = (
    <Table className="mt-4" hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Direction</th>
        </tr>
      </thead>
      <tbody>
        {props.bathrooms.map((bathroom, i) => {
          return (
            <tr key={bathroom.id}>
              <th scope="row">{i}</th>
              <td>{bathroom.name}</td>
              <td>
                <Button
                  onClick={e => openMap(bathroom.longitude, bathroom.latitude)}
                >
                  Show on Map
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
  return props.bathrooms.length === 0 ? null : tableResult;
};

const mapStateToProps = state => {
  return {
    bathrooms: state.data.bathroomsData
  };
};

export default connect(mapStateToProps)(SearchResult);
