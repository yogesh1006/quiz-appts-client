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
      <h4 style={{ textAlign: "center",fontWeight:"bold",fontSize:"1.5rem" }}>Username: {user?.name}</h4>
      <table
       className="table">
        <tr className="row">
          <th className="table-header">Category</th>
          <th className="table-header">Score</th>
          <th className="table-header">Played Date</th>
        </tr>
        {user?.game_score.map((item,index) => (
            <tr className="row" key={index}>
              <td className="table-head">{item.category}</td>
              <td className="table-head">{item.score} / 10</td>
              <td className="table-head">{item.played_date}</td>
            </tr>
        ))}
      </table>
    </>
  );
};

export default Scoreboard;
