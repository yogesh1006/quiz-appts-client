import axios from 'axios'

console.log("dfgh");

export type Question = [{
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
  }];

const category : string = "Sports";



export  const fetchQuizQuestions = async () :Promise<Question[]>=>{
    console.log("fghgfd");
    
    const endpoint = `http://localhost:8080/get_quiz_by_category`;
    const res = await axios.post(endpoint,{category: category});
    console.log(res);
    return res.data.data
    
}

// fetchQuizQuestions()
