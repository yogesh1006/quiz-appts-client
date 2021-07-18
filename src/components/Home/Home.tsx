import { Link } from "react-router-dom";
import "./home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <h4 className="welcome"> Welcome to quiz trivia</h4>
      <div className="quiz-category">
        <div className="quiz-one">
          <p className="category">Sports</p>
          <div  className="center-link">
           <Link to="/quiz/sports"  className="link"> Play Quiz</Link>
          </div>
        </div>
        <div className="quiz-two">
          <p className="category">JavaScript</p>
          <div className="center-link">
           <Link to="/quiz/javascript" className="link">Play Quiz</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
