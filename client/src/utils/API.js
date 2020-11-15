import axios from "axios";

export default {
  getDisasters: function() {
    return axios.get("/api/disasters");
  }
};
