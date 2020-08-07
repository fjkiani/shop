//login user
import axios from "axios";
import url from "../utils/URL";

async function loginUser({ email, password, username }) {
  const response = await axios
    .post(`${url}/auth/local`, {
      username,
      email,
      password
    })
    .catch(error => console.log(error));
  return response;
}

export default loginUser;
