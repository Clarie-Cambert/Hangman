const wordEl = document.getElementById('word');
const wrongLetters = document.getElementById('wrong-letters');
const btnReplay = document.getElementById('btn-message');
const popup = document.getElementById('popup-content');
const notification = document.getElementById('notification');
const finalMessage = document.getElementById('final-message');
const hangman = document.querySelectorAll('.hangman-part');
const letterKeys = document.querySelectorAll('.key');

const words = [
    'telephone', 'chaussures', 'cheveux', 'universel', 'cinema', 'sport', 'chat', 'chien', 'marvel', 'voldemort', 'ordinateur', 'france', 'fenetre', 'tasse', 'constitution', 'code', 'bretagne', 'marseille', 'toilettes', 'chambre', 'restaurant', 'pomme', 'table', 'coussin', 'eponge', 'superman', 'paris', 'ampoule', 'croissant', 'oeufs', 'baguette', 'application', 'javascript'
];

let selectedWord = words[ Math.floor(Math.random() * words.length) ];

const  goodLettersArray = [];
const  wrongLettersArray = [];

// Afficher le mot caché, lettre par lettre
function showWord() {
    
    wordEl.innerHTML = `
        ${selectedWord
            .split('')
            .map(
                (letter) => `
                    <span id="single-letter">
                        ${goodLettersArray.includes(letter) ? (letter) : (' ') }
                    </span>
                `
            )
            .join(' ')
        }
    `;

    const internalWord = wordEl.innerText.replace(/\n/g, '');

    if(internalWord == selectedWord) {
        finalMessage.innerText = 'Bravo, tu as gagné!';
        popup.style.display = 'flex';
    } 
        
};

// Mauvaises lettres 
function updateWrongLetterElem() {
    // Afficher les mauvaises lettres
    wrongLetters.innerHTML = `
        ${wrongLettersArray.map (
            (letter) => `<span> ${letter} </span>`
        )}
    `
    // Afficher le pendu
    hangman.forEach((part, index) => {
        const error = wrongLettersArray.length;

        if (index < error) {
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    }) 

    // Verifier si perdant
    if (wrongLettersArray.length === hangman.length) {
        finalMessage.innerText = 'Haha, tu as perdu !';
        popup.style.display = 'flex';
    }
}

// Affichage notification
function showNotification() {
    notification.style.display = 'flex';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}


// Event Listener

for (const letterKey of letterKeys) {
    
    letterKey.addEventListener('click', e => {
        
        const letterTarget = e.currentTarget.textContent;
        
        if ( selectedWord.includes( letterTarget )) {
            if( !goodLettersArray.includes( letterTarget )) {
                goodLettersArray.push( letterTarget );
                showWord();
            } else {
                showNotification();
            }
        } else {
            if( !wrongLettersArray.includes( letterTarget )) {
                wrongLettersArray.push( letterTarget );
                updateWrongLetterElem();
            } else {
                showNotification();
            }
        }
    })
}
window.addEventListener('keydown', e => {

    if ( e.which >= 65 && e.which <= 90 ) {

        const letterTarget = e.key;

        if ( selectedWord.includes( letterTarget )) {
            if( !goodLettersArray.includes( letterTarget )) {
                goodLettersArray.push( letterTarget );
                showWord();
            } else {
                showNotification();
            }
        } else {
            if( !wrongLettersArray.includes( letterTarget )) {
                wrongLettersArray.push( letterTarget );
                updateWrongLetterElem();
            } else {
                showNotification();
            }
        }
    }
})

btnReplay.addEventListener('click', () => {
    goodLettersArray.splice(0);
    wrongLettersArray.splice(0);

    selectedWord = words[ Math.floor(Math.random() * words.length) ];
    
    showWord();

    updateWrongLetterElem();

    popup.style.display = 'none';
    
})

showWord();
