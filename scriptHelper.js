// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    let form = document.querySelector("testForm");
    form.addEventListener("submit", function(event) {
       let pilotNameInput = document.querySelector("input[name=pilotName]");
       let copilotNameInput = document.querySelector("input[name=copilotName]");
       let fuelLevel = document.querySelector("input[name=fuelLevel]");
       let cargoMass = document.querySelector("input[name=cargoMass]");


       if (pilotNameInput.value === "" || copilotNameInput.value === ""|| fuelLevel.value === Number || cargoMass.value === Number) {
          alert("All fields are required!");
          // stop the form submission
          event.preventDefault();
       }
       
    })
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    validateInput()
    }

async function myFetch() {
    let planetsReturned = response.json;

    planetsReturned = await fetch().then( function(response) {
    if(response.status >= 400){
        throw new Error("Bro that didnt work")
    }  
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;