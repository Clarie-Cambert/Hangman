const wordEl = document.getElementsByClassName('text');
const wrongLetters = document.getElementById('wrong-letters');
const btnReplay = document.getElementById('btn-message');
const popup = document.getElementsByClassName('popup-content');
const notification = document.getElementById('notification');

const bodyMan = document.querySelectorAll('.body-man');

const words = [
    'telephone', 'chaussures', 'cheveux', 'universel', 'cinema', 'sport', 'chat', 'chien', 'marvel', 'harry potter', 'voldemort', 'ordinateur', 'france', 'fenetre', 'tasse', 'constitution', 'code', 'bretagne', 'marseille', 'toilettes', 'chambre', 'restaurant', 'pomme', 'table', 'coussin', 'eponge', 'superman', 'paris', 'ampoule', 'croissant', 'pain au chocolat', 'oeufs', 'baguette', 'application', 'javascript'
]

let selectedWord = words[ Math.floor(Math.random() * words.length) ];

const  goodLettersArray = [''];
const  wrongLettersArray = [''];

// Afficher le mot caché, lettre par lettre
function showWord() {
    wordEl.innerHTML = `
        ${selectedWord
            .split('')
            .map(
                letter => `
                    <span id="letter">
                        ${goodLettersArray.includes(letter) ? letter : ''}
                    </span>
                `
            )
            .join('')
        }
    `;

};

showWord();