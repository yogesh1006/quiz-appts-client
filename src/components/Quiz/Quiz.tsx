import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useQuiz, useAuth } from "../../contexts";
// import FinalScore from "./FinalScore";
import "./Quiz.css";

const Quiz: React.FC = () => {
  const { quiz, setQuiz } = useQuiz();
  const { auth } = useAuth();
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  // const [finalScore, setFinalScore] = useState(Number);
  const [ans, setAns] = useState<string>("wrong");

  const history = useHistory();
  type Category = {
    category: string;
  };
  const { category } = useParams<Category>();

  const getQuiz = async () => {
    try {
      let quiz = await axios.post(
        "https://quiz--server.herokuapp.com/api/get_quiz_by_category",
        { category: category },
        {
          headers: {
            authorization: auth?.token,
          },
        }
      );
      setQuiz(quiz.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const nextQuestion = (ans: string | undefined) => {
    let finalScore = 0;
    if (ans && quiz && count <= 8) {
      if (quiz[count].correct_answer === ans) {
        setScore((prevScore) => prevScore + 1);
      }
      setCount((prevCount) => prevCount + 1);
    } else {
      if (quiz?.[count].correct_answer === ans) {
        finalScore = score + 1;
      }
      history.push(`/score/${category}/${finalScore}`);
      // setFinalScore(finalScore);
    }
  };
  const onAnswer = (selectedAns: string) => {
    setAns(selectedAns);
  };
  useEffect(() => {
    getQuiz();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container">
        {quiz ? (
          <>
            <div className="question">
              <div className="question-num">
                <span>Question: {count + 1} </span>

                <div className="score">Score:{score}</div>
              </div>
              <div className="ques">
                <p>Question: {quiz?.[count].question}</p>
              </div>
              <div className="options">
                <div className="opt">
                  <input
                    type="radio"
                    value={quiz?.[count].incorrect_answers[0]}
                    onChange={() => {
                      onAnswer(quiz[count].incorrect_answers[0]);
                    }}
                    checked={ans === quiz[count].incorrect_answers[0]}
                  />
                  <span className="option">
                    {quiz?.[count].incorrect_answers[0]}
                  </span>
                </div>
                <div className="opt">
                  <input
                    type="radio"
                    value={quiz?.[count].incorrect_answers[1]}
                    onChange={() => {
                      onAnswer(quiz[count].incorrect_answers[1]);
                    }}
                    checked={ans === quiz[count].incorrect_answers[1]}
                  />
                  <span className="option">
                    {quiz?.[count].incorrect_answers[1]}
                  </span>
                </div>
                <div className="opt">
                  <input
                    type="radio"
                    value={quiz?.[count].incorrect_answers[2]}
                    onChange={() => {
                      onAnswer(quiz[count].incorrect_answers[2]);
                    }}
                    checked={ans === quiz[count].incorrect_answers[2]}
                  />
                  <span className="option">
                    {quiz?.[count].incorrect_answers[2]}
                  </span>
                </div>
                <div className="opt">
                  <input
                    type="radio"
                    value={quiz?.[count].incorrect_answers[3]}
                    onChange={() => {
                      onAnswer(quiz[count].incorrect_answers[3]);
                    }}
                    checked={ans === quiz[count].incorrect_answers[3]}
                  />
                  <span className="option">
                    {quiz?.[count].incorrect_answers[3]}
                  </span>
                </div>
              </div>
              <div className="btn-quiz">
                <button
                  onClick={() => {
                    nextQuestion(ans);
                  }}
                >
                  {" "}
                  {count <= 8 ? "Next" : "Finish"}
                </button>
              </div>
            </div>
          </>
        ) : (
          <div>
            <h1>Loading...</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
