import { createSlice } from '@reduxjs/toolkit';


const usersDB = [
  { username: 'testadmin@gmail.com', password: '12345yuiopp', role: 'admin' }
];


// Try to get from localstorage
let persistedUser;
try {
  persistedUser = JSON.parse(localStorage.getItem('user'));
} catch(e) {
  console.error('Error parsing user JSON', e);
}


const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: persistedUser  // Ether user object or undefined
  },
  reducers: {

    setUser: (state, { payload }) => {
      state.user = payload;
    }

  }
});


/* Thunks */

const login = ({ username, password }) => (dispatch) => {
  username = username.toLowerCase();

  const userFound = usersDB.find(one => one.username === username && one.password === password);
  let user;

  if (userFound) {
    user = userFound;
  } else {
    user = { username, password };
  }

  localStorage.setItem('user', JSON.stringify(user));

  dispatch(setUser(user));
};

const logout = () => (dispatch) => {
  localStorage.removeItem('user');
  dispatch(setUser(undefined));
};


export const { setUser } = userSlice.actions;
export { login, logout };
export default userSlice.reducer;
