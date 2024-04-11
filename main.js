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
        id: Date.now()
    }
    return card
}



function saveIdea(title, body){
   var savedIdea = {
    id: Date.now(),
    title: title, 
    body: body
   }

   ideaCard.innerHTML = ''

   var isDuplicate = savedIdeas.some(function (exisitingIdea) {
    return existingIdea.title === savedIdea.title &&
           existingIdea.body === savedIdea.body
        })
        if (!isDuplicate) {
            savedIdeas.push(savedIdea)
        }
    }
