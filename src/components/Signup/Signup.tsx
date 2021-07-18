import axios from "axios";
import {useState } from "react"

const Signup: React.FC = () => {

    const [name,setName] = useState<string>("")
    const [email, setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("")

    const signupHandler = async () => {
        try {
            const res = await axios.post("https://quiz--server.herokuapp.com/register",{name,email,password})
            console.log(res);
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          placeholder=""
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          placeholder=""
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          placeholder=""
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={signupHandler}>Login</button>
      </div>
    </div>
  );
};

export default Signup;
