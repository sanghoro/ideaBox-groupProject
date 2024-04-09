//querySelectors
var saveButton = document.querySelector('.save-idea-button')
var ideaCard = document.querySelector('.idea-card')
var cardH2 = document.querySelector('.idea-card h2')
var cardP = document.querySelector('.idea-card p')
var titleInput = document.querySelector('.title-input')
var bodyInput = document.querySelector('.body-input')

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

var newCard = createCard(titleInput.value, bodyInput.value)



function saveIdea(){
    var titleValue = titleInput.value
    var bodyValue = bodyInput.value
    console.log('titleInputValue', titleInput.value)
    console.log('bodyInputValue', bodyInput.value)
    savedIdeas.push(newCard)
    console.log('line28', newCard)
    // ideaCard.innerHTML = ` 
    // <h2 class='card-title'>${newCard.title}</h2> 
    // <p class='card-body'>${newCard.body}</p>
    // `
    cardH2.textContent = titleValue
    cardP.textContent = bodyValue  
}

