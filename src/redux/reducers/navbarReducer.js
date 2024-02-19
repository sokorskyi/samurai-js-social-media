const initialState = {
  friends: [
    { friendName: 'Sveta', id: 1},
    { friendName: 'Igor', id: 2},
    { friendName: 'Vlad', id: 3},
  ],
}

export const navbarReducer = (state = initialState, action) => {
  switch(action.type) {
    default: {
      return state;
    }
  }
}

export const selectNavbar = (state) => state.navbar
