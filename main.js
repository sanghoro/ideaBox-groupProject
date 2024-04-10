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


//functions
function hide(element){
    element.classList.add('hidden')
}

function show(element){
    element.classList.remove('hidden')
}

function createCard(title, body){
    var card = {
        title: title,
        body: body,
        id: savedIdeas.length - 1
    }
    return card
}





function saveIdea(e){
    var titleValue = titleInput.value
    var bodyValue = bodyInput.value
    var newCard = createCard(titleInput.value, bodyInput.value)
    savedIdeas.push(newCard)

    var cardDiv = document.createElement('div')
    var cardTitle = document.createElement('h2')
    var cardBody = document.createElement('p')

    cardTitle.textContent = titleValue
    cardBody.textContent = bodyValue

    cardDiv.appendChild(cardTitle)
    cardDiv.appendChild(cardBody)

    ideaDisplay.appendChild(cardDiv)
    
    show(ideaCard)
    e.preventDefault();
}
