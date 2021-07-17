import axios from "axios";
import { useEffect, useState } from "react";
import {  useHistory, useParams } from "react-router";
import {useQuiz} from '../../contexts'




const Quiz :React.FC = ()=>{
    
    type Quiz = {
        _id: string,
        category:  string
        type:string,
        difficult: string
        question:string,
        correct_answer:string,
        incorrect_answers: string[], 
    }
    const {quiz,setQuiz} = useQuiz()
    const [ques,setQues] = useState<Quiz>()
    const [count,setCount] = useState(1)
    const history = useHistory()
    // let num :any = JSON.parse(localStorage.getItem('qNumber')) || 0
    // const pageNumber = parseInt(num.qNumber) ? localStorage.getItem('qNumber') : 0
    type Category ={
        category : string
    }
    const { category } =useParams<Category>()

    const shuffleArray= (array:string[])=> {
        for (var i = array.length - 1; i > 0; i--) {
        
            // Generate random number
            var j = Math.floor(Math.random() * (i + 1));
                        
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
            
        return array;
     }

    const getQuiz = async ()=>{
       
        try {
           let quiz = await axios.post('http://localhost:8080/get_quiz_by_category',{ category:category }) 
           setQuiz(quiz.data.data)
        } catch (error) {
            
        }
    }

    const getQuestion =(page:number)=>{
        if(quiz && count<=9){
            setCount((prevCount)=>{
                localStorage.setItem('qNumber',`${prevCount+1}`)
                return prevCount +1
            })
            let quizz =  quiz?.[page]
            let optionArray = quizz.incorrect_answers
            optionArray?.push(quizz.correct_answer)
            quizz.incorrect_answers=shuffleArray(optionArray)
            setQues(quizz)
            
        } else{
            console.log("here")
            history.push('/score')
        }
       
    }
    useEffect(()=>{
        getQuiz()
        //eslint-disable-next-line
    },[])

    return(
        <div>
            {ques ? (<div>
               <p>{ques?.question}</p>
               <div>
                  <span>{ques?.incorrect_answers[0]}</span>
                  <span>{ques?.incorrect_answers[1]}</span>
               </div>
               <div>
               <span>{ques?.incorrect_answers[2]}</span>
               <span>{ques?.incorrect_answers[3]}</span>
               </div>
               <div><button onClick={()=>{getQuestion(count)}}>next</button></div>
           </div> ) : (<div>
               <p>{quiz?.[0].question}</p>
               <div>
                  <span>{quiz?.[0].correct_answer}</span>
                  <span>{quiz?.[0].incorrect_answers[0]}</span>
               </div>
               <div>
               <span>{quiz?.[0].incorrect_answers[1]}</span>
               <span>{quiz?.[0].incorrect_answers[2]}</span>
               </div>
               <div> <button onClick={()=>{getQuestion(count)}}>next</button></div>
           </div>)}
           
        </div>
        
    );

}

export default Quiz