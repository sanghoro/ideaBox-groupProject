//querySelectors
var saveButton = document.querySelector('.save-idea-button')
var ideaCard = document.querySelector('.idea-card')
var cardH2 = document.querySelector('.idea-card h2')
var cardP = document.querySelector('.idea-card p')
var titleInput = document.querySelector('.title-input')
var bodyInput = document.querySelector('.body-input')
var ideaDisplay = document.querySelector('.idea-display')
var showStarredButton = document.querySelector('.show-starred-button');


//Data Model
var savedIdeas = [];
var favoritedIdeas = [];
var titleInputValue = ''
var bodyInputValue = ''
var showingStarred = false;

//addEventListeners
saveButton.addEventListener('click', saveIdea)
titleInput.addEventListener('input', setTitle)
bodyInput.addEventListener('input', setBody)
ideaDisplay.addEventListener('click', deleteIdea)
showStarredButton.addEventListener('click', toggleStarredIdeas);


//functions
function hide(element) {
    element.classList.add('hidden')
}

function show(element) {
    element.classList.remove('hidden')
}

function createCard(title, body) {
    var card = {
        title: title,
        body: body,
        id: `${Date.now()}`
    }
    return card
}

function createCardElement(card) {
    var cardElement = document.createElement('div');
    cardElement.classList.add('idea-card');
    cardElement.setAttribute('idea-id', card.id);

    cardElement.innerHTML = `
        <div class='card-bar'>
        <img class="star" id="${card.id}" src="assets/star.svg" alt="">
        <img class="delete" src="assets/delete.svg" alt="">    
        </div>
        <h2>${card.title}</h2>
        <p>${card.body}</p>
    `;

    return cardElement;
}

function saveIdea(e) {
    e.preventDefault();
    if (titleInputValue.length && bodyInputValue.length) {
        var isDuplicate = savedIdeas.some(function (idea) {
            return idea.title === titleInputValue && idea.body === bodyInputValue
        })
        if (!isDuplicate) {

            var newCard = createCard(titleInputValue, bodyInputValue)
            savedIdeas.push(newCard)
            var cardElement = createCardElement(newCard)
            ideaDisplay.appendChild(cardElement)
            var star = document.getElementById(`${newCard.id}`)
            star.addEventListener('click', favoriteIdea)
            titleInputValue = '';
            bodyInputValue = '';
            titleInput.value = '';
            bodyInput.value = '';

            saveButton.setAttribute('disabled', true)
        } else {
            alert('Already did that one.')
        }
    }
}

function checkInput() {
    if (titleInputValue.length && bodyInputValue.length) {
        saveButton.removeAttribute('disabled')
    } else {
        saveButton.setAttribute('disabled', true)
    }
}

function setTitle(e) {
    titleInputValue = e.target.value
    checkInput()
}

function setBody(e) {
    bodyInputValue = e.target.value
    checkInput()
}

function deleteIdea(event) {
    var index = event.target.parentElement.parentElement.id
    if (event.target.className === 'delete') {
        event.target.parentElement.parentElement.remove()
        savedIdeas.splice(index, 1)
    }
}

function favoriteIdea(event) {
    var starId = event.target.id
    if (favoritedIdeas.includes(starId)) {
        for (var i = 0; i < favoritedIdeas.length; i++) {
            if (favoritedIdeas[i] === starId) {
                favoritedIdeas.splice([i], 1)
            }
        }
    } else {
        favoritedIdeas.push(starId)
    }
    toggleStar(starId)
}

function toggleStar(imageId) {
    var starImage = document.getElementById(imageId)
    if (favoritedIdeas.includes(imageId)) {
        starImage.src = `assets/star-active.svg`
    } else {
        starImage.src = `assets/star.svg`
    }
}

function toggleStarredIdeas() {
    showingStarred = !showingStarred;
    if (showingStarred) {
        showStarredButton.innerText = 'Show All Ideas';
        displayStarredIdeas();
    } else {
        showStarredButton.innerText = 'Show Starred Ideas';
        displayAllIdeas();
    }
}

function displayStarredIdeas() {
    var allCards = document.querySelectorAll('.idea-card');
    allCards.forEach(function (card) {
        if (favoritedIdeas.includes(card.getAttribute('idea-id'))) {
            show(card);
        } else {
            hide(card);
        }
    });
}

function displayAllIdeas() {
    var allCards = document.querySelectorAll('.idea-card');
    allCards.forEach(function (card) {
        show(card);
    });
}

checkInput();