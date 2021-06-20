import { createSlice } from '@reduxjs/toolkit';


const usersDB = [
  { username: 'testadmin@gmail.com', password: '12345yuiopp', role: 'admin' }
];


// TODO: Get from localstorage
const fetchUser = undefined;


const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: undefined
  },
  reducers: {

    login: (state, { payload: { username, password } }) => {
      username = username.toLowerCase();

      // TODO: Get rid of side effect from reducer?
      const userFound = usersDB.find(one => one.username === username && one.password === password);

      if (userFound) {
        state.user = userFound;
      } else {
        state.user = { username, password };
      }
    },

    logout: state => {
      state.user = undefined;
    },

  }
});


export { fetchUser };
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
