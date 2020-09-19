import { v4 as uuid } from 'uuid';

const initialState = {
  users: [
    {
      id: "1",
      name: "Blankson Owiredu",
      number: "024485506",
      email: "oblank@gmail.com"
    },
    {
      id: "2",
      name: "David Carter",
      number: "0577800607",
      email: "davidcarter@email.com"
    },
    {
      id: "3",
      name: "Nuhu Osman",
      number: "0205567834",
      email: "nuhuos@email.com"
    }
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      const newUser = {
        id: uuid(),
        name: action.payload.name,
        number: action.payload.number,
        email: action.payload.email
      };
      return { ...state, users: [...state.users, newUser] };
    case "DELETE_USER":
      const filteredUsers = state.users.filter(user => user.id !== action.payload);
      return {...state, users: filteredUsers}
    case "EDIT_USER":
      const updatedUsersInfo = state.users.map(user => {
        if (user.id === action.user_id) {
          return {...user, ...action.updated_info}
        } else {
          return user;
        }
      });
      return {...state, users: updatedUsersInfo}
    default:
      return state;
  }
};

export default usersReducer;