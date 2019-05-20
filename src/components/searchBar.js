import React, {useState} from "react";
import AlgoliaPlaces from "algolia-places-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button
} from "reactstrap";

const SearchBar = props => {
  const algoliaConfig = {
    appId: process.env.REACT_APP_API_ID,
    apiKey: process.env.REACT_APP_APP_KEY,
    language: "en",
    countries: [],
    type: ""
  };
  const [latitude, getLat] = useState("");
  const [longitude, getLong] = useState("");

  return (
    <section style={{marginTop: "20%"}}>
      <h1 className="text-center text-info mb-3">Search toilets anywhere</h1>
      <AlgoliaPlaces
        options={algoliaConfig}
        onChange={({query, rawAnswer, suggestion, suggestionIndex}) => {
          console.log(
            "Fired when suggestion selected in the dropdown or hint was validated.",
            suggestion
          );
          getLat(suggestion.latlng.lat);
          getLong(suggestion.latlng.lng);
        }}
        onSuggestions={({rawAnswer, query, suggestions}) =>
          console.log(
            "Fired when dropdown receives suggestions. You will receive the array of suggestions that are displayed."
          )
        }
        onCursorChanged={({rawAnswer, query, suggestion, suggestonIndex}) =>
          console.log(
            "Fired when arrows keys are used to navigate suggestions."
          )
        }
        onClear={() => {
          getLat("");
          getLong("");
        }}
        onLimit={({message}) =>
          console.log("Fired when you reached your current rate limit.")
        }
        onError={({message}) =>
          console.log(
            "Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit."
          )
        }
      />
      <div className="text-center mt-4">
        <Button style={{fontSize: "2.8rem"}} color="primary" size="lg">
          Find
        </Button>
      </div>
    </section>
  );
};

export default SearchBar;
