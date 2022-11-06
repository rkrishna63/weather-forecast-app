// used npm install to install react-bootstrap-typeahead
import { AsyncTypeahead } from "react-bootstrap-typeahead";

import { useContext, useState } from "react";
import { SetCityContext } from "../../context/setcity-context/setcity.context";

import { Form, Row, Col } from "react-bootstrap";

const SearchBox = () => {
  const { setLatitude, setLongitude } = useContext(SetCityContext); //from context

  const [isLoading, setIsLoading] = useState(false); //for when loading for suggestions
  const [options, setOptions] = useState([]); //for suggestions in dropDown

  // Get lat and lon from geocode api(api key valid upto Nov18,2022)
  const handleSearch = (searchString) => {
    setIsLoading(true); //creates a loading animation in search-box
    const getSuggestions = async () => {
      const response = await fetch(
        `https://api.geocode.earth/v1/autocomplete?api_key=ge-0ccec9536e10b499&text=${searchString}`
      );
      const { features } = await response.json();
      //console log features for clear understanding....
      // note:features is array after destructuring from response.json
      setOptions(
        features.map((element) => {
          return {
            label: element.properties.label,
            coordinates: element.geometry.coordinates,
          };
        })
      );
    };
    getSuggestions(); // called the function here
    setIsLoading(false);
  };

  //after selecting the suggestions this will run and set the long and lat
  const onSelectHandler = ([selectedValue]) => {
    if (selectedValue) {
      const { label, coordinates } = selectedValue;
      console.log(label, coordinates); //console logged the city name and coordinates
      setLongitude(coordinates[0]); //coordinates is a array
      setLatitude(coordinates[1]);
    }
  };

  return (
    <div className="search-container">
      <Form>
        <Row>
          <Form.Label className="fs-4 mb-2">
            Search your city/address
          </Form.Label>
        </Row>
        <Row>
          <Col xs="8">
            {/*this component helps to load suggestion by setting the values
             */}
            <AsyncTypeahead
              id="search"
              isLoading={isLoading}
              onSearch={handleSearch}
              options={options}
              placeholder="search your city/place"
              onChange={onSelectHandler}
              className="mb-4"
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchBox;
