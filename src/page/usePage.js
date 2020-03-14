import { useState, useEffect } from "react";
import axios from "axios";

const propertiesUrl =
  "https://cors-anywhere.herokuapp.com/https://code-challenge.activepipe.com/challenge/properties";

export default () => {
  const [state, setState] = useState("LOADING");
  const [status, setStatus] = useState(null);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get(propertiesUrl)
      .then(result => {
        if (result.status !== 200) setState("ERROR");
        else {
          setState("OK");
          setProperties(result.data);
        }
      })
      .catch(() => {
        setState("ERROR");
      });
  }, []);

  return {
    state,
    properties: status
      ? properties.filter(property => property.status === status)
      : properties,
    status,
    setStatus
  };
};
