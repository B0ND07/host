import axios from "axios";
import {
  clearError,
  logoutUser,
  setAllBookings,
  setBooking,
  setError,
  setUser,
  setUsers,
} from "../slices/userSlice";



axios.defaults.withCredentials = true;

//login
export const loginAction = (formData) => async (dispatch) => {

  try {
    const { data } = await axios.post(
      "https://api-i2ix.onrender.com/api/auth/login",
      formData
    );
    
    if (data.user) {

      dispatch(setUser(data.user));
      dispatch(clearError());

    } else {
      dispatch(setError("Incorrect username or password"));
    }
  } catch (err) {
    console.log(err);
  }
};
//register
export const registerAction = (formData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "https://api-i2ix.onrender.com/api/auth/register",
      formData
    );
 
    dispatch(setUser(data.user));
  } catch (err) {}
};
//logout
export const logoutAction = () => async (dispatch) => {
  try {
    await axios.get("https://api-i2ix.onrender.com/api/auth/logout");

    dispatch(logoutUser());
  } catch (err) {
    console.log(err);
  }
};

export const getUserAction = () => async (dispatch) => {
  try {
    const { data } = await axios.get("https://api-i2ix.onrender.com/api/auth/me");
   
    if(data.user){
    dispatch(setUser(data.user));}
  } catch (err) {
    console.log(err);
  }
};

export const newBookingAction = (formData) => async (dispatch) => {
  try{
  await axios.post(
    `http://localhost:5006/api/bookings/book`,
    formData
  );
} catch (err) {
  dispatch(setError(err.response.data.message));
}
  
};

export const getBookingsAction = (username) => async (dispatch) => {
  try{
  const { data } = await axios.get(
    `https://api-i2ix.onrender.com/api/bookings/${username}`
  );

  dispatch(setBooking(data.bookings));
} catch (err) {
  dispatch(setError(err.response.data.message));
}
 
};

export const getAllUsersAction = () => async (dispatch) => {
  try{
  const { data } = await axios.get("http://localhost:5006/api/users/");
  dispatch(setUsers(data));
} catch (err) {
  dispatch(setError(err.response.data.message));
}
  
};

export const updateUserRoleAction = (id, role) => async (dispatch) => {
  try{
  await axios.put(`http://localhost:5006/api/users/${id}`, {
    isAdmin: role,
  });
} catch (err) {
  dispatch(setError(err.response.data.message));
}
  
};

export const getAllBookingsAction = () => async (dispatch) => {
  try{
  const { data } = await axios.get(
    "https://api-i2ix.onrender.com/api/bookings/allbookings/booked"
  );

  dispatch(setAllBookings(data.bookings));
} catch (err) {
  dispatch(setError(err.response.data.message));
}
};

export const updateUserAction =
  (oldusername, username, email) => async (dispatch) => {
    try{
    const { data } = await axios.put(
      `https://api-i2ix.onrender.com/api/users/updateprofile/${oldusername}`,
      {
        username: username,
        email: email,
      }
    );
    
    dispatch(setUser(data.user));
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
  };

  export const deleteUserAction =
  (username) => async (dispatch) => {
    try{
    await axios.delete(
      `http://localhost:5006/api/users/delete/${username}`,
    );
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
   
  };
