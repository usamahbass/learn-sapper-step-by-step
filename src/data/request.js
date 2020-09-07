import axios from "axios";
import parsers from "./parsers";

async function getData() {
  const response = await axios.get(
    `https://covid19.mathdro.id/api/countries/indonesia`
  );

  return parsers.getData(response.data);
}

export default {
  getData,
};
