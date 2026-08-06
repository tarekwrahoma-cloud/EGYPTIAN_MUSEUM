document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
            question: "How much does the Golden Mask of Tutankhamun weigh approx?",
            options: ["5.5 kg", "10.23 kg", "15.8 kg", "20.1 kg"],
            answer: 1
        },
        {
            question: "In which Dynasty was King Tutankhamun?",
            options: ["12th Dynasty", "18th Dynasty", "19th Dynasty", "20th Dynasty"],
            answer: 1
        },
        {
            question: "Where was Tutankhamun's tomb found?",
            options: ["Giza Pyramids", "Valley of the Kings", "Karnak Temple", "Abu Simbel"],
            answer: 1
        },
        {
            question: "Which material was primary in the mask of Tutankhamun?",
            options: ["Solid Silver", "Bronze", "Solid Gold", "Copper"],
            answer: 2
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    // العناصر
    const startBox = document.getElementById("startBox");
    const quizBox = document.getElementById("quizBox");
    const resultBox = document.getElementById("resultBox");
    const startQuizBtn = document.getElementById("startQuizBtn");
    
    const questionText = document.getElementById("questionText");
    const answersContainer = document.getElementById("answersContainer");
    const questionCounter = document.getElementById("questionCounter");
    const progressBar = document.getElementById("progressBar");
    const finalScore = document.getElementById("finalScore");
    const totalQuestions = document.getElementById("totalQuestions");
    const feedbackMessage = document.getElementById("feedbackMessage");
    const restartBtn = document.getElementById("restartBtn");

   // عند الضغط على زر Start Quiz
if (startQuizBtn) {
    startQuizBtn.addEventListener("click", function () {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));

        // التحقق من تسجيل الدخول
        if (!currentUser || !currentUser.name) {
            const authModal = new bootstrap.Modal(document.getElementById('authModal'));
            authModal.show();
            return;
        }

        startBox.classList.add("d-none");
        quizBox.classList.remove("d-none");
        loadQuestion();
    });
}

    function loadQuestion() {
        const q = questions[currentQuestionIndex];
        questionText.textContent = q.question;
        questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
        progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
        
        answersContainer.innerHTML = "";
        q.options.forEach((opt, idx) => {
            const btn = document.createElement("button");
            btn.className = "btn answer-btn w-100";
            btn.textContent = opt;
            btn.onclick = () => selectAnswer(idx, btn);
            answersContainer.appendChild(btn);
        });
    }

    function selectAnswer(selectedIndex, selectedBtn) {
        const correctIndex = questions[currentQuestionIndex].answer;
        const allButtons = answersContainer.querySelectorAll(".answer-btn");

        allButtons.forEach(btn => btn.disabled = true);

        if (selectedIndex === correctIndex) {
            selectedBtn.classList.add("correct");
            score++;
        } else {
            selectedBtn.classList.add("wrong");
            allButtons[correctIndex].classList.add("correct");
        }

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
            } else {
                showResults();
            }
        }, 1200);
    }

    function showResults() {
        quizBox.classList.add("d-none");
        resultBox.classList.remove("d-none");
        finalScore.textContent = score;
        totalQuestions.textContent = questions.length;

        if (score === questions.length) {
            feedbackMessage.textContent = "Excellent! You are a true Pharaohs expert!";
        } else if (score >= questions.length / 2) {
            feedbackMessage.textContent = "Good job! You know a lot about Egyptian history.";
        } else {
            feedbackMessage.textContent = "Keep learning and try again!";
        }
    }

    if (restartBtn) {
        restartBtn.addEventListener("click", () => {
            currentQuestionIndex = 0;
            score = 0;
            resultBox.classList.add("d-none");
            quizBox.classList.remove("d-none");
            loadQuestion();
        });
    }
});