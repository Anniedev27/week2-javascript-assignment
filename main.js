import pkg from 'prompt-sync'

const prompt = pkg()




// begining of second ass.
const housePrice = 1000000; // 1 million

const userBudget = prompt("Enter your budget for the house:");
const userPrice = parseFloat(userBudget);

if (userPrice >= 300000 && userPrice < 500000) {
  const downPaymentPercentage = 10;
  const downPayment = (downPaymentPercentage / 100) * userPrice;
  console.log(`Your down payment is $${downPayment.toFixed(2)}`);
} else if (userPrice >= 500000) {
  const downPaymentPercentage = 20;
  const downPayment = (downPaymentPercentage / 100) * userPrice;
  console.log(`Your down payment is $${downPayment.toFixed(2)}`);
} else {
  console.log("Sorry, your budget doesn't meet the criteria for down payment calculation.");
}

// end of second ass.

// third ass
const questions = [
    {
      question: "What continent is Belgium?",
      answer: "Europe"
    },
    {
        question: "Who discovered that the earth revolves around the sun?",
        answer: "Nicolaus Copernicus"
    },
    {
        question: "What is the world's fastest bird?",
        answer: "The Peregrine Falcon"
    },

    {
        question: "Who is the founder of facebook?",
        answer: "Mark Zuckerberg"
    },
    {
      question: "What is the most common surname in the United States?",
      answer: "Smith"
    },
    {
      question: "Aureolin is a shade of what color?",
      answer: "Yellow"
    }
  ];
  
  function startQuiz() {
    let score = 0;
  
    for (let i = 0; i < questions.length; i++) {
      const userAnswer = prompt(questions[i].question);
      
      if (userAnswer === questions[i].answer) {
        console.log("Correct!");
        score++;
      } else {
        console.log("Incorrect. The correct answer is:", questions[i].answer);
      }
    }
  
    console.log("Quiz completed! Your score is:", score, "out of", questions.length);
  }
  
  startQuiz();
  // end of third ass.
  