import { useState, useEffect } from "react";
import axios from "axios";

const propertiesUrl =
  "https://cors-anywhere.herokuapp.com/https://code-challenge.activepipe.com/challenge/properties";

export default (): {
  state: string;
  properties: any;
  status: string | null;
  setStatus: Function;
} => {
  const [state, setState] = useState<string>("LOADING");
  const [status, setStatus] = useState<string | null>(null);
  const [properties, setProperties] = useState<any>([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(propertiesUrl);

        if (result.status !== 200) setState("ERROR");
        else {
          setState("OK");
          setProperties(result.data);
        }
      } catch {
        setState("ERROR");
      }
    })();
  }, []);

  return {
    state,
    properties: status
      ? properties.filter(
          (property: { status: string }) => property.status === status
        )
      : properties,
    status,
    setStatus
  };
};
