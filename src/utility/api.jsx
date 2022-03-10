import axios from "axios";

export default axios.create({
  baseURL: "/",
  params: {
    _limit:10
   },
  headers: {
    "Content-Type": "application/json",
  },
});
