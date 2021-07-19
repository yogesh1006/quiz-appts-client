import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts";
import "./scoreboard.css";

const Scoreboard: React.FC = () => {
  const [user, setUser] = useState<User>();
  const { auth } = useAuth();
  console.log(user);

  type User = {
    email: string;
    game_score: [
      {
        category: String;
        score: String;
        played_date: String;
      }
    ];
    name: string;
    _id: string;
  };
  const getUserdata = async () => {
    try {
      let res = await axios.get(
        "https://quiz--server.herokuapp.com/api/get_user_data",
        {
          headers: {
            authorization: auth?.token,
          },
        }
      );
      //   console.log(res);

      setUser(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserdata();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h4 style={{textAlign:"center"}}>Username: {user?.name}</h4>
      {user?.game_score.map((item) => {
        return (
          <tbody className="table">
            <tr className="row">
              <th className="table-header">Category</th>
              <th className="table-header">Score</th>
              <th className="table-header">Played Date</th>
            </tr>
            <tr className="row">
              <th className="table-head">{item.category}</th>
              <th className="table-head">{item.score} / 10</th>
              <th className="table-head">{item.played_date}</th>
            </tr>
          </tbody>
        );
      })}
    </>
  );
};

export default Scoreboard;
