import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  getUsers,
  getUsersSuccess,
  getUsersFailure,
} from "./store/user/userSlice";

function App() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);
  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchUsers = async () => {
    dispatch(getUsers());
    try {
      const users = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch(getUsersSuccess(users.data));
    } catch (error) {
      dispatch(getUsersFailure());
    }
  };
  return (
    <div className="App">
      <h1>Dummy Users</h1>
      {loading ? "Loading..." : users?.map((user) => <p>{user.name}</p>)}
    </div>
  );
}

export default App;
