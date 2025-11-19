export function applyAnswer(currentScore, currentCount, isCorrect){
 const nextCount=currentCount+1;
 const nextScore=isCorrect?currentScore+1:currentScore;
 return {score:nextScore,count:nextCount};
}
export function formatFinalScore(score,count){
 return `Total score: ${score}/${count}`;
}