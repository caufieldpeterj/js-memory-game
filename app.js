document.addEventListener('DOMContentLoaded', () => {
    // card creation
    const cardArray = [
        {
            name: '2C',
            img: '/static/2C.png'
        },
        {
            name: '2D',
            img: '/static/2D.png'
        },
        {
            name: '',
            img: 'static/____.png'
        },
        {
            name: '',
            img: 'static/____.png'
        },
    ]

    // create game board

    const grid = document.querySelector('.grid')
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    const createBoard = () => {
        for (let i=0;i<cardArray.length; i++) {
            console.log(i);
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
            cards[optionOneId].setAttribute('src', './static/red_back.png');
            cards[optionTwoId].setAttribute('src', './static/red_back.png');
            alert('Sorry, no match');
        }
        cardsChosen = [];
        cardsChosenId = [];
    }
    
    // flip cards

    flipCard = () => {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosenId.length === 2) {
            setTimeout(checkMatch, 500);
        }
    }
    createBoard();


})

