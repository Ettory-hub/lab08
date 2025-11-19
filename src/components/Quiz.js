import React from 'react';
import my_questions from '../model/basic_questions.json';
import { applyAnswer, formatFinalScore } from '../controller/scoreController';
import quizPageStyle from '../QuizPageStyle';
import my_state from './my_state';

class Quiz extends React.Component{
 state={score:0,count:0};

 handleAnswerClick=(isCorrect)=>{
   this.setState(prev=>{
     return applyAnswer(prev.score,prev.count,isCorrect);
   });
   alert(isCorrect?'You are correct!':'Sorry - not correct');
 }

 handleSubmit=()=>{
   const {score,count}=this.state;
   my_state.my_score=score;
   my_state.my_count=count;
   alert(formatFinalScore(score,count));
 }

 render(){
  return(
   <div style={quizPageStyle}>
     <h1>My Questions</h1>
     {my_questions.map(q=>(
      <div key={q.id}>
       <h2>{q.question}</h2>
       {q.answers.map((ans,i)=>(
        <label key={i}>
         <input type="radio" name={q.id} onClick={()=>this.handleAnswerClick(ans.isCorrect)} />
         {ans.answer}
        </label>
       ))}
      </div>
     ))}
     <button onClick={this.handleSubmit}>Done</button>
   </div>
  );
 }
}
export default Quiz;