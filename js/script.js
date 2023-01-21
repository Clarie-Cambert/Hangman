const wordEl = document.getElementById('word');
const wrongLetters = document.getElementById('wrong-letters');
const btnReplay = document.getElementById('btn-message');
const popup = document.getElementById('popup-content');
const notification = document.getElementById('notification');
const finalMessage = document.getElementById('final-message');


const bodyMan = document.querySelectorAll('.body-man');

const words = [
    'telephone', 'chaussures', 'cheveux', 'universel', 'cinema', 'sport', 'chat', 'chien', 'marvel', 'voldemort', 'ordinateur', 'france', 'fenetre', 'tasse', 'constitution', 'code', 'bretagne', 'marseille', 'toilettes', 'chambre', 'restaurant', 'pomme', 'table', 'coussin', 'eponge', 'superman', 'paris', 'ampoule', 'croissant', 'oeufs', 'baguette', 'application', 'javascript'
]

let selectedWord = words[ Math.floor(Math.random() * words.length) ];
console.log(selectedWord);
const  goodLettersArray = [''];
const  wrongLettersArray = [''];

// Afficher le mot caché, lettre par lettre
function showWord() {
    
    wordEl.innerHTML = `
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
    const internalWord = wordEl.innerText.replace(/\n/g, '');

    console.log(internalWord);
    console.log(selectedWord);

    if(internalWord === selectedWord) {
        finalMessage.innerText = 'Bravo, tu as gagné!';
        popup.style.display = 'flex';
    } 
        
};

// Mauvaises lettres 
function updateWrongLetterElem(params) {
    // Afficher les mauvaises lettres
    wrongLetters.innerHTML = `
        ${wrongLettersArray.map (
            (letter) => `<span>${(letter)}</span>
        `)}
    `
    // Afficher le bonhomme

    // Verifier si perdant
}

// Affichage notification
function showNotification() {
    notification.classList.add('on')
    setTimeout(() => {
        notification.classList.remove('on')
    }, 2000)
}

// Event Listener
window.addEventListener('keydown', e => {
    if ( e.keyCode >= 65 && e.keyCode <= 90 ) {
        const letterTarget = e.key;
        // console.log(letterTarget);
        if ( selectedWord.includes( letterTarget )) {
            if( !goodLettersArray.includes( letterTarget )) {
                goodLettersArray.push( letterTarget );
                showWord();
            } else {
                showNotification();
            }
        } else {
            if( !wrongLettersArray.includes( letterTarget )) {
                goodLettersArray.push( letterTarget );
                updateWrongLetterElem();
            } else {
                showNotification();
            }
        }
    }
})

showWord();