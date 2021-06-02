document.addEventListener('DOMContentLoaded', () => {
    // card creation
    const cardArray = [];
    const suits = ['H', 'C', 'S', 'D'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

    for (let i=0; i<suits.length; i++) {
        for (let j=0; j<ranks.length; j++) {
            let card = {
                name: ranks[j]+suits[i],
                rank: ranks[j],
                img: 'static/'+ranks[j]+suits[i]+'.png'
            }    
            cardArray.push(card);
        }
    }

    console.log(cardArray);

    // shuffle deck
    let deck = cardArray
    let count = cardArray.length;
    while (count) {
        deck.push(deck.splice(Math.floor(Math.random()*count),1)[0]);
        count--;
    }

    // ************ARRAYS ARE IDENTICAL!**********
    //      console.log(deck);
    //      console.log(cardArray);
    
    // create game board
    const grid = document.querySelector('.grid')
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];   

    const createBoard = () => {
        for (let i=0;i<cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', cardArray[i].img);
            // set the card ids to the rank of the card
            card.setAttribute('id', cardArray[i].rank);
            // ensure all cards created belong to the card class
            card.setAttribute('class', 'card');
            // give id from 0-cardArray.length
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
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
        var cardId = this.getAttribute('data-id');
        // let cardId = card.getAttribute('id');
        // cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosenId.length === 2) {
            setTimeout(checkMatch, 500);
        }
    }
    createBoard();


})

