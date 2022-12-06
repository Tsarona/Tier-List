const cards = document.querySelectorAll(".card");
const addCards = document.querySelectorAll('#addCard');

/*Add card logic*/
 
const addCardToBoard = (event) => {
	const card = createCard(); //Once called it will return a new card
	const firstRow = document.querySelector('.row');
	firstRow.appendChild(card);   
} 


addCard.onclick = addCardToBoard; //A callback will be triggered if pressed on the add plus button



/*Card logic*/
const createCard = () => {
	const card = document.createElement('div');
	card.classList.add('card')
	card.setAttribute('draggable', 'true') //Card can be dragged on the entire page

	/*card.id = Date.now();*/
	card.ondragstart = onDragStart;
	card.ondragend = onDragEnd;
	card.onclick = deleteCard;
	//appendImage(card);
	//appendColor();
	return card;
}


const deleteCard = (event) => {
	const willDeleteCard = window.confirm("Do you want to delete card?");
	if(willDeleteCard) {
		event.target.remove();
	}
}

const onDragStart = (event) => {
//Keep track to which card i am dragging
event.dataTransfer.setData("id", event.target.id)//<- Target our "first" id 
setTimeout(() => {
	event.target.style.visibility = "hidden"
}, 50);  //The card delays when you are picking it up

}

const onDragEnd = (event) => {
event.target.style.visibility = "visible"//The card used to disappear whenever we dropped it on the row. Because of our visibiliy = "hidden" property
}	

cards.forEach((card) => {
	card.ondragstart = onDragStart;
	card.ondragend =  onDragEnd;
});

