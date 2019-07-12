import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/auth/api/me");

  dispatch({ type: FETCH_USER, payload: res.data });
};
