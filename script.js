$(document).ready(function () {
    const words = [
        { english: "always", ukrainian: "завжди" },
        { english: "never", ukrainian: "ніколи" },
        { english: "sometimes", ukrainian: "іноді" },
        { english: "often", ukrainian: "часто" },
        { english: "rarely", ukrainian: "рідко" },
        { english: "usually", ukrainian: "зазвичай" },
        { english: "hardly", ukrainian: "ледве" },
        { english: "quickly", ukrainian: "швидко" },
        { english: "slowly", ukrainian: "повільно" },
        { english: "happily", ukrainian: "щасливо" },
    ];

    let currentStep = 1;
    let correctCount = 0;
    let incorrectCount = 0;
    let totalSteps = words.length;

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    const shuffledWords = shuffle([...words]);

    function updateUI() {
        $('#word-card').text(shuffledWords[currentStep - 1].english);
        $('#current-step').text(currentStep);
        $('#total-steps').text(totalSteps);
        $('#correct-count').text(correctCount);
        $('#incorrect-count').text(incorrectCount);
        $('#translation-input').val('');
    }

    $('#check-button').on('click', function () {
        const userInput = $('#translation-input').val().trim().toLowerCase();
        const correctAnswer = shuffledWords[currentStep - 1].ukrainian.toLowerCase();

        if (userInput === correctAnswer) {
            correctCount++;
        } else {
            incorrectCount++;
        }

        if (currentStep < totalSteps) {
            currentStep++;
            updateUI();
        } else {
            $('#result-text').text(`Ви завершили! Правильно: ${correctCount}, Неправильно: ${incorrectCount}`);
            $('#result-modal').fadeIn();
        }
    });

    $('#restart-button').on('click', function () {
        currentStep = 1;
        correctCount = 0;
        incorrectCount = 0;
        shuffle(shuffledWords);
        updateUI();
        $('#result-modal').fadeOut();
    });

    updateUI();
});
