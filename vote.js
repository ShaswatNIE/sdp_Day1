function vote() {
    var name = document.getElementById('name').value.trim();
    var age = parseInt(document.getElementById('age').value);
    var co = document.getElementById('cont').value.trim().toLowerCase();
    var resultElement = document.getElementById('result');
    var partySection = document.getElementById('partySection');
    var winnerSection = document.getElementById('winnerSection');

    // Reset winner display on re-check
    winnerSection.style.display = 'none';

    if (age >= 18 && co === 'india') {
        resultElement.style.color = 'green';
        resultElement.textContent = `Hello ${name}, you are eligible to vote! Select your party below.`;
        partySection.style.display = 'block';
    } else {
        resultElement.style.color = 'red';
        resultElement.textContent = `Sorry ${name}, you are not eligible to vote.`;
        partySection.style.display = 'none';
    }
}

function castVote(partyName, logoUrl) {
    // Hide party selection section
    document.getElementById('partySection').style.display = 'none';
    
    // Clear status text
    document.getElementById('result').textContent = 'Voting completed!';

    // Dynamically display whatever candidate was selected by the user
    var winnerSection = document.getElementById('winnerSection');
    var winnerText = document.getElementById('winnerText');
    var winnerLogo = document.getElementById('winnerLogo');

    winnerText.textContent = `🎉 WINNER: ${partyName} HAS WON THE ELECTION! 🎉`;
    winnerLogo.src = logoUrl;
    
    winnerSection.style.display = 'block';
}