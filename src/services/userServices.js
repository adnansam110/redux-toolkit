import axios from "axios";

export const getUsersService = async () => {
  const users = await axios.get("https://jsonplaceholder.typicode.com/users");
  console.log("in service", users.data);
  return users.data;
};
