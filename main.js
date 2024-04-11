//querySelectors
var saveButton = document.querySelector('.save-idea-button')
var ideaCard = document.querySelector('.idea-card')
var cardH2 = document.querySelector('.idea-card h2')
var cardP = document.querySelector('.idea-card p')
var titleInput = document.querySelector('.title-input')
var bodyInput = document.querySelector('.body-input')
var ideaDisplay = document.querySelector('.idea-display')

//variables
var savedIdeas = [];


//addEventListeners
saveButton.addEventListener('click', saveIdea)
titleInput.addEventListener('input', checkInput)
bodyInput.addEventListener('input', checkInput)
ideaDisplay.addEventListener('click', deleteIdea)



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
        <img class="star" src="assets/star.svg" alt="">
        <img class="delete" src="assets/delete.svg" alt="">    
        </div>
        <h2>${card.title}</h2>
        <p>${card.body}</p>
    `;
    return cardElement;
}

function saveIdea(e) {
    e.preventDefault();
    if (titleInput.value && bodyInput.value) {
        var isDuplicate = savedIdeas.some(function (idea) {
            return idea.title === titleInput.value && idea.body === bodyInput.value
        })
        if (!isDuplicate) {

            var newCard = createCard(titleInput.value, bodyInput.value)
            savedIdeas.push(newCard)

            var cardElement = createCardElement(newCard)
            ideaDisplay.appendChild(cardElement)
            titleInput.value = '';
            bodyInput.value = '';

            saveButton.setAttribute('disabled', true)


        } else {
            alert('Already did that one.')
        }
    }
}

function checkInput() {
    if (titleInput.value && bodyInput.value) {
        saveButton.removeAttribute('disabled')
    } else {
        saveButton.setAttribute('disabled', true)
    }
}

function deleteIdea(event) {
    var index = event.target.parentElement.parentElement.id
    if (event.target.className === 'delete') {
        event.target.parentElement.parentElement.remove()
        savedIdeas.splice(index, 1)
    }
} 