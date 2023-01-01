import axios from "axios";
import { useState } from "react";
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
  const [form, setForm] = useState({
    inputText: "",
    translatedText: "",
  });
  // useEffect(() => {
  //   fetchUsers();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
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
      <div data-testid="users-list">
        {loading
          ? "Loading..."
          : users?.map((user) => (
              <p key={user.id} data-testid="user-data">
                {user.name}
              </p>
            ))}
      </div>
      {(!users?.length || !loading) && (
        <button data-testid="fetch-user-btn" onClick={() => fetchUsers()}>
          Fetch Users
        </button>
      )}
      <div>{form.translatedText}</div>
    </div>
  );
}

export default App;
