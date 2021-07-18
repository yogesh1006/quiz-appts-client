import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useQuiz } from '../../contexts'
import './Quiz.css'



const Quiz: React.FC = () => {

    const { quiz, setQuiz } = useQuiz()
    const [count, setCount] = useState(0)
    const [score, setScore] = useState(0)
    const [ans, setAns] = useState<string>('wrong')

    const history = useHistory()
    type Category = {
        category: string
    }
    const { category } = useParams<Category>()



    const getQuiz = async () => {

        try {
            let quiz = await axios.post('http://localhost:8080/get_quiz_by_category', { category: category })
            setQuiz(quiz.data.data)
        } catch (error) {

        }
    }


    const nextQuestion = (ans:string | undefined) => {
        if(ans && quiz && count<=8){
            if(quiz[count].correct_answer === ans){
                setScore((prevScore)=>prevScore + 1)
            }
            setCount((prevCount) => prevCount + 1)
        }  else{
            history.push(`/score/${score}`)
        }
        
    }
    const onAnswer = (selectedAns: string) => {
        setAns(selectedAns)
    }
    useEffect(() => {
        getQuiz()
        //eslint-disable-next-line
    }, [])

    return (
        <div className="container">
          
            {quiz ? (
                <div>
                    <div>Score:{score}</div>
                    <div className="ques"><p><span>Q{count + 1}.</span>{quiz?.[count].question}</p></div>
                    <div>
                        <input  type="radio"  value={quiz?.[count].incorrect_answers[0]} onChange={() => { onAnswer( quiz[count].incorrect_answers[0] ) }} checked = { ans===  quiz[count].incorrect_answers[0]} />
                        <span className="option">{quiz?.[count].incorrect_answers[0]}</span>
                        <input type="radio"    value={quiz?.[count].incorrect_answers[1]} onChange={() => { onAnswer( quiz[count].incorrect_answers[1] ) }} checked = { ans===  quiz[count].incorrect_answers[1]} />
                        <span className="option">{quiz?.[count].incorrect_answers[1]}</span>
                    </div>
                    <div>
                        <input type="radio" value={quiz?.[count].incorrect_answers[2]} onChange={() => { onAnswer( quiz[count].incorrect_answers[2] ) }} checked = { ans===  quiz[count].incorrect_answers[2]} />
                        <span className="option">{quiz?.[count].incorrect_answers[2]}</span>
                        <input type="radio" value={quiz?.[count].incorrect_answers[3]} onChange={() => { onAnswer( quiz[count].incorrect_answers[3] ) }} checked = { ans===  quiz[count].incorrect_answers[3]} />
                        <span className="option">{quiz?.[count].incorrect_answers[3]}</span>
                    </div>
                    <div> <button onClick={() => { nextQuestion(ans) }}>next</button></div>
                </div>
            ) : ('')}


        </div>

    );

}

export default Quiz