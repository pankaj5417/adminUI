import axios from "axios";

export default axios.create({
  baseURL: "/",
  params: {
    _limit:5
   },
  headers: {
    "Content-Type": "application/json",
  },
});
