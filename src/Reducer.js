import userdata from "./UsersJson";
const UsersReducer = (state = { userNeme: "malle" }, action) => {
  switch (action.type) {
    case "USERLOGIN": {
      if (
        userdata.usersLogin.username === action.payload.username &&
        userdata.usersLogin.password === action.payload.password
      ) {
        console.log("logdin");
        return { ...state, isLogdni: true, userNeme: action.payload.username };
      }
      return { ...state, isErr: true, errMsg: "Invalid User" };
    }
    default:
      return state;
  }
};
export default UsersReducer;
