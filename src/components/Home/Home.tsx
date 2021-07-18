import { Link } from "react-router-dom"
import "./home.css"

const Home: React.FC = () => {
  return (
    <div className="home">
      <h4 className="welcome"> Welcome to quiz trivia</h4>
      <div className="quiz-category">
      <div className="quiz-one">
        <Link to='/quiz/sports'> <p className="category" >Sports</p></Link>
      </div>
      <div className="quiz-two">
      <Link to='/quiz/Entertainment: Film'><p className="category">Javscript</p></Link>
      </div>
      </div>
    </div>
  );
};

export default Home;
