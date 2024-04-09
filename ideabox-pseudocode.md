# ideabox
### _idea storage - save, search, favorite, delete_

the purpose of this application is to enable simple recording and management of ideas  

the application consists of three main sections:
- input section
- card section
- sidebar

### input section  
___
features three interactive elements to reference with `querySelector()` -
- title text entry field
- body text entry field
- save button

#### text entry fields  
display intended input to the left of each text field ('title' and 'body', accordingly)  
change pointer to a cursor when user hovers over fields  

_idea: `textarea` in HTML for the body field might enable it to dynamically change size should a user input enough text to exceed viewable space in text field_

#### save button - logic and styling
 
 `querySelector()` needed for referencing button element in the DOM  
clicking button will trigger functions that:
- add _unique_ idea object to savedIdeas array
- display newly entered idea card in card section below
- display newly created card in the card section
- clear text fields of any saved input _upon confirmed save_<ul><li>do not clear on cancel<li>do not clear when attempting to save nonunique idea</ul>

`var savedIdeas = []`  
an array, savedIdeas, will store the saved ideas  
the array will initially hold no values

save button should be disabled unless both fields contain input  
the disabled state of the button should be communicated to the user through:
- a faded, low contrast appearance
- no pointer change when hovering mouse over button

### sidebar  
___
features two interactive elements:
- filter button
- live search bar
#### filter button
- button text reads 'show starred ideas' by default, as default page state is unfiltered
- clicking once filters the displayed ideas, showing only starred ideas
- button text changes to 'show all ideas' button when clicked/displaying starred ideas
#### live search - filters displayed idea cards
- updates in real time as user enters a search query, filtering the ideas displayed to the right to match
- update after each keypress? short buffer for performance  
### card section  
___
the bottom right portion of the application  
consists of three cards displayed at a time, most recent on the left  
- off-white background (slightly gray)
- white card background
- dark blue card header
- black content text
#### card element
each card consists of two sections:
- top bar<ul><li>favorite button<li>delete button</ul>
- content<ul><li>title - centered in card, header-like styling<li>body - centered in card, body styling</ul>

`justify-content: space-between;`  
possible applications include the cards in the card section container and the elements in the top bar on each card

## data types & functions

### idea objects
an idea object with the following properties will be created on save:
- title: the title of the idea (string)
- body: the body of the idea text (string)
- id: an id for managing data (number)

the assigned id value should reflect: 
- the order in which the ideas were saved (`id = n-1` where n is idea number)
- the index position within the array

```
function saveIdea(titleInput, bodyInput) {
	idea = {
	title: titleInput,
	body: bodyInput,
	id: savedIdeas.length-1
	}
return idea
}
```

#### when an idea is saved (i.e. saveIdea function is invoked):  
- a card element will display the newly saved idea in the space below the input section
- idea cards will fit into a grid as more cards from saved ideas populate
- grid is only three cards wide

_note: the layout of the cards section when upwards of three cards are saved is yet to be determined by the group_

## extras
- only add unique ideas (iterate through array and compare contents against newly created idea)
- using localStorage (store state and/or values locally to preserve stored ideas on reload)
- recently deleted section (deleted ideas can be pushed to a deletedIdeas array and revealed to user with a button or 'filter')

### confirm to delete saved ideas
- dialog window/popup asking 'are you sure you'd like to delete this idea?'
- two interactive buttons, 'confirm' and 'cancel'  
- window behind popup darkens; returns to normal upon either selection  

#### 'confirm' proceeds with deleting the idea:
- pushes idea object to the deletedIdeas array
- removes idea object from the savedIdeas array

#### 'cancel' aborts the process of deleting the idea:
- closes dialog popup, returning to previous state
- leaves the savedIdeas array unaltered

## extra extras
- add date to idea cards using `Date.now()`



