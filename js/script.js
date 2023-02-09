const wordEl = document.getElementById('word');
const wrongLetters = document.getElementById('wrong-letters');
const btnReplay = document.getElementById('btn-message');
const popup = document.getElementById('popup-content');
const notification = document.getElementById('notification');
const finalMessage = document.getElementById('final-message');
const hangman = document.querySelectorAll('.hangman-part');
const letterKeys = document.querySelectorAll('.key');

const words = [
    'TELEPHONE', 'CHAUSSURES', 'CHEVEUX', 'UNIVERSEL', 'CINEMA', 'SPORT', 'CHAT', 'CHIEN', 'MARVEL', 'VOLDEMORT', 'ORDINATEUR', 'FRANCE', 'FENETRE', 'TASSE', 'CONSTITUTION', 'CODE', 'BRETAGNE', 'MARSEILLE', 'TOILETTES', 'CHAMBRE', 'RESTAURANT', 'POMME', 'TABLE', 'COUSSIN', 'EPONGE', 'SUPERMAN', 'PARIS', 'AMPOULE', 'CROISSANT', 'OEUFS', 'BAGUETTE', 'APPLICATION', 'JAVASCRIPT'
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

    console.log(internalWord);
    console.log(selectedWord);

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
    notification.classList.add('on')
    setTimeout(() => {
        notification.classList.remove('on')
    }, 2000)
}


// Event Listener
window.addEventListener('keydown', e => {

    if ( e.keyCode >= 65 && e.keyCode <= 90 ) {

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

btnReplay.addEventListener('click', () => {
    goodLettersArray.splice(0);
    wrongLettersArray.splice(0);

    selectedWord = words[ Math.floor(Math.random() * words.length) ];
    
    showWord();

    updateWrongLetterElem();

    popup.style.display = 'none';
    
})

showWord();