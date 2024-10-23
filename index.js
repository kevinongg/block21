// step 1: Fetch events
// assign a variable to the api
// const API = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-FTB-ET-WEB-FT/events`
// console.log(API)

// use a function to fetch events and call it later for it to display
const fetchEvents = async () => {
  // call the events api
  const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-FTB-ET-WEB-FT/events`);
  const events = await response.json();
  console.log(events.name)
    
}

fetchEvents()

















// step 3: add new party when submit button is clicked 

// grab the form
const form = document.querySelector(`form`)
// add event listener to form when it is submitted
form.addEventListener(`submit`, async (event) => {
  //add event.preventDefault()
  event.preventDefault();
  // grab the name input
  const nameInput = document.querySelector(`#event-name`).value
  // grab the date input
  const dateInput = document.querySelector(`#event-date`).value
  // grab the time input
  const timeInput = document.querySelector(`#event-time`).value
  // grab the location input
  const locationInput = document.querySelector(`#event-location`).value
  // grab the description input
  const descriptionInput = document.querySelector(`#event-description`).value
  // call the API with the corresponding value https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-FTB-ET-WEB-FT/events
  const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-FTB-ET-WEB-FT/events`);
  const eventsData = await response.json();
  // console.log(eventsData)


  // go through the events
  // creat a new array with just the names of the events
  const eventsNames = eventsData.name.map((eventsName) => {
    return eventsName.name;
  })
  // create a new li
  const nameLI = document.createElement(`li`)  
  // put the name information in the li
  nameLI.innerHTML = `<h3>${eventsName.name}</h3>`

})

// // get the value from the input
// const nameInputValue = nameInput.value


// const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
