import axios from "axios";
import { GETALLUSERS, GETUSER, TOGGLEFALSE, TOGGLETRUE } from "../types";

export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/users");
    console.log(res);
    dispatch({
      type: GETALLUSERS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const addNewUser = (user) => async (dispatch) => {
  try {
    await axios.post("http://localhost:5000/api/users", user);
    dispatch(getAllUsers());
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    dispatch(getAllUsers());
  } catch (error) {
    console.log(error);
  }
};

export const getOneUser = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/users/${id}`);
    dispatch({
      type: GETUSER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const toggleTrue = () => {
  return {
    type: TOGGLETRUE,
  };
};
export const toggleFalse = () => {
  return {
    type: TOGGLEFALSE,
  };
};
export const editUser = (id, user) => async (dispatch) => {
  try {
    await axios.put(`http://localhost:5000/api/users/${id}`, user);
    dispatch(getAllUsers());
  } catch (error) {
    console.log(error);
  }
};
