import React, { createContext, useContext, useState } from "react";


export type Quiz = {
    _id: string,
    category:  string
    type:string,
    difficult: string
    question:string,
    correct_answer:string,
    incorrect_answers: string[], 
}



export type QuizContextType = {
    quiz: [Quiz] | null;
    setQuiz: (quiz: [Quiz]) => void;
}

const QuizContext = createContext<QuizContextType>({ quiz: null, setQuiz: quiz => console.log(quiz) });

export const QuizProvider:React.FC = ({children}) => {
    const [ quiz, setQuiz ] = useState<[Quiz] | null>(null);

    return(
        <QuizContext.Provider value={{ quiz, setQuiz }}>
            {children}
        </QuizContext.Provider>
    );
}

export function useQuiz() {
    return useContext(QuizContext);
  }