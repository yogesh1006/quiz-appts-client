import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts";
import "./finalscore.css";

const FinalScore: React.FC = () => {
  const { auth } = useAuth();

  type FinalS = {
    finalScore: string;
    category: string;
  };
  const { finalScore, category } = useParams<FinalS>();
  console.log(finalScore, category);

  const updateScore = async () => {
    try {
      const res = await axios.post(
        "https://quiz--server.herokuapp.com/api/update_user_score",
        { category: category, score: finalScore },
        {
          headers: {
            authorization: auth?.token,
          },
        }
      );
      console.log(res);
      // history.push("/login");
      // toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    updateScore();
    // eslint-disable-next-line
  }, [finalScore]);

  return (
    <div className="finalscore">
      <p>Your Final Score : {finalScore} / 10</p>
      <div className="other-links">
        <Link className="link" to="/scoreboard">Scoreboard</Link>
        <Link className="link" to="/">Play Again</Link>
      </div>
    </div>
  );
};

export default FinalScore;
