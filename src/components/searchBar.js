import React from "react";
import AlgoliaPlaces from "algolia-places-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button
} from "reactstrap";

/*
<h1 className="text-center text-info mb-3">Search toilets anywhere</h1>
<InputGroup style={{width: "90%", margin: "0 auto"}}>
  <Input placeholder="username" />
  <InputGroupAddon addonType="append">
    <Button color="primary">Search</Button>
  </InputGroupAddon>
</InputGroup>
 */

const SearchBar = props => {
  const algoliaConfig = {
    appId: process.env.REACT_APP_API_ID,
    apiKey: process.env.REACT_APP_APP_KEY,
    language: "en",
    countries: [],
    type: ""
  };
  return (
    <section style={{marginTop: "30%"}}>
      <AlgoliaPlaces
        options={algoliaConfig}
        onChange={({query, rawAnswer, suggestion, suggestionIndex}) =>
          console.log(
            "Fired when suggestion selected in the dropdown or hint was validated."
          )
        }
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
        onClear={() => console.log("Fired when the input is cleared.")}
        onLimit={({message}) =>
          console.log("Fired when you reached your current rate limit.")
        }
        onError={({message}) =>
          console.log(
            "Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit."
          )
        }
      />
    </section>
  );
};

export default SearchBar;
