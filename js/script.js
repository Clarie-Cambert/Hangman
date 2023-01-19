const wordEl = document.getElementById('word');
const wrongLetters = document.getElementById('wrong-letters');
const btnReplay = document.getElementById('btn-message');
const popup = document.getElementsByClassName('popup-content');
const notification = document.getElementById('notification');

const bodyMan = document.querySelectorAll('.body-man');

const words = [
    'telephone', 'chaussures', 'cheveux', 'universel', 'cinema', 'sport', 'chat', 'chien', 'marvel', 'voldemort', 'ordinateur', 'france', 'fenetre', 'tasse', 'constitution', 'code', 'bretagne', 'marseille', 'toilettes', 'chambre', 'restaurant', 'pomme', 'table', 'coussin', 'eponge', 'superman', 'paris', 'ampoule', 'croissant', 'oeufs', 'baguette', 'application', 'javascript'
]

let selectedWord = words[ Math.floor(Math.random() * words.length) ];
console.log(selectedWord);
const  goodLettersArray = ['a', 'b', 'h', 'j'];
const  wrongLettersArray = [''];

// Afficher le mot caché, lettre par lettre
function showWord() {
    
    return wordEl.innerHTML = `
        ${selectedWord
            .split('')
            .map(
                (letter) => `
                    <span id="single-letter">
                        ${goodLettersArray.includes(letter) ? (letter) : ('  ') }
                    </span>
                `
            )
            .join(' ')
        }
    `;
    
};

showWord();