const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)




startButton.addEventListener('click',startGame)

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }

  function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  }

  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }

const questions = [
    {
        question:'I’m tall when I’m young, and I’m short when I’m old. What am I?',
        answers:[
            {text:'candle', correct:true},
            {text:'person', correct:false},
            {text:'lamp', correct:false},
            {text:'stick', correct:false}

        ]
    },
    {
        question:'What can you break, even if you never pick it up or touch it?',
        answers:[
            {text:'promise', correct:true},
            {text:'plant', correct:false},
            {text:'stool', correct:false},
            {text:'hair', correct:false}

        ]
    },
    {
        question:'I have branches, but no fruit, trunk or leaves. What am I?',
        answers:[
            {text:'a bank', correct:true},
            {text:'a tree', correct:false},
            {text:'a mirror', correct:false},
            {text:'a playstation 5', correct:false}

        ]
    },
    {
        question:'The more of this there is, the less you see. What is it?',
        answers:[
            {text:'darkness', correct:true},
            {text:'life', correct:false},
            {text:'light', correct:false},
            {text:'power', correct:false}

        ]
    },
    {
        question:'What gets bigger when more is taken away?',
        answers:[
            {text:'personality', correct:true},
            {text:'a hole', correct:false},
            {text:'stress', correct:false},
            {text:'a string', correct:false}

        ]
    }



]