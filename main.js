const questions = [
  {
    id: 1,
    q: "What does HTML stand for?",
    answers: [
      "HighText Machine Language",
      "HyperText and Links Markup Language",
      "HyperText Markup Language",
      "None of these"
    ],
    correctAnswer: "HyperText Markup Language"
  },
  {
    id: 2,
    q: "Which tag is used to create a hyperlink in HTML?",
    answers: ["<a>", "<link>", "<href>", "<hyper>"],
    correctAnswer: "<a>",
  },
  {
    id: 3,
    q: "Which tag is used to display an image on a webpage?",
    answers: ["<img>", "<image>", "<pic>", "<src>"],
    correctAnswer: "<img>",
  },
  {
    id: 4,
    q: "Which HTML tag is used to define a paragraph?",
    answers: ["<para>", "<p>", "<pg>", "<text>"],
    correctAnswer: "<p>",
  },
  {
    id: 5,
    q: "How do you insert a line break in HTML?",
    answers: ["<lb>", "<break>", "<br>", "<line>"],
    correctAnswer: "<br>"
  },
  {
    id: 6,
    q: "Which attribute is used in HTML to define inline styles?",
    answers: ["styles", "font", "class", "style"],
    correctAnswer: "style"
  },
  {
    id: 7,
    q: "What is the correct HTML tag for the largest heading?",
    answers: ["<heading>", "<h6>", "<head>", "<h1>"],
    correctAnswer: "<h1>"
  },
  {
    id: 8,
    q: "Which tag is used to create an unordered list in HTML?",
    answers: ["<ul>", "<ol>", "<li>", "<list>"],
    correctAnswer: "<ul>"
  },
  {
    id: 9,
    q: "Which of the following is the correct way to start an HTML document?",
    answers: ["<html>", "<!HTML>", "<!DOCTYPE html>", "<html start>"],
    correctAnswer: "<!DOCTYPE html>"
  },
  {
    id: 10,
    q: "Which tag is used to create a table row in HTML?",
    answers: ["<table>", "<tr>", "<td>", "<row>"],
    correctAnswer: "<tr>"
  }
];
  const questionDiv =document.querySelector(".question");
  const answersDiv =document.querySelector('.answers');
  const pagesDiv = document.querySelector("#pages");
  const btnNex = document.querySelector('#btnNext');
  const addscoure = document.createElement('h2');
  const btnStart =document.querySelector('#startBtn');
  const inputName =document.createElement('input');
  const inpNameDiv = document.querySelector(".inpName");
  const labelName= document.createElement('label');
  const countainerDiv =document.querySelector('.countainer');
  const welcomeDiv = document.querySelector('.wlcomePage');
  const nameDiv =document.querySelector('#name');
  const btnBack = document.querySelector('#btnHeader');
  const btnMusic = document.querySelector('#btnMusic');
  const audioMusic =document.querySelector('#myAudio');
  const finshedDiv =document.querySelector('.finished');
  const congDiv = document.querySelector('#cong');
  const labeltitle = document.createElement('h1');
  const labelEnd = document.createElement('h2');
  const yourscourDiv = document.querySelector('#yourscour');
  const labelscoure =document.createElement('label');
  
  labelEnd.style.color="white";
  labeltitle.style.color ="green";
  labeltitle.style.fontSize = "70px"
  congDiv.append(labeltitle);
  congDiv.append(labelEnd);
  
  labelscoure.style.color ="white"
  labelscoure.style.fontSize = "20px"
  labelscoure.style.fontWeight ="bold";
  yourscourDiv.append(labelscoure);
  let counter =0;
  let goodAnswer=0;
  
  inputName.placeholder ="Please Enter Your Name";
  inputName.style.height ="30px";
  inpNameDiv.append(inputName);
  nameDiv.append(labelName);
 
 const funBack =()=>{
  countainerDiv.style.display= "none";
   welcomeDiv.style.display="flex";
  inputName.value='';
  audioMusic.pause();


 }
 
 const funMusic = ()=>{
  if(audioMusic.paused){
    audioMusic.play();
    btnMusic.innerText='Music On';

  }
  else{
    audioMusic.pause();
    btnMusic.innerText='Music off';
  }
 }
 btnMusic.addEventListener('click',funMusic);
 btnBack.addEventListener('click',funBack)
  const startGame =()=>{
   countainerDiv.style.display= "grid";
   welcomeDiv.style.display="none";
   labelName.innerText = "Player Name : " + inputName.value;
   console.log(inputName.value)
   audioMusic.play();
   funClean();
   
   randomQuestion();
  }
  btnStart.addEventListener('click',startGame);

  let isAnswer =true;
  const randomQuestion =()=>{
      let isAnswer =false;
    let oneAnswer =true;
    if(counter < 5){
      questionDiv.innerText = '';
      answersDiv.innerText = '';
    
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomElement = questions[randomIndex];
    
    const x =randomIndex;
    const question = document.createElement('h2');
    question.innerText = randomElement.q;
    questionDiv.append(question);
    randomElement.answers.forEach((Element,ind)=>{
    const answer =document.createElement('button');
    answer.innerText=Element;
    answersDiv.append(answer);
    addscoure.innerText = goodAnswer +" OF 5";
    answer.addEventListener('click', (e)=>{
      console.log(e.target.innerText);
        if(oneAnswer){
        if(e.target.innerText == randomElement.correctAnswer){
            answer.style.backgroundColor ='green';
            goodAnswer ++;
            oneAnswer=false;
            isAnswer =true;
            
            addscoure.innerText = goodAnswer +" OF 5";
            
        }
        else{
            answer.style.backgroundColor ='red';
            console.log(answer.innerText)
            console.log(questions[0].correctAnswer)
            console.log(x);
            oneAnswer=false;
            isAnswer =true;
        }
       
    }
    else{
        return;
    }
    })
    });
    
   
    pagesDiv.append(addscoure);
    questions.splice(randomIndex,1);
    counter++;
}
else{
  finshedDiv.style.display="flex";
  countainerDiv.style.display= "none";
  if(goodAnswer>2){
    labeltitle.innerText = "congratulations"
    labelEnd.innerText = "Well done! You nailed the exam — so proud of your achievement!"
    labeltitle.style.color = "green"
  }
  else{
    labeltitle.innerText = "Sorry"
    labeltitle.style.color = "red"
    labelEnd.innerText = "You have failed the exam.\n Please review the material thoroughly and retake the test"
  }
  labelscoure.innerText = "Your Scour :"+ goodAnswer + " / " +"5";

}
funClean=()=>{
  counter=0;
 goodAnswer=0;
}
  }
  randomQuestion();
  const funnext =()=>{}
  if(isAnswer){
    isAnswer=false;
    btnNex.addEventListener('click',randomQuestion);
    
     }

