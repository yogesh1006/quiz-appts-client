import "./home.css"

const Home: React.FC = () => {
  return (
    <div className="home">
      <h4 className="welcome"> Welcome to quiz trivia</h4>
      <div className="quiz-category">
      <div className="quiz-one">
          <p className="category">Sports</p>
      </div>
      <div className="quiz-two">
          <p className="category">Javscript</p>
      </div>
      </div>
    </div>
  );
};

export default Home;
