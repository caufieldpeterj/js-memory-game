document.addEventListener('DOMContentLoaded', () => {
    // card creation
    const cardArray = [];
    const suits = ['H', 'C', 'S', 'D'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

    for (let i=0; i<suits.length; i++) {
        for (let j=0; j<ranks.length; j++) {
            let card = ranks[j]+suits[i];
            cardArray.push(card);
        }
    }
    console.log(cardArray);

    // create game board

    const grid = document.querySelector('.grid')
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    const createBoard = () => {
        for (let i=0;i<cardArray.length; i++) {
            // console.log(i);
            let card = document.createElement('img');
            card.setAttribute('src', 'static/red_back.png');
            card.setAttribute('id', 'card');
            
            // give id from 0-cardArray.length
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard)
            grid.appendChild(card);
        }
    }

    // check for matches
    const checkMatch = () => {
        let cards = document.querySelector('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('Match!');
            cards[optionOneId].setAttribute('src', 'static/blue_back.png');
            cards[optionTwoId].setAttribute('src', 'static/blue_back.png');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'static/red_back.png');
            cards[optionTwoId].setAttribute('src', 'static/red_back.png');
            alert('Sorry, no match');
        }
        cardsChosen = [];
        cardsChosenId = [];
    }
    
    // flip cards

    flipCard = () => {
        console.log('card should flip now!')
        
        let card = document.getElementById('card');
        let cardAttributes = card.getAttribute('data-id');
        console.log(cardAttributes);
        // let cardId = card.getAttribute('id');

        // console.log('Card ID #: '+cardId);

        // cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosenId.length === 2) {
            setTimeout(checkMatch, 500);
        }
    }
    createBoard();


})

