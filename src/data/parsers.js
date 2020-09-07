import format from "./format";
import moment from "moment";

function getData(data) {
  const dataRaw = data;

  return {
    positif: format.number(dataRaw.confirmed.value),
    sembuh: format.number(dataRaw.recovered.value),
    meninggal: format.number(dataRaw.deaths.value),
    terakhirUpdate: moment(dataRaw.lastUpdate).locale("id").format("LLLL"),
  };
}

export default {
  getData,
};
