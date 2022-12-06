//Create logic for our card 
//const rows = document.getElementsByClassName("row")
const rows = document.querySelectorAll(".row");


//New function takes in the parameter "event" which gets passed when the ondragover callback
const onDragOver = (event) => {
   event.preventDefault(); //Allows to pick up a card and drop it
   console.log("Drag")
}

const onDrop = (event) => {
   event.preventDefault();
   const draggedCardId = event.dataTransfer.getData("id");
   const draggedCard = document.getElementById(draggedCardId);
   event.target.appendChild(draggedCard);
}

rows.forEach((row) => {
   //This is a reference to onDragOver
   row.ondragover = onDragOver; 
   row.ondrop = onDrop;    //ondrop listener
});