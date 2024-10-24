// step 1: FETCH EVENTS
// use a function to fetch events and call it later for it to display
const fetchEvents = async () => {
  // call the events api
  const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-FTB-ET-WEB-FT/events`);
  const responseJson = await response.json();
  const events = responseJson.data;
  return events;
  // console.log(events);
};

// step 2: DISPLAY EVENTS
// use a function to display events
const displayEvents = async (events) => {
  // create a variable to link fetchEvents function 
  const eventsList = await fetchEvents();
  // console.log(eventsList);

  // create an li for each name, date, time, location, description
  const eventListLIs = eventsList.map((event) => {
    return `<li>
      Name:${event.name}<br> 
      Date:${event.date}<br> 
      Time:${event.time}<br> 
      Location:${event.location}<br> 
      Description:${event.description}
      </li>`;
  });

  // grab the ol
  const OL = document.querySelector(`#event-list`);
  // append the li to the ul using .join to get rid of the commas
  OL.innerHTML = eventListLIs.join(``);
}
displayEvents()


// step 3: add new party when submit button is clicked 
// grab the form
const form = document.querySelector(`form`)
// add event listener to form when it is submitted
form.addEventListener(`submit`, (event) => {
  //add event.preventDefault()
  event.preventDefault();
  // grab all inputs from form using an object
  const userInputEvent = {
    name: document.querySelector(`#event-name`).value,
    date: document.querySelector(`#event-date`).value,
    time: document.querySelector(`#event-time`).value,
    location: document.querySelector(`#event-location`).value,
    description: document.querySelector(`#event-description`).value
  };

  // step 4: add new inputted event to the displayed list
  // grab the ol
  const OL = document.querySelector(`#event-list`)
  // create a new li for each userinput
  const userInputEventLI = `<li>
    Name:${userInputEvent.name}<br> 
    Date:${userInputEvent.date}<br> 
    Time:${userInputEvent.time}<br> 
    Location:${userInputEvent.location}<br> 
    Description:${userInputEvent.description}
    </li>`;

  // append the new event to the ol using += (appends new event to existing list without deleting it)
  OL.innerHTML += userInputEventLI;

  // reset form
  form.reset();
})


// const displayParties = (parties) => {
//   const partyList = document.getElementById('party-list');
//   partyList.innerHTML = ''; // Clear existing list

// parties.forEach(party => {
//   const partyDiv = document.createElement('div');
//   partyDiv.className = 'party';
//   partyDiv.innerHTML = `
//       <h3>${party.name}</h3>
//       <p>Date: ${party.date}</p>
//       <p>Time: ${party.time}</p>
//       <p>Location: ${party.location}</p>
//       <p>Description: ${party.description}</p>
//   `;
//   partyList.appendChild(partyDiv);
// });
// };