const questions = [
    {
      id: 1,
      q: "q1",
      answers: ["1","1","1","saeed"],
      correctAnswer: "saeed" /*add more key/value if need*/,
    },
    {
      id: 2,
      q: "q2",
      answers: ["2","2","2","saeed"],
      correctAnswer: "saeed" /*add more key/value if need*/,
    },
    {
        id: 3,
        q: "q3",
        answers: ["3","3","3","saeed"],
        correctAnswer: "saeed" /*add more key/value if need*/,
      },
      {
        id: 4,
        q: "q4",
        answers: ["4","4","4","saeed"],
        correctAnswer: "saeed" /*add more key/value if need*/,
      },
      {
        id: 5,
        q: "q5",
        answers: ["5","5","5","saeed"],
        correctAnswer: "saeed" /*add more key/value if need*/,
      },
      {
        id: 6,
        q: "q6",
        answers:["6","6","6","saeed"],
        correctAnswer: "5saeed" /*add more key/value if need*/,
      },
      {
        id: 7,
        q: "q7",
        answers:["7","7","7","saeed"],
        correctAnswer: "saeed" /*add more key/value if need*/,
      },
      {
        id: 8,
        q: "q8",
        answers:["8","8","8","saeed"],
        correctAnswer: "saeed" /*add more key/value if need*/,
      },
      {
        id: 9,
        q: "q9",
        answers:["9","9","9","saeed"],
        correctAnswer: "saeed" /*add more key/value if need*/,
      },
      {
        id: 10,
        q: "q10",
        answers:["10","10","10","saeed"],
        correctAnswer: "saeed" /*add more key/value if need*/,
      },
  ];
  const questionDiv =document.querySelector(".question");
  const answersDiv =document.querySelector('.answers');
  const btnNex = document.querySelector('#btnNext');
  let counter =0;
  
  const randomQuestion =()=>{
    let oneAnswer =true;
    if(counter < 5){
      questionDiv.innerText = '';
      answersDiv.innerText = '';
    
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomElement = questions[randomIndex];
  
    const question = document.createElement('h2');
    question.innerText = randomElement.q;
    questionDiv.append(question);
    randomElement.answers.forEach((Element,ind)=>{
    const answer =document.createElement('button');
    answer.innerText=Element;
    answersDiv.append(answer);
    answer.addEventListener('click', ()=>{
        if(oneAnswer){
        if(answer.innerText ==questions[ind].correctAnswer){
            answer.style.backgroundColor ='green';
            answer.disabled=false;
            oneAnswer=false;
        }
        else{
            answer.style.backgroundColor ='red';
            oneAnswer=false;
        }
    }
    else{
        return;
    }
    })
    });
    questions.splice(randomIndex,1);
    counter++;
}
else{
     questionDiv.innerText = "انتهت الأسئلة!"
     answersDiv.innerText="";
}
  }
  randomQuestion();
  const funnext =()=>{}
 
  btnNex.addEventListener('click',randomQuestion);