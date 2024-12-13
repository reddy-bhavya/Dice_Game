document.addEventListener("DOMContentLoaded", function () {
    function rollDice() {
        const randomnum1 = Math.floor(Math.random() * 6) + 1;
        const randomnum2 = Math.floor(Math.random() * 6) + 1;

        const randomimage1 = `images/dice${randomnum1}.png`;
        const randomimage2 = `images/dice${randomnum2}.png`;

        // Update the dice images
        const image1 = document.querySelector(".player1 img");
        const image2 = document.querySelector(".player2 img");

        image1.setAttribute("src", randomimage1);
        image2.setAttribute("src", randomimage2);

        // Update the result
        const resultText = document.querySelector("h1");
        if (randomnum1 > randomnum2) {
            resultText.innerText = "Player 1 Wins!";
        } else if (randomnum2 > randomnum1) {
            resultText.innerText = "Player 2 Wins!";
        } else {
            resultText.innerText = "It's a Draw!";
        }
    }

    // Event listener for the Roll Dice button
    document.getElementById("rollDiceButton").addEventListener("click", rollDice);
});
