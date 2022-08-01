const quizData = [
    {
        question: "1. Kata baku dari 'Atheis' yaitu?",
        a: "Ateish",
        b: "Atheish",
        c: "Ateis",
        d: "Atheis",
        correct: "c",
    },

    {
        question: "2. Kata baku dari 'Coklat' yaitu?",
        a: "Cokelat",
        b: "Choklat",
        c: "Chokelat",
        d: "Coklate",
        correct: "a",  
    },

    {
        question: "3. Kata baku dari 'Aktifitas' yaitu?",
        a: "Aktifitas",
        b: "aktivitas",
        c: "Aktiv vitas",
        d: "Aktivitas",
        correct: "d",
    },

    {
        question: "4. Kata baku dari 'Alaram' yaitu?",
        a: "Allaram",
        b: "Alarm",
        c: "Alaram",
        d: "alarm",
        correct: "b",
    },

    {
        question: "5. Kata baku dari 'Amandemen' yaitu?",
        a: "Amendemen",
        b: "Amindemen",
        c: "Amandemin",
        d: "Amendamen",
        correct: "a",
    },

    {
        question: "6. Kata baku dari 'Astronot' yaitu?",
        a: "Asteronot",
        b: "Astronout",
        c: "Astrounout",
        d: "Astrounot",
        correct: "b",
    },

    {
        question: "7. Kata baku dari 'Frekwensi' yaitu?",
        a: "Frekuensi",
        b: "Ferkuensi",
        c: "Frekwensi",
        d: "Ferkwensi",
        correct: "a",
    },

    {
         question: "8. Kata baku dari 'Analisa' yaitu?",
         a: "analisis",
         b: "Anallisa",
         c: "Anallisis",
         d: "Analisis",
         correct: "d",
    },

    {
        question: "9. Kata baku dari 'Abjat' yaitu?",
        a: "abjad",
        b: "Abejat",
        c: "Abjad",
        d: "Abejad",
        correct: "c",
    },

    {
        question: "10. Kata baku dari 'Apotik' yaitu?",
        a: "Apotek",
        b: "apotik",
        c: "Apoteak",
        d: "apotek",
        correct: "a",
    },

];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const sumbitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


sumbitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>Kamu sudah menjawab ${score}/${quizData.length} jawaban yang benar</h2> 
            
            <button onclick="location.reload()">Ayo! Coba lagi</button> 
            `
        }
    }

})