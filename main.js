//querySelectors
var saveButton = document.querySelector('.save-idea-button')
var ideaCard = document.querySelector('.idea-card')
var cardH2 = document.querySelector('.idea-card h2')
var cardP = document.querySelector('.idea-card p')
var titleInput = document.querySelector('.title-input')
var bodyInput = document.querySelector('.body-input')
var ideaDisplay = document.querySelector('.idea-display')
var contentBox = document.querySelector('.contentBox')
var starImage = document.querySelector('.star')

//variables
var savedIdeas = [];
var favoritedIdeas = [];

//addEventListeners
saveButton.addEventListener('click', saveIdea)
titleInput.addEventListener('input', checkInput)
bodyInput.addEventListener('input', checkInput)
ideaDisplay.addEventListener('click', deleteIdea)
contentBox.addEventListener('click', favoriteIdea)
// starImage.addEventListener('click', )

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
        <img class="star" id="star-icon" src="assets/star.svg" alt="">
        <img class="delete" src="assets/delete.svg" alt="">    
        </div>
        <h2>${card.title}</h2>
        <p>${card.body}</p>
    `;
    return cardElement;
}

function saveIdea(e){
    e.preventDefault();
    if (titleInput.value && bodyInput.value){
    var newCard = createCard(titleInput.value, bodyInput.value)
    savedIdeas.push(newCard)

    var cardElement = createCardElement(newCard)
    ideaDisplay.appendChild(cardElement)
    
    titleInput.value = '';
    bodyInput.value = '';

    saveButton.setAttribute('disabled', true)
    // console.log('line68', savedIdeas)
    }

}

function checkInput(){
    if (titleInput.value && bodyInput.value){
        saveButton.removeAttribute('disabled')
    } else {
        saveButton.setAttribute('disabled', true)
    }
}

function deleteIdea(event){
    var index = event.target.parentElement.parentElement.id
    if(event.target.className === 'delete'){
        event.target.parentElement.parentElement.remove()
        savedIdeas.splice(index, 1)
    }
} 
function favoriteIdea(event) {
    event.preventDefault();
    if (event.target.classList.contains('star')){
    var newCard = createCard(titleInput.value, bodyInput.value)

    favoritedIdeas.push(newCard)

    var cardElement = createCardElement(newCard)
    ideaDisplay.appendChild(cardElement)
    
    titleInput.value = '';
    bodyInput.value = '';

    saveButton.setAttribute('disabled', true)
    }

}

// we can use the data available to us, the saved and favorited arrays, to populate the card section using a for loop that iteratively places the card elements in the card display container on the page

// card update function must be invoked:
// when arrays are updated (saving, deleting)
// when the card view is changed (favorited, all)
// possibly when favoriting, only if property is used

// cards will only display three most recent cards

// function favoriteIdea(event){
//     if(event.target.classList.contains('star')){
//         var index = event.target.parentElement.parentElement.getAttribute('idea-id')
        
//         // favoritedIdeas.push()
//         // newImage('star-icon', "assets/star-active.svg")
//         console.log('line97', index)
//         // console.log('line94', favoritedIdeas)
//     }
// }

// function newImage(imageId, newSource) {
//     var starImage = document.querySelector(imageId)
//     starImage.src = newSource
//     }