document.addEventListener('DOMContentLoadded', () => {
    // card creation
    const cardArray = [
        {
            name: '',
            img: 'static/____.png'
        },
        {
            name: '',
            img: 'static/____.png'
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
    createBoard = () => {
        for (let i=0;i<cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'static/blank.png');
            // give id from 0-cardArray.length
            card.setAttribute('data-id', i);
            // card.addEventListener('click', flipcard)
            grid.appendChild(card);
        }
    }

    // check for matches
    checkMatch = () => {

    }
    
    // flip cards

    flipCard = () => {}
    

})