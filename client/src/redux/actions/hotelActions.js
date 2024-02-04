import axios from "axios";
import { setError } from "../slices/userSlice";
import {
  SetSearch,
  setAllHotels,
  setHasSearched,
  setHotel,
  setHotels,
  setIsHotelUpdated,
} from "../slices/hotelSlice";
axios.defaults.withCredentials = true;

export const getFeturedHotels = () => async (dispatch) => {
  try {
    const { data } = await axios.get("https://host-blond.vercel.app/api/hotels/");
    const popular = data.slice(0, 4);
    dispatch(setHotels(popular));
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};

export const getHotelAction = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`https://host-blond.vercel.app/api/hotels/${id}`);

    dispatch(setHotel(data));
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};

export const getSearchAction = (query) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://host-blond.vercel.app/api/hotels/search/${query}`
    );

    dispatch(SetSearch(data));
    dispatch(setHasSearched(true));
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};

export const getAllHotelsAction = () => async (dispatch) => {
  try {
    const { data } = await axios.get("https://host-blond.vercel.app/api/hotels/");
    dispatch(setAllHotels(data));
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};

export const updateHotelAction = (id, url) => async (dispatch) => {
  try {
    await axios.put(`https://host-blond.vercel.app/api/hotels/${id}`, url, {
      headers: { "Content-Type": "application/json" },
    });
    dispatch(setIsHotelUpdated(true));
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};

export const deleteHotelAction = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://host-blond.vercel.app/api/hotels/${id}`);
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};

export const createHotelAction = (url) => async (dispatch) => {
  try {
    await axios.post(`https://host-blond.vercel.app/api/hotels/`, url, {
      headers: { "Content-Type": "application/json" },
    });
    dispatch(setIsHotelUpdated(true));
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};

export const bookedHotelAction = (formData) => async (dispatch) => {
  try {
    await axios.post("https://host-blond.vercel.app/api/hotels/booked", formData);
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};
