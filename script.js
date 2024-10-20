
const votingButtons = document.querySelectorAll('#voting button');
let votes = {
    player1: 0,
    player2: 0,
    player3: 0, 
    player4: 0
};

votingButtons.forEach(button => {
    button.addEventListener('click', () => {
        const player = button.getAttribute('data-player');
        if (player in votes) {
            votes[player]++;
            updateVoteResult();
        }
    });
});

function updateVoteResult() {
    document.getElementById('vote-result').innerText = 
        `Player 1: ${votes.player1} votes | Player 2: ${votes.player2} votes | Player 3: ${votes.player3} votes | Player 4: ${votes.player4} votes`;
}

updateVoteResult();


var map = L.map('map').setView([20, 0], 2); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 2,  
    noWrap: true, 
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var players = [
    {
        name: "Sachin Tendulkar",
        coords: [19.0760, 72.8777], 
        achievements: "Most runs in ODIs and Test matches."
    },
    {
        name: "Sir Donald Bradman",
        coords: [-34.9285, 138.6007], 
        achievements: "Highest Test batting average in history."
    },
    {
        name: "Virat Kohli",
        coords: [28.6139, 77.2090], 
        achievements: "Fastest century in ODIs."
    },
    {
        name: "MS Dhoni",
        coords: [23.0330, 72.5850], 
        achievements: "Led India to T20 and ODI World Cup victories."
    },
    {
        name: "Ricky Ponting",
        coords: [-35.2809, 149.1300], 
        achievements: "Most World Cup wins as a captain."
    },
    {
        name: "Kumar Sangakkara",
        coords: [7.2906, 80.6337], 
        achievements: "Second highest run-scorer in ODI history."
    },
    {
        name: "AB de Villiers",
        coords: [-25.7479, 28.2293], 
        achievements: "Fastest century in ODIs."
    },
    {
        name: "Brian Lara",
        coords: [10.6667, -61.5189], 
        achievements: "Highest individual score in Test cricket (400*)."
    },
    {
        name: "James Anderson",
        coords: [53.7894, -2.2405], 
        achievements: "Most wickets for a fast bowler in Test cricket."
    }
];


players.forEach(function(player) {
    var marker = L.marker(player.coords).addTo(map);
    marker.bindPopup("<b>" + player.name + "</b><br>" + player.achievements);
});


document.getElementById('fan-story-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const story = document.getElementById('story').value;
    if (story) {
        alert('Thank you for your submission!');
        document.getElementById('story').value = '';  
    }
});



const scrollToTopButton = document.getElementById('scrollToTop');
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});


const scrollToBottomButton = document.getElementById('scrollToBottom');
scrollToBottomButton.addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight, 
        behavior: 'smooth' 
    });
});
